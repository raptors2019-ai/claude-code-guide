'use client';

import { Terminal, CodeBlock } from '../ui';
import { FileText, Search, MessageSquareMore, Play } from 'lucide-react';

export function CoreSlide1Workflow() {
  const specContent = `# User Settings Page

## Problem
Users cannot customize their app experience.

## Requirements
- [ ] Dark mode toggle that persists
- [ ] Email notification preferences
- [ ] Account deletion with confirmation`;

  return (
    <div className="space-y-4 animate-fade-in">
      {/* Title */}
      <div className="space-y-1">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-sm font-medium">
          Core Workflow
        </div>
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="text-[var(--accent)]">Full Workflow</span>
        </h1>
        <p className="text-lg text-[var(--muted)]">
          From spec to implementation in 4 steps
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Step 1 */}
        <div className="flex gap-3 mb-4">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center text-white font-bold text-sm">
              1
            </div>
            <div className="w-0.5 h-full bg-[var(--surface-light)] mt-2" />
          </div>
          <div className="flex-1 pb-2">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-6 h-6 text-[var(--accent)]" />
              <h3 className="font-semibold text-lg">Write your spec</h3>
            </div>
            <CodeBlock code={specContent} language="markdown" filename="spec.md" />
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex gap-3 mb-4">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-[var(--secondary)] flex items-center justify-center text-white font-bold text-sm">
              2
            </div>
            <div className="w-0.5 h-full bg-[var(--surface-light)] mt-2" />
          </div>
          <div className="flex-1 pb-2">
            <div className="flex items-center gap-2 mb-2">
              <Search className="w-6 h-6 text-[var(--secondary)]" />
              <h3 className="font-semibold text-lg">Start in Plan Mode</h3>
            </div>
            <Terminal command="claude --permission-mode plan" />
          </div>
        </div>

        {/* Step 3 - The Interview (emphasized) */}
        <div className="flex gap-3 mb-4">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center text-white font-bold text-sm ring-4 ring-[var(--accent)]/20">
              3
            </div>
            <div className="w-0.5 h-full bg-[var(--surface-light)] mt-2" />
          </div>
          <div className="flex-1 pb-2">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquareMore className="w-6 h-6 text-[var(--accent)]" />
              <h3 className="font-semibold text-lg">Run the interview prompt</h3>
              <span className="text-base px-2 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-medium">Key</span>
            </div>
            <div className="border-2 border-[var(--accent)]/30 rounded-xl overflow-hidden bg-[var(--surface)] p-4 font-mono text-base leading-relaxed">
              <div className="flex items-center gap-2 text-sm text-[var(--muted)] mb-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2">paste this</span>
              </div>
              <p className="text-[var(--foreground)]">
                Read @spec.md and interview me using the{' '}
                <span className="text-lg font-bold text-[var(--accent)]">AskUserQuestionTool</span>
                {' '}about technical implementation, UI/UX, concerns, and tradeoffs.
              </p>
              <p className="text-[var(--foreground)] mt-3">
                Be in-depth and continue until complete, then write the spec to the file.
              </p>
            </div>
            <p className="text-base text-[var(--muted)] mt-1 italic">— Thariq, Anthropic</p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex gap-3">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-[var(--success)] flex items-center justify-center text-white font-bold text-sm">
              4
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Play className="w-6 h-6 text-[var(--success)]" />
              <h3 className="font-semibold text-lg">Review plan, then execute</h3>
            </div>
            <p className="text-base text-[var(--muted)]">
              Approve the plan → <kbd className="px-1.5 py-0.5 rounded bg-[var(--surface)] text-base">Shift+Tab</kbd> to Auto-Accept → Claude 1-shots it
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
