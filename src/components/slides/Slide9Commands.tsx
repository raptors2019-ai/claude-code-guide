'use client';

import { Terminal } from '../ui';
import { FileText, FolderOpen, Asterisk } from 'lucide-react';

export function Slide9Commands() {
  const essentialCommands = [
    { category: 'Most Used', items: [
      { cmd: '/clear', desc: 'Fresh start - clear conversation history' },
      { cmd: '/init', desc: 'Create CLAUDE.md project memory' },
      { cmd: '/memory', desc: 'Edit your CLAUDE.md file' },
      { cmd: '/context', desc: 'Check how much context is used' },
    ]},
    { category: 'Session', items: [
      { cmd: '/export [file]', desc: 'Save conversation before clearing' },
      { cmd: '/compact', desc: 'Compress conversation to save space' },
      { cmd: '/cost', desc: 'See token usage stats' },
    ]},
    { category: 'Tools', items: [
      { cmd: '/mcp', desc: 'Manage MCP connections' },
      { cmd: '/doctor', desc: 'Check installation health' },
      { cmd: '/help', desc: 'Show all available commands' },
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
          Commands & <span className="text-[var(--accent)]">References</span>
        </h1>
        <p className="text-lg text-[var(--muted)]">
          Quick reference for slash commands and file references
        </p>
      </div>

      {/* @ File References - Featured */}
      <div className="bg-gradient-to-r from-[var(--accent)]/10 to-[var(--secondary)]/10 rounded-xl p-5 border border-[var(--accent)]/30">
        <h3 className="font-semibold mb-3">@ File References</h3>
        <p className="text-sm text-[var(--muted)] mb-4">
          Use <code className="text-[var(--accent)]">@</code> to point Claude at specific files or folders. Tab completes paths.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[var(--surface)]/50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-4 h-4 text-[var(--accent)]" />
              <span className="text-sm font-medium">Single File</span>
            </div>
            <code className="text-xs text-[var(--muted)] block">@src/components/Button.tsx</code>
            <p className="text-xs text-[var(--muted)] mt-1">Reference a specific file</p>
          </div>
          <div className="bg-[var(--surface)]/50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <FolderOpen className="w-4 h-4 text-[var(--secondary)]" />
              <span className="text-sm font-medium">Folder</span>
            </div>
            <code className="text-xs text-[var(--muted)] block">@src/lib/</code>
            <p className="text-xs text-[var(--muted)] mt-1">Include all files in a directory</p>
          </div>
          <div className="bg-[var(--surface)]/50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <Asterisk className="w-4 h-4 text-[var(--success)]" />
              <span className="text-sm font-medium">Glob Pattern</span>
            </div>
            <code className="text-xs text-[var(--muted)] block">@**/*.test.ts</code>
            <p className="text-xs text-[var(--muted)] mt-1">Match files by pattern</p>
          </div>
        </div>
      </div>

      {/* Slash Commands - Simplified */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {essentialCommands.map((section) => (
          <div key={section.category} className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--surface-light)]">
            <h3 className="text-sm font-semibold text-[var(--accent)] mb-3">{section.category}</h3>
            <div className="space-y-2">
              {section.items.map((item) => (
                <div key={item.cmd} className="flex flex-col">
                  <code className="text-sm text-[var(--foreground)] font-mono">{item.cmd}</code>
                  <span className="text-xs text-[var(--muted)]">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Quick shortcuts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--surface-light)]">
          <h3 className="text-sm font-semibold mb-2">Quick Bash</h3>
          <p className="text-sm text-[var(--muted)] mb-2">
            Prefix with <code>!</code> to run directly:
          </p>
          <Terminal command="! npm test" showCopy={false} />
        </div>
        <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--surface-light)]">
          <h3 className="text-sm font-semibold mb-2">Custom Commands</h3>
          <p className="text-sm text-[var(--muted)] mb-2">
            Your own slash commands live in:
          </p>
          <code className="text-xs text-[var(--accent)] block bg-[var(--surface-light)] p-2 rounded">.claude/commands/your-command.md</code>
        </div>
      </div>
    </div>
  );
}
