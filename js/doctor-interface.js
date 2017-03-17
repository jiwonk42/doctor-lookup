var Doctor = require('./../js/doctor.js').doctorModule;
var displayDoctors = function(firstName, lastName, title, specialty, description) {
  $('ul#doctor-list').append("<li>" + firstName + " " + lastName + " " + title + " (Speciality: " + specialty + "; " + description + ")</li>");
}

$(document).ready(function() {
  var currentDoctorObject = new Doctor();
  $('#doctor-form').click(function() {

    event.preventDefault();
    var userInput = $('input#medical-issue').val().toLowerCase();
    currentDoctorObject.getDoctors(userInput, displayDoctors);
    $('#userInput').val("");
  });
});
