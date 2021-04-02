<template lang="pug">
nav.nav
  router-link.brand(:to='{ path: "/articles" }') VAQUA
  .menu(@click="menuActive = true")
    .text Explore
    svg.icon(
      xmlns='http://www.w3.org/2000/svg',
      width='16',
      height='16',
      viewBox='0 0 24 24',
      fill='none',
      stroke='currentColor',
      stroke-width='2',
      stroke-linecap='round',
      stroke-linejoin='round'
    ) 
      polyline(points='6 9 12 15 18 9')
  transition(name="slide")
    .links(v-show="menuActive")
      nav.nav
        router-link.brand(:to='{ path: "/articles" }') VAQUA
        .close(@click="menuActive = false")
          <svg t="1617345513714" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2160" width="24" height="24"><path d="M512 451.67l225.835-225.835a42.667 42.667 0 0 1 60.33 60.33L572.331 512l225.834 225.835a42.667 42.667 0 0 1-60.33 60.33L512 572.331 286.165 798.165a42.667 42.667 0 1 1-60.33-60.33L451.669 512 225.835 286.165a42.667 42.667 0 0 1 60.33-60.33L512 451.669z" p-id="2161" fill="#666666"></path></svg>
      .link-wrapper(v-for='link in links', :key='link.name')
        router-link.link(
          v-if='link.href.startsWith("/")',
          :to='{ path: link.href }'
        ) {{ link.name }}
        a.link(v-else, :href='link.href', target='_blank') {{ link.name }}
</template>

<script>
export default {
  name: 'TopNav',
  data() {
    return {
      links: [
        { name: 'Home', href: '/' },
        // { name: 'Profile', href: '/' },
        { name: 'Github', href: 'https://github.com/ariaqua' },
        { name: 'Juejin', href: 'https://juejin.cn/user/3350967174300909' },
      ],
      menuActive: false
    };
  },
  watch: {
    menuActive(val) {
      if (val) document.documentElement.style.overflow = 'hidden'
      else document.documentElement.style.overflow = 'auto'
    },
    '$route'() {
      this.menuActive = false
    }
  },
};
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 56px;
  background-color: white;
  border-bottom: 1px solid whitesmoke;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
}

.inner-nav {
  border: none;
}

.brand {
  font-size: 18px;
  margin-left: 16px;
  color: #333;
  text-decoration: none;
}

.menu {
  --ease: cubic-bezier(0.075, 0.82, 0.165, 1.15);
  font-size: 14px;
  font-weight: 400;
  color: #666;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 16px;
  -webkit-tap-highlight-color: transparent;
  transition: all 0.3s;

  .text {
    margin-right: 2px;
  }
}

.links {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: white;
  padding-bottom: 24px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
  .close {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 16px;
  }
  .link-wrapper {
    padding: 12px;
    margin-top: 24px;
  }
  .link {
    font-size: 14px;
    color: #666;
    text-decoration: none;
    transition: all 0.25s;
    &:hover {
      color: teal;
      text-decoration: underline;
    }
  }
}

@media (min-width: 576px) {
  .brand {
    margin-left: 32px;
  }
  .menu {
    margin-right: 32px;
  }
  .links {
    .close {
      margin-right: 32px;
    }
  }
}

</style>
