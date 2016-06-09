jQuery(document).ready(function() {
	if (jQuery("#message").hasClass("slideup"))
    	jQuery("#message").removeClass("slideup").addClass("slidedown");
  	else
    	jQuery("#message").removeClass("slidedown").addClass("slideup");
    jQuery('.hide').click(function(){
      	jQuery("#message").removeClass("slidedown").addClass("slideup");
    });
});