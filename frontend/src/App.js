import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Index from './Components/index';

const Routes = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route path = "/" exact component = {Index}/>
        </Switch>
      </BrowserRouter>
  );
}
export default Routes;