<template>
  <div class="team__item">
    <div class="team__thumb w-img fix transition-3">
      <div class="tp-thumb-overlay wow"></div>
      <nuxt-link :to="localePath('/team-details') + '/' + id">
        <img :src="item.Picture.data.attributes.formats.small.url" :alt="item.Picture.data.attributes.name" />
      </nuxt-link>
      <div class="team__action">
        <ul>
          <li>
            <a :href="'mailto:' + item.email"><i class="far fa-envelope"></i></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="team__content">
      <h3 class="team__title">
        <nuxt-link href="/team-details">{{item.Name}}</nuxt-link>
      </h3>
      <span class="team__designation">{{item.Title}}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Author } from 'types/author';
const localePath = useLocalePath();

const { item } = defineProps({
  id: {
    type: Number,
    required: true,
  },
  item: {
    type: Object as PropType<Author>,
    required: true,
  },
})

</script>
