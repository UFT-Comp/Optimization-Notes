<template>
    <v-app :dark="darkTheme">
        <v-btn ></v-btn>
    </v-app>
</template>



<script lang="ts">
import Vue from "vue";

import Vuetify from "vuetify";

Vue.use(Vuetify);



import Component from "vue-class-component";


import Top from "./Pages/Top/Top.vue";
import Start from "./Pages/Start/Start.vue";
import Import from "./Pages/Import/Import.vue";
import Query from "./Pages/Query/Query.vue";



@Component
export default class App extends Vue {
}


const EventBus = new Vue()

</script>


<style src="vuetify/dist/vuetify.min.css"></style>

<style>
html {
    font-family: 'Roboto', sans-serif;
}

</style>
