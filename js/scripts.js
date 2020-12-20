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
    $(".click1").click(function() {
      $(".hide1").toggle();
      
    });
    $(".click2").click(function() {
        $(".hide2").toggle();
  });
  $(".click3").click(function() {
    $(".hide3").toggle();
});
});