'use client';

import { CodeBlock, Terminal, Gotcha } from '../ui';

export function Slide11ClaudeMd() {
  const template = `# Project Memory

## Overview
- **Name**: Your Project Name
- **Purpose**: What does this project do?
- **Tech Stack**: Next.js, TypeScript, Tailwind, etc.

## Architecture
Describe your project structure:
- \`src/components/\` - Reusable UI components
- \`src/lib/\` - Utility functions and helpers
- \`src/app/\` - Next.js app router pages

## Conventions

### Code Style
- Use TypeScript strict mode
- Prefer functional components
- Use Tailwind for styling

### Naming
- Components: PascalCase
- Functions: camelCase
- Constants: UPPER_SNAKE_CASE

## Common Tasks
- Start dev: \`npm run dev\`
- Run tests: \`npm test\`
- Build: \`npm run build\`

## Gotchas & Notes
- Remember to run migrations after pulling
- API keys are in .env.local (not committed)
- The auth system uses JWT tokens`;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Title */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-medium">
          Appendix
        </div>
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="text-[var(--accent)]">CLAUDE.md</span> Template
        </h1>
        <p className="text-lg text-[var(--muted)]">
          Project memory structure
        </p>
      </div>

      {/* What is it */}
      <div className="bg-[var(--surface)] rounded-xl p-5 border border-[var(--surface-light)]">
        <h3 className="font-semibold mb-2">What is CLAUDE.md?</h3>
        <p className="text-sm text-[var(--muted)]">
          A project memory file that Claude reads at the start of every session.
          It gives Claude context about your project&apos;s architecture, conventions,
          and important details - making it smarter about your codebase.
        </p>
      </div>

      {/* Commands */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <h3 className="text-sm font-semibold">Create it</h3>
          <Terminal command="/init" />
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-semibold">Edit it</h3>
          <Terminal command="/memory" />
        </div>
      </div>

      {/* Template */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold">Template</h3>
        <CodeBlock
          code={template}
          language="markdown"
          filename="CLAUDE.md"
        />
      </div>

      <Gotcha type="tip">
        Update your CLAUDE.md whenever you learn something important about your project.
        The more context Claude has, the better its suggestions will be.
      </Gotcha>
    </div>
  );
}
