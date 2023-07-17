<template>
  <div
    class="event__item white-bg transition-3 wow fadeInUp"
    data-sal="slide-up" data-sal-delay="150" data-sal-duration="1000"
  >
    <div class="row align-items-center">
      <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
        <h3 class="event__title">
          <nuxt-link :to="localePath('/event-details') + '/' + id">{{title}}</nuxt-link>
        </h3>
      </div>
      <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6">
        <div class="event__speaker">
          <ul>
            <li v-for="author in authors" :key="author.id">
              <img :src="author.attributes.Picture.data.attributes.formats.thumbnail.url" :alt="author.attributes.Name" />
            </li>
          </ul>
          <span>{{ $t('speaker') }}</span>
        </div>
      </div>
      <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-6">
        <div class="event__meta">
          <span>{{date}}</span>
        </div>
      </div>
      <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
        <div class="event__more float-lg-end">
          <nuxt-link :to="'/checkout/' + id" class="tp-btn-border-pink">
            {{ $t('buyTickets') }}
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 9L5 5L1 1"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  props:{
    id:String,
    title:String,
    authors:Array,
    date:String,
  }
}
</script>
