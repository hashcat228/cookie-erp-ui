import { Link } from "react-router-dom"
import { Typography } from "@/components/ui/typography"

interface LogoProps {
  to?: string
  showText?: boolean
  size?: "sm" | "md" | "lg"
}

const sizeConfig = {
  sm: {
    container: "size-6",
    icon: "size-4",
    text: "heading-sm" as const,
  },
  md: {
    container: "size-8",
    icon: "size-5",
    text: "heading-md" as const,
  },
  lg: {
    container: "size-10",
    icon: "size-6",
    text: "heading-lg" as const,
  },
}

export function Logo({ to = "/", showText = true, size = "md" }: LogoProps) {
  const config = sizeConfig[size]

  const content = (
    <>
      <div
        className={`${config.container} flex items-center justify-center rounded-md bg-primary transition-colors group-hover:bg-primary/90`}
      >
        <img
          src="/logo.svg"
          alt=""
          className={config.icon}
          aria-hidden="true"
        />
      </div>
      {showText && (
        <Typography
          variant={config.text}
          as="span"
          className="transition-colors group-hover:text-primary"
        >
          Альфа С
        </Typography>
      )}
    </>
  )

  return (
    <Link
      to={to}
      className="flex items-center gap-3 group"
      aria-label="Альфа С - Главная страница"
    >
      {content}
    </Link>
  )
}
