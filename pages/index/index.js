//index.js
//获取应用实例
const app = getApp()
const myRequest = require('../../api/index.js');
Page({
	/**
	 * 页面的初始数据
   * 轮播图
	 */
	data: {
		imgList: [
			'/image/swiper/ad1.jpg',
			'/image/swiper/ad2.jpg',
			'/image/swiper/ad3.jpg',
			'/image/swiper/ad4.jpg',
			'/image/swiper/ad5.jpg',
			'/image/swiper/ad6.jpg',
			'/image/swiper/ad7.jpg'
    ],
    poems: [
      { id: 1, title: '登鹤雀楼', author: '王之涣', dynasty: '唐', content: '白日依山尽，黄河入海流。欲穷千里目，更上一层楼。' },
      { id: 2, title: '静夜思', author: '李白', dynasty: '唐', content: '床前明月光，疑是地上霜。举头望明月，低头思故乡。' },
    ],
		navList: [
      {
        icon: '/image/nav-icon/diantai.png',
        events: 'goToBangDan',
        text: '人生必读'
      },
      {
			icon: '/image/nav-icon/diantai.png',
			events: 'goToBangDan',
			text: '小学必读'
		},
		{
			icon: '/image/nav-icon/diantai.png',
			events: 'goToBangDan',
			text: '初中必读'
		},
		{
			icon: '/image/nav-icon/diantai.png',
			events: 'goToBangDan',
			text: '高中必读'
		},
		],
		swiperCurrent: 0,
  },
  
	onLoad: function (options) {
		const that = this
		myRequest.getData().then(res => {
      console.log("res",res)
			const {guess,hotRecommends} = res.data
			that.setData({
				showitem: true,
				guess: guess.list.slice(0, 3),
				xiaoshuocontent: hotRecommends.list[0].list,
				xiangshengcontent: hotRecommends.list[2].list,
				tuokocontent: hotRecommends.list[4].list
			})
		}).catch(err => {
			console.log('error :>> ', err);
			that.setData({
				showitem: false
			})
		})
	},
	//轮播图改变事件
	swiperChange: function (e) {
		this.setData({
			swiperCurrent: e.detail.current
		})
	},
	goToBangDan: function () {
		wx.navigateTo({
			url: '/pages/index/bangdan/bangdan',
		})
	},
	gotoDetails(e) {
		const url = e.currentTarget.dataset.coverimg;
		const title = e.currentTarget.dataset.title;
		wx.navigateTo({
			// 页面传参
			url: '/pages/details/details?url=' + url + '&title=' + title,
		})
	}
})
