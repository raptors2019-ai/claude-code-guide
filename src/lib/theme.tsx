'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored) {
      setThemeState(stored);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setThemeState(prefersDark ? 'dark' : 'light');
    }
    setMounted(true);
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;

    // Prevent transition flash on initial load
    if (!root.classList.contains('theme-initialized')) {
      root.classList.add('no-transitions');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          root.classList.remove('no-transitions');
          root.classList.add('theme-initialized');
        });
      });
    }

    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const toggleTheme = useCallback(() => {
    setThemeState(prev => prev === 'light' ? 'dark' : 'light');
  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
  }, []);

  // Prevent hydration mismatch by rendering nothing until mounted
  if (!mounted) {
    return (
      <ThemeContext.Provider value={{ theme: 'light', toggleTheme: () => {}, setTheme: () => {} }}>
        {children}
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
