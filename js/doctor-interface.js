var Doctor = require('./../js/doctor.js').doctorModule;
var displayDoctors = function(result) {
  $('ul#doctor-list').append("<li>" + result + "</li>");
}

$(document).ready(function() {
  var currentDoctorObject = new Doctor();
  $('#doctor-form').submit(function() {
    event.preventDefault();

    var userInput = $('#medical-issue').val();
    $('#userInput').val("");

    currentDoctorObject.getDoctor(userInput, displayDoctors);
  });
});
