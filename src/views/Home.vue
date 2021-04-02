<template>
  <div class="home">
    <transition name="fade">
      <div v-if="imgLoading" class="mask">
        <img src="../assets/loading.svg">
      </div>
    </transition>
    
    <canvas id="canvas"></canvas>
    <div class="profile">
      <!-- <h1 class="title">VAQUA'BLOG</h1> -->
      <p class="_-_">
        A Simple Motion Over And Over
      </p>

      <div class="links">
        <div class="link-wrapper internal">
          <router-link class="link" to="/articles">Articles</router-link>
        </div>
        <!-- <div class="link-wrapper internal">
          <router-link class="link" to="/profile">Profile</router-link>
        </div> -->
        <div class="link-wrapper external">
          <a class="link" href="https://github.com/ariaqua" target="_blank">Github</a>
          <svg t="1616747787226" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1344" width="16" height="16">
            <path d="M864 640a32 32 0 0 1 64 0v224.096A63.936 63.936 0 0 1 864.096 928H159.904A63.936 63.936 0 0 1 96 864.096V159.904C96 124.608 124.64 96 159.904 96H384a32 32 0 0 1 0 64H192.064A31.904 31.904 0 0 0 160 192.064v639.872A31.904 31.904 0 0 0 192.064 864h639.872A31.904 31.904 0 0 0 864 831.936V640z m-485.184 52.48a31.84 31.84 0 0 1-45.12-0.128 31.808 31.808 0 0 1-0.128-45.12L815.04 166.048l-176.128 0.736a31.392 31.392 0 0 1-31.584-31.744 32.32 32.32 0 0 1 31.84-32l255.232-1.056a31.36 31.36 0 0 1 31.584 31.584L924.928 388.8a32.32 32.32 0 0 1-32 31.84 31.392 31.392 0 0 1-31.712-31.584l0.736-179.392L378.816 692.48z" fill="#ffffff" p-id="1345"></path>
          </svg>
        </div>
        <div class="link-wrapper external">
          <a class="link" href="https://juejin.cn/user/3350967174300909" target="_blank">Juejin</a>
          <svg t="1616747787226" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1344" width="16" height="16">
            <path d="M864 640a32 32 0 0 1 64 0v224.096A63.936 63.936 0 0 1 864.096 928H159.904A63.936 63.936 0 0 1 96 864.096V159.904C96 124.608 124.64 96 159.904 96H384a32 32 0 0 1 0 64H192.064A31.904 31.904 0 0 0 160 192.064v639.872A31.904 31.904 0 0 0 192.064 864h639.872A31.904 31.904 0 0 0 864 831.936V640z m-485.184 52.48a31.84 31.84 0 0 1-45.12-0.128 31.808 31.808 0 0 1-0.128-45.12L815.04 166.048l-176.128 0.736a31.392 31.392 0 0 1-31.584-31.744 32.32 32.32 0 0 1 31.84-32l255.232-1.056a31.36 31.36 0 0 1 31.584 31.584L924.928 388.8a32.32 32.32 0 0 1-32 31.84 31.392 31.392 0 0 1-31.712-31.584l0.736-179.392L378.816 692.48z" fill="#ffffff" p-id="1345"></path>
          </svg>
        </div>
        
      </div>
      <div class="links">
        <div class="link-wrapper external">
          <span>Wallpaper from: &nbsp;</span> 
          <a class="link" href="https://www.youtube.com/channel/UCSJ4gkVC6NrvII8umztf0Ow" target="_blank">Lofi Girl</a>
          <svg t="1616747787226" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1344" width="16" height="16">
            <path d="M864 640a32 32 0 0 1 64 0v224.096A63.936 63.936 0 0 1 864.096 928H159.904A63.936 63.936 0 0 1 96 864.096V159.904C96 124.608 124.64 96 159.904 96H384a32 32 0 0 1 0 64H192.064A31.904 31.904 0 0 0 160 192.064v639.872A31.904 31.904 0 0 0 192.064 864h639.872A31.904 31.904 0 0 0 864 831.936V640z m-485.184 52.48a31.84 31.84 0 0 1-45.12-0.128 31.808 31.808 0 0 1-0.128-45.12L815.04 166.048l-176.128 0.736a31.392 31.392 0 0 1-31.584-31.744 32.32 32.32 0 0 1 31.84-32l255.232-1.056a31.36 31.36 0 0 1 31.584 31.584L924.928 388.8a32.32 32.32 0 0 1-32 31.84 31.392 31.392 0 0 1-31.712-31.584l0.736-179.392L378.816 692.48z" fill="#ffffff" p-id="1345"></path>
          </svg>
        </div>
      </div>
      <div class="player">
        <span>BGM: いのちの名前 &nbsp;</span>
        <svg v-if="musicLoading" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
          <circle cx="30" cy="50" fill="#85a2b6" r="20">
            <animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="30;70;30" begin="-0.5s"></animate>
          </circle>
          <circle cx="70" cy="50" fill="#bbcedd" r="20">
            <animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="30;70;30" begin="0s"></animate>
          </circle>
          <circle cx="30" cy="50" fill="#85a2b6" r="20">
            <animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="30;70;30" begin="-0.5s"></animate>
            <animate attributeName="fill-opacity" values="0;0;1;1" calcMode="discrete" keyTimes="0;0.499;0.5;1" dur="1s" repeatCount="indefinite"></animate>
          </circle>
        </svg>
        <svg v-if="!musicLoading && play" @click="toggle" t="1616908794500" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2279"><path d="M812.581 617.683c-19.828 9.914-301.989 213.255-453.792 289.122-115.733 57.867-198.349-41.483-198.349-111.796V201.227c0-63.701 103.709-144.139 198.278-96.89 147.162 73.546 419.55 276.747 442.963 288.489 76.78 38.389 84.023 188.295 10.898 224.856z" p-id="2280"></path></svg>
        <svg v-if="!musicLoading && !play" @click="toggle" t="1616908749565" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2138"><path d="M377.567 153.513H243.134c-24.69 0-44.812 20.121-44.812 44.812v627.354c0 24.691 20.119 44.812 44.812 44.812h134.433c24.691 0 44.812-20.121 44.812-44.812V198.325c0-24.691-20.121-44.812-44.812-44.812z m403.299 0H646.433c-24.691 0-44.812 20.121-44.812 44.812v627.354c0 24.691 20.121 44.812 44.812 44.812h134.433c24.69 0 44.812-20.121 44.812-44.812V198.325c0-24.691-20.119-44.812-44.812-44.812z" p-id="2139"></path></svg>
      </div>
    </div>
    <div class="progress">
      <div class="currentTime" :style="{width: currentTime / duration * 100 + '%'}"></div>
    </div>
    <audio
      ref="audio"
      preload="auto"
      loop 
      :src="url"
      @error="error"
      @timeupdate="updateTime"
      ></audio>
  </div>
</template>
<script>
import snow from '@/util/snow.js'
export default {
  data() {
    return {
      play: true,
      musicLoading: true,
      canplay: true,
      url: 'https://music.163.com/song/media/outer/url?id=578090.mp3',
      currentTime: 0,
      duration: 0,
      imgLoading: true
    }
  },
  computed: {
    progress() {
      return this.currentTime / this.duration * 100 + '%'
    }
  },
  mounted() {
    snow()
    window.addEventListener('resize', snow.prototype.onResize)
    this.loadingImg()
    this.loadingMusic()
  },
  unmounted() {
    window.removeEventListener('resize', snow.prototype.onResize)
  },
  methods: {
    toggle() {
      this.play = !this.play
      this.play
        ? this.$refs.audio.pause()
        : this.$refs.audio.play()
    },
    updateTime(e) {
      this.currentTime = e.target.currentTime
      this.duration = e.target.duration
    },
    loadingImg() {
      const img = new Image()
      img.src = 'https://www.vaqua.top/uploads/image/file-1616998627690-494218404.webp'
      img.onload = () => {
        this.imgLoading = false
      }
    },
    loadingMusic() {
      let isIOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      if (isIOS) {
        this.musicLoading = false
      } else {
        this.$refs.audio.addEventListener("canplay", () => {
          this.musicLoading = false
        });
      }
    }
  },
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;700&display=swap');
.home {
  height: 100vh;
  background: url('https://www.vaqua.top/uploads/image/file-1616998627690-494218404.webp') no-repeat center/cover;
  color: white;
  font-family: 'Lato', sans-serif;
  .profile {
    padding: 1rem 1rem 1.5rem;
    position: fixed;
    bottom: 0;
  }
  ._-_ {
    font-size: 22px;
    font-weight: 100;
    margin-bottom: 12px;
    font-weight: 700;
    font-family: 'Lato', sans-serif;
  }
  .links {
    padding-top: 2px;
    display: flex;
    &+.links {
      margin-top: 12px;
    }
  }
  .link-wrapper {
    margin-right: 16px;
    font-size: 14px;
    .icon {
      vertical-align: middle;
      margin-left: 4px;
    }
  }
  .link {
    color: white;
    cursor: pointer;
    transition: all 0.25s;
    &:hover {
      color: tomato;
      opacity: 1;
    }
  }
  .player {
    height: 24px;
    font-size: 14px;
    display: flex;
    align-items: center;
    margin-top: 16px;
    .icon {
      width: 24px;
      height: 24px;
      color: rgba($color: white, $alpha: 0.3);
      fill: currentColor;
      transition: all 0.3s;
      cursor: pointer;
      backdrop-filter: blur(2px);
      &:hover {
        color: rgba($color: white, $alpha: 1);
      }
    }
  }
  .progress {
    width: 100%;
    height: 2px;
    background-color: rgba($color: white, $alpha: 0.3);
    position: fixed;
    bottom: 0;
    .currentTime {
      height: 4px;
      width: 0;
      background-color: tomato;
    }
  }
}

.mask {
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}


@media (min-width: 576px) {
  .home {
    .profile {
      padding: 2rem;
    }
    ._-_ {
      font-size: 24px;
      margin-bottom: 16px;
    }
    .link-wrapper {
      margin-right: 24px;
    }
  }
}
</style>
