'use client';

import { Terminal, Gotcha, CodeBlock } from '../ui';
import { AlertTriangle, RotateCcw, XCircle, RefreshCw } from 'lucide-react';

export function SlideErrors() {
  const stopPrompt = `Stop. That's not what I wanted.
Let me explain what I actually need...`;

  const debugPrompt = `This error is happening: [paste error]
Investigate the codebase, find the root cause, and fix it.
Verify the build/tests succeed. Address the root cause - don't suppress the error.`;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Title */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-medium">
          Appendix
        </div>
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="text-[var(--accent)]">Error</span> Recovery
        </h1>
        <p className="text-lg text-[var(--muted)]">
          When things go wrong - and they will
        </p>
      </div>

      {/* Describe the Symptom - Before/After */}
      <div className="bg-[var(--surface)] rounded-xl p-5 border border-[var(--surface-light)]">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <span className="text-lg">🎯</span> Describe the Symptom
        </h3>
        <p className="text-sm text-[var(--muted)] mb-4">
          Vague bug reports lead to vague fixes. Transform them into actionable prompts:
        </p>
        <div className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-3 items-start">
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
              <div className="text-xs font-medium text-red-500 mb-2">❌ Vague</div>
              <p className="text-sm">&quot;fix the login bug&quot;</p>
            </div>
            <div className="hidden md:flex items-center justify-center text-[var(--muted)]">→</div>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
              <div className="text-xs font-medium text-green-500 mb-2">✅ Specific</div>
              <p className="text-sm">&quot;users report that login fails after session timeout. check the auth flow in src/auth/, especially token refresh. write a failing test first, then fix it&quot;</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-3 items-start">
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
              <div className="text-xs font-medium text-red-500 mb-2">❌ Vague</div>
              <p className="text-sm">&quot;the build is failing&quot;</p>
            </div>
            <div className="hidden md:flex items-center justify-center text-[var(--muted)]">→</div>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
              <div className="text-xs font-medium text-green-500 mb-2">✅ Specific</div>
              <p className="text-sm">&quot;the build fails with this error: [paste error]. fix it and verify the build succeeds. address the root cause, don&apos;t suppress the error&quot;</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick fixes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[var(--surface)] rounded-xl p-5 border border-red-500/30">
          <div className="flex items-center gap-2 mb-3">
            <XCircle className="w-5 h-5 text-red-500" />
            <h3 className="font-semibold">Claude Went Off Track</h3>
          </div>
          <p className="text-sm text-[var(--muted)] mb-3">
            Press <kbd className="px-2 py-0.5 rounded bg-[var(--surface-light)] text-xs">Escape</kbd> to stop, then redirect:
          </p>
          <CodeBlock code={stopPrompt} language="text" />
        </div>

        <div className="bg-[var(--surface)] rounded-xl p-5 border border-[var(--warning)]/30">
          <div className="flex items-center gap-2 mb-3">
            <RotateCcw className="w-5 h-5 text-[var(--warning)]" />
            <h3 className="font-semibold">Undo Everything</h3>
          </div>
          <p className="text-sm text-[var(--muted)] mb-3">
            If Claude made a mess, git is your safety net:
          </p>
          <Terminal command="git checkout ." />
          <p className="text-xs text-[var(--muted)] mt-2">Reverts all uncommitted changes</p>
        </div>
      </div>

      {/* Common scenarios */}
      <div className="bg-[var(--surface)] rounded-xl p-5 border border-[var(--surface-light)]">
        <h3 className="font-semibold mb-4">Common Scenarios</h3>
        <div className="space-y-4">
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-[var(--warning)] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium">Claude keeps making the same mistake</p>
              <p className="text-xs text-[var(--muted)] mt-1">
                Use <code>/clear</code> to reset context. Sometimes Claude gets stuck in a loop.
                Start fresh and be more specific about what you need.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-[var(--warning)] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium">Build/tests are failing</p>
              <p className="text-xs text-[var(--muted)] mt-1">
                Paste the error directly: &quot;This error is happening: [error]. Fix it.&quot;
                Claude can often debug its own mistakes.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-[var(--warning)] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium">Claude misunderstood the task</p>
              <p className="text-xs text-[var(--muted)] mt-1">
                Don&apos;t try to fix it incrementally. Undo with git, clarify your requirements,
                and let Claude try again with better context.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Debug workflow */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <RefreshCw className="w-5 h-5 text-[var(--secondary)]" />
          <h3 className="font-semibold">Debug With Claude</h3>
        </div>
        <p className="text-sm text-[var(--muted)]">
          When you hit an error, paste it directly and let Claude investigate:
        </p>
        <CodeBlock code={debugPrompt} language="text" filename="prompt" />
      </div>

      {/* Recovery checklist */}
      <div className="bg-[var(--accent)]/5 border border-[var(--accent)]/20 rounded-xl p-4">
        <h3 className="font-semibold mb-3 text-sm">Recovery Checklist</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-[var(--muted)]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span><kbd className="text-xs px-1 rounded bg-[var(--surface)]">Escape</kbd> to stop generation</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span><code>git diff</code> to see what changed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span><code>git checkout .</code> to undo all</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span><code>/clear</code> to reset context</span>
          </div>
        </div>
      </div>

      <Gotcha type="info">
        <strong>Remember:</strong> Mistakes are cheap when you commit often.
        Small, frequent commits mean you can always roll back to a working state.
      </Gotcha>
    </div>
  );
}
