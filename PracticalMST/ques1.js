import React, { useState } from "react";


export default function Ques1() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
      setMessage("");
    } else {
      setMessage("Maximum limit reached");
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setMessage("");
    }
  };

  const handleReset = () => {
    setCount(0);
    setMessage("");
  };

  return (
    <div className="card">
      <h2>Counter App</h2>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      {message && <p className="warning">{message}</p>}
    </div>
  );
}
