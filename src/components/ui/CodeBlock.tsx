'use client';

import { useEffect, useState } from 'react';
import { codeToHtml } from 'shiki';
import { CopyButton } from './CopyButton';
import { useTheme } from '@/lib/theme';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showCopy?: boolean;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  code,
  language = 'typescript',
  filename,
  showCopy = true,
}: CodeBlockProps) {
  const { theme } = useTheme();
  const [html, setHtml] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function highlight() {
      setIsLoading(true);
      try {
        const highlighted = await codeToHtml(code.trim(), {
          lang: language,
          theme: theme === 'dark' ? 'github-dark' : 'github-light',
        });
        setHtml(highlighted);
      } catch {
        // Fallback for unsupported languages
        const escaped = code.trim()
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
        setHtml(`<pre><code>${escaped}</code></pre>`);
      } finally {
        setIsLoading(false);
      }
    }
    highlight();
  }, [code, language, theme]);

  return (
    <div className="rounded-xl overflow-hidden border border-[var(--surface-border)] shadow-[var(--shadow-sm)]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[var(--code-bg)] border-b border-[var(--surface-border)]">
        <div className="flex items-center gap-3">
          {/* Decorative dots */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--warning)]/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--success)]/40" />
          </div>
          {filename && (
            <span className="text-xs text-[var(--muted)] font-mono">{filename}</span>
          )}
          {!filename && (
            <span className="text-xs text-[var(--muted)] font-mono">{language}</span>
          )}
        </div>
        {showCopy && <CopyButton text={code.trim()} />}
      </div>

      {/* Code content */}
      <div className="p-4 overflow-x-auto bg-[var(--code-bg)]">
        {isLoading ? (
          <pre className="font-mono text-sm text-[var(--muted)]">
            <code>{code.trim()}</code>
          </pre>
        ) : (
          <div
            className="font-mono text-sm leading-relaxed [&_pre]:!bg-transparent [&_code]:!bg-transparent"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
      </div>
    </div>
  );
}
