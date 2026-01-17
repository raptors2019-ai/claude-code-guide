'use client';

import { useState } from 'react';
import { Terminal, Gotcha, CodeBlock } from '../ui';
import { History, Trash2, Download, Eye, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

const primeMarkdown = `# Prime: Load Project Context

## Objective

Build comprehensive understanding of the codebase by analyzing structure, documentation, and key files.

## Process

### 1. Analyze Project Structure

List all tracked files:
\`\`\`bash
git ls-files
\`\`\`

Show directory structure:
\`\`\`bash
tree -L 3 -I 'node_modules|__pycache__|.git|dist|build'
\`\`\`

### 2. Read Core Documentation

- Read .agents/PRD.md
- Read CLAUDE.md or similar global rules file
- Read README files at project root and major directories
- Read any architecture documentation

### 3. Identify Key Files

Based on the structure, identify and read:

- Main entry points (main.py, index.ts, app.py, etc.)
- Core configuration files (pyproject.toml, package.json, tsconfig.json)
- Key model/schema definitions
- Important service or controller files

### 4. Understand Current State

Check recent activity:
\`\`\`bash
git log --oneline -10
\`\`\`

Check current branch and status:
\`\`\`bash
git status
\`\`\`

## Output Report

Provide a concise summary covering:

### Project Overview
- Purpose and type of application
- Primary technologies and frameworks
- Current version/state

### Architecture
- Overall structure and organization
- Key architectural patterns identified
- Important directories and their purposes

### Tech Stack
- Languages and versions
- Frameworks and major libraries
- Build tools and package managers

### Current State
- Active branch
- Recent changes or development focus
- Any immediate observations

**Make this summary easy to scan - use bullet points and clear headers.**`;

export function Slide5PowerUser() {
  const [showPrimeContent, setShowPrimeContent] = useState(false);

  return (
    <div className="space-y-5 animate-fade-in">
      {/* Title */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="text-[var(--accent)]">Power User</span> Features
        </h1>
        <p className="text-lg text-[var(--muted)]">
          Context management and session workflow
        </p>
      </div>

      {/* Context management row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Check Context */}
        <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--surface-light)] space-y-2">
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-[var(--secondary)]" />
            <h3 className="font-semibold">Check Context</h3>
          </div>
          <Terminal command="/context" />
          <p className="text-xs text-[var(--muted)]">
            See how much context is used. When it gets large, responses slow down.
          </p>
        </div>

        {/* Export */}
        <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--surface-light)] space-y-2">
          <div className="flex items-center gap-2">
            <Download className="w-5 h-5 text-[var(--success)]" />
            <h3 className="font-semibold">Export First</h3>
          </div>
          <Terminal command="/export session.md" />
          <p className="text-xs text-[var(--muted)]">
            Save important info before clearing. Great for documentation.
          </p>
        </div>

        {/* Clear */}
        <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--surface-light)] space-y-2">
          <div className="flex items-center gap-2">
            <Trash2 className="w-5 h-5 text-red-500" />
            <h3 className="font-semibold">Clear Context</h3>
          </div>
          <Terminal command="/clear" />
          <p className="text-xs text-[var(--muted)]">
            Fresh start. Do this when context is bloated or you&apos;re switching tasks.
          </p>
        </div>
      </div>

      {/* Resume session */}
      <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--surface-light)]">
        <div className="flex items-center gap-3 mb-2">
          <History className="w-5 h-5 text-[var(--secondary)]" />
          <h3 className="font-semibold">Resume Session</h3>
        </div>
        <Terminal command="claude --resume" />
        <p className="text-sm text-[var(--muted)] mt-2">
          Continue where you left off. Great for long-running tasks or when you need to step away.
        </p>
      </div>

      {/* Tip */}
      <Gotcha type="tip">
        <strong>My workflow:</strong> Start with <code>/prime</code>, work until context gets heavy
        (check with <code>/context</code>), export anything important, then <code>/clear</code> and re-prime.
      </Gotcha>

      {/* Slash commands intro */}
      <div className="bg-[var(--surface)] rounded-xl p-5 border border-[var(--surface-light)]">
        <h3 className="text-sm font-semibold text-[var(--foreground)] mb-2">Slash Commands</h3>
        <div className="flex items-center gap-3 mb-2">
          <kbd className="px-2 py-1 rounded bg-[var(--surface-light)] text-sm font-mono">/ + command</kbd>
          <span className="text-sm text-[var(--muted)]">Run saved prompts</span>
        </div>
        <p className="text-sm text-[var(--muted)] mb-3">
          Create slash commands for prompts you type repeatedly. If you find yourself copy-pasting
          the same instructions, save them as a command instead.
        </p>
        <div className="bg-[var(--surface-light)] rounded-lg p-3 mb-2">
          <p className="text-xs font-mono text-[var(--muted)]">
            .claude/commands/<span className="text-[var(--accent)]">my-command</span>.md
          </p>
        </div>
        <p className="text-xs text-[var(--muted)]">
          Create a <code className="text-[var(--accent)]">.claude/commands/</code> folder, add markdown files for each command.
        </p>
      </div>

      {/* Prime Section - Expandable at bottom */}
      <div className="space-y-3">
        <button
          onClick={() => setShowPrimeContent(!showPrimeContent)}
          className="w-full flex items-center justify-between p-4 rounded-xl bg-[var(--surface)] border border-[var(--accent)]/30 hover:bg-[var(--surface-hover)] transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[var(--accent)]" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold">/prime - Project Context Loader <span className="text-xs font-normal text-[var(--muted)]">(copy me to your project!)</span></h3>
              <p className="text-sm text-[var(--muted)]">
                Start every session with full codebase understanding. Click to view the skill.
              </p>
            </div>
          </div>
          {showPrimeContent ? (
            <ChevronUp className="w-5 h-5 text-[var(--muted)]" />
          ) : (
            <ChevronDown className="w-5 h-5 text-[var(--muted)]" />
          )}
        </button>

        {showPrimeContent && (
          <div className="animate-fade-in">
            <CodeBlock
              code={primeMarkdown}
              language="markdown"
              filename=".claude/skills/prime/SKILL.md"
            />
          </div>
        )}
      </div>
    </div>
  );
}
