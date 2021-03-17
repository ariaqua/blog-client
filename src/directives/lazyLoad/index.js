const placeholder = 'https://img.zcool.cn/community/01bf7560503daa11013fb11748c517.jpg@1280w_1l_2o_100sh.jpg'
const errorImg = 'http://localhost:5000/uploads/image/file-1615209801393-725033632.jpg'

export const lazyLoad = 
  (el, { value }) => {
    const io = new IntersectionObserver(
      entries => {
        const entry = entries[0]
        // init
        if (!entry.target.dataset.state) {
          entry.target.src = placeholder
        }
        if (entry.isIntersecting && !entry.target.dataset.state) {
          const img = new Image()
          let counter = 2
          img.src = value
          console.log(value)
          // error
          img.addEventListener('error', () => {
            entry.target.src = errorImg

            // click to load
            if (counter) {
              entry.target.title = `Click to reload ${counter}/${2}`
              entry.target.addEventListener('click', function () {
                img.src = value
              }, { once: true })
              counter--
            } else {
              entry.target.title = 'Loaded failed'
            }

            entry.target.dataset.state = 'failed'
          })

          // load
          img.addEventListener('load', () => {
            entry.target.src = value
            entry.target.dataset.state = 'loaded'
          })

        }
      },
      { rootMargin: '100px' }
    )

    io.observe(el)

  }

