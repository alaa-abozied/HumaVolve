# ⚛️ React Clean Structure — Vite + TypeScript

A clean, scalable, and production-ready React project structure built with **Vite**, **React 18**, **TypeScript**, **React Router**, **Axios**, and **Zod**. Made for practice, assignments, and as a starter template for real projects.

![React](https://img.shields.io/badge/React-18-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite)

## ✨ Features

- ⚡ **Vite** — lightning-fast dev server & builds
- 🔷 **TypeScript** — strict mode with `@/*` path alias
- 🧭 **React Router** — `Home` / `About` pages wired in `App.tsx`
- 🌐 **Axios** — preconfigured `apiClient` + typed `users.api.ts`
- ✅ **Zod** — example `user.schema.ts` for form validation
- 🌍 **i18n ready** — `config.ts` + `en.json` foundation
- 🧩 **Component taxonomy** — `ui` / `layout` / `providers` / `skeleton` / `common`
- 🪝 **Custom hooks** — `useDebounce` example

## 🚀 Getting Started

**Requirements:** Node.js 18+

```bash
npm install
npm run dev
```

| Script            | Description                   |
| ----------------- | ----------------------------- |
| `npm run dev`     | Start dev server              |
| `npm run build`   | Type-check + production build |
| `npm run preview` | Preview production build      |

Copy `.env.example` to `.env` and set your API URL:

```bash
VITE_API_URL=http://localhost:3000/api
```

## 📁 Folder Structure

```
src/
├── components/
│   ├── ui/            # Reusable primitives → Button.tsx, Input.tsx
│   ├── layout/        # Page shell → Navbar.tsx, Footer.tsx, MainLayout.tsx
│   ├── providers/     # Global providers → AppProvider.tsx
│   ├── skeleton/      # Loading placeholders → LoadingSkeleton.tsx
│   └── common/        # Shared blocks → EmptyState.tsx
├── hooks/             # Custom hooks → useDebounce.ts
├── api/               # HTTP layer → axios.ts (apiClient), users.api.ts
├── types/             # Shared TS types → user.types.ts
├── store/             # Global state → index.ts, auth.store.ts
├── pages/             # Route pages → Home.tsx, About.tsx
├── constants/         # App constants → routes.ts
├── i18n/              # Translations → config.ts, en.json
├── assets/            # Static files → images/, icons/, fonts/
├── schemas/           # Zod validation → user.schema.ts
├── utils/             # Helpers → formatDate.ts
├── App.tsx            # Routes composition
├── main.tsx           # Entry point (Router + Providers)
└── index.css          # Global styles
```

## 🧠 Conventions

- **Naming:** `PascalCase` for components/pages, `camelCase` for hooks/utils, `kebab-case` for assets.
- **Imports:** use the `@/` alias (e.g. `import { ROUTES } from '@/constants/routes'`).
- **API layer:** only `api/*.api.ts` files talk to `apiClient` — pages & components never call Axios directly.
- **Validation:** put all Zod schemas in `schemas/` and infer types from them.
- **One concern per folder:** UI primitives stay dumb; page composition lives in `pages/` + `layout/`.

## 🛣️ Routes

| Path     | Page  | File              |
| -------- | ----- | ----------------- |
| `/`      | Home  | `pages/Home.tsx`  |
| `/about` | About | `pages/About.tsx` |

Route paths are centralized in `constants/routes.ts`.

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feat/my-feature`)
3. Commit & push, then open a Pull Request

---

Made with ❤️ by [alaa-abozied](https://github.com/alaa-abozied)

