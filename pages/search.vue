<template>
  <LayoutOne>
  <search-area />
  <search-items />
</LayoutOne>

</template>

<script lang="ts" setup>
import SearchArea from '~~/components/search/SearchArea.vue';
import SearchItems from '~~/components/search/SearchItems.vue';
import LayoutOne from '~/layouts/LayoutOne.vue';

useHead({
  title: "Search - Creative Agency & Portfolio Vue Nuxt 3 Template",
});
</script>
