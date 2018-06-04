import Vue from "vue";
import Component from "vue-class-component";

import Store from "../Store/index";


@Component({
    store: Store
})
export default class Page extends Vue {

    get topPage () {
        return this.$store.state.topPage;
    }

    set topPage (topPage: string) {
        this.$store.commit('setTopPage', topPage);
    }


    get mainPage () {
        return this.$store.state.mainPage;
    }

    set mainPage(mainPage: string) {
        this.$store.commit('setMainPage', mainPage);
    }
    

    set darkTheme (darkTheme: boolean) {
        this.$store.commit('setTheme', darkTheme);
    }

    get darkTheme () {
        return this.$store.state.darkTheme;
    }
}