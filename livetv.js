const detikvideo_props= {"target":"#main_live_chat","autoplay":false,"mute":false,"live":true,
                         
"imageUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimpHAwtyA_ar8S47-WBtEeRZjXSwc3wz8QygVlKQd2KnBVy6digarhQyBPKJHxOjRC3o2sE_HlvDjG_3yY5zghFwWhqUVeqEzm1oofoP1ckMmY10haRjT06p6U1xNHhkJs6LKHbj4M8Lk6vFBELeikJUZ2ottEnyeKCMSBK7r0reWSWLa5ikfIw8FkCPX3/s16000/Template%20Tv%20Online.jpg",
   
"videoUrl": "https://078527f52820.entrypoint.cloud.wowza.com/app-72g1m10R/ngrp:2732239f_all/playlist.m3u8",
   
"features":{"loadByDiv":true,"enableLiveAdsServerPush":true,"smartAutoplay":true}};

var firstPlay =false;
detikvideo_props.detikVideoLoadedCallback = function (player) {$('.vcounter').css('visibility', 'visible');
bersamakitanewsLiveUserCounter.start();player.on('play', function() {if (!firstPlay) {firstPlay=true;bersamakitanewsLiveUserCounter.play();}});
};
