<template>
  <section class="event__details-area pt-120 pb-65">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="event__details-wrapper">
            <div class="event__details-content mb-50">
              <div class="event__details-tag mb-10">
                <span>{{ event.Type }}</span>
              </div>
              <h3 class="event__details-title">{{ event.Titel }}</h3>
              <div class="event__meta-wrapper event__details-meta mb-55 d-sm-flex flex-wrap align-items-center">
                <div class="event__meta-item">
                  <span>
                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 1V3.1" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"
                        stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M10.1 1V3.1" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"
                        stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M1.35001 5.96295H13.25" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"
                        stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M13.6 5.54999V11.5C13.6 13.6 12.55 15 10.1 15H4.5C2.05 15 1 13.6 1 11.5V5.54999C1 3.44999 2.05 2.04999 4.5 2.04999H10.1C12.55 2.04999 13.6 3.44999 13.6 5.54999Z"
                        stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M9.88629 9.18997H9.89257" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M9.88629 11.2899H9.89257" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M7.29684 9.18997H7.30313" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M7.29684 11.2899H7.30313" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M4.70602 9.18997H4.71231" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M4.70602 11.2899H4.71231" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                    {{event.Date}}
                  </span>
                  <span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 8C15 11.864 11.864 15 8 15C4.136 15 1 11.864 1 8C1 4.136 4.136 1 8 1C11.864 1 15 4.136 15 8Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M10.5826 10.2259L8.41256 8.93093C8.03456 8.70693 7.72656 8.16793 7.72656 7.72693V4.85693"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    {{event.Time}}
                  </span>
                  <span>
                    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.09464 10.0239H4.56643V15.7834C4.56643 17.1273 5.29436 17.3993 6.18229 16.3914L12.2378 9.51196C12.9817 8.67203 12.6697 7.97609 11.5418 7.97609H9.07003V2.21659C9.07003 0.87271 8.3421 0.600734 7.45417 1.60865L1.3987 8.48804C0.662767 9.33597 0.97474 10.0239 2.09464 10.0239Z"
                        stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                    {{event.Location}}
                  </span>
                </div>
              </div>

              <div class="event__details-thumb m-img mb-60">
                <img :src="event.Picture.data.attributes.url" alt="event">
              </div>
            </div>
            <div class="event__details-inner">
              <div class="row">
                <div class="col-lg-8">
                  <div class="event__details-left pr-35">
                    <div class="event__details-about mb-50">
                      <h3 class="event__details-about-title">{{ $t('descriptionEvent') }}</h3>
                      <p v-html="renderDescription"></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="event__sidebar mt-5 ml-50">
                    <div class="event__widget mb-40">
                      <h3 class="event__widget-title">{{ $t('speaker') }}</h3>
                      <div class="event__widget-content">
                        <template v-for="author in event.authors.data" :key="author.Id">
                          <div class="event__speaker-item d-flex">
                            <div class="event__speaker-thumb w-img">
                              <img :src="author.attributes.Picture.data.attributes.formats.thumbnail.url" alt="">
                            </div>
                            <div class="event__speaker-content">
                              <h3 class="event__speaker-title">
                                <nuxt-link :to="`/team-details/${author.id}`">{{ author.attributes.Name }}</nuxt-link>
                              </h3>
                              <span class="event__speaker-designation">{{ author.attributes.Title }}</span>
                            </div>
                          </div>
                        </template>

                      </div>
                    </div>
                    <div class="event__widget mb-20">
                      <h3 class="event__widget-title">Event Info</h3>
                      <div class="event__widget-content">
                        <div class="event__details-info">
                          <div class="event__details-info-item d-flex align-items-start">
                            <div class="event__details-info-icon">
                              <span>
                                <svg width="22" height="24" viewBox="0 0 22 24" fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6.55554 1V4.33333" stroke="currentColor" stroke-width="1.5"
                                    stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                  <path d="M15.4446 1V4.33333" stroke="currentColor" stroke-width="1.5"
                                    stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                  <path d="M1.55573 8.8777H20.4446" stroke="currentColor" stroke-width="1.5"
                                    stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                  <path
                                    d="M21 8.2222V17.6666C21 21 19.3333 23.2222 15.4444 23.2222H6.55556C2.66667 23.2222 1 21 1 17.6666V8.2222C1 4.88886 2.66667 2.66664 6.55556 2.66664H15.4444C19.3333 2.66664 21 4.88886 21 8.2222Z"
                                    stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                  <path d="M15.1051 14H15.115" stroke="currentColor" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                  <path d="M15.1051 17.3332H15.115" stroke="currentColor" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                  <path d="M10.995 14H11.005" stroke="currentColor" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                  <path d="M10.995 17.3332H11.005" stroke="currentColor" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                  <path d="M6.88258 14H6.89256" stroke="currentColor" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                  <path d="M6.88258 17.3332H6.89256" stroke="currentColor" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                              </span>
                            </div>
                            <div class="event__details-info-content">
                              <h4 class="event__details-info-title">{{ $t('date') }}</h4>
                              <p>{{event.Date + ' ' + event.Time}}</p>
                            </div>
                          </div>
                          <div class="event__details-info-item d-flex align-items-start">
                            <div class="event__details-info-icon">
                              <span>
                                <svg width="20" height="22" viewBox="0 0 20 22" fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M9.99967 12.4329C11.7982 12.4329 13.2562 11.0357 13.2562 9.31213C13.2562 7.58857 11.7982 6.19135 9.99967 6.19135C8.20115 6.19135 6.74316 7.58857 6.74316 9.31213C6.74316 11.0357 8.20115 12.4329 9.99967 12.4329Z"
                                    stroke="currentColor" stroke-width="1.5" />
                                  <path
                                    d="M1.25338 7.49162C3.30957 -1.17054 16.7009 -1.16054 18.7467 7.50163C19.947 12.5829 16.6487 16.884 13.7575 19.5446C11.6596 21.4851 8.34045 21.4851 6.23207 19.5446C3.35132 16.884 0.0530624 12.5729 1.25338 7.49162Z"
                                    stroke="currentColor" stroke-width="1.5" />
                                </svg>
                              </span>
                            </div>
                            <div class="event__details-info-content">
                              <h4 class="event__details-info-title">{{ $t('place') }}</h4>
                              <p>{{event.Location}}</p>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div class="event__widget">
                    <div class="event__details-btn">
                      <nuxt-link href="/contact" class="tp-btn w-100">Make an Appointment</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script setup lang="ts">
import { StrapiLocale } from '@nuxtjs/strapi/dist/runtime/types';
import { Event } from "~/types/event";
import { ref, onMounted } from 'vue'
import MarkdownIt from 'markdown-it'
const mdRenderer = new MarkdownIt()

const { id }  = useRoute().params as { id: string }
const { findOne } = useStrapi()
const { locale } = useI18n()

const temp = await findOne<Event>('events', id, {
  locale: locale.value as StrapiLocale,
  populate: ['Picture', 'authors.Picture']
})

const event : Event  = temp.data.attributes

const renderDescription = ref('')
onMounted(() => {
  renderDescription.value = mdRenderer.render(event.Description)
})


</script>
