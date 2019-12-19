Page({
  data: {
    datalist: []
  },
  onShow() {
    console.log("onShow")
    let that = this
    wx.cloud.database().collection("order").get({
      success(res) {
        console.log("请求成功", res.data)
        that.setData({
          datalist: res.data
        })
      },
      fail(res) {
        console.log("请求失败", res)
      }

    })
  },


})
