import { notFound } from 'next/navigation';
import { getCoreSlide, coreSlides } from '@/lib/slides';
import { CoreSlideContainer } from '@/components/CoreSlideContainer';

// Import all core slide components
import {
  CoreSlide1Workflow,
  CoreSlide2ClaudeMd,
  CoreSlide3Verification,
  CoreSlide4Skills,
  CoreSlide5Takeaways,
} from '@/components/core-slides';

const coreSlideComponents: Record<number, React.ComponentType> = {
  1: CoreSlide1Workflow,
  2: CoreSlide2ClaudeMd,
  3: CoreSlide3Verification,
  4: CoreSlide4Skills,
  5: CoreSlide5Takeaways,
};

export function generateStaticParams() {
  return coreSlides.map((slide) => ({
    id: String(slide.id),
  }));
}

export default async function CoreSlidePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const slideId = parseInt(id, 10);
  const slide = getCoreSlide(slideId);

  if (!slide) {
    notFound();
  }

  const SlideComponent = coreSlideComponents[slideId];

  if (!SlideComponent) {
    notFound();
  }

  return (
    <CoreSlideContainer slideId={slideId}>
      <SlideComponent />
    </CoreSlideContainer>
  );
}
