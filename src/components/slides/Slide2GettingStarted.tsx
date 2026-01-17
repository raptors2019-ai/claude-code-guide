'use client';

import { Terminal, Gotcha } from '../ui';

export function Slide2GettingStarted() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Title */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-medium">
          Start Here
        </div>
        <h1 className="text-4xl font-bold tracking-tight">
          Getting <span className="text-[var(--accent)]">Started</span>
        </h1>
        <p className="text-lg text-[var(--muted)]">
          How to launch Claude Code for maximum flow
        </p>
      </div>

      {/* Launch options */}
      <div className="space-y-4">
        <div className="bg-[var(--surface)] rounded-xl p-5 border border-[var(--surface-light)]">
          <h3 className="text-sm font-semibold text-[var(--accent)] mb-3">Option 1: Accept Edits Mode</h3>
          <Terminal command="claude --accept-edits" />
          <p className="text-sm text-[var(--muted)] mt-3">
            Auto-accepts file edits but still prompts for bash commands. Good starting point.
          </p>
        </div>

        <div className="bg-[var(--surface)] rounded-xl p-5 border border-[var(--accent)]/30">
          <div className="flex items-center gap-2 mb-3">
            <h3 className="text-sm font-semibold text-[var(--accent)]">Option 2: Skip All Permissions</h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">Recommended</span>
          </div>
          <Terminal command="claude --dangerously-skip-permissions" />
          <p className="text-sm text-[var(--muted)] mt-3">
            This is what I use. Claude runs without any permission prompts - maximum flow state.
          </p>
        </div>
      </div>

      {/* Delete file caveat */}
      <Gotcha type="warning">
        <strong>About &quot;dangerously&quot;:</strong> The main risk is file deletion. Not ideal for production codebases,
        but for development and testing I&apos;ve found it very safe. Claude rarely deletes files unprompted,
        and you have git to recover if needed.
      </Gotcha>

      {/* Slash commands */}
      <div className="bg-[var(--surface)] rounded-xl p-5 border border-[var(--surface-light)]">
        <h3 className="text-sm font-semibold text-[var(--foreground)] mb-2">Slash Commands</h3>
        <div className="flex items-center gap-3 mb-2">
          <kbd className="px-2 py-1 rounded bg-[var(--surface-light)] text-sm font-mono">/ + command</kbd>
          <span className="text-sm text-[var(--muted)]">Run saved prompts</span>
        </div>
        <p className="text-sm text-[var(--muted)] mb-3">
          Create slash commands for prompts you type repeatedly. If you find yourself copy-pasting
          the same instructions, save them as a command instead.
        </p>
        <div className="bg-[var(--surface-light)] rounded-lg p-3 mb-2">
          <p className="text-xs font-mono text-[var(--muted)]">
            .claude/commands/<span className="text-[var(--accent)]">my-command</span>.md
          </p>
        </div>
        <p className="text-xs text-[var(--muted)]">
          Create a <code className="text-[var(--accent)]">.claude/commands/</code> folder, add markdown files for each command.
          Restart your terminal if new commands don&apos;t appear immediately.
        </p>
      </div>

      {/* Next up callout */}
      <div className="text-center p-4 rounded-xl bg-[var(--accent)]/5 border border-[var(--accent)]/20">
        <p className="text-[var(--foreground)] font-medium">
          Next up: The spec.md template
        </p>
        <p className="text-sm text-[var(--muted)] mt-1">
          The single most important file for getting great results from Claude.
        </p>
      </div>
    </div>
  );
}
