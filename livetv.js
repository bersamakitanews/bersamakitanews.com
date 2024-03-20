const detikvideo_props= {"target":"#main_live_chat","autoplay":false,"mute":false,"live":true,
                         
"imageUrl": "https://akcdn.detik.net.id/community/media/visual/2024/03/13/detik-sore-1.png?w=800",
   
"videoUrl": "https://078527f52820.entrypoint.cloud.wowza.com/app-72g1m10R/ngrp:2732239f_all/playlist.m3u8",
   
"features":{"loadByDiv":true,"enableLiveAdsServerPush":true,"smartAutoplay":true}};

var firstPlay =false;
detikvideo_props.detikVideoLoadedCallback = function (player) {$('.vcounter').css('visibility', 'visible');
bersamakitanewsLiveUserCounter.start();player.on('play', function() {if (!firstPlay) {firstPlay=true;bersamakitanewsLiveUserCounter.play();}});
};
