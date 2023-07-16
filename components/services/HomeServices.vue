<template>
  <div v-if="services && services.data">
    <div class="container mt-80">
      <div class="row">
        <template v-for="service in services.data" :key="service.id">
          <SingleService :id="service.id" :iconUrl="service.attributes.Logo.data?.attributes?.url" :title="service.attributes.Title" :desc="service.attributes.Description" delay="130" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { StrapiLocale } from "@nuxtjs/strapi/dist/runtime/types";
import SingleService from "./single-service/SingleService.vue";
import { Service } from "~/types/service";

const { locale } = useI18n()

const { data: services } = useAsyncData(
  'services',
  async () => {
    const { find } = useStrapi()
    const services = await find<Service>('services', {
      locale: locale.value as StrapiLocale,
      populate: '*'
    })
    return services
  }
)
</script>