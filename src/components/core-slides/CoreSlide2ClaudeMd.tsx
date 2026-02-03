'use client';

import { FileCode, FolderOpen, RefreshCw, Sparkles, MessageSquare, Brain, FileEdit, CheckCircle, ArrowRight, Twitter } from 'lucide-react';
import Image from 'next/image';

export function CoreSlide2ClaudeMd() {
  const magicPrompt = `Update your CLAUDE.md so you don't make that mistake again.`;

  return (
    <div className="space-y-4 animate-fade-in">
      {/* Title */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-sm font-medium">
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
          <FileCode className="w-7 h-7 text-[var(--accent)]" />
          <h3 className="font-semibold text-lg">What is CLAUDE.md?</h3>
        </div>
        <p className="text-lg text-[var(--muted)]">
          A file Claude reads at the start of every conversation. Include commands, code style, and workflow rules.
          <strong> Check into git</strong> — the file compounds in value as your team contributes.
        </p>
      </div>

      {/* Two approaches side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* The magic hook */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-7 h-7 text-[var(--accent)]" />
            <h3 className="font-semibold text-lg">The Magic Hook</h3>
          </div>
          <p className="text-base text-[var(--muted)]">
            A hook can detect when you correct Claude (re-editing the same file, words like &ldquo;actually&rdquo; or &ldquo;oops&rdquo;) and automatically prompt Claude to update CLAUDE.md.
          </p>
          <div className="bg-[var(--accent)]/10 border-2 border-[var(--accent)]/30 rounded-xl p-3">
            <p className="font-mono text-base text-[var(--accent)]">&ldquo;{magicPrompt}&rdquo;</p>
          </div>
          <p className="text-base text-[var(--muted)] italic">
            Zero effort learning — mistakes become rules automatically.
          </p>
        </div>

        {/* What are hooks */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <FolderOpen className="w-7 h-7 text-[var(--secondary)]" />
            <h3 className="font-semibold text-lg">What Are Hooks?</h3>
          </div>
          <p className="text-base text-[var(--muted)]">
            Hooks are shell commands that run automatically when Claude does something. Configure in <code className="bg-[var(--surface)] px-1 rounded">.claude/settings.json</code>:
          </p>
          <ul className="text-base text-[var(--muted)] space-y-1 ml-4">
            <li>• <strong>PreToolUse</strong> — before Claude runs a tool</li>
            <li>• <strong>PostToolUse</strong> — after a tool completes</li>
            <li>• <strong>Notification</strong> — when Claude wants your attention</li>
          </ul>
          <p className="text-base text-[var(--muted)] italic">
            Use them for linting, testing, logging, or custom workflows.
          </p>
        </div>
      </div>

      {/* The Learning Loop - visual flow */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <RefreshCw className="w-7 h-7 text-[var(--success)]" />
            <h3 className="font-semibold text-lg">The Learning Loop</h3>
            <span className="text-base text-[var(--muted)]">— automate with hooks</span>
          </div>
        </div>
        <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--surface-light)]">
          <div className="flex items-center justify-between gap-2">
            {/* Step 1 */}
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-12 h-12 rounded-full bg-[var(--accent)]/20 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-[var(--accent)]" />
              </div>
              <span className="text-base text-center font-medium">You correct Claude</span>
            </div>

            <ArrowRight className="w-6 h-6 text-[var(--muted)] flex-shrink-0" />

            {/* Step 2 */}
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-12 h-12 rounded-full bg-[var(--secondary)]/20 flex items-center justify-center">
                <Brain className="w-6 h-6 text-[var(--secondary)]" />
              </div>
              <span className="text-base text-center font-medium">Claude notices</span>
            </div>

            <ArrowRight className="w-6 h-6 text-[var(--muted)] flex-shrink-0" />

            {/* Step 3 */}
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-12 h-12 rounded-full bg-[var(--success)]/20 flex items-center justify-center">
                <FileEdit className="w-6 h-6 text-[var(--success)]" />
              </div>
              <span className="text-base text-center font-medium">Updates CLAUDE.md</span>
            </div>

            <ArrowRight className="w-6 h-6 text-[var(--muted)] flex-shrink-0" />

            {/* Step 4 */}
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-12 h-12 rounded-full bg-[var(--accent)]/20 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-[var(--accent)]" />
              </div>
              <span className="text-base text-center font-medium">Won&apos;t repeat mistake</span>
            </div>
          </div>
        </div>
        <p className="text-base text-[var(--muted)] italic">
          Over time, your CLAUDE.md becomes a custom instruction set tuned to how you work.
        </p>
      </div>

      {/* Boris tweet */}
      <div className="bg-black rounded-xl p-4 border border-gray-800">
        <div className="flex items-start gap-3">
          <Image
            src="/boris-cherny.jpg"
            alt="Boris Cherny"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full flex-shrink-0 object-cover"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-base">Boris Cherny</span>
              <Twitter className="w-5 h-5 text-blue-400" />
              <span className="text-gray-500 text-base">@bcherny</span>
            </div>
            <p className="text-gray-300 text-base mt-1">
              Invest in your <span className="text-blue-400">CLAUDE.md</span>. After every correction, end with: &ldquo;Update your CLAUDE.md so you don&apos;t make that mistake again.&rdquo; Claude is eerily good at writing rules for itself.
            </p>
            <p className="text-gray-400 text-base mt-2 italic">
              Ruthlessly edit your CLAUDE.md over time. Keep iterating until Claude&apos;s mistake rate measurably drops.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
