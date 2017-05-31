$(document).ready(function() {
	var topics = ["unicorn", "chupacabra", "rougarou", "vampire", "werewolf", "poltergeist", "ghoul", "ghost", "vampire", "djinn", "wendigo", "phoenix", "dragon", "skin-walker", "fae", "zombie", "banshee"];

	function loadButtons() {
		$("#creature-buttons").empty();
		$.each(topics, function(index, value) {
			var creatureButton = $("<button>");
			creatureButton.addClass("btn btn-primary creature");
			creatureButton.attr("data-name", value);
			creatureButton.text(value);
			$("#creature-buttons").append(creatureButton);
		});
	};
	function displayGifs() {
		//var creature = $(this).val(); ***why is this not working?
		var creature = $(this).attr("data-name");
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + creature + "&api_key=dc6zaTOxFJmzC&limit=10";

		$("#creature-gifs").empty();

		$.ajax({
			url: queryURL,
			method: "GET"
		})
		.done(function(response) {
			console.log(response);
			var results = response.data;
			$.each(results, function(index, value) {
				var rating = results[index].rating;
				var gifDiv = $("<div class='item'>");
				var p = $("<p>").text("Rating: " + rating);
				var creatureImage = $("<img>");
				creatureImage.attr("src", results[index].images.fixed_height.url);
				gifDiv.prepend(p);
				gifDiv.append(creatureImage);
				$("#creature-gifs").append(gifDiv);
			})
		})
	};

	$("#add-creature").on("click", function(event) {
		event.preventDefault();
		topics.push( $("#creature-input").val() );
		loadButtons();
	});
	$(document).on("click", ".creature", displayGifs);

	loadButtons();
});