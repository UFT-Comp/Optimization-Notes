<template>
    <v-container>
        <canvas :id="id" :width="width" :height="height"/>
    </v-container>
</template>


<script lang="ts">
import Vue from "vue";

import { Component, Prop, Watch } from "vue-property-decorator";

import Chart from "chart.js";

import Math from "mathjs";


@Component
export default class Plot extends Vue {
    
    ctx: any;
    chart: any;
    

    @Prop({ type: String, required: true })
    id!: string;


    @Prop({ type: Number, default: 400 })
    width!: number;

    @Prop({ type: Number, default: 400 })
    height!: number;



    plotData (x, y) {
        let dataSets = [{
            label: 'X',
            borderColor: 'red',
            borderWidth: 1,
            data: y,
            showLine: true
        }]

        return {
            labels: x,
            datasets: dataSets
        };
    }

    plotOptions () {
        return {
            responsive: true,

            legend: {
                position: 'top'
            },

            title: {
                display: true,
                text: 'PLOT'
            },
            
            tooltips: {
                callbacks: {
                label: function(tooltipItem) {
                        return tooltipItem.yLabel;
                }
                }
            },

            scales: {
                xAxes: [{
                    ticks: {
                        type: "linear",
                        beginAtZero:true
                    }
                }],
                yAxes: [{
                    type: "logarithmic",
                    ticks: {
                        type: "logarithmic",
                        beginAtZero:true
                    }
                }]
            }
        }
    }

    
    plot (x, y) {
        if(this.chart) {
            this.chart.destroy();
        }

        let data = this.plotData(x, y);
        let options = this.plotOptions();

        this.ctx = (document.getElementById(this.id) as any).getContext('2d');

            this.chart = new Chart(this.ctx, {
                type: "line",

                data: data,

                options: options
        });
    }
};

</script>