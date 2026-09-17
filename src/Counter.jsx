import { useState } from "react";
import "./Counter.css";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};
