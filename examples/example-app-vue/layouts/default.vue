<template>
  <div class="app">
    <Header />
    <main class="app-main">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import 'pocds-button/pocds-button'
export default {}
</script>

<style>
@import 'pocds-design-tokens/build/brand-1/css/index';

body {
  margin: 0;
  font-family: var(--pocds-typography-family-base);
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-container {
  margin: var(--pocds-space-size-700) auto;
  max-width: 60em;
  padding: var(--pocds-space-size-400); /* Use token value from design system */
}

h1 {
  font-size: var(--pocds-font-size-size-800);
}

h2 {
  font-size: var(--pocds-font-size-size-600);
}

h3 {
  font-size: var(--pocds-font-size-size-500);
}
</style>
