<template>
  <ul>
    <li
      v-for="(menu, i) in menuData"
      :key="i"
      :class="`${menu.megaMenu ? 'has-mega-menu' : ''}`"
    >
      <NuxtLink :to="localePath(menu.link)" class="menu__link">
        {{ menu.title }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
import menuData from "~~/mixins/menuData";

export default {
  mixins: [menuData],
};
</script>

<style>
.menu__link {
  padding: 10px 30px !important;
}
</style>
