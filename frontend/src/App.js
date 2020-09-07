import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Index from './Components/index';

const Routes = () => {
  return (
    <div className="container-div">
      <BrowserRouter>
        <Switch>
          <Route path = "/" exact component = {Index}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
export default Routes;