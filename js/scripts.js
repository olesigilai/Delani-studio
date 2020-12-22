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
$("button").click(function(){
  var name = document.getElementById("text1").value;
  var email = document.getElementById("text2").value;
  var message = document.getElementById("text3").value;
  if (name===""){
    alert("enter your name")
  }
  else 
  if(email===""){
    alert("enter your email")
  }
  else
  if(message===""){
    alert("type text")
  }
  else{
    alert("Dear " +   name + " we have received your message successfully." + 
    " Feel free to reach out to us anytime. Click Ok to continue to the next page.");
  }
});
});