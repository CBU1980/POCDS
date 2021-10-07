<template>
  <header class="app-header">
    <NuxtLink class="app-header__logo" to="/">Example app</NuxtLink>
    <nav class="app-header__nav">
      <ul class="app-header__menu">
        <li><NuxtLink class="app-header__link" to="/about">About</NuxtLink></li>
        <li>
          <NuxtLink class="app-header__link" to="#">Contact</NuxtLink>
        </li>
        <li>
          <NuxtLink class="app-header__link" to="#">Careers</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
.app-header {
  padding: var(--pocds-space-size-400); /* Use token value from design system */
  background-color: var(--pocds-color-primary);
  color: #fff;
}

@media (min-width: 40em) {
  .app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.app-header__logo {
  font-size: var(--pocds-font-size-size-600);
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.app-header__menu {
  margin: 0;
  padding: 0;
  display: flex;
  margin-top: var(--pocds-space-size-400);
  gap: var(--pocds-space-size-400);
  list-style: none;
}

@media (min-width: 40em) {
  .app-header__menu {
    margin-top: 0;
  }
}

.app-header__link {
  padding: var(--pocds-space-size-200);
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

.app-header__link:hover {
  text-decoration: underline;
}

.app-header__link.nuxt-link-active {
  background: #fff;
  color: var(--pocds-color-primary);
}
</style>
