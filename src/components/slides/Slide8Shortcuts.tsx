'use client';

import { useState } from 'react';

type System = 'mac' | 'windows';

interface ShortcutItem {
  mac: string;
  windows: string;
  desc: string;
}

interface ShortcutSection {
  category: string;
  items: ShortcutItem[];
}

export function Slide8Shortcuts() {
  const [system, setSystem] = useState<System>('mac');

  const shortcuts: ShortcutSection[] = [
    { category: 'Mode Switching', items: [
      { mac: '⇧ Shift + Tab', windows: 'Shift + Tab', desc: 'Cycle through Normal → Auto-Accept → Plan modes' },
      { mac: '⌃ Ctrl + O', windows: 'Ctrl + O', desc: 'Toggle verbose output (see tool usage)' },
    ]},
    { category: 'Navigation & Control', items: [
      { mac: '⌃ Ctrl + C', windows: 'Ctrl + C', desc: 'Cancel current input or generation' },
      { mac: 'Escape', windows: 'Escape', desc: 'Stop Claude\'s current generation' },
      { mac: '⌃ Ctrl + L', windows: 'Ctrl + L', desc: 'Clear terminal screen (keeps history)' },
      { mac: '⌃ Ctrl + D', windows: 'Ctrl + D', desc: 'Exit Claude Code session' },
      { mac: '↑ / ↓', windows: '↑ / ↓', desc: 'Navigate command history' },
      { mac: '⌃ Ctrl + R', windows: 'Ctrl + R', desc: 'Reverse search through history' },
    ]},
    { category: 'Text Editing', items: [
      { mac: '⌃ Ctrl + K', windows: 'Ctrl + K', desc: 'Delete to end of line' },
      { mac: '⌃ Ctrl + U', windows: 'Ctrl + U', desc: 'Delete entire line' },
      { mac: '⌃ Ctrl + Y', windows: 'Ctrl + Y', desc: 'Paste deleted text' },
      { mac: '⌥ Option + B', windows: 'Alt + B', desc: 'Move cursor back one word' },
      { mac: '⌥ Option + F', windows: 'Alt + F', desc: 'Move cursor forward one word' },
    ]},
    { category: 'Input & Files', items: [
      { mac: '\\ + Enter', windows: '\\ + Enter', desc: 'New line (multiline input)' },
      { mac: '@ + path', windows: '@ + path', desc: 'Reference a file (autocomplete)' },
      { mac: '/ + cmd', windows: '/ + cmd', desc: 'Slash command' },
      { mac: '! + cmd', windows: '! + cmd', desc: 'Run bash command directly' },
    ]},
    { category: 'Model & Thinking', items: [
      { mac: '⌥ Option + P', windows: 'Alt + P', desc: 'Switch AI model' },
      { mac: '⌥ Option + T', windows: 'Alt + T', desc: 'Toggle extended thinking' },
    ]},
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Title */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-medium">
            Appendix
          </div>

          {/* System Toggle */}
          <div className="flex items-center gap-1 p-1 rounded-lg bg-[var(--surface)] border border-[var(--surface-light)]">
            <button
              onClick={() => setSystem('mac')}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                system === 'mac'
                  ? 'bg-[var(--accent)] text-white'
                  : 'text-[var(--muted)] hover:text-[var(--foreground)]'
              }`}
            >
              macOS
            </button>
            <button
              onClick={() => setSystem('windows')}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                system === 'windows'
                  ? 'bg-[var(--accent)] text-white'
                  : 'text-[var(--muted)] hover:text-[var(--foreground)]'
              }`}
            >
              Windows/Linux
            </button>
          </div>
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
                <div key={item.desc} className="flex items-center justify-between gap-4">
                  <kbd className="px-2 py-1 rounded bg-[var(--surface-light)] text-xs font-mono whitespace-nowrap">
                    {system === 'mac' ? item.mac : item.windows}
                  </kbd>
                  <span className="text-sm text-[var(--muted)] text-right">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Note */}
      {system === 'mac' && (
        <div className="text-sm text-[var(--muted)] text-center">
          <strong>Note:</strong> Option key shortcuts require setting Option as Meta in terminal preferences
        </div>
      )}
    </div>
  );
}
