$(document).ready(function(){
    /*Hamburguesa*/
	var $hamburger = $(".hamburger");
	$hamburger.on("click", function(e) {
		 $hamburger.toggleClass("is-active");
		// Do something else, like open/close menu
		$('.opciones-menu').toggle();
	});
 
    // menu
    // $(function () {
    //     $(window).scroll(function () {
    //         // set distance user needs to scroll before we fadeIn navbar
    //          if ($(this).scrollTop() > 600) {
    //             $('#hamburguesa').addClass('hamburguesa-verde');
    //         } else {
    //             $('#hamburguesa').removeClass('hamburguesa-verde');
    //         }
    //     });
    // });
});

//video


