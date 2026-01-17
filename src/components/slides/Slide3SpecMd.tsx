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
    <div className="space-y-6 animate-fade-in">
      {/* Title */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          Writing Your <span className="text-[var(--accent)]">spec.md</span>
        </h1>
        <p className="text-lg text-[var(--muted)]">
          The template that drives great results
        </p>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Template */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">The Template</h3>
          <CodeBlock
            code={specTemplate}
            language="markdown"
            filename="spec.md"
          />
        </div>

        {/* The magic prompt */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">The Magic Prompt</h3>
          <p className="text-sm text-[var(--muted)]">
            After creating your spec, use this prompt to have Claude interview you:
          </p>
          <Terminal command={interviewPrompt} showCopy={true} />
        </div>
      </div>

      {/* Gotcha */}
      <Gotcha type="warning">
        <strong>Don&apos;t be vague!</strong> The more specific your spec, the better Claude&apos;s output.
        &quot;Add a settings page&quot; is worse than &quot;Add a settings page with dark mode toggle,
        notification preferences, and account deletion.&quot;
      </Gotcha>

      {/* Pro tip */}
      <Gotcha type="tip">
        The interview prompt makes Claude ask you clarifying questions before building.
        This catches edge cases and misunderstandings <em>before</em> code is written.
      </Gotcha>
    </div>
  );
}
