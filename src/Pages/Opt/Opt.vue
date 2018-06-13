<template>
<div>

    <!-- <plot-function id="plotfunc" :expr="expr" :lower="lower" :upper="upper"/> -->
    <v-card >
        <v-container grid-list-lg text-xs-center fluid>
            <v-layout row wrap>
                <v-flex md6>
                    <plot id="pltt" ref="plt"/>
                </v-flex>
                <v-flex md6>
                    <plot id="pltt2" ref="plt2"/>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>

        <v-container grid-list-lg text-xs-center fluid>
            <v-layout row wrap>
                <v-flex md7>
                    <v-text-field v-model="func" textarea :color="validFunc ? 'blue' : 'red'"/>
                </v-flex>
                <v-flex md4 offset-md1>
                    <v-text-field v-model="x0" textarea :color="validx0 ? 'blue' : 'red'"/>
                </v-flex>
            </v-layout>
        </v-container>

    <v-btn @click="test()">
        TEST
    </v-btn>


</div>
</template>


<script lang="ts">

import Page from "../Page";

import Plot from "../../Components/Plot/Plot.vue";

import { Component, Prop, Watch } from "vue-property-decorator";

import PlotFunction from "../../Components/PlotFunction/PlotFunction.vue";

// window["Reveal"] = require("reveal.js");


@Component({
    components: {
        "plot-function": PlotFunction,
        "plot": Plot
    }
})
export default class Opt extends Page {
    expr: string = "";

    lower = -1.0;
    upper = 1.0;

    x: number[] = [];
    y: number[] = [];
    index: number = 0;

    func = "(x) => { \n \
            var res = 0.0;    \n \
            \n \
            for(let i = 0; i < x.length-1; ++i) \n \
                res += 100 * Math.pow(x[i+1] - Math.pow(x[i], 2), 2) + Math.pow(x[i] - 1.0, 2); \n \
            \n \
            return res; \n \
        }";

    x0 = "() => (Array as any).from({length: 200}, (v, k) => 1.2)";


    get validFunc () {
        try {
            Function("return (" + this.func + ");")();
            return true;
        }
        catch(err) {
            return false;
        }
    }

    get validx0 () {
        try {
            Function("return (" + this.x0 + ");")();
            return true;
        }
        catch(err) {
            return false;
        }
    }


    mounted () {
        var self = this;
        var i = 0;
        window["gd"] = new (window as any).Module.GD(x => { self.x.push(self.index++); self.y.push(x); });

        window["gd"].maxIterations = 100;
        window["gd"].fTol = 1e-7;

        //(window as any).Reveal({ embedded: false });
    }


    test () {
        let i = 0;

        //var x0 = (Array as any).from({length: 200}, (v, k) => 1.2);

        var x = window["gd"].optimize(Function("return (" + this.func + ");")(),
                                      Function("return (" + this.x0 + ");")()());

        this.$refs["plt"]["plot"](this.x, this.y);
        this.$refs["plt2"]["plot"](this.x, this.y);

        this.x = [];
        this.y = [];
        this.index = 0;
    }

};


</script>

