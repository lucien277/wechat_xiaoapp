App({
  onLaunch: function() {
    // 可以在这里异步加载数据
    // 加载完成后通知所有页面
  },
  onError:function(){
    console('error')
  },
  globalData: {
    fabric: [
      {
        id: '1',
        name: '罗纹',
        images: [
          'https://imgtnc.tnccdn.com/upload/01/product/9d/01/180502197943VwXi.jpg',
          'https://example.com/image2.jpg',
          'https://example.com/image3.jpg'
        ],
        price: '100.00',
        season: '春夏',
        type: '梭织',
        material: '棉95% 氨纶5%',
        weight: '200g/㎡',
        width: '180cm',
        stock: '1000米',
        description: '优质罗纹面料，柔软舒适，弹力出众，适合制作各类服装领口、袖口等部位。'
      },
      {
        id: '2',
        name: '针织',
        images: [
          'https://imgtnc.tnccdn.com/upload/102/product/4b/e9/T1fzATBbZT1RCxUzQW.JPG',
          'https://example.com/image2.jpg'
        ],
        price: '200.00',
        season: '秋冬',
        type: '针织',
        material: '棉80% 涤纶20%',
        weight: '180g/㎡',
        width: '160cm',
        stock: '800米',
        description: '弹性优良，适合制作运动服装和休闲装。'
      },
      {
        id: '3',
        name: '梭织',
        images: [
          'https://imgqfc.tnccdn.com/upload/01/product/ba/75/1846530.JPG'
        ],
        price: '200.00',
        season: '四季',
        type: '梭织',
        material: '棉100%',
        weight: '150g/㎡',
        width: '150cm',
        stock: '1200米',
        description: '光滑柔软，适合制作床上用品和家居装饰品。'
      },
      {
        id: '4',
        name: '奥利绒',
        images: [
          'https://cbu01.alicdn.com/img/ibank/O1CN01ovb6XY1WhbZZOp8CV_!!996452820-0-cib.360x360.jpg'
        ],
        price: '300.00',
        season: '秋冬',
        type: '梭织',
        material: '涤纶100%',
        weight: '250g/㎡',
        width: '150cm',
        stock: '500米',
        description: '保暖性能优异，适合制作冬季外套和保暖服装。'
      },
      {
        id: '5',
        name: '天鹅绒',
        images: [
          'https://cbu01.alicdn.com/img/ibank/2015/484/902/2665209484_200818837.jpg'
        ],
        price: '280.00',
        season: '秋冬',
        type: '针织',
        material: '涤纶90% 氨纶10%',
        weight: '220g/㎡',
        width: '145cm',
        stock: '600米',
        description: '柔软亲肤，适合制作家居服和装饰用品。'
      },
      {
        id: '6',
        name: '牛仔布',
        images: [
          'https://imgtnc.tnccdn.com/upload/102/product/2c/6b/T1btATB4dv1RCb1PS2.jpg'
        ],
        price: '350.00',
        season: '四季',
        type: '梭织',
        material: '棉98% 氨纶2%',
        weight: '280g/㎡',
        width: '150cm',
        stock: '800米',
        description: '经典牛仔面料，耐磨耐穿，适合制作各类牛仔服装。'
      },
      {
        id: '7',
        name: '亚麻布',
        images: [
          'https://imgtnc.tnccdn.com/upload/102/product/9a/0b/T1GXJvBCE_1RCb1PS2.jpg'
        ],
        price: '180.00',
        season: '春夏',
        type: '梭织',
        material: '亚麻100%',
        weight: '160g/㎡',
        width: '140cm',
        stock: '900米',
        description: '天然亚麻面料，透气清爽，适合制作夏季服装。'
      },
      {
        id: '8',
        name: '雪尼尔',
        images: [
          'https://imgtnc.tnccdn.com/upload/102/product/f9/04/T1pXdTBQJT1RCxUzQW.JPG'
        ],
        price: '260.00',
        season: '秋冬',
        type: '针织',
        material: '聚酯纤维100%',
        weight: '300g/㎡',
        width: '140cm',
        stock: '400米',
        description: '质地柔软，毛感丰富，适合制作窗帘和抱枕等家居用品。'
      }
    ]
  }
});