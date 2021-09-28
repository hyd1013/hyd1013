$(function(){
    let path = window.location.pathname;
    if(path != "/" && path != "/archives/" && path.indexOf("/tags/") < 0){
      $(".main-inner").addClass("main-width");
    }else{
      $(".main-inner").removeClass("main-width");
    }
})