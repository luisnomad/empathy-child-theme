(function($) { "use strict";

  var videoURL = 'http://youtu.be/dFdpg6YaEf0';

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

    $('.no-touch.video section#home').attr ('data-property', JSON.stringify({
      videoURL: videoURL,
      containment:'self',
      startAt: 0,
      mute: true,
      autoPlay: true,
      loop: true,
      opacity: 0.9,
      showControls: false,
      optimizeDisplay: true
    })).addClass('a').YTPlayer();

    $('.no-touch.video section#home .content').addClass('content-with-video');

  });
})(jQuery)
