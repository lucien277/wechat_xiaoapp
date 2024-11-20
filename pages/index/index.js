Page({
  data: {
    fabric: [
      { id: '1', name: '罗纹', image: 'https://imgtnc.tnccdn.com/upload/01/product/9d/01/180502197943VwXi.jpg' },
      { id: '2', name: '针织', image: 'https://imgtnc.tnccdn.com/upload/102/product/4b/e9/T1fzATBbZT1RCxUzQW.JPG' },
      { id: '3', name: '梭织', image: 'https://imgqfc.tnccdn.com/upload/01/product/ba/75/1846530.JPG' },
      { id: '4',name: '奥利绒',image: 'https://cbu01.alicdn.com/img/ibank/O1CN01ovb6XY1WhbZZOp8CV_!!996452820-0-cib.360x360.jpg'}
    ]
  },
  onLoad: function() {
    // 页面加载时执行的逻辑
  },
  goToProduct: function(event) {
    // 从 data- 属性中获取 productId
    const productId = event.currentTarget.dataset.productId;
    // 跳转到商品详情页面，并传递 productId 作为参数
    wx.navigateTo({
      url: `/pages/product/product?id=${productId}`
    });
  }
});