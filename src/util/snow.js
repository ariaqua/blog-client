export default function snow () {
  'use strict'
  let canvas = document.getElementById('canvas')

  if (!canvas || !canvas.getContext) {
    return false
  }

  /********************
    Random Number
  ********************/

  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  /********************
    let
  ********************/

  // canvas 
  let ctx = canvas.getContext('2d')
  let X = canvas.width = window.innerWidth
  let Y = canvas.height = window.innerHeight

  /********************
    Animation
  ********************/

  window.requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (cb) {
      setTimeout(cb, 17)
    }

  /********************
    Snow
  ********************/

  // let
  const num = Math.floor(window.innerWidth * 0.03)
  let snowNum = num
  let backSnowNum = num
  let snows = []
  let backSnows = []

  function Snow(ctx, x, y, r, g) {
    this.ctx = ctx
    this.init(x, y, r, g)
  }

  Snow.prototype.init = function (x, y, r, g) {
    this.x = x
    this.y = y
    this.r = r
    this.c = '255, 255, 255'
    this.v = {
      x: 0,
      y: g
    }
  }

  Snow.prototype.updatePosition = function () {
    this.y += this.v.y
  }

  Snow.prototype.wrapPosition = function () {
    if (this.x - this.r > X) {
      this.x = 0
    }
    if (this.x + this.r < 0) {
      this.x = X
    }
    if (this.y - this.r > Y) {
      this.y = 0
    }
    if (this.y + this.r < 0) {
      this.y = Y
    }
  }

  Snow.prototype.draw = function () {
    ctx = this.ctx
    ctx.save()
    ctx.beginPath()
    ctx.fillStyle = this.gradient()
    ctx.arc(this.x, this.y, this.r, Math.PI * 2, false)
    ctx.fill()
    ctx.closePath()
    ctx.restore()
  }

  Snow.prototype.gradient = function () {
    let col = this.c
    let g = this.ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r)
    g.addColorStop(0, "rgba(" + col + ", " + (1 * 0.3) + ")")
    g.addColorStop(0.5, "rgba(" + col + ", " + (1 * 0.1) + ")")
    g.addColorStop(1, "rgba(" + col + ", " + (1 * 0) + ")")
    return g
  }

  Snow.prototype.resize = function () {
    this.x = rand(0, X)
    this.y = rand(0, Y)
  }

  Snow.prototype.render = function () {
    this.updatePosition()
    this.wrapPosition()
    this.draw()
  }

  for (let i = 0; i < backSnowNum; i++) {
    let snow = new Snow(ctx, rand(0, X), rand(0, Y), rand(1, 5), Math.random())
    backSnows.push(snow)
  }

  for (let i = 0; i < snowNum; i++) {
    let snow = new Snow(ctx, rand(0, X), rand(0, Y), rand(10, 15), Math.random() + 0.3)
    snows.push(snow)
  }

  /********************
    Render
  ********************/

  function render() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    ctx.clearRect(0, 0, X, Y)

    for (let i = 0; i < backSnows.length; i++) {
      backSnows[i].render()
    }
    for (let i = 0; i < snows.length; i++) {
      snows[i].render()
    }
    requestAnimationFrame(render)
  }

  render()

  /********************
    Event
  ********************/

  // resize
  snow.prototype.onResize = function() {
    X = canvas.width = window.innerWidth
    Y = canvas.height = window.innerHeight

    for (let i = 0; i < backSnows.length; i++) {
      backSnows[i].resize()
    }
    for (let i = 0; i < snows.length; i++) {
      snows[i].resize()
    }
  }

  // Author
  console.log('File Name / snowyLandscape.js\nCreated Date / January 28, 2020\nAuthor / Toshiya Marukubo\nTwitter / https://twitter.com/toshiyamarukubo')
}
