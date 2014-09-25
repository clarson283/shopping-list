$(document).ready(function() {
	/* add item to list */
	$("#submit").on("click", function() {
		var add = $("#list-item").val();
		$("#list").append('<li><span class="added">' + add + '</span></li>');
		$("#list-item").val("");
		event.preventDefault();
	});
	$("#list-item").keydown(function(event) {
		if(event.keyCode == 13) {
			var add = $("#list-item").val();
			$("#list").append('<li><span class="added">' + add + '</span></li>');
			$("#list-item").val("");
			event.preventDefault();
		};
	});
	/*button to clear list*/
	$("#reset").on("click", function() {
		$("#list li").hide();
	});
	/*delete items*/
	$("#list").on("click", ".added", function() {
		$(this).css("text-decoration","line-through");
	});
});