// navbar scroll
$(document).ready(function(){
    $(window).on("scroll",function(){
      var wn = $(window).scrollTop();
      if(wn > 215){
        $(".navbar").css("background","#21242A");
      }
      else{
        $(".navbar").css("background","rgba(0,0,0,0)");
      }
    });
  });
  