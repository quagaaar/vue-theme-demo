<template>
    <div>
        <component :is="volumeControl" />
    </div>
</template>

<script>
import components from '@/components/themes/components'

export default {
    components: {
        ...components.theme1,
        ...components.theme2
    },
    computed: {
        volumeControl() {
            return components[this.$store.state.theme].VolumeControl
        }
    }
}
</script>
