<template>
    <v-app :dark="darkTheme">
        <transition name="slide-fade" mode="out-in" appear>
            <keep-alive>
                <div :is="topPage"/>
            </keep-alive>
        </transition>
        
        <transition name="slide-fade-horizontal" mode="out-in" appear>
            <keep-alive>
                <div :is="mainPage"/>
            </keep-alive>
        </transition>

    </v-app>
</template>


<script lang="ts">

import Vue,{ PluginObject, PluginFunction } from "vue";

import { Component, Prop } from "vue-property-decorator";

import Vuetify from "vuetify";

import Page from "./Pages/Page";

import Top from "./Pages/Top/Top.vue";
import Index from "./Pages/Index/Index.vue";
import Book from "./Pages/Book/Book.vue";
import Test from "./Pages/Test/Test.vue";


Vue.use(Vuetify);




@Component({
    components: {
        "top": Top,
        "index": Index,
        "book": Book,
        "test": Test
    },
})
export default class App extends Page {
    mounted () {
        this.topPage = "top";
        this.mainPage = "test";
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