<template>
<splash-loader></splash-loader>
<router-view></router-view>
</template>

<script>
import SplashLoader from './components/SplashLoader.vue'

export default {
    name: 'app',
    components: {
        SplashLoader
    }
}
</script>
