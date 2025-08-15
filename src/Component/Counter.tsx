import { useState } from "react";
function Counter() {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

    const decrement = () => {
        setCount(prev => prev - 1);
    };

    return (
        <div style={{ margin: '20px', border: '1px solid #aaa', padding: '10px' }}>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>Increment the number</button>
            <button onClick={decrement}>Decrement the number</button>
        </div>
    );
}
export default Counter;
