<template>
  <article class="facts">
    <h1>Did You Know?</h1>

    <section>
      <h2>General Cookie Facts</h2>
      <ul>
        <li>
          People in the United States purchase over <strong>2 billion cookies</strong> per year.
        </li>
        <li><strong>95%</strong> of American households eat cookies.</li>
        <li>Half the cookies baked at home are <strong>chocolate chip</strong>.</li>
        <li>The average American eats <strong>35,000 cookies</strong> in a lifetime.</li>
        <li>
          Santa Claus eats an estimated <strong>336 million cookies</strong> on Christmas Eve.
        </li>
        <li>Americans spend <strong>$550 million</strong> on Oreos each year.</li>
        <li>Cookie jars became popular in the 1930s during the Great Depression.</li>
        <li>
          Fun fact: Cookie Monster has never eaten real cookies — they were painted rice cakes!
        </li>
      </ul>
    </section>

    <section>
      <h2>Animal Cracker Facts</h2>
      <ul>
        <li>Introduced in <strong>1902</strong> by Nabisco.</li>
        <li>The circus-themed box was inspired by P. T. Barnum's circus.</li>
        <li>
          Over the years, Animal Crackers have featured <strong>54 different animals</strong>.
        </li>
      </ul>
    </section>

    <section>
      <h2>Biscotti Facts</h2>
      <p>The word <em>biscotti</em> comes from Italian and means “twice cooked.”</p>
      <p>The dough is baked as a loaf, sliced, and baked again — the same idea appears in:</p>
      <ul>
        <li>German: <em>Zwieback</em> (“twice baked”)</li>
        <li>Dutch: <em>Beschuit</em> (Dutch rusk)</li>
      </ul>
    </section>

    <section>
      <h2>Chocolate Chip Cookie Facts</h2>
      <ul>
        <li>Invented by accident by <strong>Ruth Graves Wakefield</strong>.</li>
        <li>Chocolate chips don't melt fully because they contain less cocoa butter.</li>
        <li>
          Massachusetts named the chocolate chip cookie its official cookie in
          <strong>1997</strong>.
        </li>
        <li>
          Favorite cookies among Americans:
          <ul>
            <li>Chocolate Chip: <strong>53%</strong></li>
            <li>Peanut Butter: 16%</li>
            <li>Oatmeal: 15%</li>
          </ul>
        </li>
      </ul>
    </section>

    <section>
      <h2>Cookie Records</h2>
      <ul>
        <li>Most cookies baked in one hour: <strong>4,695</strong> (Hassett's Bakery, Ireland).</li>
        <li>
          Biggest cookie ever: <strong>102 feet wide</strong>, over <strong>40,000 pounds</strong>.
        </li>
        <li>
          Tallest cookie tower: <strong>6 feet</strong>, made from <strong>22,800 cookies</strong>.
        </li>
      </ul>
    </section>

    <div class="source-wrapper">
      <a
        class="source-link"
        href="https://www.dogtownpizza.com/blog/national-cookie-day-cookie-facts-history/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Source
      </a>
    </div>
  </article>
</template>

<style scoped>
.facts {
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  line-height: 1.7;
}

h1 {
  font-size: clamp(2rem, 5vw, 2.5rem);
  margin-bottom: 1.5rem;
  text-align: center;
}

section {
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.4rem;
  margin-bottom: 0.75rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.08);
  padding-bottom: 0.3rem;
}

p {
  margin-bottom: 0.75rem;
  color: var(--text);
}

ul {
  padding-left: 1.2rem;
}

li {
  margin-bottom: 0.4rem;
  color: var(--text);
}

li ul {
  margin-top: 0.4rem;
}

.source-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
}

.source-link {
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

.source-link:hover {
  background: rgba(255, 255, 255, 0.12);
  color: var(--text);
  transform: translateY(-1px);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
}

.source-link:active {
  transform: translateY(0);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
}

.source-link:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
</style>
