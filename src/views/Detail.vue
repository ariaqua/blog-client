<template lang="pug">
link(v-if="article.theme" rel="stylesheet" :href="article.theme")
top-nav
//- v-lazyLoad not trigger, the value is undefined, but Home is normal
img.header-picture(:src="article.pictrue")
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
      const { data } = await getDetail(this.id);
      this.article = data;
      console.log(data);
    },
    format(date) {
      return dayjs(date).format('HH:mm YYYY-MM-DD');
    },
  },
};
</script>

<style lang="scss" scoped>
.header-picture {
  width: 100%;
  height: 50vw;
  max-height: 650px;
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

@media (min-width: 992px) {
  .header-picture {
    height: 40vw;
  }
}

@media (min-width: 1400px) {
  .header-picture {
    width: 800px;
    display: block;
    margin: 0 auto;
    height: 450px;
    margin-top: 32px;
  }
}
</style>
