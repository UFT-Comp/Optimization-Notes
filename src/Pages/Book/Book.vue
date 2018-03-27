<template>
<div>
    
    <v-container grid-list-md text-xs-center fluid>
        <v-layout row wrap>
            <v-flex xs2>
                <v-card hover v-show="drawer">
                    <v-list dense>
                        <v-list-tile @click="drawer = false">
                                <v-list-tile-action>
                                    <v-icon>fast_rewind</v-icon>
                                </v-list-tile-action>
                        </v-list-tile>

                        <template v-for="(chapter, index) in chapters">
                            <v-list-tile :key="index" @click="currentChapter = chapter">
                                <v-list-tile-action>
                                    <v-icon>{{ chapter.icon }}</v-icon>
                                </v-list-tile-action>
                                <v-list-tile-content>
                                    <v-list-tile-title>{{ chapter.text }}</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </template>
                    </v-list>
                </v-card>
            </v-flex>

            <v-flex :offset-xs1="drawer" :xs8="drawer" :xs12="!drawer">
                <div v-html="test" class="justified-text" />
            </v-flex>
        </v-layout>
    </v-container>

</div>
</template>


<script lang="ts">
import Page from "../Page";

import { Component, Prop, Watch } from "vue-property-decorator";

import axios from "axios";

import MarkdownIt from "markdown-it";

import mdktex from "markdown-it-katex";




interface Chapter {
  icon: string;
  text: string;
  markdown: string;
}

@Component
export default class Book extends Page {
    drawer: boolean = true;

    chapters: Array<Chapter> = [];

    currentChapter: Chapter = {} as Chapter;

    test: string = "";

    markdownPath = "src/Pages/Book/markdown/";

    mdit = new MarkdownIt({
        html: true
    }).use(mdktex, {"throwOnError" : false, "errorColor" : " #cc0000"});


    mounted() {
        this.chapters = [
            {
                icon: "add",
                text: "Intro",
                markdown: "Intro.md"
            },
            {
                icon: "remove",
                text: "Ensino Secundario",
                markdown: "EnsinoSecundario.md"
            }
        ];

        this.currentChapter = this.chapters[0];
    }


    @Watch('currentChapter')
    loadPage () {
        return axios.get(this.markdownPath + this.currentChapter.markdown).then(response => {
            this.test = this.mdit.render(response.data);
        });
    }
}
</script>


<style>
p {
    text-align: justify;
    text-justify: inter-word;
}
</style>