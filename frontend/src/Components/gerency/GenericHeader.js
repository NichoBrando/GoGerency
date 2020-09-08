import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

function GenericHeader() {
  const [isLoged, setLoged] = useState(false);
  const userDetails = {name: 'Nicholas'}
  return (
    <React.Fragment>
      <div className = "titleDiv">
        <h1 className = "fontRighteous h1">GoGerency</h1>
        <span className = "fontRighteous">By NichoBrando</span>
      </div>
      <nav className="blue-grey lighten-4">
        <div className = "nav-wrapper">
          <ul id="navbar-items">
            {
              (isLoged) ?
              <React.Fragment>
                <li className="margin-5"><Link to = {userDetails.name} className="black-text text-darken-1">{userDetails.name}</Link></li>
                <li className="margin-5"><Link to = "/gerency" className="black-text text-darken-1">Gerency</Link></li>
                <li className="margin-5"><Link to = "/spend" className="black-text text-darken-1">Spend</Link></li>
                <li className="margin-5"><Link to = "/news" className="black-text text-darken-1">News</Link></li>
              </React.Fragment>
              :
              <React.Fragment>
                <li className="margin-5"><Link to = "/login" className="black-text text-darken-1">Login</Link></li>
                <li className="margin-5"><Link to = "/register" className="black-text text-darken-1">Register</Link></li>
                <li className="margin-5"><Link to = "/about" className="black-text text-darken-1">About</Link></li>
                <li className="margin-5"><Link to = "/news" className="black-text text-darken-1">News</Link></li>
              </React.Fragment>
            }
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default GenericHeader;
