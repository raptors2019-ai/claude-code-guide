'use client';

import { MessageCircle, BookOpen, Twitter, Users, Youtube, ExternalLink } from 'lucide-react';

export function CoreSlide5Takeaways() {
  const resources = [
    {
      icon: BookOpen,
      title: 'Official Docs',
      description: 'Best practices & reference',
      url: 'https://www.anthropic.com/engineering/claude-code-best-practices',
      color: 'var(--accent)',
    },
    {
      icon: Twitter,
      title: 'Twitter/X',
      description: '@bcherny, @trq212, @alexalbert__',
      url: 'https://twitter.com/bcherny',
      color: 'var(--secondary)',
    },
    {
      icon: Youtube,
      title: 'YouTube',
      description: 'Theo, Primagen, Fireship, Rasmic',
      url: 'https://youtube.com',
      color: '#ff0000',
    },
    {
      icon: Users,
      title: 'r/ClaudeAI',
      description: 'Community tips & workflows',
      url: 'https://reddit.com/r/ClaudeAI',
      color: 'var(--success)',
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Title */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-sm font-medium">
          Core Workflow
        </div>
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="text-[var(--accent)]">Resources</span>
        </h1>
        <p className="text-lg text-[var(--muted)]">
          Where to keep learning
        </p>
      </div>

      {/* Resources grid */}
      <div className="grid grid-cols-2 gap-4">
        {resources.map((resource) => (
          <a
            key={resource.title}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[var(--surface)] rounded-xl p-4 border border-[var(--surface-light)] hover:border-[var(--accent)]/50 transition-colors"
          >
            <div className="flex items-start gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `color-mix(in srgb, ${resource.color} 20%, transparent)` }}
              >
                <resource.icon className="w-5 h-5" style={{ color: resource.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-lg">{resource.title}</h3>
                  <ExternalLink className="w-4 h-4 text-[var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-base text-[var(--muted)]">{resource.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Key takeaway */}
      <div className="bg-[var(--accent)]/10 border border-[var(--accent)]/30 rounded-xl p-5">
        <p className="text-lg text-center">
          <strong>The tools are evolving fast.</strong> Follow the people building them.
        </p>
      </div>

      {/* Questions */}
      <div className="flex items-center justify-center pt-2">
        <div className="flex items-center gap-4 px-8 py-5 rounded-2xl bg-[var(--surface)] border border-[var(--surface-light)]">
          <MessageCircle className="w-12 h-12 text-[var(--accent)]" />
          <div>
            <h2 className="text-3xl font-bold">Questions?</h2>
            <p className="text-lg text-[var(--muted)]">Let&apos;s discuss!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
