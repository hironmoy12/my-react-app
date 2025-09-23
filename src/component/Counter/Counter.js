import React, { useState } from "react";

function Parent() {
  let count = 0;
  return function Clouser() {
    count++;
    console.log(count);
    return count;
  };
}

function Counter() {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue(Parent());
    console.log(value);
  };

  return (
    <div>
      <h2>Counter: {value}</h2>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default Counter;
