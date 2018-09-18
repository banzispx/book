// pages/sorts/sorts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },
  bindwenxue: function(){
    wx.navigateTo({
      url: '/pages/category/category?sorts=popular',
    })
  },
  bindliuxing: function () {
    wx.navigateTo({
      url: '/pages/category/category?sorts=new',
    })
  },
  bindwenhua: function () {
    wx.navigateTo({
      url: '/pages/category/category?sorts=famous',
    })
  },
  bindscience: function () {
    wx.navigateTo({
      url: '/pages/category/category?sorts=science',
    })
  },
  bindsome: function () {
    wx.navigateTo({
      url: '/pages/category/category?sorts=some',
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})