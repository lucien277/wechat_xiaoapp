const app = getApp()

Page({
  data: {
    product: null
  },

  onLoad: function(options) {
    const productId = options.id;
    const product = app.globalData.fabric.find(item => item.id === productId);
    this.setData({
      product: product
    });
  },

  previewImage: function(e) {
    const current = e.currentTarget.dataset.url;
    wx.previewImage({
      current,
      urls: this.data.product.images
    });
  },

  checkStock: function() {
    wx.showModal({
      title: '库存信息',
      content: `当前库存：${this.data.product.stock}`,
      showCancel: false
    });
  },

  contactService: function() {
    wx.showToast({
      title: '正在接入客服...',
      icon: 'loading'
    });
  },

  contactSupplier: function() {
    wx.makePhoneCall({
      phoneNumber: '10086', // 替换为实际的供应商电话
      fail: () => {
        wx.showToast({
          title: '拨号失败',
          icon: 'none'
        });
      }
    });
  }
});