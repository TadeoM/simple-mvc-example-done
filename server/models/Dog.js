
const mongoose = require('mongoose');


mongoose.Promise = global.Promise;


let DogModel = {};


const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  breed: {
    type: String,
    required: true,
    trim: true,
  },

  age: {
      type: Number,
      required: true
  }

});


DogSchema.statics.sayName = (dog) => {
  console.log(dog.name);
};


DogSchema.statics.findByName = (name, callback) => {
  const search = {
    name,
  };

  return DogModel.findOne(search, callback);
};


DogModel = mongoose.model('Dog', DogSchema);


// export our public properties
module.exports.DogModel = DogModel;
module.exports.DogSchema = DogSchema;