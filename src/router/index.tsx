import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { MoviesPage } from '../modules/movie/pages/MoviesPage';

const Router: React.FC = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={MoviesPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
