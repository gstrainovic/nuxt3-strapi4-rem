<template>
  <LayoutOne>
    <HomeJumbotron />
    <HomeServices/>
    <HomeEvents/>
    <BlogGridArea/>
  </LayoutOne>
</template>

<script setup lang="ts">

import LayoutOne from '~/layouts/LayoutOne.vue';
import HomeServices from "~/components/services/HomeServices.vue";
import HomeEvents from "~/components/events/HomeEvents.vue";
import BlogGridArea from "~/components/blogs/BlogGridArea.vue";

useHead({
  title: "remmen.io",
});

</script>