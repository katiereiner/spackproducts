$( document ).ready(function() {
	$("#stevie").hide();

	$("#upenn").click(function(){
		$("#stevie").slideToggle();
	});


	$("#ali").hide();

	$("#vandy").click(function(){
		$("#ali").slideToggle();
	});
	$(".wiscorep").hide();

	$("#wisco").click(function(){
		$(".wiscorep").slideToggle();
	});

	$("#amanda").hide();

	$("#delaware").click(function(){
		$("#amanda").slideToggle();
	});
	$(".floridareps").hide();

	$("#florida").click(function(){
		$(".floridareps").slideToggle();
	});
	$("#emma").hide();

	$("#lehigh").click(function(){
		$("#emma").slideToggle();
	});
	$(".psureps").hide();

	$("#psu").click(function(){
		$(".psureps").slideToggle();
	});
	$(".boulderreps").hide();

	$("#boulder").click(function(){
		$(".boulderreps").slideToggle();
	});
	$("#kim").hide();

	$("#bu").click(function(){
		$("#kim").slideToggle();
	});
	$("#morgan").hide();

	$("#emory").click(function(){
		$("#morgan").slideToggle();
	});
	$(".syracusereps").hide();

	$("#syracuse").click(function(){
		$(".syracusereps").slideToggle();
	});
	$("#sydney").hide();

	$("#tulane").click(function(){
		$("#sydney").slideToggle();
	});
	$(".indianareps").hide();

	$("#indiana").click(function(){
		$(".indianareps").slideToggle();
	});
	$("#dani").hide();

	$("#nw").click(function(){
		$("#dani").slideToggle();
	});
	$("#jessie").hide();

	$("#maryland").click(function(){
		$("#jessie").slideToggle();
	});
	$("#hayley").hide();

	$("#miami").click(function(){
		$("#hayley").slideToggle();
	});

	$(window).load(function(){
		$(".overlay").addClass("active");
		$(".modal").addClass("active-modal");
	});

	$("#close").click(function(){
		$(".overlay").removeClass("active");
		$(".modal").removeClass("active-modal");
	});

	$("a#jump").click(function(){
		$(".tab-current").removeClass("tab-current");
		$(".tabs> nav > ul > li:nth-child(5)").addClass("tab-current");
		$(".content-current").removeClass("content-current");
		$("section#section-5").addClass("content-current");
	});

	$("a[href*=#section]").click(function(){
 
    if ( $(".tabs> nav > ul > li:nth-child(5)").hasClass("tab-current") && $("section#section-5").hasClass("content-current")) {
 
        $(".tabs> nav > ul > li:nth-child(5)").removeClass("tab-current");
        $("section#section-5").removeClass("content-current");
            
    };
 
	});

});