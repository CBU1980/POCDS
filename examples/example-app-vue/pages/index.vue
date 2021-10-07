<script>
import 'pocds-grid/pocds-grid'
import 'pocds-card/pocds-card'
import 'pocds-heading/pocds-heading'

export default {}
</script>

<template>
  <div class="home">
    <img
      src="https://placehold.co/1200x600?text=Mega+banner"
      alt="Grey area that display image width and height"
      class="home__hero"
    />
    <section class="home__features">
      <div class="app-container">
        <pocds-heading class="home__heading" level="2"
          >So many features</pocds-heading
        >
        <pocds-grid>
          <pocds-card title="This is a card">
            <img
              slot="image"
              src="https://placehold.co/640x360?text=Card+image"
              alt="Beautiful placeholder picture"
            />
            This is just plain text.
            <NuxtLink slot="footer" class="app-header__link" to="/about"
              >Go to about page</NuxtLink
            >
          </pocds-card>
          <pocds-card title="This is a card">
            <img
              slot="image"
              src="https://placehold.co/640x360?text=Card+image"
              alt="Beautiful placeholder picture"
            />

            This is just plain text.
            <NuxtLink slot="footer" class="app-header__link" to="/about"
              >Go to about page</NuxtLink
            >
          </pocds-card>
          <pocds-card title="This is a card">
            <img
              slot="image"
              src="https://placehold.co/640x360?text=Card+image"
              alt="Beautiful placeholder picture"
            />

            This is just plain text.
            <NuxtLink slot="footer" class="app-header__link" to="/about"
              >Go to about page</NuxtLink
            >
          </pocds-card>
        </pocds-grid>
      </div>
    </section>
    <section class="home__features">
      <div class="app-container">
        <pocds-heading class="home__heading" level="2"
          >Even more features</pocds-heading
        >
        <pocds-grid>
          <pocds-card title="This is a card">
            <img
              slot="image"
              src="https://placehold.co/640x360?text=Card+image"
              alt="Beautiful placeholder picture"
            />
            This is just plain text.
            <NuxtLink slot="footer" class="app-header__link" to="/about"
              >Go to about page</NuxtLink
            >
          </pocds-card>
          <pocds-card title="This is a card">
            <img
              slot="image"
              src="https://placehold.co/640x360?text=Card+image"
              alt="Beautiful placeholder picture"
            />

            This is just plain text.
            <NuxtLink slot="footer" class="app-header__link" to="/about"
              >Go to about page</NuxtLink
            >
          </pocds-card>
          <pocds-card title="This is a card">
            <img
              slot="image"
              src="https://placehold.co/640x360?text=Card+image"
              alt="Beautiful placeholder picture"
            />

            This is just plain text.
            <NuxtLink slot="footer" class="app-header__link" to="/about"
              >Go to about page</NuxtLink
            >
          </pocds-card>
        </pocds-grid>
      </div>
    </section>
  </div>
</template>
<style scoped>
.home__hero {
  display: block;
  width: 100%;
  max-width: 100%;
  max-height: 40vh;
  object-fit: cover;
  margin-bottom: var(--pocds-space-size-600);
}

.home__heading {
  --pocds-heading-margin: var(--pocds-space-size-400);

  text-align: center;
  font-size: var(--pocds-font-size-size-700);
}

.home__heading::after {
  margin-left: auto;
  margin-right: auto;
  content: '';
  display: block;
  margin-bottom: var(--pocds-space-size-600);
  width: 3rem;
  height: 0.25rem;
  background-color: var(--pocds-color-secondary);
}

.home__features {
  --pocds-grid-columns: 1fr;
}

@media (min-width: 40em) {
  .home__features {
    --pocds-grid-columns: 1fr 1fr 1fr;
  }
}

.home__features:nth-of-type(2) {
  padding-bottom: var(--pocds-space-size-400);
  padding-top: var(--pocds-space-size-400);
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
