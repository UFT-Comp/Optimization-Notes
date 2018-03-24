import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);


interface State {
    darkTheme: boolean;
    topPage: string;
    mainPage: string;
};



export default new Vuex.Store<State>({

    state: {
        darkTheme: false,
        topPage: "",
        mainPage: ""
    },

    mutations: {
        setTheme : function (state: State, darkTheme: boolean) {
            state.darkTheme = darkTheme;
        },

        setTopPage: function (state: {mainPage: string, topPage: string}, newTopPage: string) {
            state.topPage = newTopPage;
        },

        setMainPage: function (state: {mainPage: string, topPage: string}, newMainPage: string) {
            state.mainPage = newMainPage;
        },

        setPages: function (state: {mainPage: string, topPage: string}, pages: {newTopPage: string, newMainPage: string}) {
            state.topPage = pages.newTopPage;
            state.mainPage = pages.newMainPage;
        }
    },

    actions: {
        setTheme: ({ commit }) => commit('setTheme'),
        setTopPage:  ({ commit }) => commit('setTopPage'),
        setMainPage: ({ commit }) => commit('setMainPage'),
        setPages:    ({ commit }) => commit('setPages')
    }
});