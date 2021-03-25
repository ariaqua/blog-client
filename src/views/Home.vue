<template>
  <div class="home">
    <div class="profile">
      <h1 class="title">VAQUA'BLOG</h1>
      <p class="info">
        A Simple Motion Over And Over
      </p>
      <div class="links">
        <div class="link-wrapper">
          <div class="link">
            <svg class="link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 27.382">
              <path d="M44.609,19.864c.1-.177,1.4-.8,3.389,1.533a.037.037,0,0,1,.021.011c.139.115.793,1.05,1.164,1.388,1.583,1.427,3.953.321,4.222.161a3.779,3.779,0,0,1,1.157-2.421,7.826,7.826,0,0,1-1.721-.269,5.5,5.5,0,0,1-1.64-.484A4.546,4.546,0,0,1,49.639,19a4.457,4.457,0,0,1-1.317-1.129,5.5,5.5,0,0,1-1.077-1.56,7.406,7.406,0,0,1-.672-2.07,13.11,13.11,0,0,1-.242-2.663,7.123,7.123,0,0,1,1.856-4.868A6.349,6.349,0,0,1,48.4,1.9a9.081,9.081,0,0,1,4.976,1.828,24.964,24.964,0,0,1,4.546-.592,23.9,23.9,0,0,1,4.546.592c.626-.376,2.835-1.881,4.947-1.774A6.762,6.762,0,0,1,67.6,6.738a6.38,6.38,0,0,1,1.855,4.707v.161q.014.2.014.4a10.282,10.282,0,0,1-.256,2.26,9.316,9.316,0,0,1-.672,2.071A7.566,7.566,0,0,1,67.5,17.875a9.859,9.859,0,0,1-1.318,1.1,13.35,13.35,0,0,1-1.533.753q-.817.256-1.641.483-.863.116-1.721.269a4.211,4.211,0,0,1,1.238,3.335q-.012.7-.013,1.486t.013,1.661c-.018.574-.026,1.009-.026,1.305a1.763,1.763,0,0,0,.026.47,18.274,18.274,0,0,1-4.275.536h-.4a16.984,16.984,0,0,1-4.277-.538q-.027-.027-.026-3.092c-.557.125-4.22.844-5.845-1.871-.518-.8-.95-2.767-2.707-3.643C44.8,20.615,44.21,20.2,44.609,19.864Z" transform="translate(-44.473 -1.895)"/>
            </svg>
          </div>
          <div class="link-shadow"></div>
        </div>
        
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.home {
  height: 100vh;
  background: url("../assets/lofi.webp") no-repeat center/cover;
  color: white;
  .profile {
    padding: 1.5rem;
  }
  .link-wrapper {
    position: relative;
  }
  .link {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba($color: white, $alpha: 0.5);
    backdrop-filter: blur(6px);
    position: relative;
    cursor: pointer;
    z-index: 10;
    &:hover ~ .link-shadow{
      transform: translateX(-8px);
      opacity: 0.9;
    }
  }
  .link-shadow {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: salmon;
    transition: all 0.3s;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    filter: blur(2px);
  }
  .link-icon {
    fill: currentColor;
    height: 32px;
  }
}
  
</style>
