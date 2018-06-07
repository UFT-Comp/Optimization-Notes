import Vue from "vue";

import App from "./App.vue";

import "./css/Icons.css";
import "./css/Roboto.css";

import "reveal.js/css/reveal.css"
import "reveal.js/css/theme/white.css"

import "vuetify/dist/vuetify.min.css";



let app = new Vue({
    el: "#app",
    render: h => h(App)
});

