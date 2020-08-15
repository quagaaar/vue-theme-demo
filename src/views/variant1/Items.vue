<template>
    <div>
        <component :is="itemList" :items="items"/>
    </div>
</template>

<script>
import Theme1ItemList from '@/components/themes/theme1/ItemList'
import Theme2ItemList from '@/components/themes/theme2/ItemList'

export default {
    components: {
        Theme1ItemList,
        Theme2ItemList
    },
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
    },
    computed: {
        itemList() {
            if (this.$store.state.theme === 'theme1') {
                return Theme1ItemList
            }
            return Theme2ItemList
        }
    }
}
</script>
