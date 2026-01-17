'use client';

import { Terminal, Gotcha } from '../ui';
import { Zap, History, Trash2, Download } from 'lucide-react';

export function Slide5PowerUser() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Title */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="text-[var(--accent)]">Power User</span> Features
        </h1>
        <p className="text-lg text-[var(--muted)]">
          Skip permissions, resume sessions, and more
        </p>
      </div>

      {/* Main features grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Skip Permissions */}
        <div className="bg-[var(--surface)] rounded-xl p-5 border border-[var(--surface-light)] space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[var(--warning)]/10 flex items-center justify-center">
              <Zap className="w-5 h-5 text-[var(--warning)]" />
            </div>
            <h3 className="text-lg font-semibold">Skip Permissions</h3>
          </div>
          <Terminal command="claude --dangerously-skip-permissions" />
          <p className="text-sm text-[var(--muted)]">
            Claude executes all actions without asking. Use for trusted projects or CI/CD.
          </p>
        </div>

        {/* Resume Session */}
        <div className="bg-[var(--surface)] rounded-xl p-5 border border-[var(--surface-light)] space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[var(--secondary)]/10 flex items-center justify-center">
              <History className="w-5 h-5 text-[var(--secondary)]" />
            </div>
            <h3 className="text-lg font-semibold">Resume Session</h3>
          </div>
          <Terminal command="claude -resume" />
          <p className="text-sm text-[var(--muted)]">
            Continue where you left off. Great for long-running tasks or context preservation.
          </p>
        </div>

        {/* Clear Session */}
        <div className="bg-[var(--surface)] rounded-xl p-5 border border-[var(--surface-light)] space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
              <Trash2 className="w-5 h-5 text-red-500" />
            </div>
            <h3 className="text-lg font-semibold">Clear Session</h3>
          </div>
          <Terminal command="/clear" />
          <p className="text-sm text-[var(--muted)]">
            Wipe conversation history. Useful when context gets messy or you&apos;re starting fresh.
          </p>
        </div>

        {/* Export Session */}
        <div className="bg-[var(--surface)] rounded-xl p-5 border border-[var(--surface-light)] space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[var(--success)]/10 flex items-center justify-center">
              <Download className="w-5 h-5 text-[var(--success)]" />
            </div>
            <h3 className="text-lg font-semibold">Export Session</h3>
          </div>
          <Terminal command="/export conversation.md" />
          <p className="text-sm text-[var(--muted)]">
            Save the entire conversation to a file. Perfect for documentation or review.
          </p>
        </div>
      </div>

      {/* Warning about skip permissions */}
      <Gotcha type="warning">
        <strong>--dangerously-skip-permissions</strong> means Claude can delete files, run any command,
        and modify anything without asking. Only use this when:
        <ul className="mt-2 ml-4 space-y-1">
          <li>• You&apos;re in a sandboxed environment</li>
          <li>• Running in CI/CD pipelines</li>
          <li>• Working on personal projects you fully trust</li>
          <li>• You&apos;ve already reviewed Claude&apos;s plan</li>
        </ul>
      </Gotcha>

      {/* Tip */}
      <Gotcha type="tip">
        Run <code>/init</code> when starting a new project. This creates a <code>CLAUDE.md</code> file
        that persists your project&apos;s context across sessions - making Claude smarter about your codebase.
      </Gotcha>
    </div>
  );
}
