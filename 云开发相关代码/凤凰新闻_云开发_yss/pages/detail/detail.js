// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this;
    console.log(options.id)
    let id = options.id
    wx.cloud.database().collection("fh").where({
      _id: id
    }).get({
      success(res) {
        console.log("请求成功", res.data)
        that.setData({
          item: res.data[0]
        })
      },
      fail(res) {
        console.log("请求失败", res)
      }
    })

  },
  


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})