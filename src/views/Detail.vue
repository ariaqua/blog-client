<template lang="pug">
//- link(v-if="article.theme" rel="stylesheet" :href="article.theme")
top-nav(class="detail-top-nav")
//- Bug: v-lazyLoad not trigger
//- Bug: style backgroundImage undfined
div.header-picture(:style="{backgroundImage: `url(${article.pictrue})`}")
//- img.header-picture(v-lazyLoad="article.pictrue")
//- img.header-picture(:src="article.pictrue")
main
  h1.title {{ article.title }}
  p.date {{ format(article.create_date) }}
  .content(v-html='article.content')
  comment(:id="id")
</template>

<script>
import { getDetail } from '@/api/article';
import dayjs from 'dayjs';
import TopNav from '@/components/TopNav/index'
import Comment from '@/components/Comment/index'
export default {
  name: 'Detail',
  props: ['id'],
  components: { TopNav, Comment },
  data() {
    return {
      article: {},
    };
  },
  beforeMount() {
    this.getDetail();
  },
  // activated() {
  //   if (this.id !== this.articleCache) {
  //     this.getDetail();
  //     this.articleCache = this.id
  //   }
  // },
  methods: {
    async getDetail() {
      try {
        const { data } = await getDetail(this.id);
        this.article = data;
        console.log(data);
      } catch (error) {
        this.$router.replace({ name: 'Error' })
      }
     
    },
    format(date) {
      return dayjs(date).format('YYYY-MM-DD');
    },
  },
};
</script>

<style lang="scss" scoped>
.detail-top-nav {
  position: fixed;
  width: 100%;
  top: 0;
  background-color: rgba($color: white, $alpha: 0.7);
  backdrop-filter: blur(6px);
}

.header-picture {
  width: 100%;
  height: 70vw;
  max-height: 650px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: whitesmoke;
}

.date {
  font-size: 14px;
  color: #bbb;
  margin: 4px 0 12px;
}

.content {
  color: #333;
  margin-bottom: 48px;
}

@media (min-width: 768px) {
  .header-picture {
    height: 50vw;
  }
}

@media (min-width: 1400px) {
  .header-picture {
    width: 800px;
    display: block;
    margin: 120px auto 0;
    height: 450px;
  }
}
</style>
