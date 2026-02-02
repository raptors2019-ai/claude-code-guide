'use client';

import { useState } from 'react';
import { Terminal } from '../ui';
import { Puzzle, Plug, ChevronDown, Repeat, Sparkles } from 'lucide-react';

export function CoreSlide4Skills() {
  const [expanded, setExpanded] = useState(false);

  const plugins = [
    { command: '/frontend-design', description: 'Build polished UIs that don\'t look AI-generated' },
    { command: '/code-simplifier', description: 'Refactor complex code for clarity' },
    { command: '/nextjs-reviewer', description: 'Review Next.js for performance' },
  ];

  const customSkills = [
    { command: '/prime', description: 'Load codebase context before starting' },
    { command: '/commit', description: 'Smart commits with conventional format' },
    { command: '/techdebt', description: 'Find and kill duplicated code' },
  ];

  const moreSkills = [
    { command: '/review-pr', description: 'Code review current branch' },
    { command: '/sync-context', description: 'Sync Slack, GDrive, GitHub into one dump' },
    { command: '/fix-issue', description: 'Analyze and fix a GitHub issue' },
  ];

  return (
    <div className="space-y-5 animate-fade-in">
      {/* Title */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-medium">
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
            <Puzzle className="w-5 h-5 text-[var(--accent)]" />
            <h3 className="font-semibold text-sm">Skills</h3>
          </div>
          <p className="text-xs text-[var(--muted)]">
            Custom instructions you create for your workflows
          </p>
        </div>
        <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--surface-light)]">
          <div className="flex items-center gap-2 mb-2">
            <Plug className="w-5 h-5 text-[var(--secondary)]" />
            <h3 className="font-semibold text-sm">Plugins</h3>
          </div>
          <p className="text-xs text-[var(--muted)]">
            Pre-built extensions from Anthropic & community
          </p>
        </div>
      </div>

      {/* When to create */}
      <div className="bg-[var(--accent)]/10 border border-[var(--accent)]/30 rounded-xl p-4 flex items-start gap-3">
        <Repeat className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
        <p className="text-sm">
          <strong>If you do something more than once a day, turn it into a skill.</strong>
          <span className="text-[var(--muted)]"> — Boris Cherny</span>
        </p>
      </div>

      {/* Community Plugins */}
      <div className="space-y-2">
        <h3 className="font-semibold text-sm flex items-center gap-2">
          <Plug className="w-4 h-4 text-[var(--secondary)]" />
          Community Plugins
        </h3>
        <div className="space-y-2">
          {plugins.map((plugin) => (
            <div key={plugin.command} className="flex items-center gap-3 p-3 rounded-lg bg-[var(--surface)] border border-[var(--surface-light)]">
              <code className="text-sm font-mono text-[var(--secondary)] bg-[var(--secondary)]/10 px-2 py-0.5 rounded">{plugin.command}</code>
              <span className="text-xs text-[var(--muted)]">{plugin.description}</span>
            </div>
          ))}
        </div>
        <Terminal command="npx add-skill anthropics/claude-code-skills/frontend-design" />
      </div>

      {/* Custom Skills */}
      <div className="space-y-2">
        <h3 className="font-semibold text-sm flex items-center gap-2">
          <Puzzle className="w-4 h-4 text-[var(--accent)]" />
          Custom Skills
        </h3>
        <div className="space-y-2">
          {customSkills.map((skill) => (
            <div key={skill.command} className="flex items-center gap-3 p-3 rounded-lg bg-[var(--surface)] border border-[var(--surface-light)]">
              <code className="text-sm font-mono text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-0.5 rounded">{skill.command}</code>
              <span className="text-xs text-[var(--muted)]">{skill.description}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Expandable more */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-3 rounded-xl bg-[var(--surface)] border border-[var(--surface-light)] hover:border-[var(--accent)]/50 transition-colors"
      >
        <span className="flex items-center gap-2 text-sm font-medium">
          <Sparkles className="w-4 h-4 text-[var(--accent)]" />
          More skill ideas
        </span>
        <ChevronDown className={`w-4 h-4 text-[var(--muted)] transition-transform ${expanded ? 'rotate-180' : ''}`} />
      </button>
      {expanded && (
        <div className="space-y-2 animate-fade-in">
          {moreSkills.map((skill) => (
            <div key={skill.command} className="flex items-center gap-3 p-3 rounded-lg bg-[var(--surface)] border border-[var(--surface-light)]">
              <code className="text-sm font-mono text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-0.5 rounded">{skill.command}</code>
              <span className="text-xs text-[var(--muted)]">{skill.description}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
