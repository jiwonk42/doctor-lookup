var Doctor = require('./../js/doctor.js').doctorModule;
var displayDoctors = function(result) {
  $('ul#doctor-list').append("<li>" + result[0] + "</li>");
}

$(document).ready(function() {
  var currentDoctorObject = new Doctor();
  $('#doctor-form').click(function() {

    var userInput = $('input#medical-issue').val();
    $('#userInput').val("");
    console.log(userInput);
    currentDoctorObject.getDoctors(userInput, displayDoctors);
  });
});
