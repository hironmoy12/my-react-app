import React, {useState} from 'react'

function useCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

function Counter() {
     const [value, setValue] = useState(0);
 const increment = useCounter();

  const handleClick = () => {
    setValue(increment()); 
  };
    
  return (
     <div>
      <h2>Counter: {value}</h2>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default Counter
