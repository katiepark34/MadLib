

function doMadLib(){
	alert("Ok here is your MadLib. I 'm going to ask you some questions");
	var adj1 = prompt("Please give me an adjective");
	var adv1  = prompt("Please give me an adverb");
	var v1 = prompt("Please give me a past-tense verb");
	var adj2 = prompt("Pleae give me an adjective");
	var noun1= prompt("Please give me a meal");
	var number1 = prompt("Please give me a number");
	var noun2= prompt("Please give me a noun");
	var v2 = prompt("Please give me a past tense verb");
	var noun3 = prompt("Please give me a noun");
	var adj3 = prompt("Please give me an adjective"); 



	var story =

	    "This weekend was <span class='c'>" + adj1 + "</span>." + " I got up <span class='c'> " + adv1 + 
		"</span>." + 
		" I had a lot of work to do but I <span class='c'>" + v1 + "</span>." +
		" I have <span calss='c'>" + adj2 + " </span>projects due in the upcoming weeks but I just didn't work on any of them." + 
		" After <span class='c'>" + noun1 + "</span>, I was sleeping again." 
		+ " I knew that something was wrong with me because I got <span class='c'>" + number1 + 
		"</span> hours of sleep last night." + 
		" My <span class = 'c'>" + noun2 + " </span> thought that I was dead because I didn't move." + 
		" She was actaully <span class='c'>" + v2 + " </span> when I finally got out of the <span class='c'>" + noun3 +
		" </span> and went to <span class='c'>" + adj3 + " </span> dinner.";

		document.getElementById("findMadLib").innerHTML = story;

}

