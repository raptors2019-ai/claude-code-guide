'use client';

import { AlertTriangle, Info, Lightbulb } from 'lucide-react';

interface GotchaProps {
  type?: 'warning' | 'info' | 'tip';
  children: React.ReactNode;
}

export function Gotcha({ type = 'warning', children }: GotchaProps) {
  const styles = {
    warning: {
      bg: 'bg-[var(--warning-soft)]',
      border: 'border-[var(--warning)]/30',
      icon: AlertTriangle,
      iconColor: 'text-[var(--warning)]',
      label: 'Watch out',
    },
    info: {
      bg: 'bg-[var(--secondary-soft)]',
      border: 'border-[var(--secondary)]/30',
      icon: Info,
      iconColor: 'text-[var(--secondary)]',
      label: 'Note',
    },
    tip: {
      bg: 'bg-[var(--success-soft)]',
      border: 'border-[var(--success)]/30',
      icon: Lightbulb,
      iconColor: 'text-[var(--success)]',
      label: 'Pro tip',
    },
  };

  const style = styles[type];
  const Icon = style.icon;

  return (
    <div className={`${style.bg} ${style.border} border rounded-xl p-4 my-4 shadow-[var(--shadow-sm)]`}>
      <div className="flex items-start gap-3">
        <div className={`w-8 h-8 rounded-lg ${style.bg} flex items-center justify-center flex-shrink-0`}>
          <Icon className={`w-4 h-4 ${style.iconColor}`} />
        </div>
        <div className="pt-0.5">
          <span className={`text-sm font-semibold ${style.iconColor}`}>{style.label}</span>
          <div className="text-sm text-[var(--foreground-secondary)] mt-1 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}
