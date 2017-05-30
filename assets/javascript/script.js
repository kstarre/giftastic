$(document).ready(function() {
	var topics = ["unicorn", "chupacabra", "rougarou", "vampire", "werewolf", "poltergeist", "ghoul", "ghost", "vampire", "djinn", "wendigo", "phoenix", "dragon", "skin-walker", "fae", "zombie", "banshee"];

	function loadButtons() {
		$("#creature-buttons").empty();
		$.each(topics, function(index, value) {
			$("#creature-buttons").append("<button>" + value + "</button>");
		});
	};


});