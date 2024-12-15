const app = getApp()

Page({
  data: {
    fabric: [],
    navItems: [
      { text: '服装', icon: '/images/首页服装.png', url: '/pages/category/category' },
      { text: '分类', icon: '/images/首页分类.png', url: '/pages/category/category' },
      { text: '暂定分类', icon: '/images/分类1.png', url: '/pages/promotion/promotion' },
    ]
  },

  onLoad: function() {
    if (app.globalData.fabric) {
      this.setData({
        fabric: app.globalData.fabric
      });
    }
  },

  onShow: function() {
    this.setData({
      fabric: app.globalData.fabric
    });
  },

  goToProduct: function(event) {
    const productId = event.currentTarget.dataset.productId;
    wx.navigateTo({
      url: `/pages/product/product?id=${productId}`
    });
  }
});