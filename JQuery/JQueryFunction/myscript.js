$(document).ready(function(){
	$("#click").click(function(){
		alert("Hello World")
	});

	$("#hide").click(function(){
		$("#image_hide").hide("fast", function(){
		});
	});

	$("#show").click(function(){
		$("#image_show").show("fast", function(){
		});
	});

	$("#toggle").click(function(){
		$("#image_toggle").toggle("fast", function(){
		});
	});

	$("#slide_down").click(function(){
		$("#image_slidedown").slideDown("slow", function(){
		});
	});

	$("#slide_up").click(function(){
		$("#image_slideup").slideUp("slow", function(){
		});
	});

	$("#slide_toggle").click(function(){
		$("#image_slidetoggle").slideToggle("slow", function(){
		});
	});

	$("#fade_in").click(function(){
		$("#image_fadein").fadeIn("slow", function(){
		});
	});

	$("#fade_out").click(function(){
		$("#image_fadeout").fadeOut("slow", function(){
		});
	});

	$("#add_class").click(function(){
		$(".text_addclass").addClass("red", function(){
		});
	});

	$("#before").click(function(){
		$(".text_before").before("Hello World",{
		});
	});

	$("#after").click(function(){
		$(".text_after").after("  Good Bye",{
		});
	});

	$("#append").click(function(){
		$(".text_append").append("  H E L L O",{
		});
	});

	$("#html").click(function(){
		$(".html").html("New Code",{
		});
	});

	$("#attr").click(function(){
		$("#image_attr").attr("width", "400px");
	});

	$("#buttonval").click(function(){
		$("#pinput").append($("input[name=user]").val());
		
	});
	
	$("#text").click(function(){
		$(".texting").text("Happy Holidays");
	});

	$("#getsetdata").click(function(){
		$("#datap").data('country', $("input[name=country]").val())
		$("#datap").append($("#datap").data('country'))

		

		
	});




});