// I know that the code could be better.
// If you have some tips or improvement, please let me know.

// Parallax effect

$('.img-parallax').each(function(){
    var img = $(this);
    var imgParent = $(this).parent();
    function parallaxImg () {
      var speed = img.data('speed');
      var imgY = imgParent.offset().top;
      var winY = $(this).scrollTop();
      var winH = $(this).height();
      var parentH = imgParent.innerHeight();
  
  
      var winBottom = winY + winH;
  
      if (winBottom > imgY && winY < imgY + parentH) {
        var imgBottom = ((winBottom - imgY) * speed);
        var imgTop = winH + parentH;
        var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
      }
      img.css({
        top: imgPercent + '%',
        transform: 'translate(-50%, -' + imgPercent + '%)'
      });
    }
    $(document).on({
      scroll: function () {
        parallaxImg();
      }, ready: function () {
        parallaxImg();
      }
    });
  });

  // Smooth Scrolling
  $("a").on("click", function(event) {
    if (this.hash != "") {
      event.preventDefault();
  
      const hash = this.hash;
  
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800
      );
    }
  });

  $(".project").hover(function () {
      $(this).children(".project-link-project").show();
  });

