'use client';

import { useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { getNextSlide, getPrevSlide } from '../slides';

export function useKeyboardNav(currentSlideId: number) {
  const router = useRouter();

  const goToNext = useCallback(() => {
    const nextId = getNextSlide(currentSlideId);
    if (nextId) {
      router.push(`/slide/${nextId}`);
    }
  }, [currentSlideId, router]);

  const goToPrev = useCallback(() => {
    const prevId = getPrevSlide(currentSlideId);
    if (prevId) {
      router.push(`/slide/${prevId}`);
    }
  }, [currentSlideId, router]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
          e.preventDefault();
          goToNext();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          goToPrev();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  return { goToNext, goToPrev };
}
