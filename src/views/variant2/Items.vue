<template>
    <div>
        <component :is="this.$store.getters.ItemList" :items="items"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                'I. P. Freely',
                'Jacques Strap',
                'Al Coholic',
                'Seymour Butz',
                'Homer Sexual',
                'Hugh Jass',
                'Amanda Hugginkiss',
                'Ivana Tinkle',
                'Anita Bath',
                'Yuri Nator',
                'I. C. Wiener',
                'Moe Ron',
                'Tess T. Culls'
            ]
        }
    }
}
</script>
