
import { useEffect, useState } from 'react';

function Counter() {
  // Declare a state variable "count", initialize with 0
  const [count, setCount] = useState("raj");
  
//    count is intial value set count using here how to control that initial value futher 
const increment = () => {
    setCount("rajadurai");
  };

  const decrement = () => {
    setCount(count - 1);
  };


  useEffect(() => {
    console.log('Counter component mounted or updated');
  }, []);


  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      
      {/* <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button> */}
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}



export default Counter;
