'use client';

import { Gotcha } from '../ui';
import { CheckCircle2, Database, FileText, Camera, Server } from 'lucide-react';

export function CoreSlide3Verification() {
  const mcpExamples = [
    {
      icon: Database,
      name: 'Database (Convex)',
      description: 'Query data to verify migrations, check records exist',
      example: '"Check if the user was created in the database"',
    },
    {
      icon: FileText,
      name: 'Vercel Logs',
      description: 'Read deployment logs, catch errors early',
      example: '"Check the Vercel logs for any errors"',
    },
    {
      icon: Camera,
      name: 'Playwright',
      description: 'Take screenshots, compare to designs',
      example: '"Take a screenshot and verify it matches the mockup"',
    },
    {
      icon: Server,
      name: 'GitHub',
      description: 'Review PR diffs, check CI status',
      example: '"Review the PR diff for any issues"',
    },
  ];

  return (
    <div className="space-y-5 animate-fade-in">
      {/* Title */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-medium">
          Core Workflow
        </div>
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="text-[var(--accent)]">Verification</span> with MCPs
        </h1>
        <p className="text-lg text-[var(--muted)]">
          Let Claude check its own work
        </p>
      </div>

      {/* Key insight */}
      <div className="bg-[var(--accent)]/10 border border-[var(--accent)]/30 rounded-xl p-4 flex items-start gap-3">
        <CheckCircle2 className="w-6 h-6 text-[var(--accent)] flex-shrink-0 mt-0.5" />
        <div>
          <blockquote className="text-sm font-medium">
            &ldquo;Give Claude a way to verify its work. This is the single highest-leverage thing you can do.&rdquo;
          </blockquote>
          <p className="text-xs text-[var(--muted)] mt-1">— Official Claude Code Best Practices</p>
        </div>
      </div>

      {/* Personal note */}
      <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--surface-light)]">
        <p className="text-sm text-[var(--muted)]">
          I don&apos;t have deep database experience, so I rely on MCPs to verify things are working correctly.
          Claude can query my database, check logs, take screenshots — things I&apos;d otherwise have to do manually.
        </p>
      </div>

      {/* MCP examples */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {mcpExamples.map((mcp) => (
          <div key={mcp.name} className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--surface-light)]">
            <div className="flex items-center gap-2 mb-2">
              <mcp.icon className="w-5 h-5 text-[var(--accent)]" />
              <h3 className="font-semibold text-sm">{mcp.name}</h3>
            </div>
            <p className="text-xs text-[var(--muted)] mb-2">{mcp.description}</p>
            <p className="text-xs font-mono text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-1 rounded">
              {mcp.example}
            </p>
          </div>
        ))}
      </div>

      {/* Tip */}
      <Gotcha type="tip">
        <strong>Yes, MCPs use more context</strong> — but the verification feedback loop is worth it.
        Claude catches its own mistakes instead of you finding them later.
      </Gotcha>
    </div>
  );
}
