import { useEffect } from 'react';
import { Route, useParams, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

const QuoteDetails = (props) => {
  const { quoteId } = useParams();
  const match = useRouteMatch();

  const { sendRequest, status, error, data: quote } = useHttp(getSingleQuote);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (status !== 'completed' || !quote || error) return <p>Not found</p>;

  return (
    <section>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <h1>{quote.text}</h1>
      <h2>{quote.author}</h2>
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments parentId={quote.id} />
      </Route>
    </section>
  );
};

export default QuoteDetails;
