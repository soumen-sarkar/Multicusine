jQuery(window).load(function(){
	//Background Image carousel
	$('.carousel').carousel({
		interval: 4000
	})	
	//Tooltip script
	$('[data-toggle="tooltip"]').tooltip()	
		
	//sponsors carouFredSel script
	$('#sponsor').carouFredSel({
		width: '100%',
		scroll: 2
	});
    	
	$('.toggle-textarea').hide(); // Hide all DDs inside .faqs
	$('.textareaSwitch').hover(function(){$(this).addClass('hover')},function(){$(this).removeClass('hover')}).click(function(){ 
	$(this).next().slideToggle('normal'); // Toggle dd when the respective dt is clicked
	});
	
	$(function(cash) {
		$('.equal').responsiveEqualHeightGrid(); 
	});
	
	
	$(".loader").fadeOut("slow");
	
});