<template>
  <section class="blog__grid grey-bg-4 pt-90 pb-100">
    <div class="container">
      <div class="row">

        <div v-for="(item, i) in blogData.filter((b) => b.blog_grid)"
             :key="i"

          class="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
          <single-blog-grid-item :item="item" v-if="i < 3"/>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import blogData from '~~/mixins/blogData';
import BlogPagination from '../common/pagination/BlogPagination.vue';
import SingleBlogGridItem from './single-blog/SingleBlogGridItem.vue';

export default {
  components: { SingleBlogGridItem, BlogPagination },
  mixins: [blogData]
}
</script>
