<template lang="pug">
nav.nav
  router-link.brand(:to='{ path: "/" }') VAQUA
  .menu
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
    .links
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
        { name: 'Profile', href: '/' },
        { name: 'Github', href: 'https://github.com/ariaqua' },
        { name: 'Juejin', href: 'https://juejin.cn/user/3350967174300909' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.nav {
  height: 72px;
  background-color: white;
  border-bottom: 1px solid whitesmoke;
  display: flex;
  align-items: center;
  // padding: 0 16px;
  box-sizing: border-box;
  position: relative;
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
  transition: all 0.3s;
  &:hover {
    color: teal;
    .links {
      display: flex;
      animation: menu-show 0.3s forwards var(--ease);
    }
    .link-wrapper {
      animation: menu-show 0.3s forwards 75ms var(--ease);
    }
  }
  .text {
    margin-right: 2px;
  }
}

.links {
  display: none;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: white;
  padding: 56px 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  will-change: transform, opacity;
  .link-wrapper {
    padding: 12px;
    & + .link-wrapper {
      margin-top: 24px;
    }
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
    .link {
      margin-left: 32px;
    }
  }
}

</style>
