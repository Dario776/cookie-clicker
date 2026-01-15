<script setup>
import cookieImg from '@/assets/cookie.png'

const props = defineProps({
  cookie: Object,
})

const emit = defineEmits(['eat'])

function handleClick() {
  emit('eat', props.cookie.id)
}
</script>

<template>
  <div
    class="cookie-card"
    :style="{ width: cookie.size + 'px', height: cookie.size + 'px' }"
    @click="handleClick"
  >
    <img :src="cookieImg" alt="cookie" />
  </div>
</template>

<style scoped>
.cookie-card {
  transition:
    width 0.2s ease,
    height 0.2s ease,
    transform 0.1s ease;
  cursor: pointer;
}

.cookie-card:active {
  transform: scale(0.95);
}

.cookie-card img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
