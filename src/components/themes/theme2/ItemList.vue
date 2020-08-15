<template>
    <div>
        <h3>Theme2 Item List</h3>
        <ol>
            <li v-for="(item, index) in items" :key="index"><span>{{ item }}</span></li>
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
    }
}
</script>
