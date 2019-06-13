import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    return(
      <StripeCheckout
        //"name" will render a header at the top of the payment component
        name="Emaily"
        //"description" prop will also be rendered in the payment header,
        // this simply tells the user what they're exactly paying for
        description="$5 for 5 email credits"
        //"amount" prop represents the type of currency we're using
        //the value of the amount prop is calculated by U.S cents so 500 = $5 USD
        amount={500}
        //"token" expects a callback function, which will be called
        //after we have successfully recieved an authorization token from stripe
        //then call our action creator "handleToken" with this.props.handleToken
        token={token => this.props.handleToken(token)}
        //References stripe key inside of our .env files
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">
          Add Credits
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions) (Payments);