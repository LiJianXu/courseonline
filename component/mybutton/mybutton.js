// component/mybutton/mybutton.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    buttontitle:["套餐课程","免费课程"],
    singular:false,
    select:[0,1]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    selectbutton: function(e){
      console.log(e.target.dataset.id)
      if (this.data.singular){

      }else{

      }
    }
  }
})
