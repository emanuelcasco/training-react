import React from 'react';
import Counter from './components/Counter';

function App() {
  return (
    <React.Fragment>
      <Counter initValue="0" iteratee="1" />
      <Counter initValue="0" iteratee="-1" />
    </React.Fragment>
  );
}

export default App;
