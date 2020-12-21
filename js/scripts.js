$('.main').hover(function(){
    $(".main").hover(function () {
      $(this).children(".second").show();
      $(".img8").css({
        opacity:0.6
    });
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
      $(".hide1").slideToggle();
      
    });
    $(".click2").click(function() {
        $(".hide2").slideToggle();
  });
  $(".click3").click(function() {
    $(".hide3").slideToggle();
});
$(".Submit").click(function(){
  $("#text")

    alert("Thank you for submitting your details + ")
});
});