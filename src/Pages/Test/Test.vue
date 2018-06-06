<template>
<div>

    <plot-function id="plotfunc" :expr="expr" :lower="lower" :upper="upper"/>


    <v-btn @click="test()">
        TEST!!
    </v-btn>

</div>
</template>


<script lang="ts">

import Page from "../Page";

import { Component, Prop, Watch } from "vue-property-decorator";

import PlotFunction from "../../Components/PlotFunction/PlotFunction.vue";


@Component({
    components: {
        "plot-function": PlotFunction
    }
})
export default class Test extends Page {
    expr: string = "";

    lower = -1.0;
    upper = 1.0;



    test () {
        var rosenbrock = function (x) {
            var res = 0.0;
            
            for(let i = 0; i < x.length-1; ++i)
                res += 100 * Math.pow(x[i+1] - Math.pow(x[i], 2), 2) + Math.pow(x[i] - 1.0, 2);
            
            return res;
        };

        let gd = new (window as any).Module.GD();

        var x0 = (Array as any).from({length: 50}, (v, k) => 1.2);

        var x = gd.optimize(rosenbrock, x0);

        console.log(x);
    }

};


</script>

