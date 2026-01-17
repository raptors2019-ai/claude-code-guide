'use client';

import { Terminal, Gotcha } from '../ui';
import { ToggleLeft, Eye, Play, Keyboard, FileText } from 'lucide-react';
import Link from 'next/link';

export function Slide4PlanMode() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Title */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="text-[var(--accent)]">Plan Mode</span> & Essential Controls
        </h1>
        <p className="text-lg text-[var(--muted)]">
          The keyboard shortcuts that change everything
        </p>
      </div>

      {/* Shift+Tab explanation */}
      <div className="bg-[var(--surface)] rounded-xl p-6 border border-[var(--surface-light)]">
        <div className="flex items-center gap-3 mb-4">
          <Keyboard className="w-6 h-6 text-[var(--accent)]" />
          <h3 className="text-xl font-semibold">
            <kbd className="px-3 py-1.5 rounded bg-[var(--surface-light)] border border-[var(--accent)]/50 text-[var(--accent)] mr-2">Shift</kbd>
            +
            <kbd className="px-3 py-1.5 rounded bg-[var(--surface-light)] border border-[var(--accent)]/50 text-[var(--accent)] ml-2">Tab</kbd>
          </h3>
        </div>
        <p className="text-[var(--muted)] mb-4">
          Cycles through three modes. Press it repeatedly to switch:
        </p>

        {/* Mode cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[var(--surface-light)] rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <ToggleLeft className="w-5 h-5 text-[var(--muted)]" />
              <span className="font-medium">Normal Mode</span>
            </div>
            <p className="text-sm text-[var(--muted)]">
              Claude asks permission before each action
            </p>
          </div>
          <div className="bg-[var(--surface-light)] rounded-lg p-4 border border-[var(--success)]/30">
            <div className="flex items-center gap-2 mb-2">
              <Play className="w-5 h-5 text-[var(--success)]" />
              <span className="font-medium text-[var(--success)]">Auto-Accept</span>
            </div>
            <p className="text-sm text-[var(--muted)]">
              Claude executes without asking
            </p>
          </div>
          <div className="bg-[var(--surface-light)] rounded-lg p-4 border border-[var(--secondary)]/30">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="w-5 h-5 text-[var(--secondary)]" />
              <span className="font-medium text-[var(--secondary)]">Plan Mode</span>
            </div>
            <p className="text-sm text-[var(--muted)]">
              Claude can only read - no writes or commands
            </p>
          </div>
        </div>
        <p className="text-xs text-[var(--muted)] mt-4">
          <strong>Tip:</strong> When Claude asks permission for a command, selecting &quot;Always allow&quot; saves it to{' '}
          <code className="text-[var(--accent)]">.claude/settings.json</code> so it won&apos;t ask again.
        </p>
      </div>

      {/* Plan mode command */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Start in Plan Mode</h3>
        <Terminal command="claude --permission-mode plan" />
        <p className="text-sm text-[var(--muted)]">
          Let Claude explore your codebase before making changes. Switch to Normal mode when ready to execute.
        </p>
      </div>

      {/* /init section - expanded */}
      <div className="bg-[var(--surface)] rounded-xl p-5 border border-[var(--accent)]/30">
        <div className="flex items-center gap-2 mb-3">
          <h3 className="text-lg font-semibold">Initialize Project Memory</h3>
          <Terminal command="/init" />
        </div>

        <p className="text-sm text-[var(--muted)] mb-4">
          Creates a <code className="text-[var(--accent)]">CLAUDE.md</code> file that Claude reads at the start of every session.
          This is your project&apos;s persistent memory - Claude will always know your preferences.
        </p>

        <div className="bg-[var(--surface-light)] rounded-lg p-4 mb-4">
          <p className="text-xs font-semibold text-[var(--accent)] mb-2">When to run /init</p>
          <p className="text-sm text-[var(--muted)]">
            I typically run this <strong>after the AskUserQuestionTool interview</strong>. Once Claude understands
            your project through the Q&amp;A, it can generate a much better CLAUDE.md with accurate context.
          </p>
        </div>

        <p className="text-xs font-semibold text-[var(--muted)] mb-2">What to include in CLAUDE.md:</p>
        <div className="bg-[var(--background)] rounded-lg p-3 font-mono text-xs overflow-x-auto">
          <pre className="text-[var(--muted)]">{`# Project: My App

## Brand & Design
- Primary: #6366f1 (Indigo)
- Secondary: #ec4899 (Pink)
- Font: Inter for UI, JetBrains Mono for code
- Style: Minimal, lots of whitespace, rounded corners

## Tech Stack
- Next.js 14 with App Router
- Tailwind CSS
- Prisma + PostgreSQL

## Conventions
- Use 'cn' helper for conditional classes
- All components in src/components/
- Prefer server components unless state needed`}</pre>
        </div>
      </div>

      {/* Quick reference */}
      <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--surface-light)]">
        <h4 className="text-sm font-semibold mb-3 text-[var(--muted)]">Other Essential Shortcuts</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          <div>
            <kbd className="px-2 py-1 rounded bg-[var(--surface-light)] text-xs">Ctrl+C</kbd>
            <span className="text-[var(--muted)] ml-2">Cancel</span>
          </div>
          <div>
            <kbd className="px-2 py-1 rounded bg-[var(--surface-light)] text-xs">Escape</kbd>
            <span className="text-[var(--muted)] ml-2">Stop generation</span>
          </div>
          <div>
            <kbd className="px-2 py-1 rounded bg-[var(--surface-light)] text-xs">Ctrl+L</kbd>
            <span className="text-[var(--muted)] ml-2">Clear screen</span>
          </div>
          <div>
            <kbd className="px-2 py-1 rounded bg-[var(--surface-light)] text-xs">↑ / ↓</kbd>
            <span className="text-[var(--muted)] ml-2">History</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-3">
          <p className="text-xs text-[var(--muted)]">
            <strong>Mac:</strong> Use <kbd className="px-1 py-0.5 rounded bg-[var(--surface-light)] text-xs">⌘+C</kbd> for Cancel and <kbd className="px-1 py-0.5 rounded bg-[var(--surface-light)] text-xs">⌘+L</kbd> for Clear screen
          </p>
          <Link
            href="/slide/9"
            className="inline-flex items-center gap-1.5 text-xs text-[var(--accent)] hover:underline"
          >
            <Keyboard className="w-3 h-3" />
            Full shortcuts reference →
          </Link>
        </div>
      </div>

      {/* Link to CLAUDE.md template */}
      <Link
        href="/slide/11"
        className="inline-flex items-center gap-2 text-sm text-[var(--accent)] hover:underline"
      >
        <FileText className="w-4 h-4" />
        See full CLAUDE.md template in the appendix →
      </Link>
    </div>
  );
}
