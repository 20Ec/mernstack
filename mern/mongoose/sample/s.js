import mongoose from "mongoose";
  // connection 
const She  = require('./d'); // import the model

main().catch(err => console.log(err.message)); // erroer message

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/sampless'); // connect and create 
    console.log('Connected to MongoDB'); 


    const shree = new She ({ 
        name: 'Suresh',  
         age: 22,
         email:'suresh@example.com' ,
         hobbies : ['cricket' , 'reading' ],
         createdAt: new Date(),
         updatedAt : new Date(),
         address : { 
            street: '456 Another St',       
            city: 'Pune',
            state: 'Maharashtra',
            pincode: 411001
          }

         }); 

         
          
      
    await shree.save();  // save the document
    console.log('Document saved') 
    console.log(shree);
console.log("-------------------------------------")
const users = await She.find();
console.log(users)
console.log("-------------------------------------")
const oneUser = await She.findOne({ name: 'Suresh' });
console.log(oneUser)
console.log("-------------------------------------")
const updatedUser = await She.findOneAndUpdate(
       { name: 'Suresh' },                // condition
    { age: 25, 'address.city': 'Mumbai' }, // new data
    { new: true }                      // show updated data    
  );
  console.log(updatedUser)
  console.log("-------------------------------------")
       const deletedUser = await She.findOneAndDelete({ name: 'Suresh' });
     console.log(deletedUsereUser)
     console.log("-------------------------------------")

}
