// component/list/list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '测试标题'
    },
    imgurl: {
      type: String,
      value: 'http://www.sichuanair.com/theme/scal_201607/img/domesticSales/24_insurance/slider.jpg'
    },
    price: {
      type: String,
      value: '免费'
    },
    cont: {
      type: String,
      value: '1'
    },
    tid: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    getdetial: function (e) {

      wx.navigateTo({
        url: '/pages/detail/detail?tid=' + e.target.id,
      })
    }
  }
})
