export default function (msg, duration = 3000, position = {left: '50%', top: 0}) {
  let toastContainer = document.getElementById('toast-container')
  if (!toastContainer) {
    toastContainer = document.createElement('div')
    toastContainer.id = 'toast-container'
    for (const key in position) {
      toastContainer.style[key] = position[key]
    }
    document.body.append(toastContainer)
  }
  const _toast = document.createElement('div')
  _toast.classList.add('toast')
  _toast.textContent = msg
  toastContainer.append(_toast)

  setTimeout(() => {
    _toast.classList.add('show')
  }, 20);

  setTimeout(() => {
    _toast.classList.remove('show')
    setTimeout(() => {
      _toast.remove()
    }, 500);
  }, duration);
}
