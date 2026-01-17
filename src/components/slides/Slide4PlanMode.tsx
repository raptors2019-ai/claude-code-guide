'use client';

import { Terminal, Gotcha } from '../ui';
import { ToggleLeft, Eye, Play, Keyboard } from 'lucide-react';

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
              Claude executes without asking (fast but risky)
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
      </div>

      {/* Commands */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Start in Plan Mode</h3>
          <Terminal command="claude --permission-mode plan" />
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Initialize Project Memory</h3>
          <Terminal command="/init" />
          <p className="text-sm text-[var(--muted)]">
            Creates <code className="text-[var(--accent)]">CLAUDE.md</code> with project context
          </p>
        </div>
      </div>

      {/* Gotcha */}
      <Gotcha type="warning">
        Always start complex tasks in <strong>Plan Mode</strong>. Let Claude explore and understand
        your codebase before making changes. You can switch to Normal mode when you&apos;re ready
        to execute.
      </Gotcha>

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
      </div>
    </div>
  );
}
