<template>
  <LayoutOne>
    <HomeJumbotron />
    <HomeEvents/>
    <back-to-top />
  </LayoutOne>
</template>

<script setup lang="ts">
import EventDetailsArea from '~~/components/event-details/EventDetailsArea.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';
import LayoutOne from '~/layouts/LayoutOne.vue';
import HomeEvents from "~/components/events/HomeEvents.vue";

useHead({
  title: "remmen.io - events",
});
</script>
