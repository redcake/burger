// This is the customer.js file located at /server/models/customer.js
// We want to create a file that has the schema for our customers and creates a model that we can then call upon in our controller
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create our customerSchema
var BurgerSchema = new mongoose.Schema({
  name: {type: String, required: [true, "need a name"]},
  created_at: {type: Date, required: true, default: Date.now},
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  toppings: {type: Array},
  bun: {type: String, required: [true, "Select a bun"]},
  patty: {type: String, required: [true, "Select a patty"]},
  votes: {type: Schema.Types.Mixed, required: true, default: []}
});
// use the schema to create the model
// Note that creating a model CREATES the collection in the database (makes the collection plural)
mongoose.model('Burger', BurgerSchema);
// notice that we aren't exporting anything -- this is because this file will be run when we require it using our config file and then since the model is defined we'll be able to access it from our controller