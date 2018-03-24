import devtools from "@vue/devtools";

import Vue from "vue";

import App from "./App.vue";


if (process.env.NODE_ENV === 'development') {
    devtools.connect();
}

let app = new Vue({
    el: "#app",
    render: h => h(App)
});

