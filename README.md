VUE3 SPA projekt - Cookie Clicker Muncher

URL aplikacije u cloudu:
https://cookie-clicker-muncher.netlify.app/

Lista svojstava aplikacije i komentari:

1. interpolation/one-way binding
   - Da, src/components/CookieCard.vue, :18
   - :style="{ width: props.cookie.size + 'px', height: props.cookie.size + 'px' }"

2. two-way binding
   - Da, src/App.vue, :63
   - <RouterView v-model:actions="actionsSignal" />
   - Promjenu varijable (dojava) actionsSignal gleda App.vue i povećava varijablu actionsThisSecond za 1

3. methods
   - Da, src/views/CookieGridView.vue, :7, :47
   - eatRandomCookie()

4. computed properties
   - Da, src/App.vue, :34
   - eatingSpeed varijabla ovisi o clicksPerSecond.value

5. barem jedan scoped style
   - Da, skoro svaka komponenta koristi scoped style
   - src/components/CookieCard.vue, :25
   - src/views/CookieGridView.vue, :70

6. koristiti barem jedan lifecycle hook
   - Da, src/App.vue, :10, :15
   - onMounted(), onUnmounted() se koristi za upostavu intervala ažuriranja sata

7. routing (više stranica)
   - Da, src/router/index.js
   - Rute za '/', '/did-you-know', catch-all NotFound ruta

8. aplikacija mora biti bookmarkable
   - Da, src/router/index.js, :6
   - history: createWebHistory(import.meta.env.BASE_URL)
   - VAŽNO: public/\_redirects pokazuje Netlify serveru da poslužuje index.html za sve rute koji onda putem history-a poslužuje ispravnu stranicu

9. dinamičko usmjeravanje s 404 stranicom ("catch all")
   - Da, src/router/index.js, :19
   - path: '/:pathMatch(._)_',

10. barem dvije komponente
    - Da
      - CookieCard.vue (stateless, koristi props)
      - CookieGridView.vue (stateful, koristi Pinia store)

11. komponenta bez stanja, koristiti properties
    - Da, src/components/CookieCard.vue, props.cookie

12. komponenta sa stanjem
    - Da, src/views/CookieGridView.vue, Pinia store (cookies array, cookiesEaten counter)

13. barem jedna komponenta mora emitirati barem jedan event
    - Da, src/components/CookieCard.vue, :8
    - emitira event na klik i roditelj ga hvata i zove store.increment()

14. store (Pinia)
    - Da, src/stores/cookies.js
    - cookies array, cookiesEaten, addCookie(), increment(), remove()

15. asinkroni dohvat podataka s backenda
    - Asinkrona funkcija bakeCookie(): src/views/CookieGridView.vue, :34, await new Promise((resolve) => setTimeout(resolve, 800))

16. ostvariti asinkrono (lazy, po potrebi) učitavanje
    - Lazy loading NotFound komponente: src/router/index.js, :21, component: () => import('../views/NotFoundView.vue')

Upute za pokretanje:

1.  "npm install"

2.  "npm run dev" za Dev build ili "npm run build && npm run preview" za Production build

U "dist" folderu se nalaze buildane datoteke.
