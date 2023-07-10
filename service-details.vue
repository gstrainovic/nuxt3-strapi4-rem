<template>
  <div>
    <LayoutOne>
      <!-- <service-details-breadcrumb/> -->
      <service-details-area/>
    </LayoutOne>  
  </div>
</template>

<script>
import LayoutOne from '~/layouts/LayoutOne.vue';
// import ServiceDetailsBreadcrumb from '~~/components/breadcrumb/ServiceDetailsBreadcrumb.vue';
import ServiceDetailsArea from '~~/components/service-details/ServiceDetailsArea.vue';

export default {
  components: {
    // ServiceDetailsBreadcrumb,
    ServiceDetailsArea,
  },
  setup() {
    useHead({
      title: "remmen.io services",
    });
  },
};
</script>
