<template>
  <Transition>
    <div class="splash-loader-wrapper" v-if="isVisible">
      <div class="splash-loader"></div>
    </div>
  </Transition>
</template>

<script>
import '../styles/components/splash-loader.scss'

export default {
  name: 'splash-loader',
  data() {
    return {
      isVisible: true
    }
  },
  methods: {
    hideSplashLoader() {
      window.onload = (event) => {
      setTimeout(() => {
        
        this.isVisible = false
      }, 2000)
    };
    }
  },
  mounted () {
    this.hideSplashLoader()
  }
} 
</script>