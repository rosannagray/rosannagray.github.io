jQuery(document).ready(function() {
    jQuery('.toggle-btn').click(function(e) {
        jQuery(this).toggleClass('active');
        jQuery('.primary-nav ul').toggleClass('toggle-nav');
 
        e.preventDefault();
    });
});