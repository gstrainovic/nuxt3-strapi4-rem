<template>
  <LayoutOne>
    <HomeJumbotron />
    <elements-accordion-main />
  </LayoutOne>
</template>

<script setup lang="ts">
import LayoutOne from '~/layouts/LayoutOne.vue';
import ElementsAccordionMain from '~/elements/elements-accordion/ElementsAccordionMain.vue';

useHead({
  title: "Element Accordion - 2Creative Agency & Portfolio Vue Nuxt 3 Template",
});
</script>
