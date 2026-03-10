# ⚠️ DEPRECATED - Moved to Monorepo

> **This repository has been archived and merged into the unified monorepo.**
>
> **New location**: [hashcat228/cookie-erp](https://github.com/hashcat228/cookie-erp) → `apps/web/`

---

## 🔗 Migration to Monorepo

This frontend is now part of a unified monorepo structure at:

### **[github.com/hashcat228/cookie-erp](https://github.com/hashcat228/cookie-erp)**

### New Structure

```
cookie-erp/
├── apps/
│   ├── api/          # Django backend
│   └── web/          # React frontend (this repo)
├── packages/
│   └── api-types/    # Shared TypeScript types
└── docker-compose.yml
```

### Quick Start (New Monorepo)

```bash
# Clone the monorepo
git clone https://github.com/hashcat228/cookie-erp.git
cd cookie-erp

# Start all services
docker-compose up -d

# Access
# Frontend: http://localhost:5173
# API: http://localhost:8000/api/
```

### Why Monorepo?

- ✅ **Unified workflow** - Single repository for frontend and backend
- ✅ **Shared types** - TypeScript types auto-generated from Django models
- ✅ **Better DX** - Simplified development and deployment
- ✅ **Type safety** - End-to-end type checking between API and UI

### Documentation

- [Main README](https://github.com/hashcat228/cookie-erp#readme)
- [Monorepo Migration Plan](https://github.com/hashcat228/cookie-erp/blob/master/DJANGO_MONOREPO_PLAN.md)
- [Changelog](https://github.com/hashcat228/cookie-erp/blob/master/CHANGELOG.md)

---

<details>
<summary>📦 Old README (archived)</summary>

# React + TypeScript + Vite + shadcn/ui

This is a template for a new Vite project with React, TypeScript, and shadcn/ui.

## Adding components

To add components to your app, run the following command:

```bash
npx shadcn@latest add button
```

This will place the ui components in the `src/components` directory.

## Using components

To use the components in your app, import them as follows:

```tsx
import { Button } from "@/components/ui/button"
```

</details>

---

**Last updated**: March 10, 2026 | **Status**: Archived
