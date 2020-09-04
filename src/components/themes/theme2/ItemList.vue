<template>
    <div>
        <h3>Theme2 Item List</h3>
        <div v-if="configError" style="font-weight: bold; color: darkred">{{ configError }}</div>
        <ol>
            <li v-for="(item, index) in items" :key="index"><span>{{ item }}</span><span v-if="showItemIndex">[{{index}}]</span></li>
        </ol>
    </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            showItemIndex: false,
            configError: null
        }
    },
    created() {
        import(`@/components/themes/${this.$store.state.theme}/config.js`)
            .then(config => config.default)
            .then(config => this.showItemIndex = config.show_item_index)
            .catch(e => this.configError = e.message)
    }
}
</script>
