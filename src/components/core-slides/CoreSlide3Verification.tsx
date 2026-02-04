'use client';

import { useState, useEffect } from 'react';
import { Gotcha } from '../ui';
import { CheckCircle2, Database, FileText, Camera, Server, ExternalLink, BatteryMedium } from 'lucide-react';

function ToggleTip() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setOn((v) => !v), 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--surface-light)]">
      {/* iOS-style toggle */}
      <button
        onClick={() => setOn((v) => !v)}
        className="relative w-12 h-7 rounded-full flex-shrink-0 transition-colors duration-300"
        style={{ backgroundColor: on ? '#34c759' : 'rgba(120,120,128,0.32)' }}
      >
        <span
          className="absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300"
          style={{ transform: on ? 'translateX(20px)' : 'translateX(0)' }}
        />
      </button>
      <p className="text-base">
        <strong>Only enable MCPs when you need them.</strong>
        <span className="text-[var(--muted)]"> Definitions load even if you never call them.</span>
      </p>
    </div>
  );
}

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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-sm font-medium">
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
      <div className="bg-[var(--accent)]/10 border border-[var(--accent)]/30 rounded-xl p-5 flex items-start gap-4">
        <CheckCircle2 className="w-8 h-8 text-[var(--accent)] flex-shrink-0 mt-0.5" />
        <div>
          <blockquote className="text-lg font-medium">
            &ldquo;Give Claude a way to verify its work. This is the single highest-leverage thing you can do.&rdquo;
          </blockquote>
          <a
            href="https://www.anthropic.com/engineering/claude-code-best-practices"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-base text-[var(--accent)] hover:underline mt-2"
          >
            Official Claude Code Best Practices
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Personal note */}
      <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--surface-light)]">
        <p className="text-base text-[var(--muted)]">
          I don&apos;t have deep database experience, so I rely on MCPs to verify things are working correctly.
          Claude can query my database, check logs, take screenshots — things I&apos;d otherwise have to do manually.
        </p>
      </div>

      {/* MCP examples */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {mcpExamples.map((mcp) => (
          <div key={mcp.name} className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--surface-light)]">
            <div className="flex items-center gap-2 mb-2">
              <mcp.icon className="w-7 h-7 text-[var(--accent)]" />
              <h3 className="font-semibold text-lg">{mcp.name}</h3>
            </div>
            <p className="text-base text-[var(--muted)] mb-2">{mcp.description}</p>
            <p className="text-sm font-mono text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-1.5 rounded">
              {mcp.example}
            </p>
          </div>
        ))}
      </div>

      {/* Context Budget - Battery */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-base flex items-center gap-2">
            <BatteryMedium className="w-5 h-5 text-[var(--muted)]" />
            Context Budget
          </h3>
          <span className="text-sm text-[var(--muted)]">200k tokens per session</span>
        </div>

        {/* Battery bar */}
        <div className="relative w-full h-9 rounded-lg overflow-hidden border-2 border-[var(--surface-light)] bg-[var(--surface)]">
          <div className="flex h-full">
            <div style={{ width: '3.5%' }} className="bg-[var(--muted)]/30 border-r border-[var(--background)]" />
            <div style={{ width: '3%' }} className="bg-[var(--secondary)]/30 border-r border-[var(--background)]" />
            <div style={{ width: '7.5%' }} className="bg-amber-500 border-r border-[var(--background)]" />
            <div style={{ width: '15%' }} className="bg-[var(--accent)]/30 border-r border-[var(--background)]" />
            <div style={{ width: '25%' }} className="bg-[var(--accent)]/15 border-r border-[var(--background)]" />
            <div style={{ width: '15%' }} className="bg-violet-500 border-r border-[var(--background)]" />
            <div style={{ width: '31%' }} className="bg-[var(--success)]/15" />
          </div>
        </div>

        {/* MCP callout - side by side */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-500/15 border border-amber-500/40">
            <span className="w-4 h-4 rounded-sm bg-amber-500 flex-shrink-0" />
            <span className="font-bold text-amber-400">MCP Definitions <span className="font-normal opacity-70">~15k</span></span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-violet-500/15 border border-violet-500/40">
            <span className="w-4 h-4 rounded-sm bg-violet-500 flex-shrink-0" />
            <span className="font-bold text-violet-400">MCP Results <span className="font-normal opacity-70">~30k</span></span>
          </div>
        </div>

        {/* Other legend items */}
        <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-[var(--muted)]">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-[var(--muted)]/30 flex-shrink-0" />
            System + CLAUDE.md ~7k
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-[var(--secondary)]/30 flex-shrink-0" />
            Skills ~6k
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-[var(--accent)]/30 flex-shrink-0" />
            Messages ~30k
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-[var(--accent)]/15 flex-shrink-0" />
            Code & Files ~50k
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-[var(--success)]/15 flex-shrink-0" />
            <span className="text-[var(--success)]">Available ~62k</span>
          </div>
        </div>

        {/* Toggle tip */}
        <ToggleTip />
      </div>
    </div>
  );
}
