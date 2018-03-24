import Vue from "vue";

import App from "./App.vue";

import "./css/Icons.css";
import "./css/Roboto.css";

import "vuetify/dist/vuetify.min.css";



let app = new Vue({
    el: "#app",
    render: h => h(App)
});

