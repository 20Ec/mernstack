import React, { useState } from 'react';

const Default = () => {
    
  const [name, setName] = useState("Raja");
  const [age, setAge] = useState(25);

  return (
    <div>

    <p> store defalut value nad then change like addeventlister </p>
      <p>Name: {name}</p>
      <p>Age: {age}</p>

      {/* Button to update age */}
      <button onClick={() => setAge(age + 1)}>Increase Age</button>

      {/* Button to update name */}
      <button onClick={() => setName("Durai")}>Change Name</button>
    </div>
  );
}

export default Default;
