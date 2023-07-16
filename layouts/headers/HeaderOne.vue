<style>
.header__transparent {
  margin-top: 15px;
}
</style>

<template>
  <header>
    <div
      :class="`header__area ${
        header_solid ? 'header__white-solid' : 'header__transparent'
      }
      ${header_black ? 'header__black' : ''}`"
    >
      <div
        :class="`header__bottom header__sticky ${
          header_solid ? '' : `header__bottom-border${transparent ? '-3' : ''}`
        } ${isSticky ? 'header-sticky' : ''}`"
        id="header-sticky"
      >
        <div class="container">
          <div class="mega-menu-wrapper p-relative">
            <div class="row align-items-center">
              <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-5 col-8">
                <div class="logo logo-border">
                  <nuxt-link :to="localePath('/')">
                    <img
                      src="~/assets/img/logo/logo4.svg"
                      alt="logo2"
                    />
                  </nuxt-link>
                </div>
              </div>
              <div class="col-xxl-7 col-xl-8 col-lg-8 d-none d-lg-block text-left">
                <div class="main-menu main-menu-ff-space">
                  <nav id="mobile-menu">
                    <!-- menus start -->
                    <menus />
                    <!-- menus end -->
                  </nav>
                </div>
              </div>
              <div class="col-xxl-3 col-xl-2 col-lg-2 col-md-8 col-sm-7 col-4">
                <div
                  class="header__bottom-right d-flex justify-content-end align-items-center pl-30"
                >
                  <div class="header__action d-none d-xl-flex">
                    <ul>
                      <li>
                        <a
                          @click.prevent="handleSearch"
                          href="#"
                          class="search-open-btn"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M19.0002 19.0002L17.2002 17.2002"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                            @click.prevent="handleSearch"
                            href="#"
                            class="search-open-btn"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="25" height="25" viewBox="0 0 256 256" xml:space="preserve">
                          <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
	                          <path d="M 75.546 78.738 H 14.455 C 6.484 78.738 0 72.254 0 64.283 V 25.716 c 0 -7.97 6.485 -14.455 14.455 -14.455 h 61.091 c 7.97 0 14.454 6.485 14.454 14.455 v 38.567 C 90 72.254 83.516 78.738 75.546 78.738 z M 14.455 15.488 c -5.64 0 -10.228 4.588 -10.228 10.228 v 38.567 c 0 5.64 4.588 10.229 10.228 10.229 h 61.091 c 5.64 0 10.228 -4.589 10.228 -10.229 V 25.716 c 0 -5.64 -4.588 -10.228 -10.228 -10.228 H 14.455 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: currentColor; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                            <path d="M 11.044 25.917 C 21.848 36.445 32.652 46.972 43.456 57.5 c 2.014 1.962 5.105 -1.122 3.088 -3.088 C 35.74 43.885 24.936 33.357 14.132 22.83 C 12.118 20.867 9.027 23.952 11.044 25.917 L 11.044 25.917 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: currentColor; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                            <path d="M 46.544 57.5 c 10.804 -10.527 21.608 -21.055 32.412 -31.582 c 2.016 -1.965 -1.073 -5.051 -3.088 -3.088 C 65.064 33.357 54.26 43.885 43.456 54.412 C 41.44 56.377 44.529 59.463 46.544 57.5 L 46.544 57.5 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: currentColor; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                            <path d="M 78.837 64.952 c -7.189 -6.818 -14.379 -13.635 -21.568 -20.453 c -2.039 -1.933 -5.132 1.149 -3.088 3.088 c 7.189 6.818 14.379 13.635 21.568 20.453 C 77.788 69.973 80.881 66.89 78.837 64.952 L 78.837 64.952 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: currentColor; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                            <path d="M 14.446 68.039 c 7.189 -6.818 14.379 -13.635 21.568 -20.453 c 2.043 -1.938 -1.048 -5.022 -3.088 -3.088 c -7.189 6.818 -14.379 13.635 -21.568 20.453 C 9.315 66.889 12.406 69.974 14.446 68.039 L 14.446 68.039 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: currentColor; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                          </g>
                        </svg>
                        </a>
                      </li>
                      <li class="language-selector">
                         <Language/>
                      </li>
                      <!--
                      <li>
                        <button
                            @click="handleOffCanvas"
                            type="button"
                            :class="`hamburger-btn ${
                            header_solid || header_black ? 'hamburger-btn-black' : ''
                          } offcanvas-open-btn`"
                        >
                          <span></span>
                          <span></span>
                          <span></span>
                        </button>
                      </li>
                      -->
                    </ul>
                  </div>
                  <div class="header__hamburger ml-50 d-xl-none">
                    <button
                        @click="handleOffCanvas"
                        type="button"
                        :class="`hamburger-btn ${
                            header_solid || header_black ? 'hamburger-btn-black' : ''
                          } offcanvas-open-btn`"
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </div>


                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- search popup start -->
    <SearchPopup ref="SearchPopup" />
    <!-- search popup end -->
  </header>

  <!-- off canvas full start -->
  <off-canvas-main ref="off_canvas" v-if="!commonOffcanvas"/>
  <!-- off canvas full end -->

  <!-- commonOffcanvas start -->
  <off-canvas-six ref="off_canvas" v-if="commonOffcanvas"/>
  <!-- commonOffcanvas end -->
</template>

<style>

.header__bottom-border {
  border: none;
}

.mega-menu-wrapper {
  height: 80px;
  align-items: center;
}

.main-menu {
  display: flex;
  align-items: center;
}

.mega-menu-wrapper div {
  height: 100%;
}

.header__action {
  align-items: center;
}

.header__action ul li a:hover {
  color: var(--tp-theme-1);
}

.header__action ul li, .header__sticky.header-sticky .header__action ul li {
  width: 100px;
}

.header__hamburger {
  align-items: center;
  display: flex;
  margin-right: 1rem;
}

.logo-border a, .logo-border a img {
  height: 100%;
}
.logo-border a {
  margin-left: 1rem;
}

.header-sticky .header__lang-selected-lang {
  color: black;
}

</style>

<script>
import menus from "./menus.vue";
import HeaderInfo from "./component/HeaderInfo.vue";
import Language from "./component/Language.vue";
import SearchPopup from "./component/SearchPopup.vue";
import OffCanvasMain from '~~/components/common/off-canvas/OffCanvasMain.vue';
import OffCanvasSix from '~~/components/common/off-canvas/OffCanvasSix.vue';

export default {
  data() {
    return {
      isSticky: false,
    };
  },
  props: {
    header_solid: {
      type: Boolean,
      default: false,
    },
    header_solid_2: {
      type: Boolean,
      default: false,
    },
    header_black: {
      type: Boolean,
      default: false,
    },
    top_bar: {
      type: Boolean,
      default: true,
    },
    transparent: {
      type: Boolean,
      default: false,
    },
    commonOffcanvas: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    menus,
    HeaderInfo,
    Language,
    SearchPopup,
    OffCanvasMain,
    OffCanvasSix,
  },
  methods: {
    handleSearch() {
      this.$refs.SearchPopup.show();
    },
    handleOffCanvas() {
      this.$refs.off_canvas.openOffcanvas();
    },
    handleSticky() {
      if (window.scrollY > 80) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
  },
  setup () {

  },
  mounted() {
    window.addEventListener("scroll", this.handleSticky);
  },
};
</script>
