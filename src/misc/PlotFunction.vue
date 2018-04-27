<template>
    <canvas :id="id" :width="width" :height="height"></canvas>
</template>


<script lang="ts">
import Vue from "vue";

import { Component, Prop, Watch } from "vue-property-decorator";

import Chart from "chart.js";

import Math from "mathjs";


@Component
export default class PlotFunction extends Vue {
    
    ctx: any;
    chart: any;


    @Prop({ type: String, required: true })
    id!: string;

    @Prop({ type: Number, default: 0 })
    x0!: number;

    @Prop({ type: String, default: "x" })
    expr!: string;


    @Prop({ type: Number, default: 400 })
    width!: number;

    @Prop({ type: Number, default: 400 })
    height!: number;

    

    

    @Watch("expr")
    onExprChange () {

    }


    get plotData () {
        return {
            
        }
    }
};

</script>