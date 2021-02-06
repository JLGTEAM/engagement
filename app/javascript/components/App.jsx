import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Profile from './pages/profile';
import Event from './pages/event';

const App = () => {
  return (
    <Switch>
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/event" component={Event} />
      {/* <Route component={NoMatchFound} /> */}
    </Switch>
  );
};

export default App;
