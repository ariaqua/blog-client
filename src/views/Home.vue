<template lang="pug">
main.articles
  article.list-article(v-for='article in list', :key='article.id')
    .title
      h1 {{ article.title }}
    p.date {{ new Date(article.create_date).toDateString() }}
    img.list-pictrue(:src='article.pictrue', width='100%', height='225px')
    p.summary {{ article.summary }}
</template>

<script>
import { getList } from '@/api/article'
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      list: [],
    }
  },
  beforeMount() {
    this.getList()
  },
  methods: {
    async getList() {
      const { data } = await getList()
      this.list = data
    },
  },
}
</script>

<style lang="stylus" scoped>
</style>
