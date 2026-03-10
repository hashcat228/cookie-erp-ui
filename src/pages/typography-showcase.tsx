import { Typography } from "@/components/ui/typography"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"

export default function TypographyShowcase() {
  return (
    <div className="container mx-auto py-8 flex flex-col gap-8">
      <div className="flex items-start justify-between">
        <div>
          <Typography variant="display-xl" as="h1">Типографика</Typography>
          <Typography variant="body-lg" className="text-muted-foreground">
            Типографическая система на основе IBM Plex Sans
          </Typography>
        </div>
        <ThemeToggle />
      </div>

      {/* Display Styles */}
      <Card>
        <CardHeader>
          <CardTitle>Display</CardTitle>
          <CardDescription>Для hero-секций и крупных заголовков</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div>
            <Typography variant="display-2xl" as="h1">Display 2XL (48px)</Typography>
            <code className="text-xs text-muted-foreground">variant="display-2xl"</code>
          </div>
          <div>
            <Typography variant="display-xl" as="h1">Display XL (36px)</Typography>
            <code className="text-xs text-muted-foreground">variant="display-xl"</code>
          </div>
          <div>
            <Typography variant="display-lg" as="h1">Display LG (30px)</Typography>
            <code className="text-xs text-muted-foreground">variant="display-lg"</code>
          </div>
        </CardContent>
      </Card>

      {/* Headings */}
      <Card>
        <CardHeader>
          <CardTitle>Headings</CardTitle>
          <CardDescription>Для заголовков страниц и секций</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div>
            <Typography variant="heading-xl" as="h1">Heading XL (24px)</Typography>
            <code className="text-xs text-muted-foreground">variant="heading-xl"</code>
          </div>
          <div>
            <Typography variant="heading-lg" as="h2">Heading LG (22px) — Заголовки страниц</Typography>
            <code className="text-xs text-muted-foreground">variant="heading-lg"</code>
          </div>
          <div>
            <Typography variant="heading-md" as="h3">Heading MD (16px) — Заголовки секций</Typography>
            <code className="text-xs text-muted-foreground">variant="heading-md"</code>
          </div>
          <div>
            <Typography variant="heading-sm" as="h4">Heading SM (14px) — Подзаголовки</Typography>
            <code className="text-xs text-muted-foreground">variant="heading-sm"</code>
          </div>
          <div>
            <Typography variant="heading-xs" as="h5">Heading XS (12px) — Мелкие заголовки</Typography>
            <code className="text-xs text-muted-foreground">variant="heading-xs"</code>
          </div>
        </CardContent>
      </Card>

      {/* Body */}
      <Card>
        <CardHeader>
          <CardTitle>Body</CardTitle>
          <CardDescription>Для основного текста и ячеек таблиц</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div>
            <Typography variant="body-lg">Body LG (16px) — Крупный текст для важных параграфов</Typography>
            <code className="text-xs text-muted-foreground">variant="body-lg"</code>
          </div>
          <div>
            <Typography variant="body-md">Body MD (14px) — Основной текст, ячейки таблиц</Typography>
            <code className="text-xs text-muted-foreground">variant="body-md"</code>
          </div>
          <div>
            <Typography variant="body-sm">Body SM (12px) — Подписи, метаданные</Typography>
            <code className="text-xs text-muted-foreground">variant="body-sm"</code>
          </div>
          <div>
            <Typography variant="body-xs">Body XS (11px) — Очень мелкий текст</Typography>
            <code className="text-xs text-muted-foreground">variant="body-xs"</code>
          </div>
        </CardContent>
      </Card>

      {/* Labels */}
      <Card>
        <CardHeader>
          <CardTitle>Labels</CardTitle>
          <CardDescription>Для меток полей форм</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div>
            <Typography variant="label-lg" as="label">Label LG (14px)</Typography>
            <code className="text-xs text-muted-foreground">variant="label-lg"</code>
          </div>
          <div>
            <Typography variant="label-md" as="label">Label MD (12px)</Typography>
            <code className="text-xs text-muted-foreground">variant="label-md"</code>
          </div>
          <div>
            <Typography variant="label-sm" as="label">Label SM (11px)</Typography>
            <code className="text-xs text-muted-foreground">variant="label-sm"</code>
          </div>
        </CardContent>
      </Card>

      {/* Code */}
      <Card>
        <CardHeader>
          <CardTitle>Code</CardTitle>
          <CardDescription>Для кода и моноширинного текста</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div>
            <Typography variant="code-lg" as="code">Code LG (14px): const value = 1500000;</Typography>
            <code className="text-xs text-muted-foreground">variant="code-lg"</code>
          </div>
          <div>
            <Typography variant="code-md" as="code">Code MD (13px): npm install @fontsource-variable/ibm-plex-sans</Typography>
            <code className="text-xs text-muted-foreground">variant="code-md"</code>
          </div>
          <div>
            <Typography variant="code-sm" as="code">Code SM (11px): git commit -m "feat: typography"</Typography>
            <code className="text-xs text-muted-foreground">variant="code-sm"</code>
          </div>
        </CardContent>
      </Card>

      {/* Примеры использования */}
      <Card>
        <CardHeader>
          <CardTitle>Примеры использования</CardTitle>
          <CardDescription>Типичные паттерны из дизайн-системы</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          {/* Title Lockup */}
          <div>
            <Typography variant="heading-sm" as="h4" className="mb-2">Title Lockup</Typography>
            <div className="flex items-center gap-3">
              <div className="size-10 rounded bg-muted" />
              <div>
                <Typography variant="heading-lg" as="h1">Реестр субподрядов</Typography>
                <Typography variant="body-sm" className="text-muted-foreground">16 активных договоров</Typography>
              </div>
            </div>
          </div>

          {/* Таблица */}
          <div>
            <Typography variant="heading-sm" as="h4" className="mb-2">Ячейки таблицы</Typography>
            <div className="border rounded-md">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-3">
                      <Typography variant="label-md">Контрагент</Typography>
                    </th>
                    <th className="text-right p-3">
                      <Typography variant="label-md">Сумма</Typography>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3">
                      <Typography variant="body-md">ООО КровляПро</Typography>
                    </td>
                    <td className="p-3 text-right">
                      <Typography variant="body-md" className="font-variant-numeric-tabular">1 500 000 ₽</Typography>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Форма */}
          <div>
            <Typography variant="heading-sm" as="h4" className="mb-2">Форма</Typography>
            <div className="flex flex-col gap-2">
              <Typography variant="label-lg" as="label" htmlFor="project">Название проекта</Typography>
              <input
                id="project"
                type="text"
                placeholder="введите название проекта"
                className="w-full px-3 py-2 border rounded-md text-body-md bg-background"
              />
              <Typography variant="body-sm" className="text-muted-foreground">
                Используется для идентификации в системе
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Тестирование темной темы */}
      <Card>
        <CardHeader>
          <CardTitle>Тестирование темной темы</CardTitle>
          <CardDescription>Проверка читаемости в разных режимах</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="p-4 bg-background border rounded-md">
            <Typography variant="heading-md" as="h3" className="mb-2">Основной фон</Typography>
            <Typography variant="body-md">
              IBM Plex Sans отлично читается как в светлой, так и в темной теме.
              Шрифт оптимизирован для кириллицы и обеспечивает отличную читаемость
              при любом освещении.
            </Typography>
          </div>

          <div className="p-4 bg-muted rounded-md">
            <Typography variant="heading-md" as="h3" className="mb-2">Приглушенный фон</Typography>
            <Typography variant="body-md" className="text-muted-foreground">
              Текст на приглушенном фоне также остается читаемым.
              Семантические цвета автоматически адаптируются к выбранной теме.
            </Typography>
          </div>

          <div className="p-4 bg-primary text-primary-foreground rounded-md">
            <Typography variant="heading-md" as="h3" className="mb-2">Акцентный фон</Typography>
            <Typography variant="body-md">
              Контрастные комбинации цветов обеспечивают читаемость
              на акцентных элементах интерфейса.
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
