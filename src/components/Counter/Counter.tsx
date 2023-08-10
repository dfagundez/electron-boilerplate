// Counter.tsx
import React, { useState } from "react";

interface CounterProps {
  initialCount?: number;
}

const Counter: React.FC<CounterProps> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);

  return (
    <div className="counter">
      <p className="text-lg mb-2">Count is {count}</p>
      <button
        className="px-4 py-2 rounded bg-blue-500 text-white"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
