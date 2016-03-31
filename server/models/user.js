// This is the customer.js file located at /server/models/customer.js
// We want to create a file that has the schema for our customers and creates a model that we can then call upon in our controller
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create our customerSchema
var UserSchema = new mongoose.Schema({
  name: {type: String, required: [true, "need a name"], minlength: 3},
  created_at: {type: Date, required: true, default: Date.now},
  burgers: {type: Schema.Types.ObjectId, ref: 'Burgers'},
  password: {type: String, required: [true, "need a password"]}
});
// use the schema to create the model
// Note that creating a model CREATES the collection in the database (makes the collection plural)
mongoose.model('User', UserSchema);
// notice that we aren't exporting anything -- this is because this file will be run when we require it using our config file and then since the model is defined we'll be able to access it from our controller