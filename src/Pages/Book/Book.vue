<template>
<div>
    
    <v-container grid-list-md fluid>
        <v-layout row wrap>
            <v-flex xs3>
                <v-card hover v-show="drawer">
                    <v-list two-line subheader style="margin-left: 0px;">
                        <v-list-tile avatar v-for="chapter in chapters" :key="chapter.title" 
                                     @click="currentChapter = chapter">
                            <!-- <v-list-tile-avatar >
                                <v-icon>{{ chapter.icon }}</v-icon>
                            </v-list-tile-avatar> -->

                            <v-list-tile-content style="margin-left: 0px;">
                                <v-list-tile-title style="margin-left: 0px;">{{ chapter.title }}</v-list-tile-title>
                                <v-list-tile-sub-title style="margin-left: 0px;">{{ chapter.subtitle }}</v-list-tile-sub-title>
                            </v-list-tile-content>

                            <!-- <v-list-tile-action>
                                <v-btn icon ripple>
                                    <v-icon color="grey lighten-1">info</v-icon>
                                </v-btn>
                            </v-list-tile-action> -->
                        </v-list-tile>
                    </v-list>
                </v-card>
            </v-flex>

            <v-flex  :xs8="drawer" :xs12="!drawer">
                <div id="chapter" v-html="test" class="justified-text" />
            </v-flex>
            
        
            


        </v-layout>
    </v-container>

</div>
</template>


<script lang="ts">
import Page from "../Page";

import { Component, Prop, Watch } from "vue-property-decorator";

import axios from "axios";
import { setTimeout } from "timers";


(window as any).MathJax.Hub.Config({
        tex2jax: {
            inlineMath: [['$','$'], ['\\(','\\)']]
        },
        TeX: {
            Macros: {
                bm: ["{\\boldsymbol #1}",1],
            }
        }
    }
);


interface Chapter {
    icon: string;
    title: string;
    subtitle: string;
    markdown: string;
    chapter: string;
}

@Component
export default class Book extends Page {
    drawer: boolean = true;

    chapters: Array<Chapter> = [];

    currentChapter: Chapter = {} as Chapter;

    test: string = "";

    markdownPath = "src/Pages/Book/markdown/";

    chapterPath = "src/Pages/Book/html/";

    mounted() {
        this.chapters = [
            {
                icon: "add",
                title: "Intro",
                subtitle: "Introdução",
                markdown: "Intro.md",
                chapter: "Intro.html"
            },
            {
                icon: "remove",
                title: "Ensino Secundário",
                subtitle: "Ensino Secundário",
                markdown: "EnsinoSecundario.md",
                chapter: "EnsinoSecundario.html"
            },
            {
                icon: "add",
                title: "Otimização",
                subtitle: "Otimização",
                markdown: "Otimizacao.md",
                chapter: "Otimizacao.html"
            }
        ];

        this.currentChapter = this.chapters[1];

        this.loadPage();
    }


    @Watch('currentChapter')
    loadPage () {
        return axios.get(this.chapterPath + this.currentChapter.chapter).then(response => {
            this.test = response.data;
            setTimeout(() => (window as any).MathJax.Hub.Typeset(), 0);
        });
    }
}
</script>


<style>
</style>