<template>
  <article class="about app-container">
    <img
      src="https://placehold.co/1200x600?text=Article+image"
      alt="Grey area that display image width and height"
      class="about__hero"
    />

    <div class="about__body">
      <pocds-heading level="1">About us</pocds-heading>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae
        auctor dolor. Aenean non laoreet velit, vel convallis est. Fusce id leo
        auctor, aliquam libero a, varius purus. Phasellus venenatis mi nec ipsum
        iaculis, nec
      </p>
      <h2>Heading 2</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae
        auctor dolor. Aenean non laoreet velit, vel convallis est. Fusce id leo
        auctor, aliquam libero a, varius purus. Phasellus venenatis mi nec ipsum
        iaculis, nec
      </p>
    </div>
  </article>
</template>

<script>
import 'pocds-heading/pocds-heading'
export default {}
</script>

<style scoped>
.about__hero {
  display: block;
  width: 100%;
  max-width: 100%;
  max-height: 40vh;
  object-fit: cover;
  margin-bottom: var(--pocds-space-size-600);
}

.about__body {
  margin-left: auto;
  margin-right: auto;
  max-width: 45em;
  width: 90%;
}
</style>
