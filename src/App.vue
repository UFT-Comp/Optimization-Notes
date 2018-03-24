<template>
    <v-app :dark="darkTheme">
        <transition name="slide-fade" mode="out-in" appear>
            <keep-alive>
                <div :is="topPage"></div>
            </keep-alive>
        </transition>
        <transition name="slide-fade-horizontal" mode="out-in" appear>
            <keep-alive>
                <div :is="mainPage"></div>
            </keep-alive>
        </transition>
    </v-app>
</template>


<script lang="ts">

import Vue from "vue";

import { Component, Prop } from "vue-property-decorator";

import Vuetify from "vuetify";

import Page from "./Pages/Page";

import Top from "./Pages/Top/Top.vue";
import Index from "./Pages/Index/Index.vue";


Vue.use(Vuetify);






@Component({
    components: {
        "top": Top,
        "index": Index
    },
})
export default class App extends Page {
    
    get topPage () {
        return this.$store.state.topPage;
    }

    get mainPage () {
        return this.$store.state.mainPage;
    }

    mounted () {
        this.setTopPage("top");
        this.setMainPage("index");
    }
}

</script>


<style>

.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(-40px);
  opacity: 0;
}

</style>