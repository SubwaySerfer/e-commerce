# Проект: "E-commerce"

---

## Описание:

Самостоятельный проект, макет был взян из общего доступа. Часть дизайна плохо продумана, либо встречаются не соответствия от страницы к странице, поэтому некоторые моменты отличаются от решений дизайнера. Проект находится в разработке.

[Макет проекта](<https://www.figma.com/file/aB3ocscdgsZoxuXwpPgwKn/eCommerce-Website-%7C-Web-Page-Design-%7C-UI-KIT-(Community)?type=design&node-id=0%3A1&mode=dev>)

[Ссылка на деплой](https://deploy--cool-biscotti-f5f9a6.netlify.app/home)

---

#### Стэк технологий:

Vue3, Vuex, JS, CSS, Vite

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

Код компонента BasePromo.

```
  <section>
    <img :src="`${imgLink}`" alt="Company logo." v-if="imgLink" class="promo-logo" />
    <slot name="pageTitle">
      <h2>{{ title }}</h2>
      <div class="pages-info">
        <h4>{{ startPage }}</h4>
        <img src="/assets/icons/shop/arrow.svg" alt="arrow." />
        <h5>{{ currentPage }}</h5>
      </div>
    </slot>
  </section>
```
