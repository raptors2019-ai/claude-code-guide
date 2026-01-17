'use client';

import { Terminal, Gotcha, CodeBlock } from '../ui';
import { GitBranch, GitCommit, GitPullRequest, Eye } from 'lucide-react';

export function SlideGit() {
  const branchPrompt = `Create a new branch for this feature, implement it,
and commit with a clear message when done.`;

  const reviewPrompt = `Show me a summary of all changes you've made.
Don't commit yet - I want to review first.`;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Title */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-medium">
          Appendix
        </div>
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="text-[var(--accent)]">Git</span> Workflow
        </h1>
        <p className="text-lg text-[var(--muted)]">
          Working with branches, commits, and PRs
        </p>
      </div>

      {/* Core pattern */}
      <div className="bg-[var(--surface)] rounded-xl p-5 border border-[var(--accent)]/30">
        <h3 className="font-semibold mb-3">The Basic Pattern</h3>
        <p className="text-sm text-[var(--muted)] mb-4">
          Claude understands git. You can ask it to handle branching and commits as part of your workflow.
        </p>
        <CodeBlock code={branchPrompt} language="text" filename="prompt" />
      </div>

      {/* Workflow steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--surface-light)]">
          <div className="flex items-center gap-2 mb-3">
            <GitBranch className="w-5 h-5 text-[var(--accent)]" />
            <h3 className="font-semibold text-sm">Branch Per Feature</h3>
          </div>
          <Terminal command="git checkout -b feature/user-settings" showCopy={false} />
          <p className="text-xs text-[var(--muted)] mt-2">
            Claude will create branches when asked
          </p>
        </div>

        <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--surface-light)]">
          <div className="flex items-center gap-2 mb-3">
            <GitCommit className="w-5 h-5 text-[var(--secondary)]" />
            <h3 className="font-semibold text-sm">Commit Often</h3>
          </div>
          <Terminal command="commit these changes" showCopy={false} />
          <p className="text-xs text-[var(--muted)] mt-2">
            Ask Claude to commit after each working change
          </p>
        </div>

        <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--surface-light)]">
          <div className="flex items-center gap-2 mb-3">
            <GitPullRequest className="w-5 h-5 text-[var(--success)]" />
            <h3 className="font-semibold text-sm">Create PRs</h3>
          </div>
          <Terminal command="create a PR for this branch" showCopy={false} />
          <p className="text-xs text-[var(--muted)] mt-2">
            Works with GitHub MCP integration
          </p>
        </div>
      </div>

      {/* Review before commit */}
      <div className="bg-[var(--surface)] rounded-xl p-5 border border-[var(--surface-light)]">
        <div className="flex items-center gap-2 mb-3">
          <Eye className="w-5 h-5 text-[var(--warning)]" />
          <h3 className="font-semibold">Review Before Committing</h3>
        </div>
        <p className="text-sm text-[var(--muted)] mb-3">
          Don&apos;t let Claude commit blindly. Ask it to show you changes first:
        </p>
        <CodeBlock code={reviewPrompt} language="text" filename="prompt" />
      </div>

      {/* Quick commands */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--surface-light)]">
          <h3 className="text-sm font-semibold mb-2">Useful Prompts</h3>
          <div className="space-y-2 text-sm">
            <div><code className="text-[var(--accent)]">git status</code> - see what changed</div>
            <div><code className="text-[var(--accent)]">git diff</code> - review changes in detail</div>
            <div><code className="text-[var(--accent)]">git stash</code> - temporarily save changes</div>
          </div>
        </div>
        <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--surface-light)]">
          <h3 className="text-sm font-semibold mb-2">Undo Mistakes</h3>
          <div className="space-y-2 text-sm">
            <div><code className="text-[var(--accent)]">git checkout .</code> - discard all changes</div>
            <div><code className="text-[var(--accent)]">git checkout file.ts</code> - discard one file</div>
            <div><code className="text-[var(--accent)]">git reset HEAD~1</code> - undo last commit</div>
          </div>
        </div>
      </div>

      <Gotcha type="tip">
        <strong>Safety net:</strong> Git is your undo button. If Claude makes a mess,
        <code> git checkout .</code> reverts everything. Commit often so you have restore points.
      </Gotcha>
    </div>
  );
}
