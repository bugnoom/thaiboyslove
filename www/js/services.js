angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Re: { ควัน ห ล ง } ► 04 – กาแฟร้อนหนึ่งแก้วต้องเริ่มต่อแถวที่ตรงไหน? [16.08.17]',
    lastText: "Boy's love story",
    face: 'http://www.thaiboyslove.com/webboard/Themes/default/images/post/xx.gif'
  }, {
    id: 1,
    name: 'Re: [Mpreg] หนี้รัก -เป็นหนี้ครั้งที่ 27- 16/8/60   โดย bun',
    lastText: "Boy's love story",
    face: 'http://www.thaiboyslove.com/webboard/Themes/default/images/post/xx.gif'
  }, {
    id: 2,
    name: 'Re: สาปรัก...ทัณฑ์เทวา 20+ EP.22 P.8 (16/08/2560)',
    lastText: 'I should buy a boat',
    face: 'http://www.thaiboyslove.com/webboard/Themes/default/images/post/xx.gif'
  }, {
    id: 3,
    name: 'Re: ดอกฟ้า-กับ-หมาคอนโด 16-8-60',
    lastText: 'Look at my mukluks!',
    face: 'http://www.thaiboyslove.com/webboard/Themes/default/images/post/xx.gif'
  }, {
    id: 4,
    name: '	Re: ~ของเหลือ~ ตอนที่ 12 - 100%',
    lastText: 'This is wicked good ice cream.',
    face: 'http://www.thaiboyslove.com/webboard/Themes/default/images/post/xx.gif'
  },{
  id: 5,
  name: 'Re: ฮัลโหลคุณครับ นั่นไม่ใช่เบอร์ผม! ',
  lastText: 'This is wicked good ice cream.',
  face: 'http://www.thaiboyslove.com/webboard/Themes/default/images/post/xx.gif'
},{
id: 6,
name: 'Re: ห า กั น จ น เ จ อ // ตอนที่ 13',
lastText: 'This is wicked good ice cream.',
face: 'http://www.thaiboyslove.com/webboard/Themes/default/images/post/xx.gif'
},{
id: 7,
name: 'Re: ร้าย...จนรัก chapter : 30 up! ',
lastText: 'This is wicked good ice cream.',
face: 'http://www.thaiboyslove.com/webboard/Themes/default/images/post/xx.gif'
}];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})


.factory('blog', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var blogs = [{
    id: 0,
    name: 'รวบรวมคำคมดีๆเด็ดๆบาดๆใจจากนิยายในเล้ากันครับ',
    lastText: 'You on your way?',
    face: 'http://www.thaiboyslove.com/webboard/Themes/default/images/topic/normal_post_sticky.gif'
  }, {
    id: 1,
    name: 'Tips การใช้งานเล็กๆน้อยๆในเล้า (17/1/56)',
    lastText: 'Hey, it\'s me',
    face: 'http://www.thaiboyslove.com/webboard/Themes/default/images/topic/normal_post_sticky.gif'
  }, {
    id: 2,
    name: 'กระทู้รีวิวซีรี่ย์+หนังเกย์ :)',
    lastText: 'I should buy a boat',
    face: 'http://www.thaiboyslove.com/webboard/Themes/default/images/topic/normal_post_sticky.gif'
  }, {
    id: 3,
    name: 'รวบรวมคำคมดีๆเด็ดๆบาดๆใจจากนิยายในเล้ากันครับ',
    lastText: 'ExecutioneR',
    face: 'http://www.thaiboyslove.com/webboard/Themes/default/images/topic/normal_post_sticky.gif'
  }, {
    id: 4,
    name: '10 ปีแล้วที่เราอยู่ด้วยกันมา ก้าวสู่ ปีที่ 11 เราจะผ่านมันไปด้วยกัน',
    lastText: 'This is wicked good ice cream.',
    face: 'http://www.thaiboyslove.com/webboard/Themes/default/images/topic/normal_post_sticky.gif'
  },
  {
    id: 5,
    name: 'ใครพบกระทู้ไหน ดีน่าเก็บเข้าคลังกระทุ้เก่า กลัวถูกลบทิ้งโปรดแจ้งที่นี่นะครับ',
    lastText: 'This is wicked good ice cream.',
    face: 'http://www.thaiboyslove.com/webboard/Themes/default/images/topic/normal_post_sticky.gif'
  },
  {
    id: 6,
    name: 'สัญญาณแห่งการล่มสลายของ Community  หรือ เครือข่ายสังคม',
    lastText: 'This is wicked good ice cream.',
    face: 'http://www.thaiboyslove.com/webboard/Themes/default/images/topic/normal_post_sticky.gif'
  },
  {
    id: 7,
    name: 'รายการร่วมกันทำบุญกับเล้าเป็ด',
    lastText: 'This is wicked good ice cream.',
    face: 'http://www.thaiboyslove.com/webboard/Themes/default/images/topic/normal_post_sticky.gif'
  }];

  return {
    all: function() {
      return blogs;
    },
    remove: function(chat) {
      blogs.splice(blogs.indexOf(blogs), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < blogs.length; i++) {
        if (blogs[i].id === parseInt(chatId)) {
          return blogs[i];
        }
      }
      return null;
    }
  };
});
