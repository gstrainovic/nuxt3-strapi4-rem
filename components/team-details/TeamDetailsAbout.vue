<template>
  <div class="team__details-about">
    <div class="container">
      <div class="team__details-about-border pt-90 pb-65">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div
              class="team__details-about-content"
            >
            <p v-html="renderDescription"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { StrapiLocale } from '@nuxtjs/strapi/dist/runtime/types';
import { Author } from 'types/author';

const { id }  = useRoute().params as { id: string }
const { findOne } = useStrapi()
const { locale } = useI18n()

import MarkdownIt from 'markdown-it'
const mdRenderer = new MarkdownIt()


const { data: author } = useAsyncData(
  'author',
  async () => {
    const temp = await findOne<Author>('authors', id, {
      locale: locale.value as StrapiLocale,
      populate: '*', // populate all relations
    })
    return temp && temp.data.attributes
  }
)

const renderDescription = ref('')
onMounted(() => {
  renderDescription.value = mdRenderer.render(author.value?.Description_Long || '')
})

</script>
