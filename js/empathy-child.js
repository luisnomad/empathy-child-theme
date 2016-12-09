(function($) { "use strict";

  var videoURL = 'http://youtu.be/Diy-D9o7dQ4';

	$(function() {
    // Updates Google Analytics page variable
    $.address.externalChange(function() {
      var path = $.address.path();
      path = path.slice(1, path.length);
      console.log(path);
      if (typeof(ga) !== 'undefined' ) {
        ga('set', 'page', '/' + path);
        ga('send', 'pageview');
      }
    });

    $('.no-touch section#home').attr ('data-property', JSON.stringify({
      videoURL: videoURL,
      containment:'self',
      startAt: 0,
      mute: true,
      autoPlay: true,
      loop: true,
      opacity: 1,
      showControls: false,
      optimizeDisplay: true
    })).addClass('player').YTPlayer();

    $('.no-touch section#home .content').addClass('content-with-video');

  });
})(jQuery)
