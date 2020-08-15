<template>
    <div>
        <h1>VUE Theme Demo</h1>
        <nav>
            <ul>
                <li><router-link :to="{name: 'Home'}">Home</router-link></li>
                <li><router-link :to="{name: 'Variant1'}">Variant1</router-link></li>
                <li><router-link :to="{name: 'Variant2'}">Variant2</router-link></li>
            </ul>
            <div>
                <label><input type="radio" value="theme1" v-model="theme" /><span>Theme 1</span></label>
                <label><input type="radio" value="theme2" v-model="theme" /><span>Theme 2</span></label>
                <label><input type="checkbox" v-model="staticCss" /><span>Static CSS include based on URL parameter</span></label>
            </div>
        </nav>
        <main>
            <router-view />
        </main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            theme: this.$store.state.theme,
            staticCss: this.$store.state.staticCss
        }
    },
    watch: {
        theme() {
            updateTheme(this.$store, this.theme, this.staticCss)
        },
        staticCss() {
            if (this.staticCss) {
                updateTheme(this.$store, this.theme, this.staticCss)
            } else {
                window.location.search = `?theme=${this.theme}`
            }
        }
    }
}

function updateTheme(store, theme, staticCss) {
    if (staticCss) {
        window.location.search = `?staticCss&theme=${theme}`
    } else {
        store.commit('setTheme', theme)
    }
}
</script>
