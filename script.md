# Speaker Script — Core Workflow (5 slides, ~5 min)

## Slide 1 — Full Workflow

Hey everybody, I'm Josh. Pleasure to meet everyone — really excited to learn from you all tonight.

I wanted to walk through my workflow because I know we're short on time. Quick caveat: this is something I'm constantly iterating on. A lot of what I'll share comes from people online — Boris Cherny, Thariq, the Claude Code team — so you'll see call-outs throughout.

So my process is basically: **spec, plan, execute.**

Even when writing the spec, I'll talk to Claude or another LLM like Grok to get a rough idea down. But the key move is starting in **plan mode**. I pretty much default to plan mode now because it's so much easier to make sure Claude understands what you want *before* it starts writing code.

And the real unlock here is step 3 — the **interview prompt**. You ask Claude to interview you using the AskUserQuestion tool. It'll ask you a bunch of clarifying questions about implementation, UI, tradeoffs — and that gives it a ton of context. That's been the single biggest improvement in my process: more context up front, better output.

Once the plan looks good, you approve it, flip to auto-accept, and Claude basically one-shots it.

---

## Slide 2 — CLAUDE.md + Auto-Learning

Next up — the CLAUDE.md file. This is huge.

Claude reads this file at the start of every session. I keep a lot in mine: styling preferences, code conventions, workflow rules, Git stuff.

One thing I picked up from Boris Cherny — he said constantly updating your CLAUDE.md is one of the biggest upgrades you can make. I wasn't really doing that before, but this week I set up a whole workflow around it and I've already seen the impact.

I actually made it a **hook** — so hooks are commands that run automatically. I have a post-tool-use hook where if Claude identifies it made an error, it'll revise the CLAUDE.md to account for that. So mistakes become rules automatically.

That's the learning loop you see here: you correct Claude, it notices, it updates CLAUDE.md, and it won't repeat that mistake. Over time your CLAUDE.md becomes this custom instruction set tuned to how *you* work.

Hooks in general are really solid — you can use them for linting, testing, all kinds of things to make the output better.

---

## Slide 3 — Verification with MCPs

So MCPs — Model Context Protocol. These let Claude talk to other tools seamlessly.

I'm not the most technical person, especially on the backend. So when I'm spinning up databases with Convex or Supabase, I lean on MCPs heavily. I give Claude access so it can verify things are actually working — query the database, check if records exist, things I'd otherwise have to do manually.

**Playwright** is a big one for me — Claude can open a browser, take screenshots, and get more visual context for debugging. And **GitHub** is great for reviewing PR diffs and checking CI.

The one thing to watch out for is **context bloat** — you can see this battery visualization here. MCPs eat context two ways: the tool *definitions* are loaded just by having them enabled, and then each *result* — screenshots, database queries — adds more. That's why it's important to toggle off what you're not using. But the verification feedback loop is worth it. Claude catches its own mistakes instead of you finding them later.

---

## Slide 4 — Skills & Plugins

Another big game-changer: skills and plugins.

**Skills** are custom workflows you create. One I use is `/prime` — it loads up recent commits, project structure, basically gets Claude up to speed on what I've been working on. I'm always looking to improve it, but it's been really helpful.

The rule of thumb from Boris: if you do something more than once a day, make it a skill. Testing is a great example. And Claude can actually help you *generate* skills too.

**Plugins** are pre-built extensions from the community. I use `/frontend-design` from Nonprofit's Marketplace — makes UIs look way more polished. And the React Best Practices plugin from Vercel — it just makes code more readable and efficient.

These are super easy to install and you see big benefits right away. The more you customize Claude to your workflow, the more you get out of it.

---

## Slide 5 — Resources + Tools

Last thing — like I said, I'm someone who's not necessarily the most technical by background. But I love experimenting with new tools.

Started with ChatGPT, picked up JavaScript on my own, went down the rabbit hole of learning Tailwind because I found it worked better with LLMs — and that mindset of just adding a little bit each time has helped me build better tools and get better with Claude Code. Actually just landed an AI product role, so really excited about that.

These are the resources I learn from — official docs, people on X like Boris and Thariq, YouTube channels, Reddit. And **Wispr Flow** is a tool I use constantly — voice-to-text that just makes everything faster.

So — **who do you follow in this space?** Would love to hear your favorites. And feel free to connect with me on LinkedIn.

Thanks everybody.
