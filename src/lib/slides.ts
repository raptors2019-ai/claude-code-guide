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
  { id: 3, title: 'Spec → Plan → Execute', section: 'main', description: 'The core workflow for most tasks' },
  { id: 4, title: 'Plan Mode & Controls', section: 'main', description: 'Essential keyboard shortcuts and modes' },
  { id: 5, title: 'Session Management', section: 'main', description: 'Context, /prime, and session workflow' },
  { id: 6, title: 'Skills & Integrations', section: 'main', description: 'Extend Claude Code with plugins and MCPs' },
  { id: 7, title: 'Screenshots & Images', section: 'main', description: 'Visual input for UI work' },
  { id: 8, title: 'Full Walkthrough', section: 'main', description: 'Building a feature from start to finish' },
  // Appendix
  { id: 9, title: 'Keyboard Shortcuts', section: 'appendix', description: 'Complete cheat sheet' },
  { id: 10, title: 'Prompt Patterns', section: 'appendix', description: 'Curated prompts that work' },
  { id: 11, title: 'CLAUDE.md Template', section: 'appendix', description: 'Project memory structure' },
  { id: 12, title: 'MCP Integrations', section: 'appendix', description: 'Connect to external tools' },
  { id: 13, title: 'Git Workflow', section: 'appendix', description: 'Branches, commits, and PRs' },
  { id: 14, title: 'Error Recovery', section: 'appendix', description: 'When things go wrong' },
  { id: 15, title: 'Verification', section: 'appendix', description: 'Give Claude a way to self-check' },
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
