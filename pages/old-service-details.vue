<template>
    <LayoutOne>
      <service-details-area />
    </LayoutOne>
</template>

<script setup lang="ts">
import LayoutOne from '~/layouts/LayoutOne.vue';
import ServiceDetailsArea from '~~/components/service-details/ServiceDetailsArea.vue';

useHead({
  title: "remmen.io services",
});
</script>
