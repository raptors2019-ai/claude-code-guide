# Claude Code Slide Deck - Specification

## Overview

A slide deck teaching Claude Code best practices to a non-technical solo entrepreneur. The goal is to help someone who "doesn't know where to start" build a reliable workflow for using Claude Code effectively.

**Target User Profile:**
- Solo entrepreneur running a production web app (MyIslam.org)
- Decent terminal/CLI knowledge (comfortable with git, npm, basic bash)
- Primary pain point: Overwhelmed by capabilities, needs structured workflow
- Uses VS Code as primary editor

---

## Technical Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Slide Framework**: Custom React components (not a library - for flexibility)
- **Deployment**: Vercel
- **Visual Theme**: Claude/Anthropic-inspired (terracotta accent, clean modern aesthetic)

---

## Slide Structure

### Main Slides (5-7 slides)

1. **Welcome / What is Claude Code**
   - Brief intro: CLI tool for AI-assisted development
   - What makes it different from ChatGPT/web interfaces
   - The mental model: Claude as a pair programmer with terminal access

2. **The North Star Workflow: Spec → Plan → Execute**
   - The core workflow pattern for 80% of tasks
   - Visual diagram showing the three phases
   - When to use this workflow vs. quick one-off tasks

3. **Writing Your spec.md**
   - Template structure (not filled example)
   - Key sections: Problem, Requirements, Constraints, Success Criteria
   - The interview prompt for Claude to ask clarifying questions:
     ```
     read this @SPEC.md and interview me in detail using the
     AskUserQuestionTool about literally anything: technical
     implementation, UI & UX, concerns, tradeoffs, etc. but
     make sure the questions are not obvious

     be very in-depth and continue interviewing me continually
     until it's complete, then write the spec to the file
     ```
   - **Gotcha**: Don't be vague - specific specs get specific results

4. **Plan Mode & Essential Controls**
   - Shift+Tab to toggle between modes (Normal → Auto-Accept → Plan)
   - Plan mode for exploring before committing to changes
   - `--permission-mode plan` flag
   - `/init` to create CLAUDE.md project memory
   - **Gotcha**: Don't skip plan mode for complex changes

5. **Power User Features**
   - `--dangerously-skip-permissions` - when to use (trusted projects, CI/CD)
   - `-resume` to continue previous sessions
   - `/clear` and `/export` for session management
   - `/memory` for editing CLAUDE.md on the fly
   - **Warning**: Use skip-permissions responsibly, understand what it allows

6. **Skills, Plugins & MCP Integrations**
   - What Skills are and one practical example to create
   - Existing plugins: code-simplifier, frontend-design
   - MCP servers: GitHub, Vercel, research tools
   - How these extend Claude Code's capabilities

7. **Full Walkthrough: Building a New Feature**
   - Generic example: "Add a user settings page"
   - Step-by-step from spec.md to deployed feature
   - Git workflow integrated throughout (branches, commits, PRs)
   - Shows the entire Spec → Plan → Execute flow in action

### Appendix Slides

- **Keyboard Shortcuts Cheat Sheet**
  - Essential shortcuts (Shift+Tab, Ctrl+C, Escape, Ctrl+L)
  - Text editing shortcuts
  - Navigation shortcuts
  - Vim mode basics (optional)
  - All shortcuts viewable in slides (not downloadable)

- **Slash Commands Reference**
  - /init, /clear, /export, /memory, /cost, /config
  - /plan, /review, /compact
  - Custom commands overview

- **Curated Prompt Patterns**
  - The spec.md interview prompt (featured)
  - "Explore this codebase and explain the architecture"
  - "Review this for security vulnerabilities"
  - "Suggest 3 approaches to solve [X], explain tradeoffs"
  - Git-related prompts

- **CLAUDE.md Template**
  - Customizable template for project memory
  - Sections: Project Overview, Architecture, Conventions, Gotchas
  - How to keep it updated with /memory

- **MCP Server Examples**
  - GitHub integration setup
  - Vercel deployment integration
  - Research/web search tools
  - Database query tools (for advanced users)

---

## UI/UX Requirements

### Navigation
- **Keyboard**: Arrow keys (left/right) to navigate slides
- **Click**: Next/Prev buttons visible on screen
- **Progress**: Visual progress bar showing completion percentage

### Code Display
- **Commands**: Terminal-style (dark background, monospace, $ prefix)
- **Code blocks**: Syntax highlighted (VS Code dark theme style)
- **Copy button**: Icon next to all code/commands for one-click copy
- Feedback animation on copy (checkmark or "Copied!")

### Layout
- Clean, minimal design
- Large readable text (this is a teaching tool)
- One concept per slide - don't overcrowd
- Consistent margins and spacing

### Visual Style (Claude-themed)
- Primary background: Dark (#1a1a2e or similar)
- Accent color: Claude terracotta/coral (#da7756)
- Secondary accent: Soft blue for links/highlights
- Text: High contrast white/off-white
- Fonts: Clean sans-serif for text, monospace for code

### Responsive
- Optimized for laptop/desktop viewing
- Functional on tablet (secondary)
- Mobile: Read-only acceptable, not primary target

---

## Content Guidelines

### Tone
- Conversational but professional
- Assume intelligence, explain concepts
- No jargon without explanation
- Encouraging but not condescending

### Gotchas (Integrated Warnings)
- Include inline "Watch out" or "Don't do this" notes where relevant
- Not a separate section - woven into the content
- Format: Yellow/orange warning icon with brief text

### Examples
- Use generic, relatable examples (not MyIslam-specific)
- Real terminal output where helpful
- Show both the prompt AND expected result

### Git Integration
- Show git commands naturally in workflow
- Branch creation, commits, PRs as part of the process
- Don't dedicate a separate section - integrate throughout

---

## Features NOT Included

- Installation guide (assume Claude Code is installed)
- Cost/pricing information
- Feedback/comment system
- Auto-advance slides
- Gamification/progress tracking
- Downloadable PDF export
- Mobile-first design

---

## Slide Navigation State

- Track current slide index in React state
- URL-based navigation (e.g., /slide/3) for shareable links
- Persist last viewed slide in localStorage (optional)

---

## Component Structure

```
src/
├── app/
│   ├── page.tsx              # Redirect to /slide/1
│   ├── slide/
│   │   └── [id]/
│   │       └── page.tsx      # Individual slide renderer
│   └── layout.tsx            # Global layout with nav
├── components/
│   ├── slides/
│   │   ├── Slide1Welcome.tsx
│   │   ├── Slide2Workflow.tsx
│   │   ├── Slide3SpecMd.tsx
│   │   └── ...
│   ├── ui/
│   │   ├── CodeBlock.tsx     # Syntax highlighted code
│   │   ├── Terminal.tsx      # Terminal-style command display
│   │   ├── CopyButton.tsx    # Copy to clipboard
│   │   ├── ProgressBar.tsx   # Slide progress indicator
│   │   ├── Navigation.tsx    # Next/Prev buttons
│   │   └── Gotcha.tsx        # Warning/tip callout
│   └── SlideContainer.tsx    # Wrapper for all slides
├── lib/
│   ├── slides.ts             # Slide metadata and ordering
│   └── hooks/
│       └── useKeyboardNav.ts # Arrow key navigation
└── styles/
    └── globals.css           # Tailwind + custom styles
```

---

## Implementation Priority

### Phase 1: Core Structure
1. Set up Next.js project with TypeScript and Tailwind
2. Create slide container and navigation components
3. Implement keyboard navigation hook
4. Build progress bar component

### Phase 2: UI Components
1. CodeBlock with syntax highlighting (use Prism or Shiki)
2. Terminal component for command display
3. CopyButton with feedback animation
4. Gotcha/warning callout component

### Phase 3: Content Slides
1. Create all 7 main slides with content
2. Style each slide consistently
3. Add all code examples with copy functionality

### Phase 4: Appendix
1. Keyboard shortcuts cheat sheet
2. Slash commands reference
3. Prompt patterns collection
4. CLAUDE.md template
5. MCP examples

### Phase 5: Polish & Deploy
1. Responsive adjustments
2. Accessibility review
3. Performance optimization
4. Deploy to Vercel

---

## Success Criteria

- [ ] Friend can navigate the entire deck without confusion
- [ ] All commands are copyable with one click
- [ ] The Spec → Plan → Execute workflow is crystal clear
- [ ] Keyboard and click navigation both work smoothly
- [ ] Progress bar accurately reflects position in deck
- [ ] Deployed and accessible via Vercel URL
- [ ] Loads fast, no performance issues
