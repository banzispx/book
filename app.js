//app.js
App({
    globalDate: {
      userInfo: {},
      avatarurl: 'static/images/weidenglu.png',
      username: '未登录',
    },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    var that = this;
    wx.getUserInfo({
      success: function(res){
        that.globalDate.userInfo = res.userInfo;
        console.log(that.globalDate.userInfo);
        that.globalDate.avatarurl = res.userInfo.avatarurl,
        that.globalDate.username = res.userInfo.nickName
      },
    });
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
