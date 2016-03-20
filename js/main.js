/*
var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?')
var fullName = firstName + ' ' + lastName;

//allows for testing output of the code in the browser console
console.log(fullName);

var age = prompt('How old are you?');
age = parseInt(age);

if (age >= 18){
	console.log('User is an adult.');
}else if (age >=13){
	console.log('User is a teenager.');
}else{
	console.log('User is a child.');
}

var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');

/*
if ((firstName == "General" || "general") && lastName != "Assembly"){
	alert('HEY GENERAL!!');
}


if ((firstName.toLowercase() === "general") && lastName.toLowercase !== "assembly"){
	alert('HEY GENERAL!!');
}

*/

function askQuestions() {

var name = prompt('What is your name?');
//splits the variable based on the character defined in the split
name = name.split('');
firstName = name[0];
lastName = name[1];

if ((firstName.toLowerCase() == "general") && lastName.toLowerCase != "assembly"){
	alert('HEY GENERAL!!');
}


var faveColor = prompt('What is your favorite color?').toLowerCase();

if (faveColor == 'red' ||
	faveColor == 'blue' ||
	faveColor == 'green' ||
	faveColor == 'yellow'){
	$('h1').css('color', faveColor);
}

}

//When the page has loaded
//anonymous function
$(function(){
	
	$('img').on('click',askQuestions);

	//hide all the sections by default except the first
	$('h3').not(':first').next().hide();

	//when the user clicks a h3 i.e. event listener
	$('h3').on('click', function(){

		//toggle the next element only
		$(this).next().slideToggle(500);

	});

});