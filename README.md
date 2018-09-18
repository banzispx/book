##微信小程序客户端

  - 本小程序的主要功能是书籍展示
  
  - 服务端的api基于node+express+mysql
  
  - 有配套的后台管理系统，基于ejs模板
  
####下面是在云服务器上配置的数据接口和管理后台

  - 由于域名还在备案，所以数据接口和管理后台只能通过Ip+端口号的形式来访问
  
  - [数据接口](http://122.152.222.17:8080/api/book)
   
  - [管理后台](http://122.152.222.17:8080/admin/login) 
#####   管理后台的账号为admin 密码为123456，由于使用的是服务器配置较低，所以进入可能会比较慢，下载服务端代码请访问如下链接
GitHub地址：（https://github.com/banzispx/book-server）
##项目截图
<img src="https://i.loli.net/2018/09/18/5ba0fb3176801.png" width="400" alt="">
<img src="https://i.loli.net/2018/09/18/5ba0fb2cad97d.png" width="400" alt="">

<img src="https://i.loli.net/2018/09/18/5ba0fb2f5f687.png" width="400" alt="">
<img src="https://i.loli.net/2018/09/18/5ba0fb306f751.png" width="400" alt="">

##功能列表

   - 小程序的页面包括首页、分类和用户中心三个主页面
   
   - 分类界面通过调用不同类型的数据接口来实现
   
   - 主界面有数据的提交
###服务端api
项目地址：https://github.com/banzispx/book-server
     
