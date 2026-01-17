'use client';

import { FileText, Search, Code, ChevronRight } from 'lucide-react';

export function Slide2Workflow() {
  return (
    <div className="space-y-10 animate-fade-in">
      {/* Title */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Spec → Plan → Execute
        </h1>
        <p className="text-xl text-[var(--muted)] leading-relaxed">
          The workflow for most tasks
        </p>
      </div>

      {/* Three-step workflow */}
      <div className="flex flex-col md:flex-row items-stretch gap-3 mt-8">
        {/* Step 1: Spec */}
        <div className="flex-1 bg-[var(--surface)] rounded-2xl p-6 border border-[var(--surface-border)] shadow-[var(--shadow-md)] relative animate-fade-in stagger-1 opacity-0 hover:shadow-[var(--shadow-lg)] transition-shadow duration-300">
          <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-[var(--accent)] text-xs font-bold text-white shadow-[var(--shadow-sm)]">
            1
          </div>
          <div className="w-12 h-12 rounded-xl bg-[var(--accent-soft)] flex items-center justify-center mb-4 mt-2">
            <FileText className="w-6 h-6 text-[var(--accent)]" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Spec</h3>
          <p className="text-[var(--muted)] text-sm mb-4 leading-relaxed">
            Write a <code className="px-1.5 py-0.5 rounded bg-[var(--accent-soft)] text-[var(--accent)] text-xs font-medium">spec.md</code> describing what you want to build
          </p>
          <ul className="text-sm text-[var(--muted)] space-y-2">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />Problem statement</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />Requirements</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />Success criteria</li>
          </ul>
        </div>

        {/* Arrow */}
        <div className="hidden md:flex items-center justify-center px-1">
          <ChevronRight className="w-5 h-5 text-[var(--muted-light)]" />
        </div>

        {/* Step 2: Plan */}
        <div className="flex-1 bg-[var(--surface)] rounded-2xl p-6 border border-[var(--surface-border)] shadow-[var(--shadow-md)] relative animate-fade-in stagger-2 opacity-0 hover:shadow-[var(--shadow-lg)] transition-shadow duration-300">
          <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-[var(--secondary)] text-xs font-bold text-white shadow-[var(--shadow-sm)]">
            2
          </div>
          <div className="w-12 h-12 rounded-xl bg-[var(--secondary-soft)] flex items-center justify-center mb-4 mt-2">
            <Search className="w-6 h-6 text-[var(--secondary)]" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Plan</h3>
          <p className="text-[var(--muted)] text-sm mb-4 leading-relaxed">
            Use <code className="px-1.5 py-0.5 rounded bg-[var(--secondary-soft)] text-[var(--secondary)] text-xs font-medium">Plan Mode</code> to let Claude explore and design
          </p>
          <ul className="text-sm text-[var(--muted)] space-y-2">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]" />Claude reads your codebase</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]" />Asks clarifying questions</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]" />Proposes an approach</li>
          </ul>
        </div>

        {/* Arrow */}
        <div className="hidden md:flex items-center justify-center px-1">
          <ChevronRight className="w-5 h-5 text-[var(--muted-light)]" />
        </div>

        {/* Step 3: Execute */}
        <div className="flex-1 bg-[var(--surface)] rounded-2xl p-6 border border-[var(--surface-border)] shadow-[var(--shadow-md)] relative animate-fade-in stagger-3 opacity-0 hover:shadow-[var(--shadow-lg)] transition-shadow duration-300">
          <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-[var(--success)] text-xs font-bold text-white shadow-[var(--shadow-sm)]">
            3
          </div>
          <div className="w-12 h-12 rounded-xl bg-[var(--success-soft)] flex items-center justify-center mb-4 mt-2">
            <Code className="w-6 h-6 text-[var(--success)]" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Execute</h3>
          <p className="text-[var(--muted)] text-sm mb-4 leading-relaxed">
            Approve the plan and let Claude implement
          </p>
          <ul className="text-sm text-[var(--muted)] space-y-2">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--success)]" />Claude writes the code</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--success)]" />Test on localhost</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--success)]" />Review and ship</li>
          </ul>
        </div>
      </div>

      {/* When to use this */}
      <div className="bg-[var(--surface)] rounded-2xl p-6 border border-[var(--surface-border)] shadow-[var(--shadow-md)] mt-8">
        <h3 className="text-lg font-semibold mb-5">When to Use This Workflow</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <h4 className="text-[var(--success)] font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--success)]" />
              Use for:
            </h4>
            <ul className="text-sm text-[var(--muted)] space-y-2 pl-4">
              <li>New features</li>
              <li>Bug fixes that need investigation</li>
              <li>Refactoring projects</li>
              <li>API integrations</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-[var(--warning)] font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--warning)]" />
              Skip for:
            </h4>
            <ul className="text-sm text-[var(--muted)] space-y-2 pl-4">
              <li>Simple fixes (typos, one-liners, quick edits)</li>
              <li>Questions or running single commands</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
