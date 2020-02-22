// component/mymodal/mymodal.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    visible: {
      type: Boolean,
      value: false
    },
    title: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    visible: false,
    showContent0: false,
    showContent1: false,
    showContent2: false,
    showContentcurrent: '3',
    tablelist0item: [{ i: 0, v: "全部" }, { i: 1, v: "CCC培训" }, { i: 2, v: "管理体系认证培训" }, { i: 3, v: "建筑师" }, { i: 4, v: "K12" }, { i: 5, v: "心理学" }, { i: 6, v: "会计" }, { i: 7, v: "初中" }, { i: 8, v: "高中" }, { i: 9, v: "小学" }, { i: 10, v: "互联网" }],
    tablelist1item: [{i: 0,v: "综合排序"},{i: 1,v: "最新"},{i: 2,v: "最热"},{i: 3,v: "价格从低到高"},{i: 4,v: "价格从高到低"}],
    tablelist0itemchild: [{ i: 0, f: 1, v: ["建筑玻璃强制性认证培训","通讯设备强制性认证培训"] }, { i: 1, f: 2, v: ["ISO9001","ISO14001"] }, { i: 2, f: 3, v: ["一级建筑师","二级建筑师"] }, { i: 3, f: 4, v: ["初中", "高中"] }, { i: 4, f: 5, v: ["心理咨询一级", "心理咨询二级"] }, { i: 5, f: 6, v: ["会计初级", "财经法规"] }, { i: 6, f: 7, v: ["语文", "数学"] }, { i: 7, f: 8, v: ["语文", "数学"] }, { i: 8, f: 9, v: ["语文", "数学"] }, { i: 9, f: 10, v: ["计算机等级", "网络营销"] }],
    inselect:0,
    inselect1: 0,
    showrightitem: false,
    selectcheck: 0,
    types00:false,
    types01:false,
    types10:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showtable: function(e) {
      const curentId = e.currentTarget.id;
      const lassId = curentId.charAt(9);
      const c = this.data.showContentcurrent;
      if (c != '3') {
        if (c == '0') {
          this.setData({
            showContent0: false
          })
        } else if (c == '1') {
          this.setData({
            showContent1: false
          })
        } else if (c == '2') {
          this.setData({
            showContent2: false
          })
        }
      }
      this.setData({
        showContentcurrent: lassId
      })
      this.setData({
        visible: true,
      })
      if (lassId == '0') {
        this.setData({
          showContent0: true
        })
      } else if (lassId == '1') {
        this.setData({
          showContent1: true
        })
      } else if (lassId == '2') {
        this.setData({
          showContent2: true
        })
      }
    },
    hidemodal: function() {
      this.setData({
        showContentcurrent: '3',
        visible: false,
        showContent0: false,
        showContent1: false,
        showContent2: false,
      })
    },
    linkitem: function(e) {
      this.setData({
        inselect1: e.target.dataset.id
      })
      this.hidemodal()
    },
    linkitem0: function(e){
      this.setData({
        inselect: e.target.dataset.id,
        selectcheck: 0
      })
    },
    selectcheck: function(e){
      this.setData({
        selectcheck: e.target.dataset.bindex
      })
      console.log("一级:" + e.target.dataset.inselect+ "二级:" + e.target.dataset.bindex)
      this.setData({
        selectcheck: 0,
        inselect: 0
      })
      this.hidemodal()
    },
    /**
     * 选择课程类型
     */
    type0check: function(e){
      const id = e.target.dataset.id;
      if(id == "types00"){
        if (this.data.types00){
          this.setData({
            types00:false
          })
        }else{
          this.setData({
            types00: true
          })
        }
      } else{
        if (this.data.types01) {
          this.setData({
            types01: false
          })
        } else {
          this.setData({
            types01: true
          })
        }
      }
    },
    /**
     * 选择会员类型
     */
    type1check: function(e){
      const id = e.target.dataset.id;
      if (id =='types10'){
        this.setData({
          types10:0
        })
      }else if (id == 'types11'){
        this.setData({
          types10: 1
        })
      }else{
        this.setData({
          types10: 2
        })
      }
    },
    /**
     * 重置按钮
     */
    resetbutton: function(){
      this.setData({
        types00: false,
        types01: false,
        types10: 0
      })
    },
    /**
     * 确认按钮
     */
    confirmbutton: function(){
      this.resetbutton()
      this.hidemodal()
    }
  }
})