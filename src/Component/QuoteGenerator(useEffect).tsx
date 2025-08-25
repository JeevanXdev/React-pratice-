import { useEffect, useState } from 'react';

const quotes = [
  "Stay hungry, stay foolish.",
  "Simplicity is the soul of efficiency.",
  "Do or do not, there is no try.",
  "Talk is cheap. Show me the code.",
  "First, solve the problem. Then, write the code.",
];

function getRandomQuote(): string {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

function QuoteFetcher(): JSX.Element {
  const [quote, setQuote] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [quoteCount, setQuoteCount] = useState<number>(0);

  const fetchQuote = () => {
  setLoading(true); // Always allow fetch on first mount or refresh

  setTimeout(() => {
    const newQuote = getRandomQuote();
    setQuote(newQuote);
    setLoading(false);
    setQuoteCount((prev) => prev + 1);
  }, 2000);
};

  // Initial fetch on mount
  useEffect(() => {
    fetchQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ border: '1px solid #888', padding: '15px', marginTop: '20px' }}>
      <h3>Random Quote</h3>
      {loading ? <p>Loading quote...</p> : <p><em>"{quote}"</em></p>}
      <button
        onClick={() => {
        if (!loading) fetchQuote();
        }}
        disabled={loading}
        style={{ marginTop: '10px' }}
        >
        {loading ? 'Fetching...' : 'New Quote'}
      </button>
      <p style={{ marginTop: '10px' }}>Quotes shown: {quoteCount}</p>
    </div>
  );
}

export default QuoteFetcher;
