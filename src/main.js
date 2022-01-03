/* eslint-disable global-require */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

if (process.env.VUE_APP_ENV === 'local') {
  const { worker } = require('./mocks/browser');
  worker.start();
}

createApp(App).use(store).use(router).mount('#app');
