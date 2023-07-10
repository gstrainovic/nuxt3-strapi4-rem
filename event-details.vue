<template>
  <div>
    <event-details-area/>
    <back-to-top />
  </div>
</template>

<script>
import EventDetailsArea from '~~/components/event-details/EventDetailsArea.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    EventDetailsArea,
    BackToTop,
  },
  setup() {
    useHead({
      title: "remmen.io - events",
    });
  },
};
</script>
