'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyButtonProps {
  text: string;
  className?: string;
  variant?: 'default' | 'dark';
}

export function CopyButton({ text, className = '', variant = 'default' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const baseStyles = 'p-1.5 rounded-md transition-all duration-200';
  const variantStyles = variant === 'dark'
    ? `hover:bg-white/10 ${copied ? 'text-[#27ca40]' : 'text-white/50 hover:text-white/80'}`
    : `hover:bg-[var(--surface-hover)] ${copied ? 'text-[var(--success)]' : 'text-[var(--muted)] hover:text-[var(--foreground)]'}`;

  return (
    <button
      onClick={handleCopy}
      className={`${baseStyles} ${variantStyles} ${className}`}
      title={copied ? 'Copied!' : 'Copy to clipboard'}
    >
      {copied ? (
        <Check className="w-4 h-4" />
      ) : (
        <Copy className="w-4 h-4" />
      )}
    </button>
  );
}
