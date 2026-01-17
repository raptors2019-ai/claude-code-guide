'use client';

import { Terminal, CodeBlock, Gotcha } from '../ui';
import { FileText, Search, MessageSquareMore, Play, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function Slide7Walkthrough() {
  const specContent = `# User Settings Page

## Problem
Users cannot customize their app experience (dark mode, notifications).

## Requirements
- [ ] Dark mode toggle that persists
- [ ] Email notification preferences
- [ ] Account deletion option with confirmation

## Success Criteria
- Settings persist across sessions
- All toggles work immediately
- Deletion requires confirmation modal`;

  const interviewPrompt = `Read @spec.md and interview me in detail using the
AskUserQuestion tool about literally anything: technical
implementation, UI & UX, concerns, tradeoffs, etc. but
make sure the questions are not obvious.

Be very in-depth and continue interviewing me continually
until it's complete, then write the spec to the file.`;

  return (
    <div className="space-y-5 animate-fade-in">
      {/* Title */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="text-[var(--accent)]">Full Walkthrough</span>
        </h1>
        <p className="text-lg text-[var(--muted)]">
          From spec to implementation in 4 steps
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Step 1 */}
        <div className="flex gap-4 mb-5">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[var(--accent)] flex items-center justify-center text-white font-bold">
              1
            </div>
            <div className="w-0.5 h-full bg-[var(--surface-light)] mt-2" />
          </div>
          <div className="flex-1 pb-4">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-4 h-4 text-[var(--accent)]" />
              <h3 className="font-semibold">Write your spec</h3>
              <span className="text-xs text-[var(--muted)]">— or have Claude help you write it in plan mode</span>
            </div>
            <CodeBlock code={specContent} language="markdown" filename="spec.md" />
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex gap-4 mb-5">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[var(--secondary)] flex items-center justify-center text-white font-bold">
              2
            </div>
            <div className="w-0.5 h-full bg-[var(--surface-light)] mt-2" />
          </div>
          <div className="flex-1 pb-4">
            <div className="flex items-center gap-2 mb-2">
              <Search className="w-4 h-4 text-[var(--secondary)]" />
              <h3 className="font-semibold">Start Claude in Plan Mode</h3>
            </div>
            <Terminal command="claude --permission-mode plan" />
            <p className="text-sm text-[var(--muted)] mt-2">
              Plan mode lets Claude explore your codebase without making changes.
            </p>
          </div>
        </div>

        {/* Step 3 - The Interview (emphasized) */}
        <div className="flex gap-4 mb-5">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[var(--accent)] flex items-center justify-center text-white font-bold ring-4 ring-[var(--accent)]/20">
              3
            </div>
            <div className="w-0.5 h-full bg-[var(--surface-light)] mt-2" />
          </div>
          <div className="flex-1 pb-4">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquareMore className="w-4 h-4 text-[var(--accent)]" />
              <h3 className="font-semibold">Run the interview prompt</h3>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-medium">Key step</span>
            </div>
            <p className="text-sm text-[var(--muted)] mb-3">
              This prompt gets Claude to ask you detailed questions, surfacing edge cases and requirements you hadn&apos;t considered.
            </p>
            <div className="border-2 border-[var(--accent)]/30 rounded-xl overflow-hidden">
              <CodeBlock code={interviewPrompt} language="text" filename="paste this prompt" />
            </div>
            <p className="text-xs text-[var(--muted)] mt-2 text-right italic">
              — Thariq, Claude Code team @Anthropic
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[var(--success)] flex items-center justify-center text-white font-bold">
              4
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Play className="w-4 h-4 text-[var(--success)]" />
              <h3 className="font-semibold">Review plan, then execute</h3>
            </div>
            <p className="text-sm text-[var(--muted)]">
              Once you approve the plan, press <kbd className="px-2 py-0.5 rounded bg-[var(--surface)] text-xs">Shift+Tab</kbd> to
              switch to Auto-Accept mode and let Claude implement it.
            </p>
          </div>
        </div>
      </div>

      <Gotcha type="tip">
        <strong>Why interview first?</strong> Getting Claude to ask questions surfaces edge cases you hadn&apos;t
        considered and ensures the plan matches your expectations before any code is written.
      </Gotcha>

      {/* Link to prompt patterns */}
      <Link
        href="/slide/10"
        className="inline-flex items-center gap-2 text-sm text-[var(--accent)] hover:underline"
      >
        <Sparkles className="w-4 h-4" />
        More prompt patterns in the appendix →
      </Link>
    </div>
  );
}
