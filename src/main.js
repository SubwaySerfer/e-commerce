import './style.css'
import BaseButton from './components/ui/BaseButton.vue'
import BaseCard from './components/ui/BaseCard.vue'
import BasePromo from './components/ui/BasePromo.vue'
import OurAdvantages from './components/layout/OurAdvantages.vue'

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
app.component('base-card', BaseCard)
app.component('base-promo', BasePromo)
app.component('our-advantages', OurAdvantages)


app.mount('#app');

// createApp(App).use(store).use(router).mount('#app');