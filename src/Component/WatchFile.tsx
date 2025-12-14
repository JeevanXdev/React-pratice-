import { useState, useEffect, type JSX } from 'react';

function WatchCount(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log(`Count changed: ${count}`);
  }, [count]); 

  return (
    <div style={{ margin: '20px' }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
    </div>
  );
}

export default WatchCount;
