<template>
  <footer class="app-footer">
    <h2 class="app-footer__heading">Example app</h2>
    <nav class="app-footer__nav">
      <ul class="app-footer__menu">
        <li><NuxtLink class="app-footer__link" to="/about">About</NuxtLink></li>
        <li>
          <NuxtLink class="app-footer__link" to="#">Contact</NuxtLink>
        </li>
        <li>
          <NuxtLink class="app-footer__link" to="#">Careers</NuxtLink>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
.app-footer {
  margin-top: auto;
  padding: var(--pocds-space-size-600); /* Use token value from design system */
  background-color: var(--pocds-color-primary);
  color: #fff;
}

.app-footer__heading {
  margin: 0;
  text-align: center;
}

.app-footer__menu {
  margin: 0;
  padding: 0;
  display: flex;
  margin-top: var(--pocds-space-size-400);
  gap: var(--pocds-space-size-400);
  list-style: none;
}

@media (min-width: 40em) {
  .app-footer__menu {
    display: flex;
    justify-content: center;
  }
}

.app-footer__link {
  padding: var(--pocds-space-size-200);
  color: #fff;
  text-decoration: none;
}

.app-footer__link:hover {
  text-decoration: underline;
}

.app-footer__link.nuxt-link-active {
  text-decoration: underline;
}
</style>
