# Проект: "E-commerce"

---

## Описание:

Самостоятельный проект, макет был взян из общего доступа. Часть дизайна плохо продумана, либо встречаются не соответствия от страницы к странице, поэтому некоторые моменты отличаются от решений дизайнера. Проект находится в разработке.

[Макет проекта](<https://www.figma.com/file/aB3ocscdgsZoxuXwpPgwKn/eCommerce-Website-%7C-Web-Page-Design-%7C-UI-KIT-(Community)?type=design&node-id=0%3A1&mode=dev>)

[Ссылка на деплой](https://cool-biscotti-f5f9a6.netlify.app/home)

---

#### Стэк технологий:

Vue3, Vuex, JS, CSS, Vite, Vue-router

<!-- ---

## Ссылки: -->

---

## Установка

- `npm install` — установить зависимости
- `npm run dev` — запуск сервера разработки
<!-- - `npm run start` — запуск express версии port 3000 -->
- `npm run build` — сборка проекта

---

## Пример кода:

Vuex mutation example:

```
  toggleFavoriteList(state, payload) {
    try {
      if (state.favoriteList.length == 0 || !state.favoriteList.find(el => el.id === payload)) {
        state.favoriteList.push(state.furnitureList.find(el => el.id === payload))
      } else {
        state.favoriteList.splice(state.favoriteList.findIndex(el => el.id === payload), 1)
      }
    } catch {
      console.log('ошибка добавления.')
    }
  },
```
