import { notFound } from 'next/navigation';
import { getSlide, slides } from '@/lib/slides';
import { SlideContainer } from '@/components/SlideContainer';

// Import all slide components
import { Slide1Welcome } from '@/components/slides/Slide1Welcome';
import { Slide2GettingStarted } from '@/components/slides/Slide2GettingStarted';
import { Slide2Workflow } from '@/components/slides/Slide2Workflow';
import { Slide3SpecMd } from '@/components/slides/Slide3SpecMd';
import { Slide4PlanMode } from '@/components/slides/Slide4PlanMode';
import { Slide5PowerUser } from '@/components/slides/Slide5PowerUser';
import { Slide6Skills } from '@/components/slides/Slide6Skills';
import { Slide7Walkthrough } from '@/components/slides/Slide7Walkthrough';
import { Slide8Shortcuts } from '@/components/slides/Slide8Shortcuts';
import { Slide9Commands } from '@/components/slides/Slide9Commands';
import { Slide10Prompts } from '@/components/slides/Slide10Prompts';
import { Slide11ClaudeMd } from '@/components/slides/Slide11ClaudeMd';
import { Slide12MCP } from '@/components/slides/Slide12MCP';

const slideComponents: Record<number, React.ComponentType> = {
  1: Slide1Welcome,
  2: Slide2GettingStarted,
  3: Slide2Workflow,
  4: Slide3SpecMd,
  5: Slide4PlanMode,
  6: Slide5PowerUser,
  7: Slide6Skills,
  8: Slide7Walkthrough,
  9: Slide8Shortcuts,
  10: Slide9Commands,
  11: Slide10Prompts,
  12: Slide11ClaudeMd,
  13: Slide12MCP,
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
