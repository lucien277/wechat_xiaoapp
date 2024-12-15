const app = getApp()

Page({
  data: {
    seasons: ['春夏', '秋冬', '四季'],
    type: ['梭织', '针织'],
    selectedSeason: '',
    selectedUse: '',
    filteredFabric: []
  },

  handleFilter(e) {
    const { type, value } = e.currentTarget.dataset;

    if (type === 'season' && this.data.selectedSeason === value) {
      this.setData({ selectedSeason: '' });
    } else if (type === 'use' && this.data.selectedUse === value) {
      this.setData({ selectedUse: '' });
    } else {
      this.setData({
        [type === 'season' ? 'selectedSeason' : 'selectedUse']: value
      });
    }

    this.applyFilters();
  },

  applyFilters() {
    const { selectedSeason, selectedUse } = this.data;
    let filtered = app.globalData.fabric || [];

    if (selectedSeason) {
      filtered = filtered.filter(item => item.season === selectedSeason);
    }

    if (selectedUse) {
      filtered = filtered.filter(item => item.type === selectedUse);
    }

    this.setData({
      filteredFabric: filtered
    });
  },

  onLoad: function() {
    if (app.globalData.fabric) {
      this.setData({
        filteredFabric: app.globalData.fabric
      });
    }
  },

  onShow: function() {
    this.setData({
      filteredFabric: app.globalData.fabric
    });
    this.applyFilters();
  },

  goToProduct: function(event) {
    const productId = event.currentTarget.dataset.productId;
    wx.navigateTo({
      url: `/pages/product/product?id=${productId}`
    });
  }
});