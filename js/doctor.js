function Doctor(){
}

Doctor.prototype.getDoctor = function() {
  console.log("Hi! I'm a weather object.");
};

exports.doctorModule = Doctor;
