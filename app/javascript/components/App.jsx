import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Profile from './pages/profile';
import Event from './pages/event';
import NoMatchFound from './ui/placeholders/NotFound';

const App = () => {
  return (
    <Switch>
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/organizations/:id/events/:id" component={Event} />
      <Route component={NoMatchFound} />
    </Switch>
  );
};

export default App;
