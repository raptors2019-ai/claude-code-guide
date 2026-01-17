'use client';

import { Terminal, Gotcha } from '../ui';
import { Github, Cloud, Database, Search, Globe } from 'lucide-react';

export function Slide12MCP() {
  const integrations = [
    {
      name: 'GitHub',
      icon: Github,
      command: 'claude mcp add --transport http github https://api.githubcopilot.com/mcp/',
      description: 'PR reviews, issues, commits',
      color: 'text-white',
      bg: 'bg-gray-700',
    },
    {
      name: 'Vercel',
      icon: Cloud,
      command: 'claude mcp add --transport http vercel https://mcp.vercel.com/mcp',
      description: 'Deploy and manage projects',
      color: 'text-white',
      bg: 'bg-black',
    },
    {
      name: 'Sentry',
      icon: Search,
      command: 'claude mcp add --transport http sentry https://mcp.sentry.dev/mcp',
      description: 'Error monitoring and debugging',
      color: 'text-white',
      bg: 'bg-purple-600',
    },
    {
      name: 'Database',
      icon: Database,
      command: 'claude mcp add --transport stdio db -- npx -y @bytebase/dbhub --dsn "postgresql://..."',
      description: 'Query databases directly',
      color: 'text-white',
      bg: 'bg-blue-600',
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
          <span className="text-[var(--accent)]">MCP</span> Integrations
        </h1>
        <p className="text-lg text-[var(--muted)]">
          Connect Claude to external tools
        </p>
      </div>

      {/* What is MCP */}
      <div className="bg-[var(--surface)] rounded-xl p-5 border border-[var(--surface-light)]">
        <div className="flex items-center gap-3 mb-2">
          <Globe className="w-5 h-5 text-[var(--accent)]" />
          <h3 className="font-semibold">What is MCP?</h3>
        </div>
        <p className="text-sm text-[var(--muted)]">
          Model Context Protocol (MCP) is an open standard for connecting AI tools to external services.
          Once connected, Claude can interact with GitHub, deploy to Vercel, query databases, and more.
        </p>
      </div>

      {/* Integrations */}
      <div className="space-y-4">
        {integrations.map((item) => (
          <div key={item.name} className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--surface-light)]">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center`}>
                <item.icon className={`w-4 h-4 ${item.color}`} />
              </div>
              <div>
                <h3 className="font-semibold text-sm">{item.name}</h3>
                <p className="text-xs text-[var(--muted)]">{item.description}</p>
              </div>
            </div>
            <Terminal command={item.command} />
          </div>
        ))}
      </div>

      {/* Management */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <h3 className="text-sm font-semibold">List servers</h3>
          <Terminal command="claude mcp list" />
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-semibold">Check status</h3>
          <Terminal command="/mcp" />
        </div>
      </div>

      <Gotcha type="info">
        After adding an MCP server, use <code>/mcp</code> to authenticate if required.
        Most servers will prompt for OAuth login on first use.
      </Gotcha>
    </div>
  );
}
