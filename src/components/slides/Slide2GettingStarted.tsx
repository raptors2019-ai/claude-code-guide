'use client';

export function Slide2GettingStarted() {
  const essentials = [
    {
      keys: 'Shift + Tab',
      desc: 'Switch modes (Normal → Auto → Plan)',
      tip: 'Use Plan mode for complex tasks'
    },
    {
      keys: 'Escape',
      desc: 'Stop Claude mid-generation',
      tip: 'Interrupt anytime if going off track'
    },
    {
      keys: '@ + path',
      desc: 'Reference a file',
      tip: 'Tab to autocomplete paths'
    },
    {
      keys: '/ + command',
      desc: 'Run a slash command',
      tip: 'Try /help to see all commands'
    },
    {
      keys: '/init',
      desc: 'Create your CLAUDE.md project memory',
      tip: 'Run this first in any new project'
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Title */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-medium">
          Start Here
        </div>
        <h1 className="text-4xl font-bold tracking-tight">
          Getting <span className="text-[var(--accent)]">Started</span>
        </h1>
        <p className="text-lg text-[var(--muted)]">
          5 essential things to know before you begin
        </p>
      </div>

      {/* Essentials grid - single column for clarity */}
      <div className="bg-[var(--surface)] rounded-xl p-6 border border-[var(--surface-light)]">
        <div className="space-y-4">
          {essentials.map((item, index) => (
            <div
              key={item.keys}
              className="flex items-start gap-4 pb-4 border-b border-[var(--surface-light)] last:border-0 last:pb-0"
            >
              <span className="w-6 h-6 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {index + 1}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <kbd className="px-2 py-1 rounded bg-[var(--surface-light)] text-sm font-mono whitespace-nowrap">
                    {item.keys}
                  </kbd>
                  <span className="text-sm font-medium text-[var(--foreground)]">{item.desc}</span>
                </div>
                <p className="text-xs text-[var(--muted)]">{item.tip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Encouraging message */}
      <div className="text-center p-4 rounded-xl bg-[var(--accent)]/5 border border-[var(--accent)]/20">
        <p className="text-[var(--foreground)] font-medium">
          That's it! You're ready to start using Claude Code.
        </p>
        <p className="text-sm text-[var(--muted)] mt-1">
          The next slides cover the workflow that gets the best results.
        </p>
      </div>
    </div>
  );
}
