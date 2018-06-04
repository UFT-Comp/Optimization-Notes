<template>
    <canvas :id="id" :width="width" :height="height"/>
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

    @Prop({ type: Number, default: 0.0 })
    lower!: number;

    @Prop({ type: Number, default: 1.0 })
    upper!: number;

    @Prop({ type: Number, default: 100 })
    step!: number;

    @Prop({ type: String, default: "x" })
    expr!: string;


    @Prop({ type: Number, default: 400 })
    width!: number;

    @Prop({ type: Number, default: 400 })
    height!: number;

    

    func!: any;



    mounted () {
        ['expr', 'lower', 'upper'].forEach(x => this.$watch(x, this.plot));
    }



    exec (x) {
        try{
            let res = this.func.eval({x: x});
            return res;
        }

        catch(err) {
            console.log("PQP");
            return 0;
        }
    }
    


    plotData () {
        try {
            this.func = Math.compile(this.expr);
        }
        
        catch(err) {
            console.log(err);
            return;
        }

        let labels: number[] = [];
        let data: number[] = [];

        let inc = (this.upper - this.lower) / this.step;

        for(let x = this.lower; x <= this.upper; x += inc) {
            labels.push(x);
            data.push(this.exec(x));
        }

        let dataSets = [{
            label: 'X',
            borderColor: 'red',
            borderWidth: 1,
            data: data,
            showLine: true
        }]

        return {
            labels: labels,
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
            }
        }
    }


    plot () {
        if(this.chart) {
            this.chart.destroy();
        }

        let data = this.plotData();
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