$( document ).ready(function() {
	$("#stevie").hide();

	$("#upenn").click(function(){
		$("#stevie").toggle();
	});


	$("#ali").hide();

	$("#vandy").click(function(){
		$("#ali").toggle();
	});
	$(".wiscorep").hide();

	$("#wisco").click(function(){
		$(".wiscorep").toggle();
	});

	$("#amanda").hide();

	$("#delaware").click(function(){
		$("#amanda").toggle();
	});
	$(".floridareps").hide();

	$("#florida").click(function(){
		$(".floridareps").toggle();
	});
	$("#emma").hide();

	$("#lehigh").click(function(){
		$("#emma").toggle();
	});
	$(".psureps").hide();

	$("#psu").click(function(){
		$(".psureps").toggle();
	});
	$(".boulderreps").hide();

	$("#boulder").click(function(){
		$(".boulderreps").toggle();
	});
	$("#kim").hide();

	$("#bu").click(function(){
		$("#kim").toggle();
	});
	$("#morgan").hide();

	$("#emory").click(function(){
		$("#morgan").toggle();
	});
	$(".syracusereps").hide();

	$("#syracuse").click(function(){
		$(".syracusereps").toggle();
	});
	$("#sydney").hide();

	$("#tulane").click(function(){
		$("#sydney").toggle();
	});
	$(".indianareps").hide();

	$("#indiana").click(function(){
		$(".indianareps").toggle();
	});
	$("#dani").hide();

	$("#nw").click(function(){
		$("#dani").toggle();
	});
	$("#jessie").hide();

	$("#maryland").click(function(){
		$("#jessie").toggle();
	});
	$("#hayley").hide();

	$("#miami").click(function(){
		$("#hayley").toggle();
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