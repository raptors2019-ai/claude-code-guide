'use client';

import { CopyButton } from './CopyButton';

interface TerminalProps {
  command: string;
  output?: string;
  prompt?: string;
  showCopy?: boolean;
}

export function Terminal({ command, output, prompt = '$', showCopy = true }: TerminalProps) {
  return (
    <div className="rounded-xl overflow-hidden shadow-[var(--shadow-md)]">
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[var(--terminal-bg)] border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27ca40]" />
        </div>
        <span className="text-xs text-[var(--terminal-text)]/60 ml-2 font-mono">terminal</span>
        {showCopy && (
          <div className="ml-auto">
            <CopyButton text={command} variant="dark" />
          </div>
        )}
      </div>

      {/* Terminal content */}
      <div className="p-4 font-mono text-sm bg-[var(--terminal-bg)]">
        <div className="flex items-start gap-2">
          <span className="text-[#27ca40] select-none font-semibold">{prompt}</span>
          <span className="text-[var(--terminal-text)]">{command}</span>
        </div>
        {output && (
          <div className="mt-3 text-[var(--terminal-text)]/70 whitespace-pre-wrap leading-relaxed">{output}</div>
        )}
      </div>
    </div>
  );
}
