
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/tabbar/index/index","pages/tabbar/find/find","pages/tabbar/mail/mail","pages/tabbar/my/my","pages/chat/chat","pages/chat/video/video","pages/chat/chat-set/chat-set","pages/mail/user-base/user-base","pages/mail/user-remark-tag/user-remark-tag","pages/mail/user-tag-set/user-tag-set","pages/mail/user-moments-auth/user-moments-auth"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"微信","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#fff","titleNView":false,"scrollIndicator":"none"},"tabBar":{"borderStyle":"black","backgroundColor":"#f7f7f7","color":"#000000","selectedColor":"#08C261","list":[{"iconPath":"static/tabbar/index.png","selectedIconPath":"static/tabbar/index-select.png","text":"首页","pagePath":"pages/tabbar/index/index"},{"iconPath":"static/tabbar/mail.png","selectedIconPath":"static/tabbar/mail-select.png","text":"通讯录","pagePath":"pages/tabbar/mail/mail"},{"iconPath":"static/tabbar/find.png","selectedIconPath":"static/tabbar/find-select.png","text":"发现","pagePath":"pages/tabbar/find/find"},{"iconPath":"static/tabbar/my.png","selectedIconPath":"static/tabbar/my-select.png","text":"我的","pagePath":"pages/tabbar/my/my"}]},"nvueCompiler":"uni-app","renderer":"native","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"仿微信","compilerVersion":"2.9.3","entryPagePath":"pages/tabbar/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/tabbar/index/index","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{}},{"path":"/pages/tabbar/find/find","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{}},{"path":"/pages/tabbar/mail/mail","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{}},{"path":"/pages/tabbar/my/my","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{}},{"path":"/pages/chat/chat","meta":{"isNVue":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/chat/video/video","meta":{"isNVue":true},"window":{}},{"path":"/pages/chat/chat-set/chat-set","meta":{"isNVue":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/mail/user-base/user-base","meta":{"isNVue":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/mail/user-remark-tag/user-remark-tag","meta":{"isNVue":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/mail/user-tag-set/user-tag-set","meta":{"isNVue":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/mail/user-moments-auth/user-moments-auth","meta":{"isNVue":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
