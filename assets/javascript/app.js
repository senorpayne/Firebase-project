
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

var dataRef = firebase.database();
var newTrainline = "";



$("#submit").on("click", function(event) {
  event.preventDefault();
 

var newTrainName = $("#train-name").val().trim();
var newDestination = $("#destination").val().trim();
var traintime=$("#firsttime").val().trim();
var frequency=$("#frequency").val().trim();


var newTrainlineTemp = {
						train:newTrainName,
            destination:newDestination,
            traintime:traintime,
            frequency:frequency,
						};

dataRef.ref().push(newTrainlineTemp);



console.log(newTrainlineTemp.newTrainName);
$("#train-name").empty()
$("#destination").empty()
$("#firsttime").empty()
$("#frequency").empty()
});


dataRef.ref().on("child_added" , function
	(childSnapshot) {
console.log(childSnapshot);
var newTrainName = childSnapshot.val().train;

console.log(newTrainName);
console.log(childSnapshot);
console.log(moment());

$("#traintable > tbody").append("<tr><td>" + newTrainName + "</td><td>" )
 // + newDestination + "</td><td>" + traintime + "</td><td>" +frequency+"</td></tr>")

});






