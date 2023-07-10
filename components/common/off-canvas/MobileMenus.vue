<template>
  <nav class="mean-nav">
    <ul>
      <template v-for="(menu, i) in menuData" :key="i">

        <li
          v-if="menu.hasDropdown && !menu.megaMenu && !menu.pages"
          class="has-dropdown"
        >
          <nuxt-link :href="menu.link">{{ menu.title }}</nuxt-link>
          <ul
            class="submenu"
            :style="{ display: navTitle === menu.title ? 'block' : 'none' }"
          >
            <li v-for="(sub, i) in menu.submenus" :key="i">
              <nuxt-link :href="sub.link">{{ sub.title }}</nuxt-link>
            </li>
          </ul>
        </li>

        <li
          v-if="menu.megaMenu && !menu.pages"
          class="has-dropdown has-mega-menu"
        >
          <nuxt-link :href="menu.link">{{ menu.title }}</nuxt-link>
          <ul
            class="mega-menu"
            :style="{ display: navTitle === menu.title ? 'block' : 'none' }"
          >
            <li v-for="(mega_m, i) in menu.mega_menus" :key="i">
              <nuxt-link class="mega-menu-title" :href="mega_m.link">
                {{ mega_m.title }}
              </nuxt-link>
              <ul
                :style="{
                  display: subMenu === mega_m.title ? 'block' : 'none',
                }"
              >
                <li v-for="(sub_m, i) in mega_m.submenus" :key="i">
                  <nuxt-link :href="sub_m.link">{{ sub_m.title }}</nuxt-link>
                </li>
              </ul>

            </li>
          </ul>

        </li>

        <li v-if="menu.pages" class="has-dropdown has-mega-menu">
          <nuxt-link :href="menu.link">{{ menu.title }}</nuxt-link>
          <ul
            class="mega-menu"
            :style="{ display: navTitle === menu.title ? 'block' : 'none' }"
          >
            <li v-for="(mega_m, i) in menu.mega_menus" :key="i">
              <nuxt-link :href="mega_m.link" class="mega-menu-title">
                {{ mega_m.title }}
              </nuxt-link>
              <ul
                :style="{
                  display: subMenu === mega_m.title ? 'block' : 'none',
                }"
              >
                <li v-for="(sub_m, i) in mega_m.submenus" :key="i">
                  <nuxt-link :href="sub_m.link">{{ sub_m.title }}</nuxt-link>
                </li>
              </ul>

            </li>
          </ul>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>
import { ref } from "vue";
import menuData from "~~/mixins/menuData";

export default {
  name: "MobileMenus",
  mixins: [menuData],
  setup() {
    const navTitle = ref("");
    const subMenu = ref("");

    const openMobileMenu = (menu) => {
      navTitle.value = navTitle.value === menu ? "" : menu;
    };

    const openSubMobileMenu = (s_menu) => {
      subMenu.value = subMenu.value === s_menu ? "" : s_menu;
    };

    return {
      navTitle,
      subMenu,
      openMobileMenu,
      openSubMobileMenu,
    };
  },
};
</script>
