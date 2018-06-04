<template>
<div v-scroll="onScroll">

    <v-toolbar elevation-15 app :height="offsetTop >= 50 ? 50 : 65">
        <v-layout row wrap align-center style="margin-top: 10px !important;">
            <v-flex md2>
                <v-layout row wrap>
                    <v-flex md3>
                        <v-toolbar-side-icon/>
                    </v-flex>
                    <v-flex md8>
                        <img src="assets/optimization2.png" :height="offsetTop >= 50 ? '35px' : '50px'"
                             :style="{'transition': 'all 0.5s ease'}"/>
                    </v-flex>
                </v-layout>
            </v-flex>

            <v-flex md7 offset-md1>
                <v-select :items="search.items" v-model="search.selected" item-text="Buscar" 
                        label="Buscar" prepend-icon="search" autocomplete/>
            </v-flex>

            <v-flex md1 offset-md1>
                <v-btn flat icon @click="darkTheme = !darkTheme" id="color-btn">
                    <v-icon>invert_colors</v-icon>
                </v-btn>
            </v-flex>
        </v-layout>
    </v-toolbar>

</div>
</template>


<script lang="ts">

import Page from "../Page";

import { Component, Prop } from "vue-property-decorator";


@Component
export default class Top extends Page {
    
    title = "Title";

    search = {
        items: ["item 1", "item 2", "item 3"],
        selected: null
    };



    onScroll() {
        this.offsetTop = window.pageYOffset;
    }
};

</script>


<style>


.toolbar__content {
    transition: height 0.5s ease;
}


</style>
