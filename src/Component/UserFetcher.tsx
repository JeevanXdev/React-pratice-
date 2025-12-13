import { useEffect, useState } from 'react';

function UserFetcher(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setUser('DarkKnight');
      setLoading(false);
    }, 2000);
  }, []); // Runs once when component mounts

  return (
    <div style={{ margin: '20px' }}>
      {loading ? <p>Loading user...</p> : <p>User: {user}</p>}
    </div>
  );
}

export default UserFetcher;
