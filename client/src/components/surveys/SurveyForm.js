// SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';

// Field is a helper component provided by redux-form
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import FIELDS from './FIELDS';

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field 
          key={name} 
          component={SurveyField} 
          type="text" label={label} 
          name={name} 
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red light-5 btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Submit
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  _.each(FIELDS, ({ name }) => {
    if (!values[name]) {
      errors[name] =  `You must enter a value`;
    }
  });

  return errors;
}

// reduxForm() is similar to the connect method
export default reduxForm({
  validate,
  form: 'surveyForm',
  //setting destroyOnUnmount to fales prevents redux form from 
  //deleting the input from the user if the user wants to edit it
  destroyOnUnmount: false
})(SurveyForm); 