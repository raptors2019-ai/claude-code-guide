# CLAUDE.md - Project Intelligence

## Project Overview

This is an interactive slide deck teaching Claude Code best practices, built for non-technical solo entrepreneurs. The deck covers the Spec → Plan → Execute workflow, essential commands, and integrations.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4
- Shiki (syntax highlighting)

## Architecture

### Routing
- `/` redirects to `/slide/1`
- `/slide/[id]` renders individual slides
- Slides are statically generated via `generateStaticParams()`

### Key Files
- `src/lib/slides.ts` - Slide metadata, ordering, and navigation helpers
- `src/components/SlideContainer.tsx` - Wrapper with nav and progress bar
- `src/components/slides/` - Individual slide content components
- `src/components/ui/` - Reusable UI components (CodeBlock, Terminal, CopyButton, etc.)
- `src/lib/theme.tsx` - Light/dark theme provider

### Adding a New Slide
1. Create component in `src/components/slides/SlideXName.tsx`
2. Export from `src/components/slides/index.ts`
3. Add metadata to `slides` array in `src/lib/slides.ts`
4. Import and add to `slideComponents` map in `src/app/slide/[id]/page.tsx`

## Code Conventions

- Use named exports for components
- Slide components are client components when they need interactivity
- UI components use `'use client'` directive when needed
- CSS uses Tailwind with CSS variables for theming (`var(--background)`, `var(--foreground)`)
- Accent color: Claude terracotta (`#da7756`)

## Common Commands

```bash
npm run dev      # Start dev server (port 3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

## Content Guidelines

- One concept per slide
- Use `<Terminal>` for CLI commands, `<CodeBlock>` for code snippets
- Use `<Gotcha>` component for warnings/tips
- Keep text concise and scannable
- Generic examples (not project-specific)
