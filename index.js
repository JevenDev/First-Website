$(".menu-area").click(function(){
   if($(".menu-area").hasClass("active")){         // checking if the .menu-area has the class of active
      $(".menu-area").removeClass("active");       // if it has the class of active then remove it
      $(".menu-area h1").removeClass("h1active");
      $(".image-container1").removeClass("active-nav");
   }else{                                    // if it does not have the class of active then do the following:
      $(".menu-area").addClass("active");          // add the class of active
      $(".menu-area h1").addClass("h1active");
      $(".image-container1").addClass("active-nav");
   }
});