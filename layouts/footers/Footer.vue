<template>
  <footer>
    <div class="footer__area" data-bg-color="footer-bg">
      <div class="footer__top">
        <div class="container">
          <div class="row">
            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div class="footer__widget mb-50 footer-col-1">
                <div class="footer__logo">
                  <nuxt-link href="/">
                    <img src="~/assets/img/logo/logo.svg" alt="">
                  </nuxt-link>
                </div>
                <div class="footer__widget-content">
                  <div class="footer__info">
                    <h4 style="color:white">Through a unique combination of engineering expertise.</h4>
                    <div class="footer__contact">
                      <div class="footer__contact-mail flex-column" style="margin: 20px 0;">
                        <p style="margin: 5px;">Email us:</p>
                        <span style="margin: 5px;"><a href="mailto:support@harry.com">info@remmen.io</a></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="footer__widget mb-50 footer-col-2">
                <h3 class="footer__widget-title">Navigation</h3>
                <div class="footer__widget-content">
                  <ul>
                    <li><nuxt-link href="/">Home</nuxt-link></li>
                    <li><nuxt-link href="/about">About</nuxt-link></li>
                    <li><nuxt-link href="/services">Service</nuxt-link></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><nuxt-link href="/blog-grid">News</nuxt-link></li>
                    <li><nuxt-link href="/contact">Contact</nuxt-link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="footer__widget mb-50 footer-col-3">
                <h3 class="footer__widget-title">Services</h3>
                <div class="footer__widget-content">
                  <ul>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- image popup start -->
   <!-- <image-popup ref="image_popup" :images="qrcodeImg" /> -->
  <!-- image popup end -->
</template>

<script>
import ImagePopup from '~~/components/common/modals/ImagePopup.vue';
import Social from '~~/components/social/Social.vue';
// import qrcode from '~/assets/img/icon/qrcode.png';

export default {
  components: { Social, ImagePopup },
  // data () {
  //   return {
  //     qrcodeImg:[qrcode]
  //   }
  // },
  methods:{
    handleImagePopup(index){
      this.$refs.image_popup.showImg(index);
    }
  },
  }
</script>

