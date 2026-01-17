'use client';

import { Terminal, Gotcha } from '../ui';
import { History, Trash2, Download, Eye, Sparkles } from 'lucide-react';

export function Slide5PowerUser() {
  return (
    <div className="space-y-5 animate-fade-in">
      {/* Title */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="text-[var(--accent)]">Power User</span> Features
        </h1>
        <p className="text-lg text-[var(--muted)]">
          Context management and session workflow
        </p>
      </div>

      {/* Prime command - featured */}
      <div className="bg-[var(--surface)] rounded-xl p-5 border border-[var(--accent)]/30 space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-[var(--accent)]" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">The /prime Command</h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">Essential</span>
          </div>
        </div>
        <Terminal command="/prime" />
        <p className="text-sm text-[var(--muted)]">
          This primes Claude with deep understanding of your codebase. I run this at the start of most sessions -
          it reads key files, understands your architecture, and makes Claude significantly more helpful.
        </p>
      </div>

      {/* Context management row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Check Context */}
        <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--surface-light)] space-y-2">
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-[var(--secondary)]" />
            <h3 className="font-semibold">Check Context</h3>
          </div>
          <Terminal command="/context" />
          <p className="text-xs text-[var(--muted)]">
            See how much context is used. When it gets large, responses slow down.
          </p>
        </div>

        {/* Export */}
        <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--surface-light)] space-y-2">
          <div className="flex items-center gap-2">
            <Download className="w-5 h-5 text-[var(--success)]" />
            <h3 className="font-semibold">Export First</h3>
          </div>
          <Terminal command="/export session.md" />
          <p className="text-xs text-[var(--muted)]">
            Save important info before clearing. Great for documentation.
          </p>
        </div>

        {/* Clear */}
        <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--surface-light)] space-y-2">
          <div className="flex items-center gap-2">
            <Trash2 className="w-5 h-5 text-red-500" />
            <h3 className="font-semibold">Clear Context</h3>
          </div>
          <Terminal command="/clear" />
          <p className="text-xs text-[var(--muted)]">
            Fresh start. Do this when context is bloated or you&apos;re switching tasks.
          </p>
        </div>
      </div>

      {/* Resume session */}
      <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--surface-light)]">
        <div className="flex items-center gap-3 mb-2">
          <History className="w-5 h-5 text-[var(--secondary)]" />
          <h3 className="font-semibold">Resume Session</h3>
        </div>
        <Terminal command="claude --resume" />
        <p className="text-sm text-[var(--muted)] mt-2">
          Continue where you left off. Great for long-running tasks or when you need to step away.
        </p>
      </div>

      {/* Tip */}
      <Gotcha type="tip">
        <strong>My workflow:</strong> Start with <code>/prime</code>, work until context gets heavy
        (check with <code>/context</code>), export anything important, then <code>/clear</code> and re-prime.
      </Gotcha>
    </div>
  );
}
