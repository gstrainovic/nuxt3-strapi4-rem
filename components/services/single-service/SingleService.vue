<template>
  <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
    <div class="services__item transition-3 mb-30 fix wow fadeInUp" data-sal="slide-up" :data-sal-delay="delay"
      data-sal-duration="1000">
      <div class="services__shape">
      </div>
      <div class="services__item-inner">
        <div class="services__icon">
          <img :src="iconUrl" v-if="iconUrl" alt="Icon"/>
          <span v-html="icon" v-else></span>
        </div>
        <div class="services__content">
          <h3 class="services__title">
            <nuxt-link :to="'/service-details/' + id ">{{ title }}</nuxt-link>
          </h3>
          <p>
            {{ desc }}
          </p>

          <div class="services__btn">
            <nuxt-link :to="'/service-details/' + id" class="tp-btn-border">Explore Section <i
                class="fa-regular fa-angle-right"></i>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.services__icon * {
  width: 200px;
  height: 200px;
}
</style>


<script>
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  props: {
    id: String,
    iconUrl: String,
    icon: String,
    title: String,
    desc: String,
    delay: String,
  }
};
</script>
