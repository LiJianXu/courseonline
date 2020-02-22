//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    current: "homepage",
    homepage: "showpane",
    group: "nonepane",
    remind: "nonepane",
    mine: "nonepane",
    count: 6,
    dots: true,
    imgurl: "http://www.sichuanair.com/theme/scal_201607/img/temp/",
    background: ['slide1.jpg', 'pilot.jpg','bannerno10.jpg'],
    height: app.globalData.height * 2 + 25,
    navbarData: {
      name: '首页'
    },
    visible1: false,
  },
  handleClose1() {
    this.setData({
      visible1: false
    });
  },
  opent(){
    this.setData({
      visible1: true
    });
  },
  handleChange: function (event){
    this.setData({
      current: event.detail.key
    })
    const c = this.data.current;
    if (c =='homepage'){
        this.setData({
          homepage: 'showpane',
          group: 'nonepane',
          remind: 'nonepane',
          mine: 'nonepane'
        })
    } else if (c == 'group'){
      this.setData({
        homepage: 'nonepane',
        group: 'showpane',
        remind: 'nonepane',
        mine: 'nonepane'
      })
    } else if (c == 'remind'){
      this.setData({
        homepage: 'nonepane',
        group: 'nonepane',
        remind: 'showpane',
        mine: 'nonepane'
      })
    } else if (c == 'mine'){
      this.setData({
        homepage: 'nonepane',
        group: 'nonepane',
        remind: 'nonepane',
        mine: 'showpane'
      })
    }
  },
  handleClick: function(){

  },
  onLoad: function () {

  },
  getmore: function(e){
    this.setData({
      current:'group',
      homepage: 'nonepane',
      group: 'showpane',
      remind: 'nonepane',
      mine: 'nonepane'
    })
  }
})
