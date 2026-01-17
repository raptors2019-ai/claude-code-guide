'use client';

import { totalSlides, slides } from '@/lib/slides';

interface ProgressBarProps {
  currentSlide: number;
}

export function ProgressBar({ currentSlide }: ProgressBarProps) {
  const currentIndex = slides.findIndex(s => s.id === currentSlide);
  const progress = ((currentIndex + 1) / totalSlides) * 100;
  const currentSlideData = slides[currentIndex];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[var(--surface)]/95 backdrop-blur-sm border-t border-[var(--surface-border)] px-6 py-3 z-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-[var(--muted)]">
            {currentSlideData?.section === 'appendix' && (
              <span className="text-[var(--accent)] font-medium mr-2">Appendix:</span>
            )}
            <span className="font-medium text-[var(--foreground-secondary)]">{currentSlideData?.title}</span>
          </span>
          <span className="text-sm text-[var(--muted)] tabular-nums">
            {currentIndex + 1} / {totalSlides}
          </span>
        </div>
        <div className="h-1.5 bg-[var(--surface-border)] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)] transition-all duration-300 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
