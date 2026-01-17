'use client';

import { useState } from 'react';
import Link from 'next/link';
import { totalSlides, slides, mainSlides, appendixSlides } from '@/lib/slides';

interface ProgressBarProps {
  currentSlide: number;
}

export function ProgressBar({ currentSlide }: ProgressBarProps) {
  const currentIndex = slides.findIndex(s => s.id === currentSlide);
  const currentSlideData = slides[currentIndex];
  const [hoveredSlide, setHoveredSlide] = useState<number | null>(null);

  const hoveredSlideData = hoveredSlide !== null
    ? slides.find(s => s.id === hoveredSlide)
    : null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[var(--surface)]/95 backdrop-blur-sm border-t border-[var(--surface-border)] px-6 py-3 z-50">
      <div className="max-w-4xl mx-auto">
        {/* Title and count */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-[var(--muted)]">
            {(hoveredSlideData || currentSlideData)?.section === 'appendix' && (
              <span className="text-[var(--accent)] font-medium mr-2">Appendix:</span>
            )}
            <span className="font-medium text-[var(--foreground-secondary)]">
              {hoveredSlideData?.title || currentSlideData?.title}
            </span>
          </span>
          <span className="text-sm text-[var(--muted)] tabular-nums">
            {currentIndex + 1} / {totalSlides}
          </span>
        </div>

        {/* Clickable slide blocks */}
        <div className="flex items-center gap-1">
          {/* Main slides section */}
          <div className="flex items-center gap-1">
            {mainSlides.map((slide) => (
              <Link
                key={slide.id}
                href={`/slide/${slide.id}`}
                onMouseEnter={() => setHoveredSlide(slide.id)}
                onMouseLeave={() => setHoveredSlide(null)}
                className={`h-2 rounded-full transition-all duration-200 ${
                  slide.id === currentSlide
                    ? 'w-6 bg-[var(--accent)]'
                    : slide.id < currentSlide
                    ? 'w-3 bg-[var(--accent)]/50 hover:bg-[var(--accent)]/70'
                    : 'w-3 bg-[var(--surface-border)] hover:bg-[var(--muted)]'
                }`}
                aria-label={slide.title}
              />
            ))}
          </div>

          {/* Divider between main and appendix */}
          <div className="w-px h-4 bg-[var(--surface-border)] mx-2" />

          {/* Appendix slides section */}
          <div className="flex items-center gap-1">
            {appendixSlides.map((slide) => (
              <Link
                key={slide.id}
                href={`/slide/${slide.id}`}
                onMouseEnter={() => setHoveredSlide(slide.id)}
                onMouseLeave={() => setHoveredSlide(null)}
                className={`h-2 rounded-full transition-all duration-200 ${
                  slide.id === currentSlide
                    ? 'w-6 bg-[var(--secondary)]'
                    : slide.id < currentSlide
                    ? 'w-3 bg-[var(--secondary)]/50 hover:bg-[var(--secondary)]/70'
                    : 'w-3 bg-[var(--surface-border)] hover:bg-[var(--muted)]'
                }`}
                aria-label={slide.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
