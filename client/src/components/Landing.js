import './Landing.css';
import React from 'react';

const Landing = () => {
  return (
    <div className="landing center">
      <h1 className="landing-header">Welcome to MailGrid</h1>
      <h5>Sending Surveys Has Never Been Easier!</h5>

      <div className="row">
        <div className="col s12 m4">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <i className="material-icons large">create</i>
              <span className="card-title">Create Surveys For Your Products</span>
              <p>Construct survey campaigns that are based on
                products from your own company!
              </p>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <i className="material-icons large">send</i>
            <span className="card-title">Mass Email Your Surveys</span>
            <p>This app uses the sendGrid API to send out mass email campaigns with one click!</p>
          </div>
        </div>
        </div>

        <div className="col s12 m4">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <i className="material-icons large">group</i>
              <span className="card-title">Track Your Client's Responses</span>
              <p>All of your responses will be displayed in the user dashboard
                from every survey campaign you start.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;