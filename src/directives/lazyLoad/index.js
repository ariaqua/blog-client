const placeholder = 'https://img.zcool.cn/community/01bf7560503daa11013fb11748c517.jpg@1280w_1l_2o_100sh.jpg'
const errorImg = 'http://localhost:5000/uploads/image/girl.jpg'

export const lazyLoad = {
  inserted(el, { value }) {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting && !entry.target.dataset.flag) {
            entry.target.src = placeholder
            console.log('init')
          }
          if (entry.isIntersecting && !entry.target.dataset.flag) {
            const img = new Image()
            let counter = this.config.reloadNumber
            img.src = value
            img.addEventListener('error', () => {
              entry.target.src = errorImg

              if (counter) {
                entry.target.title = `Click to reload ${counter}/${this.config.reloadNumber}`
                entry.target.addEventListener('click', function () {
                  img.src = value
                }, { once: true })
                counter--
              } else {
                entry.target.title = 'Loaded failed'
              }

            })
            img.addEventListener('load', () => {
              console.log('load')
              entry.target.src = value
            })
            entry.target.dataset.flag = true
            console.log('entry')
          }
        })
      },
      { rootMargin: this.config.rootMargin }
    )

    io.observe(el)

  }
}
