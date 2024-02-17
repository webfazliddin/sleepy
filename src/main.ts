import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import ApiService from "@/services/api.service";
import { router } from './router';
import vuetify from './plugins/vuetify';
import axios from '@/utils/axios';
import '@/scss/style.scss';
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import VueApexCharts from 'vue3-apexcharts';
import VueTablerIcons from 'vue-tabler-icons';
import { fakeBackend } from '@/utils/helpers/fake-backend';
import Notifications from "@kyvg/vue3-notification";
import 'vue3-carousel/dist/carousel.css';
//Mock Api data
import './_mockApis';
// import "@axios";
import VCalendar from 'v-calendar';
import VueRecaptcha from 'vue3-recaptcha-v2';
import Maska from 'maska';
// print
// import print from 'vue3-print-nb';
// Table
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
//i18
import { createI18n } from 'vue-i18n';
import messages from '@/utils/locales/messages';
//ScrollTop
import VueScrollTo from 'vue-scrollto';
axios.defaults.baseURL = "https://medcrm.bsite.net";
const i18n = createI18n({
    locale: 'uz',
    messages: messages,
    silentTranslationWarn: true,
    silentFallbackWarn: true
});
ApiService.setHeader()
ApiService.mount401Interceptor();
const app = createApp(App);
fakeBackend();
app.use(Notifications)
app.use(router);
app.component('EasyDataTable', Vue3EasyDataTable);
app.use(PerfectScrollbar);
app.use(createPinia());
app.use(VCalendar, {});
app.use(VueTablerIcons);
// app.use(print);
app.use(VueRecaptcha, {
    siteKey: '6LdzqbcaAAAAALrGEZWQHIHUhzJZc8O-KSTdTTh_',
    alterDomain: false // default: false
});
app.use(i18n);
app.use(Maska);
app.use(VueApexCharts);
app.use(vuetify).mount('#app');
//ScrollTop Use
// app.use(VueScrollTo);
app.use(VueScrollTo, {
    duration: 1000,
    easing: "ease",
    offset:-50,
})