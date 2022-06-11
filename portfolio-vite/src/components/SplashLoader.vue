<template>
  <Transition name="swipe-up">
    <div class="splash-loader-wrapper" v-if="isWrapperVisible">
      <Transition name="fade">
        <div class="splash-loader" v-if="isLoaderVisible"></div>
      </Transition>
    </div>
  </Transition>
</template>

<script>
import '../styles/components/splash-loader.scss'

export default {
  name: 'splash-loader',
  data() {
    return {
      isWrapperVisible: false,
      isLoaderVisible: false
    }
  },
  methods: {
    hideSplashLoader() {
      window.onload = (event) => {
      setTimeout(() => {
        this.isLoaderVisible = false
      }, 2000)
      setTimeout(() => {
        this.isWrapperVisible = false
      }, 3000)
    };
    }
  },
  mounted() {
    this.isWrapperVisible = true
    this.isLoaderVisible = true
    this.hideSplashLoader()
  }
} 
</script>