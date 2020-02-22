// component/menuitem/menuitem.js
Component({
  relations: {
    '../menuitem/menuitem': {
      type: 'parent',
      linked: function (target) {
        const options = {
          accordion: target.data.accordion
        }
        if (target.data.name === this.data.name) {
          options.showContent = 'i-collapse-item-show-content';
        }
        this.setData(options);
      }
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    name: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    showContent: '',
    accordion: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    trigger(e) {
      const data = this.data;
      if (data.accordion) {
        this.triggerEvent('collapse', { name: data.name }, { composed: true, bubbles: true });
      } else {
        this.setData({
          showContent: data.showContent ? '' : 'i-collapse-item-show-content'
        });
      }
    },
  },
  options: {
    multipleSlots: true
  }
})
