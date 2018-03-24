import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);


interface State {
    darkTheme: boolean;
};



export default new Vuex.Store<State>({

    state: {
        darkTheme: false,
    },

    mutations: {
        setTheme : function (state: State, darkTheme: boolean) {
            state.darkTheme = darkTheme;
        },
    },

    actions: {
        setTheme: ({ commit }) => commit('setTheme')
    }
});