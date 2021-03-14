<template lang="pug">
top-nav
main.articles
  article.list-article(v-for="article in list", :key="article.id")
    router-link.title(:to="'/' + article.id" tag="h1") {{ article.title }}
    p.date {{ new Date(article.create_date).toDateString() }}
    img.list-pictrue(:src="article.pictrue")
    p.summary {{ article.summary }}
</template>

<script>
import { getList } from '@/api/article';
import TopNav from '@/components/TopNav/index'
export default {
  name: 'Home',
  components: { TopNav },
  data() {
    return {
      list: [],
    };
  },
  beforeMount() {
    this.getList();
  },
  methods: {
    async getList() {
      const { data } = await getList();
      this.list = data;
    },
  },
};
</script>

<style lang="scss" scoped>

.list-article {
  margin: 0 0 42px;
}
.list-pictrue {
  width: 100%;
  height: 50vw;
  min-height: 225px;
  max-height: 450px;
  margin-bottom: 12px;
}

.title,
.date,
.summary {
  padding: 0 16px;
}

.date {
  font-size: 14px;
  color: #bbb;
  margin: 4px 0 12px;
}

.title {
  color: #333;
  font-size: 24px;
  text-decoration: none;
  transition: all 0.25s;
  &:visited {
    color: #999;
  }
  &:hover {
    color: teal;
    text-decoration: underline;
  }
}

.summary {
  color: #666;
}

@media (min-width: 576px) {
  .title,
  .date,
  .summary {
    padding: 0 32px;
  }
}
</style>
