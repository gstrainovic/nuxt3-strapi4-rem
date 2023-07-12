<template>
  {{ service_details }}

 <section class="faq__area p-relative z-index-1 pt-120 pb-105">
  <div class="container">
      <div class="row">
        <div class="col-xxl-5 col-xl-5 col-lg-6">
            <div class="faq__wrapper">
              <div class="section__title-wrapper-7 mb-60">
                  <span class="section__title-pre-7">Tab Accordion</span>
                  <h3 class="section__title-7">Accordion <br> with 
                    <span class="section__title-7-highlight">
                        rounded tab
                        <svg width="240" height="22" viewBox="0 0 240 22" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.440833 21.1152C78.9497 6.16225 158.05 4.53412 235.949 13.8239C237.497 14.0088 239.796 12.4065 239.988 9.93474C240.181 7.4176 238.026 5.44088 236.474 5.2332C157.99 -5.31675 79.1936 0.359501 0.316568 19.7785C-0.184784 19.9023 -0.0511379 21.2092 0.440833 21.1152Z" fill="#2CAE76"/>
                        </svg>                                 
                    </span>
                  </h3>
              </div>

              <div class="faq__tab tp-tab pr-200">
                  <nav>
                    <div class="nav nav-tabs flex-column" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-general-tab-2" data-bs-toggle="tab" data-bs-target="#nav-general" type="button" role="tab" aria-controls="nav-general" aria-selected="true">
                          <span>
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.318 1.74134L2.467 5.52653C1.657 6.1574 1 7.50024 1 8.51863V15.1968C1 17.2877 2.701 19 4.789 19H15.211C17.299 19 19 17.2877 19 15.2058V8.6448C19 7.55431 18.271 6.1574 17.38 5.53554L11.818 1.63319C10.558 0.749983 8.533 0.795045 7.318 1.74134Z" stroke="#525258" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10 15.3951V12.6914" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>                                          
                          </span>
                          General Questions
                        </button>
                    </div>
                  </nav>
              </div>
            </div>
        </div>
        <div class="col-xxl-7 col-xl-7 col-lg-6">
            <div class="faq__tab-content tp-accordion">
              <div class="tab-content" id="nav-tabContent-2">
                  <div class="tab-pane fade show active" id="nav-general" role="tabpanel" aria-labelledby="nav-general-tab-2">
                    <div class="accordion" id="general_accordion">
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="search">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesearch" aria-expanded="true" aria-controls="collapsesearch">
                              Global search engine optimization
                            </button>
                          </h2>
                          <div id="collapsesearch" class="accordion-collapse collapse show" aria-labelledby="search" data-bs-parent="#general_accordion">
                            <div class="accordion-body">
                              <p>A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders...</p>
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
import TabContent from '~~/components/faqs/StartUpFaq/TabContent.vue';
import { StrapiLocale } from "@nuxtjs/strapi/dist/runtime/types";
import SingleService from "./single-service/SingleService.vue";
import { Service, ServiceDetail } from "~/types/service";

const { locale } = useI18n()

const { data: service_details } = useAsyncData(
  'service-details',
  async () => {
    const { find } = useStrapi()
    const service_details = await find<ServiceDetail>('service-details', {
      locale: locale.value as StrapiLocale,
    })
    return service_details
  }
)

</script>
