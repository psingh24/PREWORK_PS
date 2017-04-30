//When the factButton is clicked...
$("#factButton").on("click", function() {
// We generate a random number between 0 and 5 (the number of facts in the booFacts)
	var number = Math.floor((Math.random() * booFacts.length));
// We display the fact from the booFacts that is in the random position we just generated.
	$("#factText").text(booFacts[number])

})


var booFacts = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books" ]

//When textPink button is clicked
$("#textPink").on("click", function() {
	//turn the funText Pink
	$("#funText").css("color", "pink")
})
//WHem textOrange button is clicked..
$("#textOrange").on("click", function() {
	//turn the funText Orange
	$("#funText").css("color", "orange")
})
//When textGreen is clicked...
$("#textGreen").on("click", function() {
	//turn the funText Green
	$("#funText").css("color", "green")
})


// When the boxGrow button is clicked... 
$("#boxGrow").on("click", function() {
	// Increase the size of the box.
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

// When the boxShrink button is clicked...
$("#boxShrink").on("click", function() {
	// Decrease the size of the box.
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})