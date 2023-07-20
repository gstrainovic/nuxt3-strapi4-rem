<template>
  <span>
    <nuxt-link :to="switchLocalePath('en')"
      @click.prevent="handleToggle"
      class="header__lang-selected-lang tp-lang-toggle"
      id="tp-header-lang-toggle"
      >{{ $t(`${$i18n.locale}`) }}
    </nuxt-link>
    <ul :class="`header__lang-list tp-lang-list ${open?'tp-lang-list-open':''}`">
      <li><nuxt-link :to="switchLocalePath('de-CH')">Deutsch</nuxt-link></li>
      <li><nuxt-link :to="switchLocalePath('en')">English</nuxt-link></li>
    </ul>
  </span>
</template>

<style>
.tp-lang-list, .tp-lang-list-open{
  top: 10px !important;
  display: flex;
  flex-direction: column;
  background-color: transparent;
}
</style>

<script lang="ts">
import { useI18n } from 'vue-i18n'

export default {
  setup(){
    const switchLocalePath = useSwitchLocalePath()
    const { t } = useI18n()
    return { switchLocalePath, t }
  },
  data(){
    return {
      open:false
    }
  },
  methods:{
    handleToggle() {
      this.open = !this.open
    }
  }
};
</script>