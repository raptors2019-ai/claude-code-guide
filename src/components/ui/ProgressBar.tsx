'use client';

import Link from 'next/link';
import { slides, mainSlides, appendixSlides } from '@/lib/slides';

interface ProgressBarProps {
  currentSlide: number;
}

export function ProgressBar({ currentSlide }: ProgressBarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 lg:left-64 z-30 px-4 py-2 flex items-center justify-center">
      {/* Clickable slide dots */}
      <div className="flex items-center gap-1 bg-[var(--surface)]/80 backdrop-blur-sm rounded-full px-3 py-1.5 border border-[var(--surface-border)]">
        {/* Main slides */}
        {mainSlides.map((slide) => (
          <Link
            key={slide.id}
            href={`/slide/${slide.id}`}
            className={`h-1.5 rounded-full transition-all duration-200 ${
              slide.id === currentSlide
                ? 'w-4 bg-[var(--accent)]'
                : 'w-1.5 bg-[var(--surface-border)] hover:bg-[var(--accent)]/50'
            }`}
            aria-label={slide.title}
            title={slide.title}
          />
        ))}

        {/* Divider */}
        <div className="w-px h-2 bg-[var(--surface-border)] mx-1.5" />

        {/* Appendix slides */}
        {appendixSlides.map((slide) => (
          <Link
            key={slide.id}
            href={`/slide/${slide.id}`}
            className={`h-1.5 rounded-full transition-all duration-200 ${
              slide.id === currentSlide
                ? 'w-4 bg-[var(--secondary)]'
                : 'w-1.5 bg-[var(--surface-border)] hover:bg-[var(--secondary)]/50'
            }`}
            aria-label={slide.title}
            title={slide.title}
          />
        ))}
      </div>
    </div>
  );
}
