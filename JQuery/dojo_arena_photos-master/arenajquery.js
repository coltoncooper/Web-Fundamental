$(document).ready(function(){
	$("#players").hide();
	var clicked = false;
	$("#arena button").hover(
		function() {
			var url
			$("body").css("background-image", "url(images/" + $(this).text() + ".jpg")
		},function() {
			if(!clicked)
			$("body").css("background-image", "url('images/black_background.jpg')");
		}
	);

	$("#arena button").click(function(){
		clicked = true;
		$("body").css("background-image", "url(images/" + $(this).text() + ".jpg")
		$("#arena").hide();
		$("#players").show();
	})

	$("select").change(function(){
		console.log($(this).attr("id"));

		if($(this).attr("id") =="player1") {
			$("#img1").attr("src", "images/" + $(this).val() + ".png")
		}else {
			$("#img2").attr("src", "images/" + $(this).val() + ".png")
		}
	})
})