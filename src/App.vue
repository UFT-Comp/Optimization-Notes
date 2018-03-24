<template>
    <v-app :dark="darkTheme">
        <v-btn fab dark small color="primary">
            <v-icon dark>remove</v-icon>
        </v-btn>
    </v-app>
</template>



<script lang="ts">

import Vue from "vue";

import Store from "./Store/index";

import Component from "vue-class-component";


import Vuetify from "vuetify";

Vue.use(Vuetify);



@Component({
    store: Store
})
export default class App extends Vue {

    get darkTheme () {
        return this.$store.state.darkTheme;
    }

    set darkTheme (darkTheme: boolean) {
        this.$store.commit('setTheme', darkTheme);
    }
}

</script>


<!--<style src="vuetify/dist/vuetify.min.css"></style>

<style>
html {
    font-family: 'Roboto', sans-serif;
}
</style>
-->