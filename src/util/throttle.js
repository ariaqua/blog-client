export default function throttle(func, wait) {
  let timer
  return function(...arg) {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null
        func.apply(this, arg)
      }, wait)
    }
  }
}
