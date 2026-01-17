'use client';

export function Slide8Shortcuts() {
  const shortcuts = [
    { category: 'Mode Switching', items: [
      { keys: 'Shift + Tab', desc: 'Cycle through Normal → Auto-Accept → Plan modes' },
      { keys: 'Ctrl + O', desc: 'Toggle verbose output (see tool usage)' },
    ]},
    { category: 'Navigation & Control', items: [
      { keys: 'Ctrl + C', desc: 'Cancel current input or generation' },
      { keys: 'Escape', desc: 'Stop Claude\'s current generation' },
      { keys: 'Ctrl + L', desc: 'Clear terminal screen (keeps history)' },
      { keys: 'Ctrl + D', desc: 'Exit Claude Code session' },
      { keys: '↑ / ↓', desc: 'Navigate command history' },
      { keys: 'Ctrl + R', desc: 'Reverse search through history' },
    ]},
    { category: 'Text Editing', items: [
      { keys: 'Ctrl + K', desc: 'Delete to end of line' },
      { keys: 'Ctrl + U', desc: 'Delete entire line' },
      { keys: 'Ctrl + Y', desc: 'Paste deleted text' },
      { keys: 'Alt + B', desc: 'Move cursor back one word' },
      { keys: 'Alt + F', desc: 'Move cursor forward one word' },
    ]},
    { category: 'Input & Files', items: [
      { keys: '\\ + Enter', desc: 'New line (multiline input)' },
      { keys: '@ + path', desc: 'Reference a file (autocomplete)' },
      { keys: '/ + cmd', desc: 'Slash command' },
      { keys: '! + cmd', desc: 'Run bash command directly' },
    ]},
    { category: 'Model & Thinking', items: [
      { keys: 'Option + P', desc: 'Switch AI model' },
      { keys: 'Option + T', desc: 'Toggle extended thinking' },
    ]},
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Title */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-medium">
          Appendix
        </div>
        <h1 className="text-4xl font-bold tracking-tight">
          Keyboard <span className="text-[var(--accent)]">Shortcuts</span>
        </h1>
        <p className="text-lg text-[var(--muted)]">
          Complete cheat sheet
        </p>
      </div>

      {/* Shortcuts grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {shortcuts.map((section) => (
          <div key={section.category} className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--surface-light)]">
            <h3 className="text-sm font-semibold text-[var(--accent)] mb-3">{section.category}</h3>
            <div className="space-y-2">
              {section.items.map((item) => (
                <div key={item.keys} className="flex items-center justify-between gap-4">
                  <kbd className="px-2 py-1 rounded bg-[var(--surface-light)] text-xs font-mono whitespace-nowrap">
                    {item.keys}
                  </kbd>
                  <span className="text-sm text-[var(--muted)] text-right">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Note */}
      <div className="text-sm text-[var(--muted)] text-center">
        <strong>macOS users:</strong> Option key shortcuts require setting Option as Meta in terminal preferences
      </div>
    </div>
  );
}
