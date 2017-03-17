var apiKey = require('./../.env').apiKey;

function Doctor(){
}

Doctor.prototype.getDoctors = function(medicalIssue, displayDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&skip=0&limit=10&user_key=' + apiKey)
  .then(function(result) {

    var firstName = "";
    var lastName = "";
    var title = "";
    var specialty = "";
    var description = "";

    for (var i = 0; i < result.data.length; i++) {
      firstName = result.data[i].profile["first_name"];
      lastName = result.data[i].profile["last_name"];

      if (result.data[i].profile["title"]) {
        title = result.data[i].profile["title"];
      }

      specialty = result.data[i].specialties[0].name;
      description = result.data[i].specialties[0].description;
      displayDoctors(firstName, lastName, title, specialty, description);
    }
  })
  .fail(function(error){
    $('.error-message').text(error.responseJSON.message);
  });
};

exports.doctorModule = Doctor;
