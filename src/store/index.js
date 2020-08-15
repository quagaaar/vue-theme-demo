import Vue from 'vue'
import Vuex from 'vuex'

import components from "@/components/themes"
import { updateStylesheet } from "@/utils/dom"

const getters = {}
const themes = []

// Setup store getters base on the available components
for (let theme in components) {
    if (Object.prototype.hasOwnProperty.call(components, theme)) {
        for (let component in components[theme]) {
            if (Object.prototype.hasOwnProperty.call(components[theme], component)) {
                getters[component] = state => components[state.theme][component]
            }
        }
        themes.push(theme)
    }
}

function getThemeFromUrl(defaultTheme = 'theme1') {
    const theme = new URLSearchParams(window.location.search).get('theme') || defaultTheme
    return themes.includes(theme) ? theme : defaultTheme
}

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        theme: getThemeFromUrl(),
        staticCss: new URLSearchParams(window.location.search).has('staticCss')
    },
    getters,
    mutations: {
        setTheme(state, theme) {
            if (themes.includes(theme)) {
                state.theme = theme;
                if (!state.staticCss) {
                    updateStylesheet(theme);
                }
            }
        }
    },
    actions: {},
    modules: {}
})
