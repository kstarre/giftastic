$(document).ready(function() {
	var topics = ["unicorn", "chupacabra", "rougarou", "vampire", "werewolf", "poltergeist", "ghoul", "ghost", "vampire", "djinn", "wendigo", "phoenix", "dragon", "skin-walker", "fae", "zombie", "banshee"];

	function loadButtons() {
		$("#creature-buttons").empty();
		$.each(topics, function(index, value) {
			var creatureButton = $("<button>");
			creatureButton.addClass("btn btn-primary");
			creatureButton.text(value);
			$("#creature-buttons").append(creatureButton);
		});
	};

	$("#add-creature").on("click", function(event) {
		event.preventDefault();
		topics.push( $("#creature-input").val() );
		loadButtons();
	});


	loadButtons();
});