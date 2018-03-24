import Vue from "vue";
import Component from "vue-class-component";

import Store from "../Store/index";


@Component({
    store: Store
})
export default class Page extends Vue {
    setTopPage(newTopPage: string) {
        this.$store.commit('setTopPage', newTopPage);
    }

    setMainPage(newMainPage: string) {
        this.$store.commit('setMainPage', newMainPage);
    }

    setPages(newPages: string) {
        this.$store.commit('setPages', newPages);
    }

    setTheme (darkTheme: boolean) {
        this.$store.commit('setTheme', darkTheme);
    }

    setCurrentQuery (query: string) {
        this.$store.commit('setCurrentQuery', query);
    }

    get darkTheme () {
        return this.$store.state.darkTheme;
    }

    get currentQuery () {
        return this.$store.state.currentQuery;
    }
}