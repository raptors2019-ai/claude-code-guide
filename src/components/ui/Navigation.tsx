'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { getNextSlide, getPrevSlide, getSlide, mainSlides, appendixSlides } from '@/lib/slides';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

interface NavigationProps {
  currentSlide: number;
}

export function Navigation({ currentSlide }: NavigationProps) {
  const prevSlideId = getPrevSlide(currentSlide);
  const nextSlideId = getNextSlide(currentSlide);
  const prevSlideData = prevSlideId ? getSlide(prevSlideId) : null;
  const nextSlideData = nextSlideId ? getSlide(nextSlideId) : null;
  const [appendixOpen, setAppendixOpen] = useState(() => {
    // Start expanded if current slide is in appendix
    return appendixSlides.some(s => s.id === currentSlide);
  });

  const totalSlides = mainSlides.length + appendixSlides.length;
  const currentIndex = [...mainSlides, ...appendixSlides].findIndex(s => s.id === currentSlide) + 1;

  return (
    <>
      {/* Left Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-[var(--surface)]/95 backdrop-blur-sm border-r border-[var(--surface-border)] z-50 overflow-y-auto hidden lg:block">
        {/* Logo */}
        <div className="p-4 border-b border-[var(--surface-border)]">
          <Link
            href="/slide/1"
            className="flex items-center gap-2 text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
          >
            <span className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center">
              <span className="text-white font-bold text-sm">CC</span>
            </span>
            <span className="font-semibold text-sm">Claude Code Guide</span>
          </Link>
        </div>

        {/* Main Slides - Always expanded */}
        <div className="p-3">
          <div className="px-3 py-2 text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">
            Main
          </div>
          <nav className="space-y-1">
            {mainSlides.map((slide) => (
              <Link
                key={slide.id}
                href={`/slide/${slide.id}`}
                className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                  currentSlide === slide.id
                    ? 'bg-[var(--accent)]/10 text-[var(--accent)] font-medium border border-[var(--accent)]/30'
                    : 'text-[var(--foreground)] hover:bg-[var(--surface-light)]'
                }`}
              >
                <span className="text-[var(--muted)] mr-2">{slide.id}.</span>
                {slide.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Appendix - Collapsible */}
        <div className="p-3 pt-0">
          <button
            onClick={() => setAppendixOpen(!appendixOpen)}
            className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-[var(--muted)] uppercase tracking-wider hover:text-[var(--foreground)] transition-colors"
          >
            <span>Appendix</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                appendixOpen ? 'rotate-180' : ''
              }`}
            />
          </button>
          {appendixOpen && (
            <nav className="space-y-1 animate-fade-in">
              {appendixSlides.map((slide) => (
                <Link
                  key={slide.id}
                  href={`/slide/${slide.id}`}
                  className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                    currentSlide === slide.id
                      ? 'bg-[var(--secondary)]/10 text-[var(--secondary)] font-medium border border-[var(--secondary)]/30'
                      : 'text-[var(--foreground)] hover:bg-[var(--surface-light)]'
                  }`}
                >
                  <span className="text-[var(--muted)] mr-2">{slide.id}.</span>
                  {slide.title}
                </Link>
              ))}
            </nav>
          )}
        </div>

        {/* Theme toggle at bottom */}
        <div className="absolute bottom-4 left-4">
          <ThemeToggle />
        </div>
      </aside>

      {/* Mobile header - shown only on smaller screens */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-2 bg-[var(--surface)]/95 backdrop-blur-sm border-b border-[var(--surface-border)] lg:hidden">
        <div className="flex items-center justify-between">
          <Link
            href="/slide/1"
            className="flex items-center gap-2 text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
          >
            <span className="w-7 h-7 rounded-lg bg-[var(--accent)] flex items-center justify-center">
              <span className="text-white font-bold text-xs">CC</span>
            </span>
          </Link>
          <span className="text-sm text-[var(--muted)] tabular-nums">
            {currentIndex} / {totalSlides}
          </span>
          <ThemeToggle />
        </div>
      </header>

      {/* Arrow navigation - side arrows on desktop, bottom bar on mobile */}
      {/* Desktop arrows */}
      {prevSlideId && (
        <Link
          href={`/slide/${prevSlideId}`}
          className="nav-arrow fixed left-[calc(16rem+1rem)] top-1/2 -translate-y-1/2
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
          href={`/slide/${nextSlideId}`}
          className="nav-arrow fixed right-4 top-1/2 -translate-y-1/2
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
              href={`/slide/${prevSlideId}`}
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
              href={`/slide/${nextSlideId}`}
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
    </>
  );
}
