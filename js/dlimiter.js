(function($) {
$(function() { // DOM Ready

    // Toggle navigation
    $('#nav__toggle').click(function() {
      // If sidebar is visible:
      if ($('body').hasClass('show-nav')) {
        // Hide sidebar
        $('body').removeClass('show-nav');
      } else { // If sidebar is hidden:
        $('body').addClass('show-nav');
        // Display sidebar
      }
    });
    $('#nav__close').click(function() {
      // Hide sidebar
      $('body').removeClass('show-nav');
    });
  });
})(jQuery);
