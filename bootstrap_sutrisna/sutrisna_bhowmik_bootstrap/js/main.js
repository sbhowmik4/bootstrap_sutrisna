(function ($) {
    "use strict";
   
    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        $('.hide-logo').hide(".nav1");
        $(".sidebar-toggler").hide("toggle");
        $('.nav-top').hide(".navbar-nav");
        
        return false;
        
    });
  // Sidebar Toggler

  $('body').click(function(event){
    if($(event.target).attr('id') !== "sidebar") {
      $('.sidebar, .content').removeClass('open');
    $('.hide-logo').show(".nav1");
        $(".sidebar-toggler").show("toggle");
        $('.nav-top').show(".navbar-nav");
    }
 });



})(jQuery);

