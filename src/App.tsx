import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { LoginForm } from "@/components/login-form"
import TypographyShowcase from "@/pages/typography-showcase"
import { ThemeToggle } from "@/components/theme-toggle"
import { Typography } from "@/components/ui/typography"

function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/logo.svg" alt="" className="size-10" />
            <Typography variant="heading-lg" as="span">Альфа С</Typography>
          </Link>
          <ThemeToggle />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src="/logo.svg"
          alt="Альфа С"
          className="absolute inset-0 h-full w-full object-contain p-20 dark:brightness-[0.8] dark:grayscale-[0.3]"
        />
      </div>
    </div>
  )
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/typography-showcase" element={<TypographyShowcase />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
