// index.js
const mongoose = require('mongoose');

const User = require('./u'); // Import the model

main().catch(err => console.log(err)); // err.message

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  

  const firstDat= new User({ name: 'John', age: 30 });  // wait for the document to be created in memory

  const firstData = await User.create({ name: 'Alice',
    age: 25 ,
     email: 'alice@example.com', 
    createAt: 9, 
    updateAt: new Date(),
     hobbies: ['reading', 'traveling'],
    address: {
      street: '123 Main St', 
      city: 'Anytown',
      state: 'CA',
      zip: '12345'
    }
});    // Create and save the document in one step

    // await user.save();
//   await firstDat.save(); // Save the document old  version
  await firstData.save(); // Save the document ut not nessarily wait for it to complete

  console.log('User saved');
  console.log(firstData);
  console.log('------------------');
  console.log(firstDat);
    console.log('------------------');
  
  const users = await User.find({ name: "Alice" }); // Find name  users
  console.log(users);
    console.log('------------------');
//  const us = await User.find();
//  const fi = await .where("name").equals("Alice"); // Find  users filter
//   await User.updateOne({ name: "Alice" }, { age: 26 }); // Update age of users named Alice
//   await User.deleteOne({ name: "Alice" }); // Delete users named Alice
//   await users.deleteOne({ name: "Alice" });  
  // console.log(users);
    console.log('------------------');
    // console.log(us);
    // console.log(fi);
    
} 


