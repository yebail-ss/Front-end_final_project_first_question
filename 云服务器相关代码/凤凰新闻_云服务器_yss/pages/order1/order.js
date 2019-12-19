// pages/me/me.js
Page({
  onLoad(options) {
    console.log(options.json)
    let order = JSON.parse(options.json)
    this.setData({
      order: order
    })
  }
})