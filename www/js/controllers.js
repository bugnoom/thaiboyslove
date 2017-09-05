angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$state) {
  $scope.items=[];
  $scope.items = [
    {
      id:1,
    title : "พูดคุยทั่วไป",
    shorttext : "เอาไว้ให้แนะนำตัวทักทายเพื่อนๆ หยอดคำหวานๆใส่กันได้นะจ๊ะ พูดคุยทั่วไปเรื่อง boy's love แนะนำ ถามหานิยาย เรื่องเล่ากันได้ คุยเรื่องอื่นๆนอกหัวข้อหลักที่ตั้งไว้",
    pic   : "http://www.thaiboyslove.com/webboard/Themes/default/images/off.png",
    creadit : "มูมู่น้อย, oaw_eang, THIP"
  },
  {
    id : 2,
    title : "เซ็งเป็ดแฟนคลับ",
    shorttext : "ติดตามเรื่องเล่ากรูม่ายช่ายเกย์ อยากคุยเรื่องต่างๆที่เกี่ยวกับคุณเซ็งเป็ด และเรื่องเล่ากรูม่ายช่ายเกย์ ทักทายและแนะนำตัวอยากเป็นแฟนคลับเซ็งเป็ด",
    pic   : "http://www.thaiboyslove.com/webboard/Themes/default/images/off.png",
    creadit : "มูมู่น้อย, Junrai_Hyper™, RN"
  },
  {
    id : 3,
    title : "เรื่องสั้น",
    shorttext : "ใครจะโพสเรื่องสั้นให้มาโพสที่บอร์ดนี้ ถ้าเรื่องไหนไม่จบนานเกิน 3 เดือน จะทำการลบทิ้งทันที ส่วนเรื่องสั้นที่จบแล้วให้แก้ไขโพสแรก และต่อท้ายว่าจบแล้วจะได้ไม่ถูกลบทิ้งและจะเก็บไว้ที่บอร์ดเรื่องสั้นไม่ย้ายไปไหน",
    pic   : "http://www.thaiboyslove.com/webboard/Themes/default/images/off.png",
    creadit : "oaw_eang, Junrai_Hyper™, THIP, Poes"
  },
  {
    id : 4,
    title : "Boy's love story",
    shorttext : "มาเล่าเรื่อง แบ่งปันประสบการณ์หรือแต่งนิยายแนว y(yaoi) หรือ boy's love ก็มาเล่าสู่กันฟังได้นะครับ แต่ห้ามติดเรทเอ็กซ์นะครับ ห้ามลงลิงค์ห้ามถามถึงนิยายและกรุณาเล่าให้จบนะครับ ห้ามลงเรื่องสั้นให้ไปโพสบอร์ดเรื่องสั้นแทน",
    pic   : "http://www.thaiboyslove.com/webboard/Themes/default/images/off.png",
    creadit : "oaw_eang, Junrai_Hyper™, THIP, Poes"
  },
  { id : 5,
    title : "ซื้อขาย",
    shorttext : "จะโฆษณาซื้อๆขายๆอะไรโพสได้ที่นี่เลยครับ ตลอดจนประกาศ จะโทรโข่งให้โลกรู้ และโฆษณาชวนเชื่อ ที่ไม่แน่ใจว่าทำผิดกฎอะไรอย่างไร แนะนำนิยายดีๆที่ไม่สามารถขอมาโพสที่เวปเรา แต่อยากให้เพื่อนๆไปอ่าน ก็ลงที่นี่นะครับ",
    pic   : "http://www.thaiboyslove.com/webboard/Themes/default/images/off.png",
    creadit : "THIP, Poes, RN"
  }
];

$scope.gotoblog = function(blogID){
  $state.go('tab.chats')
}

})

.controller('ChatsCtrl', function($scope, Chats) {
  
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.input = {};
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($state, $scope, $stateParams, Chats) {
  $scope.input = {};
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

  $scope.chat = Chats.get($stateParams.chatId);

  $scope.gotocomment = function(id){
    $state.go('tab.account-comment',{chatId : id})
  }
})

.controller("LoginCtrl",function($scope,$state){
  $scope.gotoLogin = function(){
    $state.go('login');
  }

  $scope.gotohome = function(){
    $state.go('tab.dash')
  }
})

.controller("BlogCtrl",function($scope,$state,blog,$stateParams){
  $scope.input = {};
  $scope.blogs = blog.all();
  $scope.blogtitle = $stateParams.blogtitle;
  $scope.remove = function(blog) {
    blogs.remove(blog);
  };

  $scope.godetail = function(id){
    $state.go('tab.blogdetail',{chatId:id})
  }
})

.controller('FavCtrl', function($scope, fav) {
  
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.input = {};
  $scope.chats = fav.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
 
})