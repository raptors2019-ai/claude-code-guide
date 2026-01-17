'use client';

import { Terminal } from '../ui';

export function Slide9Commands() {
  const commands = [
    { category: 'Session Management', items: [
      { cmd: '/clear', desc: 'Clear conversation history' },
      { cmd: '/export [file]', desc: 'Export conversation to file or clipboard' },
      { cmd: '/resume [session]', desc: 'Resume a previous session' },
      { cmd: '/compact', desc: 'Compress conversation to save context' },
    ]},
    { category: 'Project Setup', items: [
      { cmd: '/init', desc: 'Create CLAUDE.md project memory' },
      { cmd: '/memory', desc: 'Edit CLAUDE.md file' },
      { cmd: '/add-dir', desc: 'Add working directories' },
    ]},
    { category: 'Configuration', items: [
      { cmd: '/config', desc: 'Open settings interface' },
      { cmd: '/model', desc: 'Change AI model' },
      { cmd: '/permissions', desc: 'View/update permissions' },
      { cmd: '/theme', desc: 'Change color theme' },
    ]},
    { category: 'Tools & Plugins', items: [
      { cmd: '/mcp', desc: 'Manage MCP server connections' },
      { cmd: '/plugin', desc: 'Manage plugins' },
      { cmd: '/agents', desc: 'Manage custom subagents' },
    ]},
    { category: 'Information', items: [
      { cmd: '/help', desc: 'Show help' },
      { cmd: '/cost', desc: 'Show token usage stats' },
      { cmd: '/usage', desc: 'Show rate limits' },
      { cmd: '/doctor', desc: 'Check installation health' },
    ]},
    { category: 'Workflow', items: [
      { cmd: '/plan', desc: 'Enter plan mode' },
      { cmd: '/review', desc: 'Request code review' },
      { cmd: '/todos', desc: 'List current TODO items' },
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
          Slash <span className="text-[var(--accent)]">Commands</span>
        </h1>
        <p className="text-lg text-[var(--muted)]">
          Quick reference
        </p>
      </div>

      {/* Commands grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {commands.map((section) => (
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

      {/* Bash mode tip */}
      <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--surface-light)]">
        <h3 className="text-sm font-semibold mb-2">Quick Bash Mode</h3>
        <p className="text-sm text-[var(--muted)] mb-3">
          Prefix any command with <code>!</code> to run it directly without Claude interpreting it:
        </p>
        <Terminal command="! npm test" showCopy={false} />
      </div>
    </div>
  );
}
