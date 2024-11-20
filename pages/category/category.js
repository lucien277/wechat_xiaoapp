Page({
  data: {
    categories: []
  },
  onLoad: function() {
    const app = getApp();
    this.setData({
      categories: app.globalData.categories
    });
  },
  goToProductList: function(event) {
    const categoryId = event.currentTarget.dataset.categoryId;
    wx.navigateTo({
      url: `/pages/product/product?categoryId=${categoryId}`
    });
  }
});