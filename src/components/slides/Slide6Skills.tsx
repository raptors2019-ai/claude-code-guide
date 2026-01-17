'use client';

import { useState } from 'react';
import { CodeBlock, Terminal, Gotcha } from '../ui';
import { Puzzle, Plug, Globe, ChevronLeft, ChevronRight } from 'lucide-react';

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

const communitySkills = [
  { name: 'frontend-design', description: 'Build polished UIs', repo: 'anthropics/claude-code-skills' },
  { name: 'code-simplifier', description: 'Refactor complex code', repo: 'anthropics/claude-code-skills' },
  { name: 'web-design-guidelines', description: 'Review UI for accessibility', repo: 'anthropics/claude-code-skills' },
];

export function Slide6Skills() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
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

      {/* Three concepts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[var(--surface)] rounded-xl p-5 border border-[var(--surface-border)]">
          <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mb-3">
            <Puzzle className="w-5 h-5 text-[var(--accent)]" />
          </div>
          <h3 className="font-semibold mb-2">Skills</h3>
          <p className="text-sm text-[var(--muted)]">
            Custom instructions Claude follows automatically when context matches
          </p>
        </div>
        <div className="bg-[var(--surface)] rounded-xl p-5 border border-[var(--surface-border)]">
          <div className="w-10 h-10 rounded-lg bg-[var(--secondary)]/10 flex items-center justify-center mb-3">
            <Plug className="w-5 h-5 text-[var(--secondary)]" />
          </div>
          <h3 className="font-semibold mb-2">Plugins</h3>
          <p className="text-sm text-[var(--muted)]">
            Pre-built extensions like <code>code-simplifier</code> and <code>frontend-design</code>
          </p>
        </div>
        <div className="bg-[var(--surface)] rounded-xl p-5 border border-[var(--surface-border)]">
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
          Skills are reusable instructions that trigger automatically when you mention certain keywords.
          Say &quot;code review&quot; and your review skill runs—it&apos;ll even activate if you just mention
          related keywords in conversation.
        </p>
      </div>

      {/* Community Skills - FIRST */}
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
                  : 'bg-[var(--surface)] border-[var(--surface-border)] hover:bg-[var(--surface-hover)]'
              }`}
            >
              <code className="text-sm text-[var(--accent)]">/{skill.name}</code>
              <p className="text-xs text-[var(--muted)] mt-1">{skill.description}</p>
            </button>
          ))}
        </div>
        <Terminal command={`npx add-skill ${selectedCommunitySkill.repo}/${selectedCommunitySkill.name}`} />
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
            className="p-2 rounded-lg bg-[var(--surface)] border border-[var(--surface-border)] hover:bg-[var(--surface-hover)] transition-colors"
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
                    : 'bg-[var(--surface)] text-[var(--muted)] hover:bg-[var(--surface-hover)]'
                }`}
              >
                {skill.title}
              </button>
            ))}
          </div>

          <button
            onClick={nextSkill}
            className="p-2 rounded-lg bg-[var(--surface)] border border-[var(--surface-border)] hover:bg-[var(--surface-hover)] transition-colors"
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

      <Gotcha type="tip">
        The <code>description</code> field is the magic - it tells Claude which keywords and contexts
        should trigger the skill. Write it once, and every future session benefits automatically.
        Your skills compound over time as you build your personal toolkit.
      </Gotcha>

      {/* MCP Examples - AT BOTTOM */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Popular MCP Integrations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Terminal command="claude mcp add --transport http github https://api.githubcopilot.com/mcp/" />
          <Terminal command="claude mcp add --transport http sentry https://mcp.sentry.dev/mcp" />
        </div>
        <a
          href="/slide/12"
          className="inline-flex items-center gap-2 text-sm text-[var(--accent)] hover:underline mt-2"
        >
          <Globe className="w-4 h-4" />
          See more MCP integrations in the appendix →
        </a>
      </div>
    </div>
  );
}
