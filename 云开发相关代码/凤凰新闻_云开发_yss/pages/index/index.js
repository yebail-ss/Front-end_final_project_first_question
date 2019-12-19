//1，引入本地json数据，这里引入的就是第一步定义的json数据
var jsonData = require('../../json/json.js');
Page({
  data: {
    yulelist: [],
    datalist: [
      {
        link: 'toutiao',
        title: '头条'
      },
      {
        link: 'yule',
        title: '娱乐'
      },
      {
        link: 'junshi',
        title: '军事'
      },
      {
        link: 'guoji',
        title: '国际'
      },
      {
        link: 'keji',
        title: '科技'
      },
      {
        link: 'lishi',
        title: '历史'
      },
      {
        link: 'tiyu',
        title: '体育'
      }
    ],
    boolean: true,
    boolean0: false,
    boolean1: false,
    boolean2: false,
    boolean3: false,
    boolean4: false
  },


  onLoad: function () {
    let that = this
    wx.cloud.database().collection("fh").where({
      type: "军事"
    }).get({
      success(res) {
        console.log("请求成功", res.data)
        that.setData({
          junshiList: res.data
        })
      },
      fail(res) {
        console.log("请求失败", res)
      }
    })

    wx.cloud.database().collection("fh").where({
      type: "科技"
    }).get({
      success(res) {
        console.log("请求成功", res.data)
        that.setData({
          kejiList: res.data
        })
      },
      fail(res) {
        console.log("请求失败", res)
      }
    })



    wx.cloud.database().collection("fh").where({
      type: "国际"
    }).get({
      success(res) {
        console.log("请求成功", res.data)
        that.setData({
          guojiList: res.data
        })
      },
      fail(res) {
        console.log("请求失败", res)
      }
    })


    wx.cloud.database().collection("fh").where({
      type: "历史"
    }).get({
      success(res) {
        console.log("请求成功", res.data)
        that.setData({
          lishiList: res.data
        })
      },
      fail(res) {
        console.log("请求失败", res)
      }
    })


    wx.cloud.database().collection("fh").where({
      type: "体育"
    }).get({
      success(res) {
        console.log("请求成功", res.data)
        that.setData({
          tiyuList: res.data
        })
      },
      fail(res) {
        console.log("请求失败", res)
      }
    })


    wx.cloud.database().collection("fh").where({
      type: "头条"
    }).get({
      success(res) {
        console.log("请求成功", res.data)
        that.setData({
          dataList: res.data
        })
      },
      fail(res) {
        console.log("请求失败", res)
      }
    })


    wx.cloud.database().collection("fh").where({
      type: "娱乐"
    }).get({
      success(res) {
        console.log("请求成功", res.data)
        that.setData({
          yulelist: res.data
        })
      },
      fail(res) {
        console.log("请求失败", res)
      }
    })
  },

  go(event) {
    console.log(event);
    let id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/detail/detail'
    })

  },
  // onShow() {
  //   console.log("onShow")
  //   let that = this
  //   wx.cloud.database().collection("fh").get({
  //     success(res) {
  //       console.log("请求成功", res.data)
  //       that.setData({
  //         dataList: res.data
  //       })
  //     },
  //     fail(res) {
  //       console.log("请求失败", res)
  //     }

  //   })
  // },
  // onShow() {
  //   console.log("onShow")
  //   let that = this
  //   wx.cloud.database().collection("fh").where({
  //     type: "娱乐"
  //   }).get({
  //     success(res) {
  //       console.log("请求成功", res.data)
  //       that.setData({
  //         yuleList: res.data
  //       })
  //     },
  //     fail(res) {
  //       console.log("请求失败", res)
  //     }

  //   })
  // },
  // onLoad: function() {
  //   this.setData({
  //     //2，jsonData.dataList获取json.js里定义的json数据，并赋值给dataList
  //     dataList: jsonData.dataList
  //   });
  // },

  // 导航栏按钮组
  toutiao: function () {
    var bol = this.data.boolean;
    this.setData({
      boolean: !bol,
      boolean0: false,
      boolean1: false,
      boolean2: false,
      boolean3: false,
      boolean4: false,
      boolean5: false,
    })
  },

  yule: function () {
    var bol = this.data.boolean0;
    this.setData({
      boolean0: !bol,
      boolean1: false,
      boolean2: false,
      boolean: false,
      boolean3: false,
      boolean4: false,
      boolean5: false,
    })
  },
  junshi: function () {
    var bol = this.data.boolean1;
    this.setData({
      boolean1: !bol,
      boolean: false,
      boolean2: false,
      boolean0: false,
      boolean3: false,
      boolean4: false,
      boolean5: false,
    })
  },
  keji: function () {
    var bol = this.data.boolean2;
    this.setData({
      boolean2: !bol,
      boolean: false,
      boolean1: false,
      boolean0: false,
      boolean3: false,
      boolean4: false,
      boolean5: false,
    })
  },
  tiyu: function () {
    var bol = this.data.boolean3;
    this.setData({
      boolean3: !bol,
      boolean: false,
      boolean1: false,
      boolean2: false,
      boolean0: false,
      boolean4: false,
      boolean5: false,
    })
  },
  guoji: function () {
    var bol = this.data.boolean4;
    this.setData({
      boolean4: !bol,
      boolean: false,
      boolean1: false,
      boolean2: false,
      boolean0: false,
      boolean3: false,
      boolean5: false,
    })
  },
  lishi: function () {
    var bol = this.data.boolean5;
    this.setData({
      boolean5: !bol,
      boolean: false,
      boolean1: false,
      boolean2: false,
      boolean0: false,
      boolean3: false,
      boolean4: false,
    })
  },
})