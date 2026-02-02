'use client';

import Link from 'next/link';
import { ChevronLeft, ChevronRight, Layers, Grid3X3 } from 'lucide-react';
import { useCoreKeyboardNav } from '@/lib/hooks/useCoreKeyboardNav';
import { coreSlides, getCoreSlide, getNextCoreSlide, getPrevCoreSlide } from '@/lib/slides';
import { ThemeToggle } from './ui/ThemeToggle';

interface CoreSlideContainerProps {
  slideId: number;
  children: React.ReactNode;
}

export function CoreSlideContainer({ slideId, children }: CoreSlideContainerProps) {
  useCoreKeyboardNav(slideId);

  const prevSlideId = getPrevCoreSlide(slideId);
  const nextSlideId = getNextCoreSlide(slideId);
  const prevSlideData = prevSlideId ? getCoreSlide(prevSlideId) : null;
  const nextSlideData = nextSlideId ? getCoreSlide(nextSlideId) : null;

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 bg-[var(--surface)]/95 backdrop-blur-sm border-b border-[var(--surface-border)]">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          {/* Left: Logo and deck switcher */}
          <div className="flex items-center gap-4">
            <Link
              href="/core/1"
              className="flex items-center gap-2 text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
            >
              <span className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center">
                <span className="text-white font-bold text-sm">CC</span>
              </span>
              <span className="font-semibold text-sm hidden sm:block">Core Workflow</span>
            </Link>

            {/* Deck switcher */}
            <div className="flex items-center gap-1 bg-[var(--surface-light)] rounded-lg p-1">
              <Link
                href="/core/1"
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium bg-[var(--accent)] text-white"
              >
                <Layers className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Core</span>
              </Link>
              <Link
                href="/slide/1"
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                <Grid3X3 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Full Deck</span>
              </Link>
            </div>
          </div>

          {/* Center: Slide dots */}
          <div className="flex items-center gap-2">
            {coreSlides.map((slide) => (
              <Link
                key={slide.id}
                href={`/core/${slide.id}`}
                className={`h-2 rounded-full transition-all duration-200 ${
                  slide.id === slideId
                    ? 'w-6 bg-[var(--accent)]'
                    : 'w-2 bg-[var(--surface-border)] hover:bg-[var(--accent)]/50'
                }`}
                aria-label={slide.title}
                title={slide.title}
              />
            ))}
          </div>

          {/* Right: Slide number + theme */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-[var(--muted)] tabular-nums">
              {slideId} / {coreSlides.length}
            </span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-start lg:items-center justify-center px-4 sm:px-6 lg:px-12 pt-20 pb-24 lg:pb-8">
        <div className="max-w-4xl w-full">
          {children}
        </div>
      </main>

      {/* Desktop arrow navigation */}
      {prevSlideId && (
        <Link
          href={`/core/${prevSlideId}`}
          className="fixed left-6 top-1/2 -translate-y-1/2
                     flex flex-col items-center gap-1
                     transition-all duration-200 z-40
                     group
                     hidden lg:flex"
          aria-label="Previous slide"
        >
          <div className="p-3 rounded-xl bg-[var(--surface)] border border-[var(--surface-border)]
                          text-[var(--muted)] shadow-[var(--shadow-md)]
                          group-hover:text-[var(--foreground)] group-hover:border-[var(--accent)]
                          group-hover:shadow-[var(--shadow-lg)] group-hover:scale-105
                          active:scale-95 transition-all duration-200">
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          </div>
          {prevSlideData && (
            <span className="text-[10px] text-[var(--muted)] max-w-20 text-center truncate opacity-0 group-hover:opacity-100 transition-opacity">
              {prevSlideData.title}
            </span>
          )}
        </Link>
      )}

      {nextSlideId && (
        <Link
          href={`/core/${nextSlideId}`}
          className="fixed right-6 top-1/2 -translate-y-1/2
                     flex flex-col items-center gap-1
                     transition-all duration-200 z-40
                     group
                     hidden lg:flex"
          aria-label="Next slide"
        >
          <div className="p-3 rounded-xl bg-[var(--surface)] border border-[var(--surface-border)]
                          text-[var(--muted)] shadow-[var(--shadow-md)]
                          group-hover:text-[var(--foreground)] group-hover:border-[var(--accent)]
                          group-hover:shadow-[var(--shadow-lg)] group-hover:scale-105
                          active:scale-95 transition-all duration-200">
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </div>
          {nextSlideData && (
            <span className="text-[10px] text-[var(--muted)] max-w-20 text-center truncate opacity-0 group-hover:opacity-100 transition-opacity">
              {nextSlideData.title}
            </span>
          )}
        </Link>
      )}

      {/* Mobile bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 px-4 py-3 bg-[var(--surface)]/95 backdrop-blur-sm border-t border-[var(--surface-border)] lg:hidden">
        <div className="flex items-center justify-between gap-4">
          {prevSlideId ? (
            <Link
              href={`/core/${prevSlideId}`}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl
                         bg-[var(--surface-light)] border border-[var(--surface-border)]
                         text-[var(--foreground)] active:scale-95 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Previous</span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {nextSlideId ? (
            <Link
              href={`/core/${nextSlideId}`}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl
                         bg-[var(--accent)] text-white active:scale-95 transition-all"
            >
              <span className="text-sm font-medium">Next</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </div>
    </div>
  );
}
