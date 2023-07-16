<template>
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
                  <button v-for="(item, index) in accordionItems" :key="index" :class="'nav-link' + (index === 0 ? ' active' : '')" :id="'nav-' + item.id + '-tab'" :data-bs-toggle="'tab'" :data-bs-target="'#nav-' + item.id" :type="'button'" :role="'tab'" :aria-controls="'nav-' + item.id" :aria-selected="index === 0">
                    <span>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.318 1.74134L2.467 5.52653C1.657 6.1574 1 7.50024 1 8.51863V15.1968C1 17.2877 2.701 19 4.789 19H15.211C17.299 19 19 17.2877 19 15.2058V8.6448C19 7.55431 18.271 6.1574 17.38 5.53554L11.818 1.63319C10.558 0.749983 8.533 0.795045 7.318 1.74134Z" stroke="#525258" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 15.3951V12.6914" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>                                          
                    </span>
                    {{ item.title }}
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div class="col-xxl-7 col-xl-7 col-lg-6">
          <div class="faq__tab-content tp-accordion">
            <div class="tab-content" :id="'nav-tabContent-' + activeTab">
              <div v-for="(item, index) in accordionItems" :key="index" :class="'tab-pane fade' + (index === 0 ? ' show active' : '')" :id="'nav-' + item.id" :role="'tabpanel'" :aria-labelledby="'nav-' + item.id + '-tab'">
                <div class="accordion" :id="item.id + '_accordion'">
                  <div v-for="(subItem, subIndex) in item.subItems" :key="subIndex" class="accordion-item">
                    <h2 class="accordion-header" :id="item.id + '_' + subIndex">
                      <button class="accordion-button" type="button" :data-bs-toggle="'collapse'" :data-bs-target="'#' + item.id + '_' + subIndex + '_collapse'" :aria-expanded="subIndex === 0" :aria-controls="item.id + '_' + subIndex + '_collapse'">
                        {{ subItem.title }}
                      </button>
                    </h2>
                    <div :id="item.id + '_' + subIndex + '_collapse'" class="accordion-collapse collapse" :class="subIndex === 0 ? 'show' : ''" :aria-labelledby="item.id + '_' + subIndex" :data-bs-parent="'#' + item.id + '_accordion'">
                      <div class="accordion-body">
                        <p>{{ subItem.content }}</p>
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


import { StrapiLocale } from "@nuxtjs/strapi/dist/runtime/types";
import { ServiceDetail, Service } from "~/types/service";

const { locale } = useI18n()
const { find , findOne} = useStrapi()

const { id }  = useRoute().params as { id: string }

let service_details: ServiceDetail[] = []
if (!id) {
  const { data } = await find<ServiceDetail>('service-details', {
    locale: locale.value as StrapiLocale,
  })
  service_details = data.map((item) => item.attributes)
} else {
  const services  = await findOne<Service>('services', id, {
    locale: locale.value as StrapiLocale,
    populate: 'service_details'
  })
  service_details = services.data.attributes.service_details.data.map((item) => item.attributes)
  
}

// group service_details by category like this:
const grouped_service_details: { category: string; items: ServiceDetail[] }[] = service_details.reduce((acc: { category: string; items: ServiceDetail[] }[], item: ServiceDetail) => {
  const category: string = item.Category
  const existing_category: { category: string; items: ServiceDetail[] } | undefined = acc.find((i) => i.category === category)
  if (existing_category) {
    existing_category.items.push(item)
  } else {
    acc.push({ category, items: [item] })
  }
  return acc
}, [])

//add category_id like this item.attributes.Category.replace(/[^a-zA-Z0-9]/g, '') on grouped_service_details
const accordionItems = grouped_service_details.map((item) => {
  return {
    id: item.category.replace(/[^a-zA-Z0-9]/g, ''),
    title: item.category,
    subItems: item.items.map((subItem) => {
      return {
        title: subItem.Title,
        content: subItem.Description
      }
    })
  }
})

let activeTab = accordionItems[0]?.id;
</script>