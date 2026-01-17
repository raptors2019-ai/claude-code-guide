'use client';

import { useTheme } from '@/lib/theme';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-xl flex items-center justify-center
                 bg-[var(--surface)] border border-[var(--surface-border)]
                 hover:border-[var(--accent)] hover:bg-[var(--surface-hover)]
                 transition-all duration-200 group"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Sun icon */}
      <Sun
        className={`w-[18px] h-[18px] absolute transition-all duration-300 ease-out
                    text-[var(--warning)]
                    ${theme === 'light'
                      ? 'opacity-100 rotate-0 scale-100'
                      : 'opacity-0 -rotate-90 scale-50'
                    }`}
      />

      {/* Moon icon */}
      <Moon
        className={`w-[18px] h-[18px] absolute transition-all duration-300 ease-out
                    text-[var(--secondary)]
                    ${theme === 'dark'
                      ? 'opacity-100 rotate-0 scale-100'
                      : 'opacity-0 rotate-90 scale-50'
                    }`}
      />

      {/* Hover glow effect */}
      <span
        className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    ${theme === 'light'
                      ? 'bg-[var(--warning)]/5'
                      : 'bg-[var(--secondary)]/10'
                    }`}
      />
    </button>
  );
}
