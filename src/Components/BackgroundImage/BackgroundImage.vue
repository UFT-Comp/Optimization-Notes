<template>

    <v-card flat>
        <div style="background: black;">
            <v-card-media :height="height" :src="src" class="darken-background">

                <v-layout column align-center justify-center>

                    <transition name="slide-fade-fast" mode="out-in">
                        <div v-for="(item, index) in items" v-if="showItem === index" :key="index">
                            <v-layout row wrap align-center justify-center>
                                <span class="white--text" style="font-size: 60px;">
                                    {{ item.title }}
                                </span>
                            </v-layout>

                            <v-layout v-if="item.subtitle" row wrap align-center justify-center>
                                <span style="font-size: 32px; color: gray;">
                                    {{ item.subtitle }}
                                </span>
                            </v-layout>
                        </div>
                    </transition>
                    
                    <div v-if="showBtn" style="min-height: 100px" @click="goTo(goToPos)">
                        <transition name="fade-slow">
                            <v-btn large flat round dark @click="goTo(goToPos)" v-if="titleBtnShow">
                                <v-icon>arrow_downward</v-icon>
                            </v-btn>
                        </transition>
                    </div>
                </v-layout>

            </v-card-media>
        </div>
    </v-card>

</template>


<script lang="ts">

import Vue from "vue";

import { Component, Prop } from "vue-property-decorator";


@Component
export default class BackgroundImage extends Vue {

    @Prop({ type: String, required: true })
    src!: string;

    @Prop({ type: Array, default: [] })
    items!: Array<{ title: string, subtitle?: string }>;

    @Prop({ type: Number, default: 400 })
    height!: number;

    @Prop({ type: Number, default: 3000 })
    delay!: number;

    @Prop({ type: Boolean, default: true })
    showBtn!: boolean;

    @Prop({ type: Number, default: 0 })
    goToPos!: number;

    @Prop({ type: Number, default: 50 })
    goToOffset!: number;


    showItem = 0;

    titleBtnShow = true;


    mounted () {
        setInterval(() => (this.showItem = (this.showItem + 1) % this.items.length), this.delay);

        setInterval(() => this.titleBtnShow = !this.titleBtnShow, 1000);
    }

    goTo (to: number) {
       this.$vuetify.goTo(to - this.goToOffset);
    }


};


</script>


<style>

.darken-background {
}

.darken-background > .card__media__background {
    opacity: 0.5;
}


.slide-fade-fast-enter-active {
  transition: all 0.5s linear;
}
.slide-fade-fast-leave-active {
  transition: all 0.5s linear;
}
.slide-fade-fast-enter, .slide-fade-fast-leave-to {
  opacity: 0;
}


.fade-slow-enter-active, .fade-slow-leave-active {
  transition: opacity 1.0s;
}
.fade-slow-enter, .fade-slow-leave-to {
  opacity: 0;
}

</style>