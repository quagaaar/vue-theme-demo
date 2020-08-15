<template>
    <div>
        <h3>Theme1 Volume Control</h3>
        <label>
            <span>Volume</span>
            <input type="range" min="0" max="100" v-model="volume" />
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
    }
}
</script>
