# Cookie ERP UI

Production-ready UI library for construction ERP platform. Built with React 19, Vite, Tailwind CSS v4, shadcn/ui, and IBM Plex Sans typography.

## ✨ Features

- 🎨 **50+ Production-Ready Components** - Built on shadcn/ui with radix-vega preset
- 🔤 **IBM Plex Sans Typography** - Optimized for Cyrillic with 4-level scale (lg: 22px, md: 16px, sm: 14px, xs: 12px)
- 🌓 **Dark/Light Theme Support** - Smooth transitions with system preference detection
- 🎯 **Tailwind CSS v4** - Semantic color tokens and modern CSS variables
- 📊 **Financial Data Support** - Tabular numbers for perfect alignment in tables
- ♿ **Accessible** - ARIA-compliant components
- 🚀 **Fast Development** - Vite with HMR
- 📱 **Responsive** - Mobile-first design approach
- 🔧 **TypeScript** - Full type safety

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/hashcat228/cookie-erp-ui.git
cd cookie-erp-ui

# Install dependencies
npm install

# Start dev server
npm run dev
```

Visit http://localhost:5173 to see the app.

## 🎨 Typography System

The project uses a comprehensive typography system based on IBM Plex Sans:

```tsx
import { Typography } from "@/components/ui/typography"

// Headings
<Typography variant="heading-lg" as="h1">Page Title</Typography>
<Typography variant="heading-md" as="h2">Section Title</Typography>

// Body text
<Typography variant="body-md">Regular text</Typography>
<Typography variant="body-sm" className="text-muted-foreground">
  Secondary text
</Typography>

// Labels
<Typography variant="label-md" as="label">Form Label</Typography>

// Financial data with tabular numbers
<Typography variant="body-md" className="font-variant-numeric-tabular">
  1 500 000 ₽
</Typography>
```

### Typography Scale

| Variant | Size | Line Height | Use Case |
|---------|------|-------------|----------|
| `display-2xl` | 48px | 56px | Hero sections |
| `display-xl` | 36px | 44px | Large headings |
| `display-lg` | 30px | 38px | Page headers |
| `heading-xl` | 24px | 32px | Main headings |
| `heading-lg` | 22px | 32px | Page titles |
| `heading-md` | 16px | 24px | Section titles |
| `heading-sm` | 14px | 20px | Subsections |
| `heading-xs` | 12px | 16px | Small headings |
| `body-lg` | 16px | 24px | Large body text |
| `body-md` | 14px | 20px | Default body text, table cells |
| `body-sm` | 12px | 16px | Captions, metadata |
| `body-xs` | 11px | 16px | Very small text |
| `label-lg` | 14px | 20px | Form labels |
| `label-md` | 12px | 16px | Small labels |
| `label-sm` | 11px | 16px | Tiny labels |

## 🌓 Theme Support

```tsx
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "@/components/theme-provider"

// Add theme toggle button
<ThemeToggle />

// Or use the hook
function MyComponent() {
  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => setTheme("dark")}>
      Current: {theme}
    </button>
  )
}
```

**Keyboard shortcut:** Press `d` to toggle between light and dark themes.

## 🧩 Components

### Adding Components

```bash
# Add a single component
npx shadcn@latest add button

# Add multiple components
npx shadcn@latest add button card dialog

# Add all components
npx shadcn@latest add --all
```

### Using Components

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Example Card</CardTitle>
      </CardHeader>
      <CardContent>
        <Input placeholder="Enter text..." />
        <Button>Submit</Button>
      </CardContent>
    </Card>
  )
}
```

## 📚 Documentation

- [Typography Implementation](./TYPOGRAPHY_IMPLEMENTATION.md) - Complete typography guide
- [Logo Component](./docs/LOGO_COMPONENT.md) - Logo usage and best practices
- [shadcn/ui Docs](https://ui.shadcn.com/docs) - Component documentation

## 🎯 Project Structure

```
cookie-erp-ui/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   │   ├── typography.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── ...
│   │   ├── theme-provider.tsx
│   │   ├── theme-toggle.tsx
│   │   ├── logo.tsx
│   │   └── login-form.tsx
│   ├── pages/
│   │   └── typography-showcase.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── index.css           # Global styles & typography scale
│   ├── App.tsx
│   └── main.tsx
├── docs/
│   └── LOGO_COMPONENT.md
├── components.json          # shadcn/ui config
├── TYPOGRAPHY_IMPLEMENTATION.md
└── README.md
```

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **shadcn/ui** - Component library (radix-vega preset)
- **Radix UI** - Headless UI primitives
- **IBM Plex Sans** - Typography
- **Lucide React** - Icons
- **React Router** - Routing

## 🎨 Design System

### Colors

The project uses semantic color tokens that automatically adapt to light/dark themes:

- `bg-background` / `text-foreground` - Main background and text
- `bg-muted` / `text-muted-foreground` - Muted backgrounds and text
- `bg-primary` / `text-primary-foreground` - Primary actions
- `bg-secondary` / `text-secondary-foreground` - Secondary actions
- `bg-destructive` / `text-destructive-foreground` - Destructive actions
- `bg-accent` / `text-accent-foreground` - Accent elements

### Spacing

Uses Tailwind's spacing scale with `gap-*` utilities (never `space-*`):

```tsx
<div className="flex flex-col gap-4">  // ✅ Correct
<div className="space-y-4">           // ❌ Avoid
```

## 📖 Examples

### Login Form

```tsx
import { LoginForm } from "@/components/login-form"

function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <LoginForm />
    </div>
  )
}
```

### Typography Showcase

Visit `/typography-showcase` to see all typography variants in action with real-world examples.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - see LICENSE file for details.

## 👤 Author

**hashcat228**

- GitHub: [@hashcat228](https://github.com/hashcat228)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com) - Component library
- [Tailwind CSS](https://tailwindcss.com) - Styling framework
- [Radix UI](https://www.radix-ui.com) - Headless UI primitives
- [IBM Plex Sans](https://github.com/IBM/plex) - Typography
