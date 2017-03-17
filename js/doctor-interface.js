var Doctor = require('./../js/doctor.js').doctorModule;
var displayDoctors = function(result) {
  for (var i = 0; i < result.data.length; i++) {
    $('ul#doctor-list').append("<li>" + result.data[i].profile["first_name"] + " " + result.data[i].profile["last_name"]+ "</li>");
    console.log(result.data[i].profile);
  }
}

$(document).ready(function() {
  var currentDoctorObject = new Doctor();
  $('#doctor-form').click(function() {

    var userInput = $('input#medical-issue').val();
    $('#userInput').val("");
    currentDoctorObject.getDoctors(userInput, displayDoctors);
  });
});
