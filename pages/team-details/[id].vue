<template>
  <LayoutOne>
    <team-details-area />
    <team-details-about />
  </LayoutOne>
</template>

<script setup lang="ts">
import TeamDetailsArea from '~~/components/team-details/TeamDetailsArea.vue';
import TeamDetailsAbout from '~~/components/team-details/TeamDetailsAbout.vue';
import LayoutOne from '~/layouts/LayoutOne.vue';

useHead({
  title: "Team - Creative Agency & Portfolio Vue Nuxt 3 Template",
});
</script>
