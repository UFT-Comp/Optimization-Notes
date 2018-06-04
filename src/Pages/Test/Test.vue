<template>
<div>

    <plot-function id="plotfunc" :expr="expr" :lower="lower" :upper="upper"/>


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
};


</script>

