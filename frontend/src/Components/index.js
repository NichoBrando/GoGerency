import React from 'react';
import Hero from './../static/imgs/hero.jpg';

const Index = () => {
  const servicesList =  [
    {serviceName: "Gerency your spents", serviceIcon: "account_balance_wallet"},
    {serviceName: "Make payments", serviceIcon: "payment"},
    {serviceName: "Manage your spents", serviceIcon: "attach_money"},
    {serviceName: "Analysis your spents", serviceIcon: "show_chart"},
    {serviceName: "Notification spents", serviceIcon: "notifications"},
    {serviceName: "Make best choices", serviceIcon: "thumb_up"},
    {serviceName: "Invest and profit", serviceIcon: "trending_up"},
    {serviceName: "Manage your Account", serviceIcon: "person"},
  ]
  return (
    <React.Fragment>
      <div className="navbar-fixed">
        <nav className = "#757575 grey darken-3 p-05">
          <div className="nav-wrapper p-05">
            <a className="brand-logo fs-30 left light-blue-text lighten-5 fontRighteous">GoGerency</a>
            <ul className="fontRighteous right">
              <li><a className="light-blue-text lighten-5">About us</a></li>
              <li><a className="light-blue-text lighten-5">Starting</a></li>
              <li><a className="light-blue-text lighten-5">Manage</a></li>
            </ul>
          </div>
        </nav>
      </div>
      <div className = "hero p10" style = {{backgroundImage: `url(${Hero})`}}>
        <h4>Need to gerency your spents?</h4>
        <div className = "p-05 hero-content">  
          <p>Then, use GoGerency!</p>
          <p>GoGerency is a simulator bank, the most used for the fictional people.</p>
          <p>Here, you can:</p>
          <ol>
            <li><p>Deposit fictional money</p></li>
            <li><p>Use payment on simulator shops and e-commerces, 
              like CSHOrP, SpringSpents, Rhango, FlaskSushi and JSExpressFood</p></li>
            <li><p>Organize your spents</p></li>
          </ol>
        </div> 
        <a className="btn red lighten-1 md-20">Ler mais</a>
      </div>
      <div className = "p5 grey darken-3 white-text">
        <h4>All services that we have:</h4>
        <div className = "row gridServices p5 orange-text">
          {servicesList.map(
            (element, index) =>
              <React.Fragment key = {index}>
                <div className = "service col 1 p10 m-20 grey darken-2 z-depth-3">
                  <div className = "serviceIcon md-20">
                    <i className="large material-icons">{element.serviceIcon}</i>
                  </div>
                  <p>{element.serviceName}</p>
                </div>
              </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
export default Index;