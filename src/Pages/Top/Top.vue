<template>
    <v-toolbar app color="blue lighten-3" scroll-off-screen :scroll-threshold="30" elevation-20>
        <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
</template>


<script lang="ts">

import Page from "../Page";

import { Component, Prop } from "vue-property-decorator";


@Component
export default class Top extends Page {
    @Prop({ type: String, default: "TITLE" })
    title!: string;
};

</script>
