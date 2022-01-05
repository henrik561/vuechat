require('./bootstrap');

import { createApp, h } from 'vue';

import store from './server/Store/store';
import { createInertiaApp, Link, Head } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import Layout from "./Shared/Layout";
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

createInertiaApp({
    resolve: async name => {
        let page = require(`./Pages/${name}`).default;

        if(name !== 'PreRender') {
            page.layout = Layout;
        }

        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(store)
            .use(PerfectScrollbar)
            .component('Link', Link)
            .component("Head", Head)
            .mount(el)
    }
 });

InertiaProgress.init({
    color: "red",
    showSpinner: true,
})

