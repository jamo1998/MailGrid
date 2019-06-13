// SurveyField contains logic to render a single label
// and text input
import React from 'react';
// Because this is getting rendered in a Field tag,
// ({ input }) automatically looks towards the props.input
// object provided by redux-form. This object contains many
// props like event handlers that will watch for any changes
// and then record the changes
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }} >
        {touched && error}
      </div>
    </div>
  );
};