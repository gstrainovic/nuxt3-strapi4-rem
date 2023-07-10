<template>
  <LayoutOne>
    <team-breadcrumb
      title="We’ve Most Talented Team Members"
      subtitle="Team Members"
    />
    <team-area />
  </LayoutOne>
</template>

<script setup lang="ts">
import LayoutOne from '~/layouts/LayoutOne.vue';
import TeamArea from "~/components/team/TeamArea.vue"
import TeamBreadcrumb from "~~/components/breadcrumb/CommonBreadcrumb.vue";

useHead({
  title: "Team - Creative Agency & Portfolio Vue Nuxt 3 Template",
});
</script>
