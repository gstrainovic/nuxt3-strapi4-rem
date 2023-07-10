<template>
  <div v-if="faq_items" class="services__details-faq faq__style-3 mt-60">
    <h3 class="services__details-faq-title">Any questions find here.</h3>
    <div class="faq__tab-content tp-accordion">
      <div class="accordion" id="general_accordion">
        <single-faq v-for="(item, i) in faq_items" :key="i" :item="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SingleFaq from "./SingleFaq.vue";
import { StrapiLocale } from "@nuxtjs/strapi/dist/runtime/types";
import { Service } from "~/types/service";

const { locale } = useI18n()

const { find } = useStrapi()
const services = await find<Service>('services', {
  locale: locale.value as StrapiLocale,
})

const faq_items = services.data.map((service) => {
  return {
    id: service.id,
    title: service.attributes.Title,
    desc: service.attributes.Description,
    parent: "general_accordion",
  };
});

</script>
