// $(document).ready(function() {
//     $(".img8").hover(function() {
//       $(".second").toggle();
    
//     });
//   });
$(".main").hover(function(){
    $(".second").toggle();
    $(".img8").css({
        opacity:0.7
    });
});
$(".main").mouseleave(function(){
    $(".main img").css({
        opacity:0.9
    });
    $(".second").hide();
});