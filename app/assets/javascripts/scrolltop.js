$(function(){
	var topBtn=$('#pageTop');
	topBtn.hide();
	
	$(window).scroll(function(){
		if($(this).scrollTop()>80){
			topBtn.fadeIn();
		}else{
			topBtn.fadeOut();
		} 
	});
	topBtn.click(function(){
		$('body,html').animate({
		scrollTop: 0},500);
		return false;
	});
	});

	$(window).on('scroll', function() {
		scrollHeight = $(document).height();
		scrollPosition = $(window).height() + $(window).scrollTop();
		if ( (scrollHeight - scrollPosition) / scrollHeight <= 2.0) {
					$('.main-content__content-center').jscroll({
						contentSelector: '.main-content__content-center',
						nextSelector: 'span.next:last a',
						loadingHtml: '<div class="loader">Loading...</div>'
					});
				}
		});