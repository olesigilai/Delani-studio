$('.main').hover(function(){
    $(".main").hover(function () {
      $(this).children(".second").show();
    });

    $(".main").mouseleave(function(){
            $(".img8").css({
              opacity:0.9
          });
          $(".second").hide();
    });
});