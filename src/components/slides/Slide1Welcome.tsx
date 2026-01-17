'use client';

import { Terminal as TerminalIcon, Sparkles, Zap } from 'lucide-react';

export function Slide1Welcome() {
  return (
    <div className="space-y-10 animate-fade-in">
      {/* Title */}
      <div className="text-center space-y-5">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-soft)] border border-[var(--accent)]/20 text-[var(--accent)] text-sm font-medium shadow-[var(--shadow-sm)]">
          <Sparkles className="w-4 h-4" />
          A Practical Guide
        </div>
        <h1 className="text-5xl font-bold tracking-tight">
          Welcome to <span className="gradient-text">Claude Code</span>
        </h1>
        <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
          Your AI pair programmer that lives in the terminal
        </p>
      </div>

      {/* What it is */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
        <div className="bg-[var(--surface)] rounded-2xl p-6 border border-[var(--surface-border)] shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] hover:border-[var(--accent)]/30 transition-all duration-300 animate-fade-in stagger-1 opacity-0 group">
          <div className="w-12 h-12 rounded-xl bg-[var(--accent-soft)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <TerminalIcon className="w-6 h-6 text-[var(--accent)]" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Terminal-Native</h3>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            Claude Code runs in your terminal, reading and writing files directly in your codebase.
          </p>
        </div>

        <div className="bg-[var(--surface)] rounded-2xl p-6 border border-[var(--surface-border)] shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] hover:border-[var(--secondary)]/30 transition-all duration-300 animate-fade-in stagger-2 opacity-0 group">
          <div className="w-12 h-12 rounded-xl bg-[var(--secondary-soft)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Sparkles className="w-6 h-6 text-[var(--secondary)]" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Context-Aware</h3>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            It understands your entire project structure, not just the file you&apos;re looking at.
          </p>
        </div>

        <div className="bg-[var(--surface)] rounded-2xl p-6 border border-[var(--surface-border)] shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] hover:border-[var(--success)]/30 transition-all duration-300 animate-fade-in stagger-3 opacity-0 group">
          <div className="w-12 h-12 rounded-xl bg-[var(--success-soft)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Zap className="w-6 h-6 text-[var(--success)]" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Action-Oriented</h3>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            It doesn&apos;t just suggest code - it can run commands, edit files, and ship features.
          </p>
        </div>
      </div>

      {/* Key difference */}
      <div className="relative bg-[var(--surface)] rounded-2xl p-6 border border-[var(--surface-border)] shadow-[var(--shadow-md)] mt-8 overflow-hidden">
        {/* Subtle gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent)] via-[var(--secondary)] to-[var(--accent)]" />
        <h3 className="text-lg font-semibold mb-3">The Mental Model</h3>
        <p className="text-[var(--muted)] leading-relaxed">
          Think of Claude Code as a <span className="text-[var(--foreground)] font-medium">senior developer pair programming with you</span>.
          You describe what you want to build, and it explores the codebase, asks clarifying questions,
          creates a plan, and implements it - while you review and guide the process.
        </p>
      </div>

      {/* Navigation hint */}
      <div className="text-center text-[var(--muted)] text-sm pt-4">
        Use <kbd>←</kbd> <kbd>→</kbd> or click the arrows to navigate
      </div>
    </div>
  );
}
