console.log('sourced');

var greetMe = function() {
var dayofWeek = document.getElementById('dayOfWeek').value;
console.log('input value is =' , dayOfWeek);

//greet user w/ day specific greeting

if(dayOfWeek == 'Monday'){
console.log(dayOfWeek + " is the worst day of the week");


}else if (dayOfWeek == 'Tuesday'){
console.log("Taco + dayofWeek");
}

}else if (dayofWeek == 'Wednesday'){
console.log("Hump Day is" + dayOfWeek);
}else{
console.log('Happy' + dayOfWeek)
}

};

switch(expression){
case expression:
//what to do in that case

break;
default:
}

switch (dayOfWeek){
case 'Monday':
//what to do in that case
console.log(dayOfWeek + " is the worst day of the week");
break;
case 'Tuesday':
console.log("Taco" + dayOfWeek);
break;
case 'Wednesday':
console.log("Hump Day is" + dayOfWeek);
break;
case 'Saturday':
case 'Sunday'
console.log('Happy Weekend!');
break;
default:
console.log('default');
}
