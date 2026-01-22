'use client';

import { CodeBlock, Gotcha } from '../ui';
import { CheckCircle2, TestTube, Camera, Bug } from 'lucide-react';

export function SlideVerification() {
  const strategies = [
    {
      icon: TestTube,
      title: 'Provide Test Criteria',
      before: 'implement a function that validates email addresses',
      after: `write a validateEmail function. test cases:
- foo@bar.com is valid
- invalid is invalid
- foo@.com is invalid
run the tests after implementing`,
    },
    {
      icon: Camera,
      title: 'Verify UI Visually',
      before: 'make the dashboard look better',
      after: `[paste screenshot] implement this design.
take a screenshot of the result and
compare it to the original`,
    },
    {
      icon: Bug,
      title: 'Address Root Causes',
      before: 'the build is failing',
      after: `the build fails with this error: [error].
fix it and verify the build succeeds.
address the root cause, don't suppress the error`,
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Title */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-medium">
          Appendix
        </div>
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="text-[var(--accent)]">Verification</span>
        </h1>
        <p className="text-lg text-[var(--muted)]">
          Give Claude a way to check its own work
        </p>
      </div>

      {/* Key insight */}
      <div className="bg-[var(--accent)]/10 border border-[var(--accent)]/30 rounded-xl p-4 flex items-start gap-3">
        <CheckCircle2 className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-medium">The #1 practice from Anthropic&apos;s official docs:</p>
          <p className="text-sm text-[var(--muted)] mt-1">
            Include tests, screenshots, or expected outputs so Claude can self-check.
            This single habit dramatically improves results.
          </p>
        </div>
      </div>

      {/* Strategies */}
      <div className="space-y-4">
        {strategies.map((strategy) => (
          <div key={strategy.title} className="bg-[var(--surface)] rounded-xl p-5 border border-[var(--surface-light)]">
            <div className="flex items-center gap-2 mb-4">
              <strategy.icon className="w-5 h-5 text-[var(--accent)]" />
              <h3 className="font-semibold">{strategy.title}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-3 items-start">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                <div className="text-xs font-medium text-red-500 mb-2">❌ No verification</div>
                <p className="text-sm font-mono">&quot;{strategy.before}&quot;</p>
              </div>
              <div className="hidden md:flex items-center justify-center text-[var(--muted)]">→</div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                <div className="text-xs font-medium text-green-500 mb-2">✅ Self-checking</div>
                <CodeBlock code={strategy.after} language="text" showCopy={true} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cross-reference */}
      <Gotcha type="info">
        <strong>See also:</strong> The <em>Error Recovery</em> slide (14) shows how to
        use verification when debugging issues.
      </Gotcha>
    </div>
  );
}
