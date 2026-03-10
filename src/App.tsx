import { LoginForm } from "@/components/login-form"

export function App() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium tracking-tight hover:opacity-80 transition-opacity">
            <img src="/logo.svg" alt="" className="size-6" />
            <span className="text-base">Альфа С</span>
          </a>
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

export default App
