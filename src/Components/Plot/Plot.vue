<template>
    <canvas :id="id"/>
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
            borderColor: 'rgb(255, 0, 0)',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: 'origin',
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
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        type: "linear",
                        beginAtZero:true,
                        stepSize: 10.0
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: false
                    },
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