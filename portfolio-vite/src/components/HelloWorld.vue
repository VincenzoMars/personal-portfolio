<script setup>
import { ref } from 'vue'
import '../styles/components/index.scss'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <div class="uro">
    <h1>{{ msg }}</h1>
  </div>
</template>