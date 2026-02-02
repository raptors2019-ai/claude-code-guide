'use client';

import { MessageCircle } from 'lucide-react';

export function CoreSlide5Takeaways() {
  const myPath = [
    'JavaScript',
    'Tailwind & TS',
    'AI Tools',
    'Product Owner',
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Title */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-medium">
          Core Workflow
        </div>
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="text-[var(--accent)]">Constantly</span> Learning
        </h1>
        <p className="text-lg text-[var(--muted)]">
          Learning from other people online
        </p>
      </div>

      {/* Visual resources grid - like device screenshots */}
      <div className="grid grid-cols-2 gap-4">
        {/* Thariq Twitter */}
        <a
          href="https://twitter.com/trq212"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black rounded-2xl p-4 border-4 border-[var(--surface-light)] hover:border-[var(--accent)] transition-colors overflow-hidden"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-2xl">
              👨‍💻
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-white font-bold">Thariq</span>
                <span className="text-blue-400">✓</span>
              </div>
              <span className="text-gray-500 text-sm">@trq212</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-2">
            Claude Code <span className="text-blue-400">@anthropic</span>
          </p>
        </a>

        {/* Reddit */}
        <a
          href="https://reddit.com/r/ClaudeAI"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1a1a1b] rounded-2xl p-4 border-4 border-[var(--surface-light)] hover:border-[var(--accent)] transition-colors overflow-hidden"
        >
          <div className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg p-3 mb-2">
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-lg">r/ClaudeAI</span>
              <span className="text-white text-xl">📊</span>
            </div>
          </div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-1 flex-1 bg-gray-700 rounded" />
            ))}
          </div>
        </a>

        {/* Boris Twitter */}
        <a
          href="https://twitter.com/bcherny"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black rounded-2xl p-4 border-4 border-[var(--surface-light)] hover:border-[var(--accent)] transition-colors overflow-hidden"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-2xl">
              👨‍💻
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-white font-bold">Boris Cherny</span>
                <span className="text-blue-400">✓</span>
              </div>
              <span className="text-gray-500 text-sm">@bcherny</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-2">
            Claude Code <span className="text-blue-400">@anthropic</span>
          </p>
        </a>

        {/* YouTube */}
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-2xl p-4 border-4 border-[var(--surface-light)] hover:border-[var(--accent)] transition-colors overflow-hidden flex items-center justify-center"
        >
          <div className="w-20 h-14 bg-red-600 rounded-xl flex items-center justify-center">
            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"
              style={{ borderLeftWidth: '16px' }}
            />
          </div>
        </a>
      </div>

      {/* My path - subtle */}
      <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--surface-light)]">
        <p className="text-xs text-[var(--muted)] mb-2">My path (2 years):</p>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          {myPath.map((step, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="px-2 py-1 rounded bg-[var(--accent)]/10 text-[var(--accent)]">{step}</span>
              {i < myPath.length - 1 && <span className="text-[var(--muted)]">→</span>}
            </span>
          ))}
        </div>
      </div>

      {/* Main message */}
      <div className="bg-[var(--accent)]/10 border border-[var(--accent)]/30 rounded-xl p-4 text-center">
        <p className="text-sm font-medium">
          Excited to learn from everybody here too.
        </p>
      </div>

      {/* Q&A */}
      <div className="text-center">
        <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/30">
          <MessageCircle className="w-8 h-8 text-[var(--accent)]" />
          <div className="text-left">
            <h2 className="text-2xl font-bold">Questions?</h2>
            <p className="text-sm text-[var(--muted)]">Let&apos;s chat!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
