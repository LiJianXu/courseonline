// component/menu/menu.js
Component({

  relations:{
    '../menuitem/menuitem':{
      type: 'child'
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    name: String,
    accordion: Boolean
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
    clickfn(e) {
      const params = e.detail;
      const allList = this.getRelationNodes('../collapse-item/index');
      allList.forEach((item) => {
        if (params.name === item.data.name) {
          item.setData({
            showContent: 'i-collapse-item-show-content'
          });
        } else {
          item.setData({
            showContent: ''
          });
        }
      });
    },
  }
})
