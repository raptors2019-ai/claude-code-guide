'use client';

import { useState } from 'react';
import { CodeBlock, Terminal, Gotcha } from '../ui';
import { Puzzle, Plug, Globe, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

const skills = [
  {
    name: 'code-review',
    title: 'Code Review',
    description: 'Reviews code for bugs, security issues, and best practices',
    path: '.claude/skills/code-review/SKILL.md',
    content: `---
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
- Nitpicks (optional improvements)`,
  },
  {
    name: 'commit-message',
    title: 'Commit Messages',
    description: 'Generates consistent, conventional commit messages',
    path: '.claude/skills/commit-message/SKILL.md',
    content: `---
name: commit-message
description: Generates commit messages following conventional commits format.
  Use when asked to commit changes or write commit messages.
---

Follow conventional commits format:

<type>(<scope>): <subject>

<body>

Types: feat, fix, docs, style, refactor, test, chore
- feat: new feature
- fix: bug fix
- docs: documentation only
- refactor: code change that neither fixes nor adds
- test: adding tests
- chore: maintenance tasks

Keep subject under 50 chars, body wrapped at 72.`,
  },
  {
    name: 'api-design',
    title: 'API Design',
    description: 'Guides RESTful API design with best practices',
    path: '.claude/skills/api-design/SKILL.md',
    content: `---
name: api-design
description: Guides RESTful API design following best practices.
  Use when creating or modifying API endpoints.
---

API Design Principles:

1. Use nouns for resources: /users, /posts
2. Use HTTP methods correctly:
   - GET: read, POST: create, PUT: replace, PATCH: update, DELETE: remove
3. Return appropriate status codes
4. Version your API: /v1/users
5. Use pagination for lists
6. Include proper error responses with messages

Always consider authentication, rate limiting, and validation.`,
  },
];

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

const communitySkills = [
  { name: 'frontend-design', description: 'Build polished UIs', repo: 'anthropics/claude-code-skills' },
  { name: 'code-simplifier', description: 'Refactor complex code', repo: 'anthropics/claude-code-skills' },
  { name: 'web-design-guidelines', description: 'Review UI for accessibility', repo: 'anthropics/claude-code-skills' },
];

export function Slide6Skills() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [showPrimeContent, setShowPrimeContent] = useState(false);
  const [selectedCommunitySkill, setSelectedCommunitySkill] = useState(communitySkills[0]);

  const currentSkill = skills[currentSkillIndex];

  const nextSkill = () => {
    setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
  };

  const prevSkill = () => {
    setCurrentSkillIndex((prev) => (prev - 1 + skills.length) % skills.length);
  };

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

      {/* Prime Section - Featured at top */}
      <div className="space-y-3">
        <button
          onClick={() => setShowPrimeContent(!showPrimeContent)}
          className="w-full flex items-center justify-between p-4 rounded-xl bg-[var(--surface)] border border-[var(--accent)]/30 hover:bg-[var(--surface-light)] transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[var(--accent)]" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold">/prime - Project Context Loader</h3>
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

      {/* Set it and forget it callout */}
      <div className="bg-[var(--accent)]/10 border border-[var(--accent)]/20 rounded-xl p-4">
        <p className="text-sm">
          <span className="font-semibold text-[var(--accent)]">Stop typing the same prompts over and over.</span>{' '}
          Skills let you define instructions once and have them trigger automatically based on keywords and context.
          Ask for a &quot;code review&quot; and your review skill activates. Mention &quot;commit&quot; and your
          commit message skill kicks in. No manual invocation - Claude just knows when to use them.
        </p>
      </div>

      {/* Skill Carousel */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Example Skills</h3>
          <p className="text-sm text-[var(--muted)]">
            Copy these to get started instantly
          </p>
        </div>

        {/* Carousel navigation */}
        <div className="flex items-center gap-3 mb-2">
          <button
            onClick={prevSkill}
            className="p-2 rounded-lg bg-[var(--surface)] border border-[var(--surface-light)] hover:bg-[var(--surface-light)] transition-colors"
            aria-label="Previous skill"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex-1 flex items-center justify-center gap-2">
            {skills.map((skill, index) => (
              <button
                key={skill.name}
                onClick={() => setCurrentSkillIndex(index)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  index === currentSkillIndex
                    ? 'bg-[var(--accent)] text-white'
                    : 'bg-[var(--surface)] text-[var(--muted)] hover:bg-[var(--surface-light)]'
                }`}
              >
                {skill.title}
              </button>
            ))}
          </div>

          <button
            onClick={nextSkill}
            className="p-2 rounded-lg bg-[var(--surface)] border border-[var(--surface-light)] hover:bg-[var(--surface-light)] transition-colors"
            aria-label="Next skill"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <Terminal command={`mkdir -p .claude/skills/${currentSkill.name}`} />
        <CodeBlock
          code={currentSkill.content}
          language="markdown"
          filename={currentSkill.path}
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

      {/* Community Skills */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Community Skills</h3>
        <p className="text-sm text-[var(--muted)]">
          Click a skill to see its install command:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {communitySkills.map((skill) => (
            <button
              key={skill.name}
              onClick={() => setSelectedCommunitySkill(skill)}
              className={`text-left rounded-lg p-3 border transition-colors ${
                selectedCommunitySkill.name === skill.name
                  ? 'bg-[var(--accent)]/10 border-[var(--accent)]/30'
                  : 'bg-[var(--surface)] border-[var(--surface-light)] hover:bg-[var(--surface-light)]'
              }`}
            >
              <code className="text-sm text-[var(--accent)]">/{skill.name}</code>
              <p className="text-xs text-[var(--muted)] mt-1">{skill.description}</p>
            </button>
          ))}
        </div>
        <Terminal command={`npx add-skill ${selectedCommunitySkill.repo}/${selectedCommunitySkill.name}`} />
      </div>

      <Gotcha type="tip">
        The <code>description</code> field is the magic - it tells Claude which keywords and contexts
        should trigger the skill. Write it once, and every future session benefits automatically.
        Your skills compound over time as you build your personal toolkit.
      </Gotcha>
    </div>
  );
}
