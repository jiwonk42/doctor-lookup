var apiKey = require('./../.env').apiKey;
var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  $('#doctor-form').submit(function() {
    event.preventDefault();

    var userInput = $('#medical-issue').val();
    $('#userInput').val("");

    $.get('http://api.opendoctormap.org/data/2.5/doctor?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showDoctor').text("The humidity in " + city + " is " + response.main.humidity + "%");
    }).fail(function(error) {
      $('.showDoctor').text(error.responseJSON.message);
    });
  });
});
