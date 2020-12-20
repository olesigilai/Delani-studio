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
$(document).ready(function() {
    $(".col-sm").click(function() {
      $(".hide").toggle();
    //   $(".hide").();
    });
  });