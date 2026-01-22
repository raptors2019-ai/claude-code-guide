import { notFound } from 'next/navigation';
import { getSlide, slides } from '@/lib/slides';
import { SlideContainer } from '@/components/SlideContainer';

// Import all slide components
import { Slide1Welcome } from '@/components/slides/Slide1Welcome';
import { Slide2GettingStarted } from '@/components/slides/Slide2GettingStarted';
import { Slide2Workflow } from '@/components/slides/Slide2Workflow';
import { Slide4PlanMode } from '@/components/slides/Slide4PlanMode';
import { Slide5PowerUser } from '@/components/slides/Slide5PowerUser';
import { Slide6Skills } from '@/components/slides/Slide6Skills';
import { SlideImages } from '@/components/slides/SlideImages';
import { Slide7Walkthrough } from '@/components/slides/Slide7Walkthrough';
import { Slide8Shortcuts } from '@/components/slides/Slide8Shortcuts';
import { Slide10Prompts } from '@/components/slides/Slide10Prompts';
import { Slide11ClaudeMd } from '@/components/slides/Slide11ClaudeMd';
import { Slide12MCP } from '@/components/slides/Slide12MCP';
import { SlideGit } from '@/components/slides/SlideGit';
import { SlideErrors } from '@/components/slides/SlideErrors';
import { SlideVerification } from '@/components/slides/SlideVerification';

const slideComponents: Record<number, React.ComponentType> = {
  1: Slide1Welcome,
  2: Slide2GettingStarted,
  3: Slide2Workflow,
  4: Slide4PlanMode,
  5: Slide5PowerUser,
  6: Slide6Skills,
  7: SlideImages,
  8: Slide7Walkthrough,
  9: Slide8Shortcuts,
  10: Slide10Prompts,
  11: Slide11ClaudeMd,
  12: Slide12MCP,
  13: SlideGit,
  14: SlideErrors,
  15: SlideVerification,
};

export function generateStaticParams() {
  return slides.map((slide) => ({
    id: String(slide.id),
  }));
}

export default async function SlidePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const slideId = parseInt(id, 10);
  const slide = getSlide(slideId);

  if (!slide) {
    notFound();
  }

  const SlideComponent = slideComponents[slideId];

  if (!SlideComponent) {
    notFound();
  }

  return (
    <SlideContainer slideId={slideId}>
      <SlideComponent />
    </SlideContainer>
  );
}
