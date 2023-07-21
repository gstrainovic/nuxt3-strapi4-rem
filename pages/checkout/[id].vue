<template>
  <LayoutOne>
    <HomeJumbotron />
    <checkout-area />
  </LayoutOne>
</template>

<script setup lang="ts">
import LayoutOne from '~/layouts/LayoutOne.vue';
import CheckoutArea from '~~/components/checkout/CheckoutArea.vue';
import { StrapiLocale } from '@nuxtjs/strapi/dist/runtime/types';

useHead({
  title: "Checkout - Creative Agency & Portfolio Vue Nuxt 3 Template",
});

</script>
