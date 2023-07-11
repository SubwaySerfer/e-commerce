// import { createApp } from 'vue'
import './style.css'
import BaseButton from './components/ui/BaseButton.vue'

// const app = createApp(App)

// app.use(router)

// app.mount('#app')


import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';


const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-button', BaseButton)


app.mount('#app');

// createApp(App).use(store).use(router).mount('#app');