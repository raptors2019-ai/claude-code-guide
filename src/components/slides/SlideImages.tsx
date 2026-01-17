'use client';

import { Terminal, Gotcha, CodeBlock } from '../ui';
import { Image, MousePointer, Paintbrush, Monitor } from 'lucide-react';

export function SlideImages() {
  const makeItLookPrompt = `Here's a screenshot of the design I want.
Make my component look like this, matching:
- Layout and spacing
- Colors and typography
- Interactive states`;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Title */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="text-[var(--accent)]">Screenshots</span> & Images
        </h1>
        <p className="text-lg text-[var(--muted)]">
          Show Claude what you want - drag and drop images directly
        </p>
      </div>

      {/* Main concept */}
      <div className="bg-gradient-to-r from-[var(--accent)]/10 to-[var(--secondary)]/10 rounded-xl p-6 border border-[var(--accent)]/30">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/20 flex items-center justify-center flex-shrink-0">
            <Image className="w-6 h-6 text-[var(--accent)]" />
          </div>
          <div>
            <h3 className="font-semibold mb-2">Drag Images Into Claude Code</h3>
            <p className="text-sm text-[var(--muted)]">
              Claude can see images. Drag a screenshot, mockup, or design directly into the terminal
              and Claude will understand what you&apos;re showing it. This is incredibly powerful for UI work.
            </p>
          </div>
        </div>
      </div>

      {/* Use cases */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[var(--surface)] rounded-xl p-5 border border-[var(--surface-border)]">
          <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mb-3">
            <Paintbrush className="w-5 h-5 text-[var(--accent)]" />
          </div>
          <h3 className="font-semibold mb-2">Design to Code</h3>
          <p className="text-sm text-[var(--muted)]">
            Screenshot a Figma design or website and say &quot;make it look like this&quot;
          </p>
        </div>

        <div className="bg-[var(--surface)] rounded-xl p-5 border border-[var(--surface-border)]">
          <div className="w-10 h-10 rounded-lg bg-[var(--secondary)]/10 flex items-center justify-center mb-3">
            <Monitor className="w-5 h-5 text-[var(--secondary)]" />
          </div>
          <h3 className="font-semibold mb-2">Bug Reports</h3>
          <p className="text-sm text-[var(--muted)]">
            Show Claude a screenshot of a visual bug - &quot;this button is misaligned, fix it&quot;
          </p>
        </div>

        <div className="bg-[var(--surface)] rounded-xl p-5 border border-[var(--surface-border)]">
          <div className="w-10 h-10 rounded-lg bg-[var(--success)]/10 flex items-center justify-center mb-3">
            <MousePointer className="w-5 h-5 text-[var(--success)]" />
          </div>
          <h3 className="font-semibold mb-2">UI Comparison</h3>
          <p className="text-sm text-[var(--muted)]">
            Show before/after or reference sites - &quot;make our nav work like this one&quot;
          </p>
        </div>
      </div>

      {/* Example prompt */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Example Workflow</h3>
        <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--surface-light)]">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-6 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-bold flex items-center justify-center">1</span>
            <span className="text-sm">Take a screenshot of the design you want</span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-6 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-bold flex items-center justify-center">2</span>
            <span className="text-sm">Drag it into Claude Code (or paste with Ctrl/Cmd+V)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-bold flex items-center justify-center">3</span>
            <span className="text-sm">Tell Claude what to do with it:</span>
          </div>
        </div>
        <CodeBlock code={makeItLookPrompt} language="text" filename="prompt" />
      </div>

      <Gotcha type="tip">
        <strong>Pro tip:</strong> Screenshots work great with the spec workflow too.
        Include mockups in your spec.md discussion and Claude will reference them when building.
      </Gotcha>
    </div>
  );
}
