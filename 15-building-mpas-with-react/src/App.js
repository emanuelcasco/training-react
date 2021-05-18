import { Route, Switch, Redirect } from 'react-router-dom';

import About from './components/About';
import MainHeader from './components/MainHeader';
import Products from './components/Products';
import ProductDetails from './components/ProductDetail';
import Welcome from './components/Welcome';

function App() {
  return (
    <div>
      <MainHeader />
      <h2>Let's get started!</h2>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/products/:id">
          <ProductDetails />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
