const placeholder = 'https://img.zcool.cn/community/01bf7560503daa11013fb11748c517.jpg@1280w_1l_2o_100sh.jpg'
const errorImg = 'https://img.zcool.cn/community/01a17f6050c98d11013e87f41d8195.jpg@1280w_1l_2o_100sh.jpg'

const io = function(bindding) {
  return new IntersectionObserver(
    entries => {
      const entry = entries[0]
      // init
      if (!entry.target.dataset.state) {
        entry.target.src = placeholder
      }
      if (entry.isIntersecting && !entry.target.dataset.state) {
        const img = new Image()
        let counter = 2
        img.src = bindding.value
        // console.log('---------mounted----------')
        // console.log(bindding)
        // console.log('---------mounted----------')

        // error
        img.addEventListener('error', () => {
          entry.target.src = errorImg

          // click to load
          if (counter) {
            entry.target.title = `Click to reload ${counter}/${2}`
            entry.target.addEventListener('click', function () {
              img.src = bindding.value
            }, { once: true })
            counter--
          } else {
            entry.target.title = 'Loaded failed'
          }

          entry.target.dataset.state = 'failed'
        })

        // load
        img.addEventListener('load', () => {
          entry.target.src = bindding.value
          entry.target.dataset.state = 'loaded'
        })

      }
    },
    { rootMargin: '100px' }
  )
}

export const lazyLoad = {
  // created(el, bindding) {
  //   console.log('---------created----------')
  //   console.log(bindding)
  //   console.log('---------created----------')
  // },
  // beforeMount(el, bindding) {
  //   console.log('---------beforeMount----------')
  //   console.log(bindding)
  //   console.log('---------beforeMount----------')
  // },
  mounted(el, bindding) {
    io(bindding).observe(el)
  },
  // beforeUpdate(el, bindding) {
  //   console.log('---------beforeUpdate----------')
  //   console.log(bindding)
  //   console.log('---------beforeUpdate----------')
  // },
  // updated(el, bindding) {
  //   console.log('---------updated----------')
  //   console.log(bindding)
  //   console.log('---------updated----------')
  //   // el.src = bindding.value
  //   // io(bindding).observe(el)
  // },
  // beforeUnmount(el, bindding) {
  //   console.log('---------beforeUnmount----------')
  //   console.log(bindding)
  //   console.log('---------beforeUnmount----------')
  //   io(bindding).disconnect()
  // },
  // unmounted(el, bindding) {
  //   console.log('---------unmounted----------')
  //   console.log(bindding)
  //   console.log('---------unmounted----------')
  // },
}

// export const lazyLoad = {
//   mounted(el, bindding) {
//     const io = new IntersectionObserver(
//       entries => {
//         const entry = entries[0]
//         // init
//         if (!entry.target.dataset.state) {
//           entry.target.src = placeholder
//         }
//         if (entry.isIntersecting && !entry.target.dataset.state) {
//           const img = new Image()
//           let counter = 2
//           img.src = bindding.value
//           console.log('-------------------')
//           console.log(bindding)
//           console.log('-------------------')

//           // error
//           img.addEventListener('error', () => {
//             entry.target.src = errorImg

//             // click to load
//             if (counter) {
//               entry.target.title = `Click to reload ${counter}/${2}`
//               entry.target.addEventListener('click', function () {
//                 img.src = bindding.value
//               }, { once: true })
//               counter--
//             } else {
//               entry.target.title = 'Loaded failed'
//             }

//             entry.target.dataset.state = 'failed'
//           })

//           // load
//           img.addEventListener('load', () => {
//             entry.target.src = bindding.value
//             entry.target.dataset.state = 'loaded'
//           })

//         }
//       },
//       { rootMargin: '100px' }
//     )

//     io.observe(el)

//   }
// }
