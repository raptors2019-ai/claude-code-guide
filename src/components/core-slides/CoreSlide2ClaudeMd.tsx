'use client';

import { CodeBlock, Gotcha } from '../ui';
import { FileCode, RefreshCw, Sparkles, Users } from 'lucide-react';

export function CoreSlide2ClaudeMd() {
  const hookExample = `// .claude/settings.json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Write|Edit",
      "hooks": [{
        "type": "command",
        "command": "bash .claude/scripts/detect-self-correction.sh"
      }]
    }]
  }
}`;

  const magicPrompt = `Update your CLAUDE.md so you don't
make that mistake again.`;

  return (
    <div className="space-y-5 animate-fade-in">
      {/* Title */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-medium">
          Core Workflow
        </div>
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="text-[var(--accent)]">CLAUDE.md</span> + Auto-Learning
        </h1>
        <p className="text-lg text-[var(--muted)]">
          Persistent context that compounds over time
        </p>
      </div>

      {/* What is CLAUDE.md */}
      <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--surface-light)]">
        <div className="flex items-center gap-2 mb-2">
          <FileCode className="w-5 h-5 text-[var(--accent)]" />
          <h3 className="font-semibold text-sm">What is CLAUDE.md?</h3>
        </div>
        <p className="text-sm text-[var(--muted)]">
          A file Claude reads at the start of every conversation. Include commands, code style, and workflow rules.
          <strong> Check into git</strong> — the file compounds in value as your team contributes.
        </p>
      </div>

      {/* Two columns: Hook + Magic Prompt */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Auto-learning hook */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-[var(--secondary)]" />
            <h3 className="font-semibold text-sm">Auto-Learning Hook</h3>
          </div>
          <p className="text-xs text-[var(--muted)]">
            Detect when Claude corrects itself → queue learning → update CLAUDE.md
          </p>
          <div className="rounded-xl border border-[var(--surface-light)] overflow-hidden">
            <CodeBlock code={hookExample} language="json" filename=".claude/settings.json" showCopy={true} />
          </div>
        </div>

        {/* The magic prompt */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[var(--accent)]" />
            <h3 className="font-semibold text-sm">The Magic Prompt</h3>
          </div>
          <p className="text-xs text-[var(--muted)]">
            After every correction, end with:
          </p>
          <div className="bg-[var(--accent)]/10 border-2 border-[var(--accent)]/30 rounded-xl p-4">
            <p className="font-mono text-sm text-[var(--accent)]">&ldquo;{magicPrompt}&rdquo;</p>
          </div>
          <p className="text-xs text-[var(--muted)] italic">
            Claude is eerily good at writing rules for itself.
          </p>
        </div>
      </div>

      {/* The feedback loop */}
      <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--surface-light)]">
        <div className="flex items-center justify-between gap-4 text-center">
          <div className="flex-1">
            <div className="w-10 h-10 rounded-full bg-[var(--warning)]/20 flex items-center justify-center mx-auto mb-2">
              <span className="text-lg">1</span>
            </div>
            <p className="text-xs text-[var(--muted)]">Claude makes mistake</p>
          </div>
          <span className="text-[var(--muted)]">→</span>
          <div className="flex-1">
            <div className="w-10 h-10 rounded-full bg-[var(--accent)]/20 flex items-center justify-center mx-auto mb-2">
              <span className="text-lg">2</span>
            </div>
            <p className="text-xs text-[var(--muted)]">You correct + ask to update</p>
          </div>
          <span className="text-[var(--muted)]">→</span>
          <div className="flex-1">
            <div className="w-10 h-10 rounded-full bg-[var(--success)]/20 flex items-center justify-center mx-auto mb-2">
              <span className="text-lg">3</span>
            </div>
            <p className="text-xs text-[var(--muted)]">Claude writes rule</p>
          </div>
          <span className="text-[var(--muted)]">→</span>
          <div className="flex-1">
            <div className="w-10 h-10 rounded-full bg-[var(--secondary)]/20 flex items-center justify-center mx-auto mb-2">
              <Users className="w-5 h-5 text-[var(--secondary)]" />
            </div>
            <p className="text-xs text-[var(--muted)]">Team benefits</p>
          </div>
        </div>
      </div>

      {/* Quote */}
      <Gotcha type="tip">
        <strong>Ruthlessly edit</strong> your CLAUDE.md over time. Keep iterating until Claude&apos;s mistake rate measurably drops.
      </Gotcha>
    </div>
  );
}
