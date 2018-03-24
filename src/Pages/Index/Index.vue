<template>
<div>
    <v-content>
      <section>
        <v-parallax src="assets/optimization.jpg" height="450">
          <v-layout column align-center justify-center class="white--text">            
            <h1 class="white--text mb-2 display-1 text-xs-center">
              Optimization Notes
            </h1>
            <div class="subheading mb-3 text-xs-center">
              Algorithms for optimization
            </div>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout column wrap class="my-2" align-center>
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">Some notes about optimization</h2>
              <span class="subheading">
                Start learning with practical examples and a lot of code
              </span>
            </div>
          </v-flex>

          <v-flex xs12>

            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Many algorithms</div>
                    </v-card-title>
                    <v-card-text>
                      We have a lot of nice algorithms here, with many examples.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Sickening fast</div>
                    </v-card-title>
                    <v-card-text>
                      Most of the code is written in C/C++, using really fast libraries. 
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Read or book</div>
                    </v-card-title>
                    <v-card-text>
                      Along with our code, we develop a complete refence book.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax src="assets/optimization2.jpg" height="500">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">Let's start?</div>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="/pre-made-themes"
            >
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Info</div>
                </v-card-title>
                <v-card-text>
                  MANAUS 
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact us</div>
                </v-card-title>
                <v-card-text>
                  Manaus
                </v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>777-867-5309</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Chicago, US</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>john@vuetifyjs.com</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <v-footer height="auto" color="indigo">
        <v-container grid-list-md text-xs-center fluid>
          <v-layout row wrap>
            <v-flex xs12>

              <v-card flat tile class="indigo white--text text-xs-center">
                <h1 :style="{'text-align': 'center'}">
                  <i> Our work is only possible due to the awessomeness of: </i>
                </h1>

                <div :style="{'height': '50px'}"/>

                <v-container grid-list-md text-xs-center>
                  <v-layout row wrap>
                    
                    <v-flex md3 sm4 xs6>
                      <img class="image-footer" src="assets/vue.png"/>
                    </v-flex>

                    <v-flex md3 sm4 xs6>
                      <img class="image-footer" src="assets/eigen.png"/>
                    </v-flex>

                    <v-flex md3 sm4 xs6>
                      <img class="image-footer" src="assets/vuetify.png"/>
                    </v-flex>

                    <v-flex md3 sm4 xs6>
                      <img class="image-footer" src="assets/opencv.png"/>
                    </v-flex>

                  </v-layout>
                </v-container>

              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-footer>


    </v-content>
</div>
</template>

<script lang="ts">

import Page from "../Page";

import { Component, Prop } from "vue-property-decorator";


@Component
export default class Index extends Page {

};



</script>

<style scoped>

.image-footer {
  max-width: 200px;
}

</style>
