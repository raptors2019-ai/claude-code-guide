'use client';

import { CodeBlock, Terminal, Gotcha } from '../ui';
import { Puzzle, Plug, Globe } from 'lucide-react';

export function Slide6Skills() {
  const skillExample = `---
name: code-review
description: Reviews code for bugs, security issues, and best practices.
  Use when asked to review code or check for issues.
---

When reviewing code, always:

1. Check for security vulnerabilities (SQL injection, XSS, etc.)
2. Look for potential bugs and edge cases
3. Verify error handling is adequate
4. Suggest performance improvements if obvious
5. Keep feedback constructive and actionable

Format your review with sections for:
- Critical Issues (must fix)
- Suggestions (should consider)
- Nitpicks (optional improvements)`;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Title */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="text-[var(--accent)]">Skills</span> & Integrations
        </h1>
        <p className="text-lg text-[var(--muted)]">
          Extend Claude Code with plugins and MCP servers
        </p>
      </div>

      {/* Three concepts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[var(--surface)] rounded-xl p-5 border border-[var(--surface-light)]">
          <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mb-3">
            <Puzzle className="w-5 h-5 text-[var(--accent)]" />
          </div>
          <h3 className="font-semibold mb-2">Skills</h3>
          <p className="text-sm text-[var(--muted)]">
            Custom instructions Claude follows automatically when context matches
          </p>
        </div>
        <div className="bg-[var(--surface)] rounded-xl p-5 border border-[var(--surface-light)]">
          <div className="w-10 h-10 rounded-lg bg-[var(--secondary)]/10 flex items-center justify-center mb-3">
            <Plug className="w-5 h-5 text-[var(--secondary)]" />
          </div>
          <h3 className="font-semibold mb-2">Plugins</h3>
          <p className="text-sm text-[var(--muted)]">
            Pre-built extensions like <code>code-simplifier</code> and <code>frontend-design</code>
          </p>
        </div>
        <div className="bg-[var(--surface)] rounded-xl p-5 border border-[var(--surface-light)]">
          <div className="w-10 h-10 rounded-lg bg-[var(--success)]/10 flex items-center justify-center mb-3">
            <Globe className="w-5 h-5 text-[var(--success)]" />
          </div>
          <h3 className="font-semibold mb-2">MCP Servers</h3>
          <p className="text-sm text-[var(--muted)]">
            Connect to external tools: GitHub, Vercel, databases, and more
          </p>
        </div>
      </div>

      {/* Create a Skill */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Create a Skill</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Terminal command="mkdir -p .claude/skills/code-review" />
            <p className="text-xs text-[var(--muted)]">Create the skill directory</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-[var(--muted)]">
              Then create <code>.claude/skills/code-review/SKILL.md</code>:
            </p>
          </div>
        </div>
        <CodeBlock
          code={skillExample}
          language="markdown"
          filename=".claude/skills/code-review/SKILL.md"
        />
      </div>

      {/* MCP Examples */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Popular MCP Integrations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Terminal command="claude mcp add --transport http github https://api.githubcopilot.com/mcp/" />
          <Terminal command="claude mcp add --transport http sentry https://mcp.sentry.dev/mcp" />
        </div>
      </div>

      <Gotcha type="tip">
        Skills are automatically triggered when the context matches. The <code>description</code> field
        tells Claude when to use it. No need to explicitly invoke skills - just ask for a code review
        and your skill kicks in!
      </Gotcha>
    </div>
  );
}
