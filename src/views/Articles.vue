<template lang="pug">
top-nav
main.articles
  article.list-article(v-for="article in list", :key="article.id")
    router-link.title(:to="'/articles/' + article.id" tag="h1") {{ article.title }}
    p.date {{ new Date(article.create_date).toDateString() }}
    img.list-pictrue(v-lazyLoad="article.pictrue")
    p.summary {{ article.summary }}
  div.more-wrapper(:src="loadMore", @click="loadMore")
    span.more(:class="loadClass") {{ loadState }}
</template>

<script>
import { getList } from '@/api/article';
import TopNav from '@/components/TopNav/index';
export default {
  name: 'List',
  components: { TopNav },
  data() {
    return {
      list: [],
      count: 0,
      skip: 0,
      take: 1,
      isLoading: false,
    };
  },
  beforeMount() {
    this.getList();
  },
  computed: {
    hasMore() {
      return this.count > this.list.length
    },
    loadState() {
      if (this.isLoading) {
        return 'Loading...'
      } else {
        return this.hasMore ? 'Load more ->' : 'No more'
      }
    },
    loadClass() {
      return this.isLoading || !this.hasMore
        ? 'no-more'
        : 'load-more'
    }
  },
  methods: {
    async getList() {
      this.isLoading = true
      const { data } = await getList(this.skip, this.take);
      this.list.push(...data[0]);
      this.count = data[1];
      this.isLoading = false
    },
    async loadMore() {
      console.log(this.hasMore, this.isLoading)
      if (!this.hasMore || this.isLoading) return false
      this.skip += 1
      console.log('click')
      const h = parseInt(getComputedStyle(document.querySelector('.list-article')).height)
      await Promise.resolve(this.getList(this.skip, this.take))
      await Promise.resolve(window.scrollBy({top: h + 50 , behavior: 'smooth' }))
      
    }
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

.more-wrapper {
  display: flex;
  justify-content: center;
}

.more {
  display: inline-block;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s;
}

.load-more {
  color: #999;
  &:hover {
    color: teal;
  }
}

.no-more {
  color: #ccc;
}

@media (min-width: 576px) {
  .title,
  .date,
  .summary {
    padding: 0 32px;
  }
}
</style>
