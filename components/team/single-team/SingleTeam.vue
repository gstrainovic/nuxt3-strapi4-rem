<template>
  <div :class="`team__item ${team_p?'mb-55':''}`">
    <div class="team__thumb w-img fix transition-3">
      <div class="tp-thumb-overlay wow"></div>
      <nuxt-link :to="localePath('/team-details') + '/' + id">
        <img :src="item.Picture.data.attributes.formats.small.url" :alt="item.Picture.data.attributes.name" />
      </nuxt-link>
      <div class="team__action">
        <ul>
          <li>
            <a href="mailto:team@harry.com"><i class="far fa-envelope"></i></a>
          </li>
          <li>
            <!-- <a href="#"><i class="far fa-share-alt"></i></a> -->
            <!-- <div class="team__social">
              <ul>
                <li v-for="(l, i) in item.social_links" :key="i">
                  <a :href="l.link" :target="l.target">
                    <i :class="l.icon"></i>
                  </a>
                </li>
              </ul>
            </div> -->
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

const { item, team_p } = defineProps({
  id: {
    type: String,
    required: true,
  },
  item: {
    type: Object as PropType<Author>,
    required: true,
  },
  team_p: {
    type: Boolean,
    default: false,
  },
})

</script>
