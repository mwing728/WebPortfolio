$(document).scroll(() =>{
    if($(this).scrollTop() > 1300){
        $("#nav").stop().animate({
            backgroundColor: "white",
          },500);
    }else{
        $("#nav").stop().animate({
            backgroundColor: "black",
          },500);
    }
})