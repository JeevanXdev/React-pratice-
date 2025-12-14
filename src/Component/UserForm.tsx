import { useState } from 'react';

type User = {
  name: string;
  age: number;
};

function UserForm() {
  const [user, setUser] = useState<User>({ name: '', age: 0 });

  return (
    <div style={{ margin: '20px' }}>
      <input
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Age"
        value={user.age}
        onChange={(e) => setUser({ ...user, age: parseInt(e.target.value) })}
        style={{ marginLeft: '10px' }}
      />
      <p>Name: {user.name || 'N/A'}</p>
      <p>Age: {user.age || 'N/A'}</p>
    </div>
  );
}

export default UserForm;
