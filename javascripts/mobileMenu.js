$(document).ready(function () {
  $("#mobile-menu").on('click', function() {
    $("#navigation-menu").toggle('show');
    $("#navigation-menu a").on('click', function() {
      $("#navigation-menu").toggle('show');
    });
  });

  // Adds scroll with animation for deep linking within page
  $(function(){
    $(".scroll").click(function(){
      $("html,body").animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 300);

      return false;
    });
  });
});
