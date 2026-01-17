'use client';

import { Terminal, CodeBlock } from '../ui';

export function Slide10Prompts() {
  const interviewPrompt = `read this @SPEC.md and interview me in detail using the
AskUserQuestionTool about literally anything: technical
implementation, UI & UX, concerns, tradeoffs, etc. but
make sure the questions are not obvious

be very in-depth and continue interviewing me continually
until it's complete, then write the spec to the file`;

  const prompts = [
    {
      title: 'Spec Interview (Featured)',
      prompt: interviewPrompt,
      description: 'Have Claude interview you to refine your spec before building',
    },
    {
      title: 'Explore Codebase',
      prompt: 'Explore this codebase and explain the architecture. What are the main components and how do they interact?',
      description: 'Understand an unfamiliar codebase quickly',
    },
    {
      title: 'Security Review',
      prompt: 'Review this code for security vulnerabilities. Check for: SQL injection, XSS, auth issues, and sensitive data exposure.',
      description: 'Get a security audit of your code',
    },
    {
      title: 'Suggest Approaches',
      prompt: 'I want to implement [FEATURE]. Suggest 3 different approaches with their tradeoffs. Consider: complexity, maintainability, and performance.',
      description: 'Get multiple solutions before committing',
    },
    {
      title: 'Git Commit',
      prompt: 'Commit these changes with a clear, descriptive message following conventional commits format.',
      description: 'Let Claude handle git commits',
    },
    {
      title: 'Debug Issue',
      prompt: 'This error is occurring: [ERROR]. Investigate the codebase, find the root cause, and fix it.',
      description: 'Debug with full codebase context',
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Title */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-medium">
          Appendix
        </div>
        <h1 className="text-4xl font-bold tracking-tight">
          Prompt <span className="text-[var(--accent)]">Patterns</span>
        </h1>
        <p className="text-lg text-[var(--muted)]">
          Curated prompts that work
        </p>
      </div>

      {/* Featured prompt */}
      <div className="bg-gradient-to-r from-[var(--accent)]/10 to-[var(--secondary)]/10 rounded-xl p-5 border border-[var(--accent)]/30">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-0.5 rounded bg-[var(--accent)] text-xs font-bold text-white">FEATURED</span>
          <h3 className="font-semibold">{prompts[0].title}</h3>
        </div>
        <p className="text-sm text-[var(--muted)] mb-3">{prompts[0].description}</p>
        <Terminal command={prompts[0].prompt} />
      </div>

      {/* Other prompts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {prompts.slice(1).map((item) => (
          <div key={item.title} className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--surface-light)]">
            <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
            <p className="text-xs text-[var(--muted)] mb-3">{item.description}</p>
            <CodeBlock code={item.prompt} language="text" showCopy={true} />
          </div>
        ))}
      </div>
    </div>
  );
}
