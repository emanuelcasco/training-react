import { Route } from 'react-router';

const Welcome = () => {
  return (
    <section>
      <h1>Welcome</h1>
      <Route path="/welcome/new-user">
        <p>new user</p>
      </Route>
    </section>
  );
};

export default Welcome;
