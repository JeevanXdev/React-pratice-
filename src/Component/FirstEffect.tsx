import { useEffect } from 'react';

function FirstEffect(): JSX.Element {
  useEffect(() => {
    console.log('Component mounted');
  }, []); // 👈 Empty dependency array = run once

  return <p>Check your console!</p>;
}

export default FirstEffect;
