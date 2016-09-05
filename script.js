console.log('script.js is sourced... also Hello World');
// global variable
var correctAnswer = ('Brian');

var greatGreekWorld = function(){
  console.log('greetings from the great greek world');
} //end greatGreekWorld

var getUserInput = function(){
  console.log( 'in getUserInput');
  // get user input from nameIn text input element
  //and console.log it out
  console.log( document.getElementbyId('nameIn').value );

var nameFromUser = document.getElementById('nameIn').value;
//log out the new variable
console.log('nameFromUser variable:', nameFromUser);
};//end getUserInput

compareUserInput( nameFromUsesr);
} //endcompareUserInput

var compareUserInput= function(){
  //input from user is likely coming from getUserInput which get its value from the nameIn element
  console.log('in compareUserInput', inputFromUser);
  if( inputFromUser == ('correctAnswer'){
    console.log('sips Martini and winks');

  }
  else{
    console.log('Drat');
  }
  //compare input from usesr


var selectDog=function(){
  console.log('in selectDog');
  console.log(document.getElementById( 'dogeIn' ).value)
  // put the input in a variable
  var selectDogName = document.getElementById( 'dogeIn' ).value;

  // compare it to the correct name
  compareUserInput( selectedDogName);
  }//end selectDog
