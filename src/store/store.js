import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        introduceName: "Yun HyeWon"
    },
    mutations: {
        scrollPage(state, sectionName) {
            let offsetTop = document.getElementById(sectionName).offsetTop - 60;
            document.body.scrollTo(0, offsetTop);
          }
    }
});