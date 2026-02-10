const mongoose = require('mongoose'); // Import mongoose
// Define a schema

const userSchema = new mongoose.Schema({ // Define the schema
  name: String, // Define fields
  age: { type: Number, min: 0 , max: 120 }, // Define fields with validation
  email: { type: String, required: true, unique: true , lowercase: true }, // required and unique
   eemail : String,
  // Define fields
  createAt: {
    type: Date,
    immutable: true, // Make the field immutable
    default: Date.now   // Default value
  }, 
  updateAt: Date,
  hobbies: [String] , // Define fields
  address : { // Define fields
    street: String,
    city: String, 
    state: String,
    zip: String
  }
});
  
const User = mongoose.model('User', userSchema); // Create a model

module.exports = User; // Export the model
