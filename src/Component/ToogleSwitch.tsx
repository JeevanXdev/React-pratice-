import { useState } from 'react';

function Toggle(): JSX.Element {
  const [isOn, setIsOn] = useState<boolean>(false);

  return (
    <div style={{ margin: '20px' }}>
      <p>Status: {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={() => setIsOn(prev => !prev)}>
        Toggle
      </button>
    </div>
  );
}

export default Toggle;
