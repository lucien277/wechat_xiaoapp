Page({
  data: {
    products: [
      {
        id: '1',
        name: '罗纹',
        image: 'https://imgtnc.tnccdn.com/upload/01/product/9d/01/180502197943VwXi.jpg',
        description: '舒适透气，适合日常穿着。',
        price: '100.00'
      },
      {
        id: '2',
        name: '针织',
        image: 'https://imgtnc.tnccdn.com/upload/102/product/4b/e9/T1fzATBbZT1RCxUzQW.JPG',
        description: '弹性比较好',
        price: '200.00'
      },
      {
        id: '3',
        name: '梭织',
        image: 'https://imgqfc.tnccdn.com/upload/01/product/ba/75/1846530.JPG',
        description: '光滑柔软，适合正式场合。',
        price: '200.00'
      },
      {
        id: '4',
        name: '奥利绒',
        image: 'https://cbu01.alicdn.com/img/ibank/O1CN01ovb6XY1WhbZZOp8CV_!!996452820-0-cib.360x360.jpg',
        description: '光滑柔软，适合正式场合。',
        price: '300.00'
      },
    ],
  },
  onLoad: function(options) {
    const productId = options.id;
    const product = this.data.products.find(item => item.id === productId);
    this.setData({
      product: product
    });
  }
});