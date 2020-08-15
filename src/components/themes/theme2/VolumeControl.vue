<template>
    <div>
        <h3>Theme2 Volume Control</h3>
        <label>
            <span>Volume</span>
            <button type="button" @click="turnUp">+</button>
            <button type="button" @click="turnDown">-</button>
            <button type="button" @click="mute">Mute</button>
        </label>
        <p>Current volume: {{ volume }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            volume: 0
        }
    },
    methods: {
        turnUp() {
            this.volume = Math.min(this.volume + 1, 100)
        },
        turnDown() {
            this.volume = Math.max(this.volume - 1, 0)
        },
        mute() {
            this.volume = 0
        }
    }
}
</script>
