Page({
  data: {
    productName: '',
    price: '',
    description: '',
    specifications: '',
    tempImages: [],
  },

  // 选择图片
  chooseImage() {
    wx.chooseMedia({
      count: 9 - this.data.tempImages.length,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const tempFiles = res.tempFiles;
        const tempFilePaths = tempFiles.map(file => file.tempFilePath);
        this.setData({
          tempImages: [...this.data.tempImages, ...tempFilePaths]
        });
      }
    });
  },

  // 删除图片
  deleteImage(e) {
    const index = e.currentTarget.dataset.index;
    const tempImages = this.data.tempImages;
    tempImages.splice(index, 1);
    this.setData({
      tempImages
    });
  },

  // 提交表单
  submitForm() {
    if (!this.data.productName || !this.data.price || !this.data.description || this.data.tempImages.length === 0) {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none'
      });
      return;
    }

    // 上传图片到服务器
    const uploadTasks = this.data.tempImages.map(tempFilePath => {
      return new Promise((resolve, reject) => {
        wx.uploadFile({
          url: 'YOUR_SERVER_URL/upload', // 替换为您的服务器上传接口
          filePath: tempFilePath,
          name: 'file',
          success: res => resolve(res),
          fail: err => reject(err)
        });
      });
    });

    wx.showLoading({
      title: '正在上传',
    });

    Promise.all(uploadTasks)
      .then(results => {
        // 所有图片上传完成后，提交产品信息
        return wx.request({
          url: 'YOUR_SERVER_URL/product', // 替换为您的产品创建接口
          method: 'POST',
          data: {
            name: this.data.productName,
            price: this.data.price,
            description: this.data.description,
            specifications: this.data.specifications,
            images: results.map(res => JSON.parse(res.data).url) // 假设服务器返回图片URL
          }
        });
      })
      .then(() => {
        wx.hideLoading();
        wx.showToast({
          title: '上传成功',
          icon: 'success'
        });
        // 清空表单
        this.setData({
          productName: '',
          price: '',
          description: '',
          specifications: '',
          tempImages: []
        });
      })
      .catch(err => {
        wx.hideLoading();
        wx.showToast({
          title: '上传失败',
          icon: 'none'
        });
        console.error(err);
      });
  }
});