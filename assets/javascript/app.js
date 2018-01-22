
$('#textarea1').val('New Text');
  $('#textarea1').trigger('autoresize');



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB_vvLmVGU6GEU2CZfIfz9rVdaz6USJ2bM",
    authDomain: "datamanagement-d06c7.firebaseapp.com",
    databaseURL: "https://datamanagement-d06c7.firebaseio.com",
    projectId: "datamanagement-d06c7",
    storageBucket: "datamanagement-d06c7.appspot.com",
    messagingSenderId: "625427069198"
  };
  firebase.initializeApp(config);

var database = firebase.database();
var newTrainline = "";



$("#submit").on("click", function(event) {
  event.preventDefault();
 

var newTrainName = $("#train-name").val().trim();



var newTrainlineTemp = {
						train:newTrainName
						};

database.ref().push(newTrainlineTemp);






console.log(newTrainlineTemp.name);


$("#train-name").empty()

});




database.ref().on("child_added" , function
	(childSnapshot, prevChildKey) {
console.log(childSnapshot.val());
});