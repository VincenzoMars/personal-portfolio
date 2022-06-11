<template>
  <splash-loader></splash-loader>
</template>

<script>

// styles
import './styles/base.scss'
import './styles/utilities.scss'
import './styles/animations.scss'
import './styles/transitions.scss'

// components
import SplashLoader from './components/SplashLoader.vue'

export default {
  name: 'app',
  components: {
    SplashLoader
  }
} 
</script>