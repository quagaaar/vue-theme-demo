<template>
    <div>
        <h3>Theme1 Volume Control</h3>
        <label>
            <span>Volume</span>
            <input type="range" min="0" max="100" v-model="volume" />
        </label>
        <p v-if="showCurrentVolume">Current volume: {{ volume }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            volume: 0,
            showCurrentVolume: true
        }
    },
    created() {
        import(`@/components/themes/${this.$store.state.theme}/config.js`)
            .then(config => config.default)
            .then(config => this.showCurrentVolume = config.show_current_volume)
            .catch(e => console.error(e))
    }
}
</script>
