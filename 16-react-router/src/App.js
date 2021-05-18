import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

const AllQuotesList = React.lazy(() => import('./pages/AllQuotesList'));
const QuoteDetails = React.lazy(() => import('./pages/QuoteDetails'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const NewQuote = React.lazy(() => import('./pages/NewQuote'));

const Fallback = (
  <div className="centered">
    <LoadingSpinner />
  </div>
);

function App() {
  return (
    <Layout>
      <Suspense fallback={Fallback}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotesList />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetails />
          </Route>
          <Route path="/add-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
