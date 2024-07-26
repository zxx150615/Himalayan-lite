Page({
  data: {
    typeId: null,
    poems: [],
    loading: false,
    page: 1
  },

  onLoad(options) {
    this.setData({
      typeId: options.typeId
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
        1: [
          { name: "静夜思", author: "李白", dynasty: "唐代" },
          { name: "登鹳雀楼", author: "王之涣", dynasty: "唐代" }
        ],
        2: [
          { name: "再别康桥", author: "徐志摩", dynasty: "现代" },
          { name: "春晓", author: "孟浩然", dynasty: "唐代" }
        ]
      };

      const poems = sampleData[this.data.typeId] || [];
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