export interface SlideMetadata {
  id: number;
  title: string;
  section: 'main' | 'appendix';
  description?: string;
}

export const slides: SlideMetadata[] = [
  // Main slides
  { id: 1, title: 'Welcome to Claude Code', section: 'main', description: 'What is Claude Code and why use it' },
  { id: 2, title: 'Getting Started', section: 'main', description: '5 essential things to know' },
  { id: 3, title: 'The North Star Workflow', section: 'main', description: 'Spec → Plan → Execute' },
  { id: 4, title: 'Writing Your spec.md', section: 'main', description: 'The template that drives great results' },
  { id: 5, title: 'Plan Mode & Controls', section: 'main', description: 'Essential keyboard shortcuts and modes' },
  { id: 6, title: 'Power User Features', section: 'main', description: 'Skip permissions, resume, and more' },
  { id: 7, title: 'Skills & Integrations', section: 'main', description: 'Extend Claude Code with plugins and MCPs' },
  { id: 8, title: 'Full Walkthrough', section: 'main', description: 'Building a feature from start to finish' },
  // Appendix
  { id: 9, title: 'Keyboard Shortcuts', section: 'appendix', description: 'Complete cheat sheet' },
  { id: 10, title: 'Slash Commands', section: 'appendix', description: 'Quick reference' },
  { id: 11, title: 'Prompt Patterns', section: 'appendix', description: 'Curated prompts that work' },
  { id: 12, title: 'CLAUDE.md Template', section: 'appendix', description: 'Project memory structure' },
  { id: 13, title: 'MCP Examples', section: 'appendix', description: 'Integration setup guides' },
];

export const totalSlides = slides.length;
export const mainSlides = slides.filter(s => s.section === 'main');
export const appendixSlides = slides.filter(s => s.section === 'appendix');

export function getSlide(id: number): SlideMetadata | undefined {
  return slides.find(s => s.id === id);
}

export function getNextSlide(currentId: number): number | null {
  const currentIndex = slides.findIndex(s => s.id === currentId);
  if (currentIndex === -1) return null;
  // Loop back to first slide at the end
  if (currentIndex === slides.length - 1) return slides[0].id;
  return slides[currentIndex + 1].id;
}

export function getPrevSlide(currentId: number): number | null {
  const currentIndex = slides.findIndex(s => s.id === currentId);
  if (currentIndex === -1) return null;
  // Loop to last slide from first
  if (currentIndex === 0) return slides[slides.length - 1].id;
  return slides[currentIndex - 1].id;
}
