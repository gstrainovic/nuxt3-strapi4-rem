<template>
  <section class="team__details-area pt-100 p-relative z-index-1">
    <div class="team__details-shape">
    </div>
    <div class="container">
      <div class="team__details-border">
        <div class="row">
          <div class="col-xl-5 col-md-6">
            <div class="team__details-thumb" data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000">
              <img :src="author?.Picture.data.attributes.formats.small.url" :alt="author?.Picture.data.attributes.name" />
            </div>
          </div>
          <div class="col-xl-7 col-md-6">
            <div class="team__details-content pt-40 pl-15 pr-50" data-sal="slide-up" data-sal-delay="150" data-sal-duration="1000">
              <span class="team__details-subtitle">{{ author?.Title }}</span>
              <h3 class="team__details-title">{{author?.Name}}</h3>
              <div class="team__details-contact mb-10">
                <div class="team__details-contact-item d-flex align-items-center">
                  <div class="team__details-contact-icon mr-10 d-none">
                    <span>
                      <i class="fa-regular fa-envelope"></i>
                    </span>
                  </div>
                  <div class="team__details-contact-content">
                    <p><a href="mailto:hello@website.com">{{author?.email}}</a></p>
                  </div>
                </div>
              </div>
              <p>{{ author?.Description }}</p>
              <!-- <div class="team__details-social">
                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { StrapiLocale } from '@nuxtjs/strapi/dist/runtime/types';
import { Author } from 'types/author';

const { id }  = useRoute().params as { id: string }
const { findOne } = useStrapi()
const { locale } = useI18n()


let temp: any = null
try {
  temp = await findOne<Author>('authors', id, {
    locale: locale.value as StrapiLocale,
    populate: '*', // populate all relations
})  
} catch (error) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

const author = temp && temp.data.attributes

</script>
