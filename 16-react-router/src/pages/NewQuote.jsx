import { useEffect } from 'react';
import { useHistory } from 'react-router';
import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

const NewQuote = () => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === 'completed') {
      history.push('/quotes');
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return (
    <section>
      <h1>New Quote</h1>
      <QuoteForm
        isLoading={status === 'pending'}
        onAddQuote={addQuoteHandler}
      />
    </section>
  );
};

export default NewQuote;
