Page({
  data: {
    type: null,
    poems: [],
    loading: false,
    page: 1
  },

  onLoad(options) {
    console.log("options",options)
    this.setData({
      type: options.typeId
    });
    this.loadPoems();
  },

  onReachBottom() {
    if (!this.data.loading) {
      this.loadPoems();
    }
  },

  async loadPoems() {
    this.setData({ loading: true });

    try {
      // 示例数据
      const sampleData = {
        '1': [
          { name: "静夜思", author: "李白", dynasty: "唐代" },
          { name: "登鹳雀楼", author: "王之涣", dynasty: "唐代" },
          { name: "夜泊牛渚怀古", author: "李白", dynasty: "唐代" },
          { name: "将进酒", author: "李白", dynasty: "唐代" },
          { name: "送别", author: "王之涣", dynasty: "唐代" }
      ],
      '2': [
          { name: "再别康桥", author: "徐志摩", dynasty: "现代" },
          { name: "春晓", author: "孟浩然", dynasty: "唐代" },
          { name: "偶成", author: "徐志摩", dynasty: "现代" },
          { name: "山居秋暝", author: "王维", dynasty: "唐代" },
          { name: "秋夕", author: "杜牧", dynasty: "唐代" }
      ],
      '4': [
          { name: "离骚", author: "屈原", dynasty: "战国" },
          { name: "九章", author: "屈原", dynasty: "战国" },
          { name: "涉江采芙蓉", author: "王昌龄", dynasty: "唐代" },
          { name: "无题", author: "李商隐", dynasty: "唐代" },
          { name: "滕王阁序", author: "王勃", dynasty: "唐代" }
      ],
      '5': [
          { name: "长恨歌", author: "白居易", dynasty: "唐代" },
          { name: "问刘十九", author: "白居易", dynasty: "唐代" },
          { name: "月下独酌", author: "李白", dynasty: "唐代" },
          { name: "竹里馆", author: "王维", dynasty: "唐代" },
          { name: "清平调", author: "李白", dynasty: "唐代" }
      ]
      };

      const poems = sampleData[this.data.type] || [];
      this.setData({
        poems: [...this.data.poems, ...poems],
        page: this.data.page + 1
      });
    } catch (error) {
      wx.showToast({
        title: '加载失败',
        icon: 'none'
      });
    } finally {
      this.setData({ loading: false });
    }
  }
});