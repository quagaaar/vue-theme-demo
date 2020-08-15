import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/themes/base.css'
import {updateStylesheet} from "@/utils/dom";
if (store.state.staticCss) {
    const theme = store.state.theme
    import(`@/assets/themes/${theme}/style.css`)
} else {
    updateStylesheet(store.state.theme)
}

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
