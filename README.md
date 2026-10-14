# React Clean Structure (Vite + TypeScript)

Clean and scalable React project structure for practice / assignments.

## Setup

```bash
npm install
npm run dev
```

Requires Node.js 18+.

## Folder structure

```
src/
├── components/
│   ├── ui/            # Button.tsx, Input.tsx
│   ├── layout/        # Navbar.tsx, Footer.tsx, MainLayout.tsx
│   ├── providers/     # AppProvider.tsx
│   ├── skeleton/      # LoadingSkeleton.tsx
│   └── common/        # EmptyState.tsx
├── hooks/             # useDebounce.ts
├── api/               # axios.ts, users.api.ts
├── types/             # user.types.ts
├── store/             # index.ts, auth.store.ts
├── pages/             # Home.tsx, About.tsx
├── constants/         # routes.ts
├── i18n/              # config.ts, en.json
├── assets/            # images/, icons/, fonts/
├── schemas/           # user.schema.ts (zod)
├── utils/             # formatDate.ts
├── App.tsx
├── main.tsx
└── index.css
```
