
function R(x) {
	return Math.ceil(x / 5) * 5;
}

function CalculateSchedulejQuery() {
	var $maxWeight = $("#maxWeightInput");
	WorkoutProgram($maxWeight.value());
}

function CalculateSchedule() {
	var maxWeightElement = document.getElementById("maxWeightInput");
	var maxWeight = parseInt(maxWeightElement.value);
	if (!isNaN(maxWeight)) {
		WorkoutProgram(maxWeight);
	}
}

function create(text) {
	var t = document.createElement("span");
	t.innerText = text;
	t.style.textDecoration = "underline"
	t.style.fontWeight = "bolder";
	t.style.fontSize = "18px"
	return t;
}

function WorkoutProgram(x, object) {
	document.getElementById("colum1").innerHTML = "";
	document.getElementById("colum2").innerHTML = "";
	document.getElementById("colum3").innerHTML = "";
	document.getElementById("colum4").innerHTML = "";
	document.getElementById("colum5").innerHTML = "";
	document.getElementById("colum6").innerHTML = "";
	document.getElementById("colum7").innerHTML = "";
	document.getElementById("colum8").innerHTML = "";
	document.getElementById("colum9").innerHTML = "";

	//Day one has 5 sets
	$("#colum1").append($("<p>").append(create("Day 1")));
	$("#colum1").append($("<p>").text("10 x " + R(x * 0.480627088)));
	$("#colum1").append($("<p>").text("10 x " + R(x * 0.553238866)));
	$("#colum1").append($("<p>").text("10 x " + R(x * 0.610323887)));
	$("#colum1").append($("<p>").text("10 x " + R(x * 0.667847227)));
	$("#colum1").append($("<p>").text("10 x " + R(x * 0.721184819)));

	//Day two has 6 sets
	$("#colum2").append($("<p>").append(create("Day 2")));
	$("#colum2").append($("<p>").text("10 x " + R(x * 0.481882591)));
	$("#colum2").append($("<p>").text("8 x " + R(x * 0.553238866)));
	$("#colum2").append($("<p>").text("8 x " + R(x * 0.610323887)));
	$("#colum2").append($("<p>").text("8 x " + R(x * 0.666295547)));
	$("#colum2").append($("<p>").text("8 x " + R(x * 0.723380567)));
	$("#colum2").append($("<p>").text("8 x " + R(x * 0.780465587)));

	//Day Three has 6 sets
	$("#colum3").append($("<p>").append(create("Day 3")));
	$("#colum3").append($("<p>").text("10 x " + R(x * 0.481882591)));
	$("#colum3").append($("<p>").text("8 x " + R(x * 0.553238866)));
	$("#colum3").append($("<p>").text("6 x " + R(x * 0.610323887)));
	$("#colum3").append($("<p>").text("6 x " + R(x * 0.723380567)));
	$("#colum3").append($("<p>").text("6 x " + R(x * 0.780465587)));
	$("#colum3").append($("<p>").text("6 x " + R(x * 0.850708502)));

	//Day four has 7 sets
	$("#colum4").append($("<p>").append(create("Day 4")));
	$("#colum4").append($("<p>").text("10 x " + R(x * 0.481882591)));
	$("#colum4").append($("<p>").text("8 x " + R(x * 0.553238866)));
	$("#colum4").append($("<p>").text("5 x " + R(x * 0.702530364)));
	$("#colum4").append($("<p>").text("5 x " + R(x * 0.801315789)));
	$("#colum4").append($("<p>").text("5 x " + R(x * 0.8298583)));
	$("#colum4").append($("<p>").text("5 x " + R(x * 0.850708502)));
	$("#colum4").append($("<p>").text("5 x " + R(x * 0.872672065)));

	//Day Five has 7 sets
	$("#colum5").append($("<p>").append(create("Day 5")));
	$("#colum5").append($("<p>").text("10 x " + R(x * 0.481882591)));
	$("#colum5").append($("<p>").text("8 x " + R(x * 0.553238866)));
	$("#colum5").append($("<p>").text("5 x " + R(x * 0.702530364)));
	$("#colum5").append($("<p>").text("5 x " + R(x * 0.801315789)));
	$("#colum5").append($("<p>").text("5 x " + R(x * 0.8298583)));
	$("#colum5").append($("<p>").text("5 x " + R(x * 0.850708502)));
	$("#colum5").append($("<p>").text("5 x " + R(x * 0.850708502)));

	//Day Six has 7 set
	$("#colum6").append($("<p>").append(create("Day 6")));
	$("#colum6").append($("<p>").text("10 x " + R(x * 0.481882591)));
	$("#colum6").append($("<p>").text("8 x " + R(x * 0.645445344)));
	$("#colum6").append($("<p>").text("6 x " + R(x * 0.723380567)));
	$("#colum6").append($("<p>").text("4 x " + R(x * 0.801315789)));
	$("#colum6").append($("<p>").text("4 x " + R(x * 0.8298583)));
	$("#colum6").append($("<p>").text("4 x " + R(x * 0.850708502)));
	$("#colum6").append($("<p>").text("4 x " + R(x * 0.907793522)));


	//Day seven has 7 sets
	$("#colum7").append($("<p>").append(create("Day 7")));
	$("#colum7").append($("<p>").text("10 x " + R(x * 0.518117409)));
	$("#colum7").append($("<p>").text("8 x " + R(x * 0.645445344)));
	$("#colum7").append($("<p>").text("6 x " + R(x * 0.780465587)));
	$("#colum7").append($("<p>").text("4 x " + R(x * 0.850708502)));
	$("#colum7").append($("<p>").text("3 x " + R(x * 0.88694332)));
	$("#colum7").append($("<p>").text("2 x " + R(x * 0.907793522)));
	$("#colum7").append($("<p>").text("1 x " + R(x * 0.964878543)));

	//Day eight has 7 sets
	$("#colum8").append($("<p>").append(create("Day 8")));
	$("#colum8").append($("<p>").text("10 x " + R(x * 0.518117409)));
	$("#colum8").append($("<p>").text("8 x " + R(x * 0.645445344)));
	$("#colum8").append($("<p>").text("6 x " + R(x * 0.780465587)));
	$("#colum8").append($("<p>").text("4 x " + R(x * 0.88694332)));
	$("#colum8").append($("<p>").text("3 x " + R(x * 0.922064777)));
	$("#colum8").append($("<p>").text("2 x " + R(x * 0.964878543)));
	$("#colum8").append($("<p>").text("1 x " + R(x * 1.014271255)));

	//Day nine has 7 sets
	$("#colum9").append($("<p>").append(create("Day 9")));
	$("#colum9").append($("<p>").text("10 x " + R(x * 0.481882591)));
	$("#colum9").append($("<p>").text("8 x " + R(x * 0.645445344)));
	$("#colum9").append($("<p>").text("6 x " + R(x * 0.758502024)));
	$("#colum9").append($("<p>").text("4 x " + R(x * 0.850708502)));
	$("#colum9").append($("<p>").text("3 x " + R(x * 0.94291498)));
	$("#colum9").append($("<p>").text("2 x " + R(x * 1.035121457)));
	$("#colum9").append($("<p>").text("1 x " + R(x * 1.05708502)));

	$('footer').css("position", "sticky");
}