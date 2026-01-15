<template>
  <div class="grid-wrapper">
    <div class="buttons">
      <button class="action-btn add" @click="bakeCookie" :disabled="isBaking">
        {{ isBaking ? 'BAKING...' : 'BAKE' }}
      </button>
      <button class="action-btn eat" @click="eatRandomCookie">MUNCH</button>
    </div>
    <div class="cookie-container">
      <CookieCard v-for="c in store.cookies" :key="c.id" :cookie="c" @eat="handleEat" />
    </div>
  </div>
</template>

<script setup>
import { useCookieStore } from '@/stores/cookies'
import CookieCard from '@/components/CookieCard.vue'
import { ref } from 'vue'
const store = useCookieStore()

const emit = defineEmits(['update:actions'])

function reportAction() {
  emit('update:actions', Date.now())
}

const isBaking = ref(false)

async function bakeCookie() {
  if (isBaking.value) return

  isBaking.value = true

  await new Promise((resolve) => setTimeout(resolve, 800))

  store.addCookie()
  reportAction()

  isBaking.value = false
}

function handleEat(id) {
  store.increment(id)
  reportAction()
}

function eatRandomCookie() {
  if (store.cookies.length === 0) return

  const index = Math.floor(Math.random() * store.cookies.length)
  const cookie = store.cookies[index]

  const cookieElement = document.querySelectorAll('.cookie-card')[index]
  if (cookieElement) {
    cookieElement.style.transform = 'scale(1.1)'
    setTimeout(() => {
      cookieElement.style.transform = 'scale(1)'
    }, 100)
  }

  if (cookie.size <= cookie.minSize) {
    store.remove(cookie.id)
  } else {
    store.increment(cookie.id)
  }
  reportAction()
}
</script>

<style scoped>
.grid-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.action-btn {
  width: 100%;
  padding: 1.5rem 0;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  color: #fff;
  background: #f0c040;
  box-shadow: 0 6px #b38600;
  transition:
    transform 0.1s ease,
    box-shadow 0.1s ease;
}

.action-btn.eat {
  background: #ff5c5c;
  box-shadow: 0 6px #b33a3a;
}

.action-btn:hover {
  transform: translateY(-2px);
}

.action-btn:active {
  transform: translateY(4px);
  box-shadow: 0 2px #7a2900;
}

.cookie-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.action-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
