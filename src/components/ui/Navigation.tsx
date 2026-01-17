'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, List } from 'lucide-react';
import { getNextSlide, getPrevSlide, slides, mainSlides, appendixSlides } from '@/lib/slides';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

interface NavigationProps {
  currentSlide: number;
}

export function Navigation({ currentSlide }: NavigationProps) {
  const prevSlide = getPrevSlide(currentSlide);
  const nextSlide = getNextSlide(currentSlide);
  const [tocOpen, setTocOpen] = useState(false);
  const tocRef = useRef<HTMLDivElement>(null);

  // Close TOC when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (tocRef.current && !tocRef.current.contains(event.target as Node)) {
        setTocOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close TOC on escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setTocOpen(false);
      }
    }
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      {/* Top bar with theme toggle */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo / Title with TOC */}
          <div className="flex items-center gap-3">
            <Link
              href="/slide/1"
              className="flex items-center gap-2 text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
            >
              <span className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center">
                <span className="text-white font-bold text-sm">CC</span>
              </span>
              <span className="font-semibold text-sm hidden sm:block">Claude Code Guide</span>
            </Link>

            {/* TOC Dropdown */}
            <div className="relative" ref={tocRef}>
              <button
                onClick={() => setTocOpen(!tocOpen)}
                className="p-2 rounded-lg bg-[var(--surface)] border border-[var(--surface-border)]
                           text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--accent)]
                           transition-all duration-200"
                aria-label="Table of contents"
              >
                <List className="w-4 h-4" />
              </button>

              {tocOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-[var(--surface)] border border-[var(--surface-border)]
                                rounded-xl shadow-[var(--shadow-lg)] overflow-hidden animate-fade-in z-50">
                  {/* Main Slides */}
                  <div className="p-2">
                    <div className="px-3 py-1 text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">
                      Main
                    </div>
                    {mainSlides.map((slide) => (
                      <Link
                        key={slide.id}
                        href={`/slide/${slide.id}`}
                        onClick={() => setTocOpen(false)}
                        className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                          currentSlide === slide.id
                            ? 'bg-[var(--accent)]/10 text-[var(--accent)] font-medium'
                            : 'text-[var(--foreground)] hover:bg-[var(--surface-light)]'
                        }`}
                      >
                        <span className="text-[var(--muted)] mr-2">{slide.id}.</span>
                        {slide.title}
                      </Link>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-[var(--surface-border)]" />

                  {/* Appendix Slides */}
                  <div className="p-2">
                    <div className="px-3 py-1 text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">
                      Appendix
                    </div>
                    {appendixSlides.map((slide) => (
                      <Link
                        key={slide.id}
                        href={`/slide/${slide.id}`}
                        onClick={() => setTocOpen(false)}
                        className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                          currentSlide === slide.id
                            ? 'bg-[var(--accent)]/10 text-[var(--accent)] font-medium'
                            : 'text-[var(--foreground)] hover:bg-[var(--surface-light)]'
                        }`}
                      >
                        <span className="text-[var(--muted)] mr-2">{slide.id}.</span>
                        {slide.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Theme toggle */}
          <ThemeToggle />
        </div>
      </header>

      {/* Left navigation */}
      {prevSlide && (
        <Link
          href={`/slide/${prevSlide}`}
          className="nav-arrow fixed left-4 top-1/2 -translate-y-1/2 p-3 rounded-xl
                     bg-[var(--surface)] border border-[var(--surface-border)]
                     text-[var(--muted)] shadow-[var(--shadow-md)]
                     hover:text-[var(--foreground)] hover:border-[var(--accent)]
                     hover:shadow-[var(--shadow-lg)] hover:scale-105
                     active:scale-95
                     transition-all duration-200 z-40
                     group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
        </Link>
      )}

      {/* Right navigation */}
      {nextSlide && (
        <Link
          href={`/slide/${nextSlide}`}
          className="nav-arrow fixed right-4 top-1/2 -translate-y-1/2 p-3 rounded-xl
                     bg-[var(--surface)] border border-[var(--surface-border)]
                     text-[var(--muted)] shadow-[var(--shadow-md)]
                     hover:text-[var(--foreground)] hover:border-[var(--accent)]
                     hover:shadow-[var(--shadow-lg)] hover:scale-105
                     active:scale-95
                     transition-all duration-200 z-40
                     group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      )}
    </>
  );
}
