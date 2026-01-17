'use client';

import { useKeyboardNav } from '@/lib/hooks/useKeyboardNav';
import { Navigation } from './ui';

interface SlideContainerProps {
  slideId: number;
  children: React.ReactNode;
}

export function SlideContainer({ slideId, children }: SlideContainerProps) {
  useKeyboardNav(slideId);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <Navigation currentSlide={slideId} />

      {/* Main content - offset for sidebar on large screens */}
      <main className="flex-1 flex items-center justify-center px-6 sm:px-12 lg:pl-72 lg:pr-12 xl:pr-24 pt-16 lg:pt-8 pb-8">
        <div className="max-w-4xl w-full">
          {children}
        </div>
      </main>
    </div>
  );
}
