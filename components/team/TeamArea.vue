<template>
  <section class="team__area pt-100 pb-40">
    <div class="container">
      <div class="row">
        <div
          v-for="(item) in author" :key="item.id"
          class="col-xl-3 col-lg-3 col-md-4 col-sm-6"
        >
          <single-team :id="item.id" :item="item.attributes"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { StrapiLocale } from '@nuxtjs/strapi/dist/runtime/types';
import { Author } from 'types/author';
import SingleTeam from "./single-team/SingleTeam.vue";

const { id }  = useRoute().params as { id: string }
const { find } = useStrapi()
const { locale } = useI18n()

const temp = await find<Author>('authors', {
    locale: locale.value as StrapiLocale,
    populate: '*', // populate all relations
})

const author = temp.data
</script>
