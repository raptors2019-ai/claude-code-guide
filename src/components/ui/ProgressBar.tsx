'use client';

import Link from 'next/link';
import { Layers } from 'lucide-react';
import { mainSlides, appendixSlides } from '@/lib/slides';
import { ThemeToggle } from './ThemeToggle';

interface ProgressBarProps {
  currentSlide: number;
}

export function ProgressBar({ currentSlide }: ProgressBarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 lg:left-64 z-30 px-4 py-2 items-center justify-between hidden lg:flex">
      {/* Spacer for balance */}
      <div className="w-10" />

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

      {/* Core slides link + Theme toggle */}
      <div className="flex items-center gap-2">
        <Link
          href="/core/1"
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-[var(--muted)] hover:text-[var(--foreground)] bg-[var(--surface)] border border-[var(--surface-border)] transition-colors"
          title="View Core Workflow (condensed 5-slide version)"
        >
          <Layers className="w-3.5 h-3.5" />
          Core
        </Link>
        <ThemeToggle />
      </div>
    </div>
  );
}
