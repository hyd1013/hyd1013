$(function(){
    let path = window.location.pathname;
    if(path != "/" && path != "/archives/" && path != "/tags/"){
      $(".main-inner").addClass("main-width");
    }else{
      $(".main-inner").removeClass("main-width");
    }
})