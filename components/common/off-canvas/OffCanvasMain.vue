<template>
 <div :class="`offcanvas__full ${isOffCanvasOpen?'offcanvas-full-opened':''}`">
    <div class="offcanvas__full-wrapper d-flex flex-column justify-content-between">
      <div class="offcanvas__full-inner">
          <div class="offcanvas__close">
            <button @click="closeOffcanvas" class="offcanvas__full-close-btn offcanvas-close-btn">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="1">
                  <path d="M31 1L1 31" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M1 1L31 31" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  </svg>                                               
            </button>
          </div>
          <div class="offcanvas__full-content">

            <div class="mobile-menu fix mb-40 menu-counter mean-container">
                <div class="mean-bar">
                  <!-- MobileMenus start -->
                  <mobile-menus/>
                  <!-- MobileMenus end -->
                </div>
            </div>

          </div>
      </div>
      <div class="offcanvas__full-footer">
          <div class="row align-items-center">
            <div class="col-xl-3">
                <div class="offcanvas__full-link">
                  <nuxt-link href="/policy">Privacy Policy</nuxt-link>
                  <nuxt-link href="/terms">Use of terms</nuxt-link>
                </div>
            </div>
            <div class="col-xl-9 order-first order-xl-last">
                <div class="offcanvas__full-right d-lg-flex justify-content-xl-end align-items-center">
                  <div class="offcanvas__info d-flex flex-wrap justify-content-lg-end align-items-center">
                      <div class="offcanvas__info-item">
                        <h4 class="offcanvas__info-item-title">Information</h4>
                        <p><a href="tel:964-742-44-763">+964 742 44 763</a></p>
                        <p><a href="mailto:support@harry.com">support@harry.com</a></p>
                      </div>
                      <div class="offcanvas__info-item">
                        <h4 class="offcanvas__info-item-title">Address</h4>
                        <p><a href="https://www.google.com/maps/place/102+Thompson+St,+New+York,+NY+10012,+USA/@40.7255437,-74.004061,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2598c338f691d:0x6d5f394e7a1962cc!8m2!3d40.7255397!4d-74.0018723" target="_blank">32 East Trusel Court <br> North Tonawanda, NY 14120</a></p>
                      </div>
                  </div>
                  <div class="offcanvas__full-social offcanvas__social-3">
                      <social/>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </div>
</div>
<div class="body-overlay"></div>
</template>

<script>
import Social from '~~/components/social/Social.vue';
// import { useUtilsStore } from '~~/store/utils';
import MobileMenus from './MobileMenus.vue';

  export default {
  components: { MobileMenus, Social },
  data(){
    return {
      isOffCanvasOpen:false,
    }
  },
  methods:{
    openOffcanvas(){
      this.isOffCanvasOpen = true
    },
    closeOffcanvas(){
      this.isOffCanvasOpen = false
    }
  },
  }
</script>