const { ificationContent } = require('../../utils/data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex:0,
    VerticalNavTop: 0,
    TabCur: 0,
    ificationTitle:[
      {title:"朝代"},
      {title:"作者"},
      {title:"主题"},
      {title:"教材"},
      {title:"词牌"},
    ],
    ificationContent:ificationContent
  },


  onLoad() {
    const that = this;
    //调用getSystemInfo APi获取到用户的手机屏幕高度，动态设置scroll-view的高度
    // 还有缺陷，代改进
    wx.getSystemInfo({
      success (res) {
        // var heightleft = (res.windowHeight*2);
        const height = (res.windowHeight*2);
        that.setData({
          phoneHeight: height,
        })
      }
    })
  },

  //随着滚动动态设置左侧边栏的选中态
  showActive(e) {
    //方法欠佳，还需改进
    const index = parseInt(e.detail.scrollTop/116);
    this.setData({
      activeIndex: index
     })
  },
  // 侧边栏的点击事件
  change(e) {
    const { index, id } =  e.currentTarget.dataset
    this.setData({
      VerticalNavTop: (index - 1) * 50,
      activeIndex:index,
      TabCur: id,
    })
  },
})