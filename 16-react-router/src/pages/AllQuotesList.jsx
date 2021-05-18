import { useEffect } from 'react';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';

export const DUMMY_QUOTES = [
  { id: '0001', author: 'Ema', text: 'Hello, world' },
  { id: '0002', author: 'Ema', text: 'React is great!' },
];

const AllQuotesList = () => {
  const {
    sendRequest,
    data: loadedQuotes,
    status,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    if (status === 'completed') console.log(loadedQuotes);
  }, [status, loadedQuotes]);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'pending') {
    return (
      <div className="centered focused">
        <LoadingSpinner />
      </div>
    );
  }
  if (status === 'error') {
    return <div className="centered focused">{error}</div>;
  }
  if (!loadedQuotes || loadedQuotes.length === 0) {
    return <NoQuotesFound />;
  }
  return (
    <section>
      <h1>Quotes list</h1>
      <QuoteList quotes={loadedQuotes || []} />
    </section>
  );
};

export default AllQuotesList;
