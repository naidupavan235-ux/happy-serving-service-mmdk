# AGENTS.md

This document provides an overview of the project for AI agents working on this codebase.

## Project Overview

A single-page marketing landing site for **Happy Serving Services**, an event staffing company in Andhra Pradesh. Built with TanStack Start and deployed on Netlify.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Language | TypeScript 5 (strict) |
| Deployment | Netlify |

## Directory Structure

```
├── public/
│   └── favicon.ico
├── src/
│   ├── routes/
│   │   ├── __root.tsx   # Root layout, HTML shell, page title/meta
│   │   └── index.tsx    # Landing page — all page sections live here
│   ├── router.tsx       # TanStack Router setup
│   └── styles.css       # Global styles + Tailwind import
├── netlify.toml         # Build config: vite build, dist/client publish dir
├── vite.config.ts       # Vite + TanStack Start + Tailwind + Netlify plugins
└── tsconfig.json        # TypeScript config, @/* alias → src/*
```

## Key Concepts

### File-Based Routing
Routes are files under `src/routes/`. `__root.tsx` wraps all pages; `index.tsx` is the `/` route.

### Styling
Tailwind CSS 4 with arbitrary values (e.g. `bg-[#ff6b00]`) for brand colors. No separate component library.

## Conventions
- Components: PascalCase
- Routes/utilities: camelCase or kebab-case files
- Brand orange: `#ff6b00` / `#ff9800`
- Contact number: `9581437218` (India: `+91 9581437218`)
