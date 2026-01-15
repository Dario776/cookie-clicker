<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { watch, computed, ref, onMounted, onUnmounted } from 'vue'
import { useCookieStore } from '@/stores/cookies'

const time = ref(new Date().toLocaleTimeString())
const store = useCookieStore()

let intervalId
onMounted(() => {
  intervalId = setInterval(() => {
    time.value = new Date().toLocaleTimeString()
  }, 1000)
})
onUnmounted(() => {
  clearInterval(intervalId)
})

const actionsThisSecond = ref(0)
const clicksPerSecond = ref(0)
const actionsSignal = ref(0)

function registerAction() {
  actionsThisSecond.value++
}

onMounted(() => {
  setInterval(() => {
    clicksPerSecond.value = actionsThisSecond.value
    actionsThisSecond.value = 0
  }, 1000)
})

const eatingSpeed = computed(() => {
  return clicksPerSecond.value
})

watch(actionsSignal, () => {
  actionsThisSecond.value++
})
</script>

<template>
  <div class="app-container">
    <header>
      <div class="header-inner">
        <h1>
          <RouterLink to="/">CookieClicker</RouterLink>
        </h1>

        <div class="cookie-stat">
          <span class="label">Cookies munched</span>
          <span class="value">{{ store.cookiesEaten }}</span>
        </div>

        <nav>
          <RouterLink to="/did-you-know">Did You Know?</RouterLink>
        </nav>
      </div>
    </header>

    <main>
      <RouterView v-model:actions="actionsSignal" />
    </main>

    <footer>
      <span>Is it time for cookies? Yes.</span>
      <span>{{ eatingSpeed }} clicks/second</span>
      <span>{{ time }}</span>
    </footer>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

header {
  flex-shrink: 0;
  background: var(--bg-elevated);
  padding: 1rem 1.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.header-inner {
  max-width: 1800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

nav {
  margin-left: auto;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

nav a.router-link-active {
  color: var(--text);
}

main {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  min-height: 0;
}

footer {
  flex-shrink: 0;
  background: var(--bg-elevated);
  padding: 1rem 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  justify-content: space-between;
  color: var(--muted);
  position: sticky;
  bottom: 0;
}

.cookie-stat {
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.4rem 0.9rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.06);
  line-height: 1;
}

.cookie-stat .label {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--muted);
  margin-bottom: 2px;
}

.cookie-stat .value {
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 800;
  color: var(--text);
}

nav a {
  padding: 0.45rem 0.9rem;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  color: var(--muted);
  background: rgba(255, 255, 255, 0.04);
  transition:
    background 0.15s ease,
    color 0.15s ease,
    transform 0.1s ease,
    box-shadow 0.1s ease;
}

nav a:hover {
  background: rgba(255, 255, 255, 0.12);
  color: var(--text);
  transform: translateY(-1px);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
}

nav a:active {
  transform: translateY(0);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
}

nav a.router-link-active {
  background: var(--accent);
  color: #000;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
}

nav a:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
</style>
