const keys = require('../../config/keys');
//The survey object has a property 'body', which contains the content that will be shown in the email
module.exports = (survey) => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3> I'd like your input!</h3>
          <p>Please answer the following question:</p>
          <p>${survey.body}</p>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/thanks">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
};