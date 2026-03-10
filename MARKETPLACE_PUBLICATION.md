# Публикация в Claude Code Marketplace

## ✅ Что уже сделано

1. ✅ Создан `.claude-plugin/marketplace.json` с полной информацией о проекте
2. ✅ Обновлен README.md с подробной документацией
3. ✅ Создана ветка `ui-library` с чистой версией UI библиотеки
4. ✅ Все изменения запушены на GitHub

## 📋 Следующие шаги

### 1. Добавить скриншоты

Сделайте скриншоты приложения и добавьте их в `docs/screenshots/`:

```bash
# Запустите dev-сервер
npm run dev

# Откройте в браузере:
# - http://localhost:5173 (login page)
# - http://localhost:5173/typography-showcase (typography)

# Сделайте скриншоты:
# 1. typography-showcase.png - страница с типографикой
# 2. login-page.png - страница логина (светлая и темная тема)

# Добавьте скриншоты
git add docs/screenshots/*.png
git commit -m "docs: add screenshots for marketplace"
git push origin ui-library
```

### 2. Опубликовать в Claude Code Marketplace

Репозиторий готов к публикации! Marketplace.json содержит:

- ✅ Название и описание
- ✅ Теги и категории
- ✅ Список фич
- ✅ Ссылки на документацию
- ✅ Зависимости
- ✅ Ссылки на скриншоты (добавьте их)
- ✅ Публичный доступ (`"public": true`)

### 3. Проверить marketplace.json

```bash
# Проверьте, что файл валидный
cat .claude-plugin/marketplace.json | jq .
```

## 🔗 Ссылки

- **Репозиторий**: https://github.com/hashcat228/cookie-erp-ui
- **Ветка UI библиотеки**: https://github.com/hashcat228/cookie-erp-ui/tree/ui-library
- **Marketplace JSON**: https://github.com/hashcat228/cookie-erp-ui/blob/ui-library/.claude-plugin/marketplace.json

## 📝 Информация о проекте

- **Название**: Cookie ERP UI
- **Версия**: 1.0.0
- **Автор**: hashcat228
- **Лицензия**: MIT
- **Категория**: ui-components

## 🎯 Основные фичи

- 50+ production-ready React компонентов
- IBM Plex Sans типографика (оптимизирована для кириллицы)
- Поддержка темной/светлой темы
- Tailwind CSS v4 с семантическими токенами
- shadcn/ui radix-vega preset
- TypeScript поддержка
- Vite для быстрой разработки

## 🚀 Быстрый старт для пользователей

После публикации пользователи смогут установить через Claude Code:

```bash
# В Claude Code
/plugin install cookie-erp-ui
```

Или клонировать напрямую:

```bash
git clone -b ui-library https://github.com/hashcat228/cookie-erp-ui.git
cd cookie-erp-ui
npm install
npm run dev
```

## 📸 Требуемые скриншоты

1. **typography-showcase.png** - Полная страница с примерами типографики
2. **login-page.png** - Страница логина (можно сделать коллаж светлой и темной темы)

Размер: рекомендуется 1920x1080 или 1280x720
Формат: PNG
