import { useState } from 'react';

function NameInput(): JSX.Element {
  const [name, setName] = useState<string>('');

  return (
    <div style={{ margin: '20px' }}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Your name is: {name || '...'}</p>
    </div>
  );
}

export default NameInput;
