import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: { type: String, 
    },

  age: { type: Number , 
    min :18,
     max:30 , 
       } ,

  email: { type: String, 
    required: true,
     unique: true ,
      lowercase: true , 
      } ,

  createdAt:  { type : Date, default: Date.now
        // ,immutable: true
  },

    updatedAt : Date,

   hobbies  : [String] ,
    address : { 
        street: String,
        city: String, 
        state: String,
        pincode : Number
    }              

}); 



// const userSchema = new mongoose.Schema({ // Define the schema
//   name: String, // Define fields
//   age: { type: Number, min: 0 , max: 120 }, // Define fields with validation
//   email: { type: String, required: true, unique: true , lowercase: true }, // required and unique
//    eemail : String,
//   // Define fields
//   createAt: {
//     type: Date,
//     immutable: true, // Make the field immutable
//     default: Date.now   // Default value
//   }, 
//   updateAt: Date,
//   hobbies: [String] , // Define fields
//   address : { // Define fields
//     street: String,
//     city: String, 
//     state: String,
//     zip: String
//   }
// });


module.exports = mongoose.model('She', schema);