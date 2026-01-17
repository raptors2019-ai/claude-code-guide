'use client';

import { CodeBlock, Terminal, Gotcha } from '../ui';

export function Slide3SpecMd() {
  const specTemplate = `# Feature Name

## Problem
What problem does this solve? Why does it matter?

## Requirements
- [ ] Requirement 1
- [ ] Requirement 2
- [ ] Requirement 3

## Constraints
- Technical limitations
- Design constraints
- Time constraints

## Success Criteria
How will we know this is done and working?
- [ ] Criteria 1
- [ ] Criteria 2`;

  const interviewPrompt = `read this @SPEC.md and interview me in detail using the
AskUserQuestionTool about literally anything: technical
implementation, UI & UX, concerns, tradeoffs, etc. but
make sure the questions are not obvious

be very in-depth and continue interviewing me continually
until it's complete, then write the spec to the file`;

  return (
    <div className="space-y-5 animate-fade-in">
      {/* Title */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          Writing Your <span className="text-[var(--accent)]">spec.md</span>
        </h1>
        <p className="text-lg text-[var(--muted)]">
          The template that drives great results
        </p>
      </div>

      {/* Workflow steps */}
      <div className="bg-[var(--surface)] rounded-xl p-5 border border-[var(--surface-light)]">
        <h3 className="text-sm font-semibold text-[var(--accent)] mb-4">My Workflow</h3>
        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="w-6 h-6 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
            <div>
              <p className="text-sm font-medium text-[var(--foreground)]">Open a new terminal and brainstorm</p>
              <p className="text-xs text-[var(--muted)] mt-1">Talk to Claude about what you want to build. Explore ideas, ask questions, think through the approach together.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="w-6 h-6 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
            <div>
              <p className="text-sm font-medium text-[var(--foreground)]">Fill in the spec.md template</p>
              <p className="text-xs text-[var(--muted)] mt-1">Once you have clarity, capture it in the template format below.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="w-6 h-6 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-bold flex items-center justify-center flex-shrink-0">3</span>
            <div>
              <p className="text-sm font-medium text-[var(--foreground)]">Run the interview prompt</p>
              <p className="text-xs text-[var(--muted)] mt-1">Let Claude ask clarifying questions to fill in any gaps before building.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Template */}
        <div className="space-y-2">
          <h3 className="text-base font-semibold">The Template</h3>
          <CodeBlock
            code={specTemplate}
            language="markdown"
            filename="spec.md"
          />
        </div>

        {/* The magic prompt */}
        <div className="space-y-2">
          <h3 className="text-base font-semibold">The Interview Prompt</h3>
          <Terminal command={interviewPrompt} showCopy={true} />
          <Gotcha type="tip">
            <strong>Core workflow tip:</strong> The <code className="text-xs">AskUserQuestionTool</code> creates
            an interactive Q&amp;A that catches edge cases and misunderstandings <em>before</em> any code is written.
            This is a key part of getting great results.
          </Gotcha>
        </div>
      </div>
    </div>
  );
}
