import React from 'react';
import { connect } from 'react-redux';
import FIELDS from './FIELDS';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import * as actions from '../../actions';

const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(FIELDS, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    )
  });

  return (
    <div>
      <h5>Please review your survey!</h5>
      {reviewFields}
      <button 
        className="red light-5 btn-flat white-text"
        onClick={onCancel}
      >
      Go Back
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="green btn-flat right white-text"
      >
        Send Survey
        <i className="material-icons right"></i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));