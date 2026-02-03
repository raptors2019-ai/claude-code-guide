'use client';

import { useState } from 'react';
import { Terminal, CodeBlock } from '../ui';
import { Puzzle, Plug, ChevronDown, Repeat } from 'lucide-react';

export function CoreSlide4Skills() {
  const [primeExpanded, setPrimeExpanded] = useState(false);

  const plugins = [
    { command: '/frontend-design', description: 'Build polished UIs that don\'t look AI-generated' },
    { command: '/react-best-practices', description: '40+ rules for React/Next.js performance optimization' },
  ];

  const primeSkillContent = `---
description: Prime agent with codebase understanding
---

# Prime: Load Project Context

## Process
1. **Analyze Structure**: \`git ls-files\`, \`tree -L 3\`
2. **Read Docs**: CLAUDE.md, README, architecture docs
3. **Identify Key Files**: entry points, configs, schemas
4. **Check State**: \`git log -10\`, \`git status\`

## Output Report
- Project overview & purpose
- Architecture & patterns
- Tech stack & dependencies
- Current state & recent changes

Then start the dev server if not running.`;

  return (
    <div className="space-y-5 animate-fade-in">
      {/* Title */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-sm font-medium">
          Core Workflow
        </div>
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="text-[var(--accent)]">Skills</span> & Plugins
        </h1>
        <p className="text-lg text-[var(--muted)]">
          Stop typing the same prompts over and over
        </p>
      </div>

      {/* Two concepts */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--surface-light)]">
          <div className="flex items-center gap-2 mb-2">
            <Puzzle className="w-7 h-7 text-[var(--accent)]" />
            <h3 className="font-semibold text-lg">Skills</h3>
          </div>
          <p className="text-base text-[var(--muted)]">
            Custom instructions you create for your workflows
          </p>
        </div>
        <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--surface-light)]">
          <div className="flex items-center gap-2 mb-2">
            <Plug className="w-7 h-7 text-[var(--secondary)]" />
            <h3 className="font-semibold text-lg">Plugins</h3>
          </div>
          <p className="text-base text-[var(--muted)]">
            Pre-built extensions from Anthropic & community
          </p>
        </div>
      </div>

      {/* When to create */}
      <div className="bg-[var(--accent)]/10 border border-[var(--accent)]/30 rounded-xl p-4 flex items-start gap-3">
        <Repeat className="w-7 h-7 text-[var(--accent)] flex-shrink-0 mt-0.5" />
        <p className="text-lg">
          <strong>If you do something more than once a day, turn it into a skill.</strong>
          <span className="text-[var(--muted)]"> — Boris Cherny</span>
        </p>
      </div>

      {/* Community Plugins */}
      <div className="space-y-2">
        <h3 className="font-semibold text-lg flex items-center gap-2">
          <Plug className="w-6 h-6 text-[var(--secondary)]" />
          Community Plugins
        </h3>
        <div className="space-y-2">
          {plugins.map((plugin) => (
            <div key={plugin.command} className="flex items-center gap-3 p-3 rounded-lg bg-[var(--surface)] border border-[var(--surface-light)]">
              <code className="text-base font-mono text-[var(--secondary)] bg-[var(--secondary)]/10 px-2 py-0.5 rounded">{plugin.command}</code>
              <span className="text-base text-[var(--muted)]">{plugin.description}</span>
            </div>
          ))}
        </div>
        <Terminal command="npx add-skill vercel-labs/agent-skills" />
      </div>

      {/* Custom Skills */}
      <div className="space-y-2">
        <h3 className="font-semibold text-lg flex items-center gap-2">
          <Puzzle className="w-6 h-6 text-[var(--accent)]" />
          My Custom Skills
        </h3>

        {/* /prime - expandable */}
        <button
          onClick={() => setPrimeExpanded(!primeExpanded)}
          className="w-full flex items-center justify-between p-3 rounded-lg bg-[var(--surface)] border border-[var(--surface-light)] hover:border-[var(--accent)]/50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <code className="text-base font-mono text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-0.5 rounded">/prime</code>
            <span className="text-base text-[var(--muted)]">Load codebase context before starting</span>
          </div>
          <ChevronDown className={`w-5 h-5 text-[var(--muted)] transition-transform ${primeExpanded ? 'rotate-180' : ''}`} />
        </button>
        {primeExpanded && (
          <div className="animate-fade-in rounded-lg overflow-hidden border border-[var(--surface-light)]">
            <CodeBlock code={primeSkillContent} language="markdown" filename="~/.claude/commands/prime.md" />
          </div>
        )}

        {/* /commit */}
        <div className="flex items-center gap-3 p-3 rounded-lg bg-[var(--surface)] border border-[var(--surface-light)]">
          <code className="text-base font-mono text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-0.5 rounded">/commit</code>
          <span className="text-base text-[var(--muted)]">Smart commits with conventional format</span>
        </div>
      </div>
    </div>
  );
}
