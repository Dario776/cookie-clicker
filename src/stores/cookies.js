import { defineStore } from 'pinia'

export const useCookieStore = defineStore('cookies', {
  state: () => ({
    cookies: [],
    cookiesEaten: 0, 
  }),
  actions: {
    addCookie() {
      const randomSize = Math.floor(Math.random() * 100) + 80  
      const minSize = Math.floor(Math.random() * 20) + 30     
      this.cookies.push({
        id: Date.now() + Math.random(),
        size: randomSize,
        minSize,
      })
    },
    increment(id) {
      const c = this.cookies.find(c => c.id === id)
      if (c) {
        c.size -= 15  
        if (c.size <= c.minSize) {
          this.remove(id)
        }
      }
    },
    remove(id) {
      this.cookies = this.cookies.filter(c => c.id !== id)
      this.cookiesEaten++
    }
  }
})
