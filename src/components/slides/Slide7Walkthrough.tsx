'use client';

import { Terminal, CodeBlock, Gotcha } from '../ui';
import { FileText, Search, Code, GitBranch, Check } from 'lucide-react';

export function Slide7Walkthrough() {
  const specContent = `# User Settings Page

## Problem
Users cannot customize their app experience (dark mode, notifications).

## Requirements
- [ ] Dark mode toggle that persists
- [ ] Email notification preferences
- [ ] Account deletion option with confirmation

## Success Criteria
- Settings persist across sessions
- All toggles work immediately
- Deletion requires confirmation modal`;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Title */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="text-[var(--accent)]">Full Walkthrough</span>
        </h1>
        <p className="text-lg text-[var(--muted)]">
          Building a feature from spec to deploy
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Step 1 */}
        <div className="flex gap-4 mb-6">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[var(--accent)] flex items-center justify-center text-white font-bold">
              1
            </div>
            <div className="w-0.5 h-full bg-[var(--surface-light)] mt-2" />
          </div>
          <div className="flex-1 pb-6">
            <div className="flex items-center gap-2 mb-2">
              <GitBranch className="w-4 h-4 text-[var(--accent)]" />
              <h3 className="font-semibold">Create a branch</h3>
            </div>
            <Terminal command="git checkout -b feature/user-settings" />
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex gap-4 mb-6">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[var(--accent)] flex items-center justify-center text-white font-bold">
              2
            </div>
            <div className="w-0.5 h-full bg-[var(--surface-light)] mt-2" />
          </div>
          <div className="flex-1 pb-6">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-4 h-4 text-[var(--accent)]" />
              <h3 className="font-semibold">Write your spec</h3>
            </div>
            <CodeBlock code={specContent} language="markdown" filename="spec.md" />
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex gap-4 mb-6">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[var(--secondary)] flex items-center justify-center text-white font-bold">
              3
            </div>
            <div className="w-0.5 h-full bg-[var(--surface-light)] mt-2" />
          </div>
          <div className="flex-1 pb-6">
            <div className="flex items-center gap-2 mb-2">
              <Search className="w-4 h-4 text-[var(--secondary)]" />
              <h3 className="font-semibold">Start Claude in Plan Mode</h3>
            </div>
            <Terminal command="claude --permission-mode plan" />
            <p className="text-sm text-[var(--muted)] mt-2">
              Then paste the interview prompt with your spec
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex gap-4 mb-6">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[var(--success)] flex items-center justify-center text-white font-bold">
              4
            </div>
            <div className="w-0.5 h-full bg-[var(--surface-light)] mt-2" />
          </div>
          <div className="flex-1 pb-6">
            <div className="flex items-center gap-2 mb-2">
              <Code className="w-4 h-4 text-[var(--success)]" />
              <h3 className="font-semibold">Review plan, then execute</h3>
            </div>
            <p className="text-sm text-[var(--muted)]">
              Press <kbd className="px-2 py-0.5 rounded bg-[var(--surface)] text-xs">Shift+Tab</kbd> to
              switch to Normal mode and approve Claude&apos;s changes
            </p>
          </div>
        </div>

        {/* Step 5 */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[var(--success)] flex items-center justify-center text-white font-bold">
              <Check className="w-5 h-5" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <GitBranch className="w-4 h-4 text-[var(--success)]" />
              <h3 className="font-semibold">Commit and push</h3>
            </div>
            <Terminal command='git add . && git commit -m "Add user settings page" && git push -u origin feature/user-settings' />
          </div>
        </div>
      </div>

      <Gotcha type="tip">
        Claude can create the commit for you! Just say &quot;commit these changes with a descriptive message&quot;
        and it will run the git commands.
      </Gotcha>
    </div>
  );
}
