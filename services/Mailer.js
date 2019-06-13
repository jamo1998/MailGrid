const sendgrid = require('sendgrid');
//.mail is a helper object that helps create the mailer object
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
  //the constructor function is called immediately after a class is called
  constructor({ subject, recipients }, content) {
    super();
    //whenever an instance of the mailer is made, that instance will have a new set of specific properties
    this.sgApi = sendgrid(keys.sendGridKey);
    this.from_email = new helper.Email('no-reply@mailgrid.com');
    this.subject = subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients);
    //.addContent is a sendgrid helper fucntion that takes in the body of the email and formats it
    this.addContent(this.body);
    this.addClickTracking();
    this.addRecipients();
  }

  //pass off the subdoc collection recipients to the formatAddresses helper function
  formatAddresses(recipients) {
    // for every recipient, take out the email property
    return recipients.map(({ email }) => {
      //format with email helper, and return it
      return new helper.Email(email);
    });
  }

  //helper function that setsup click tracking
  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  //helper function that adds the recipients
  addRecipients() {
    const personalize = new helper.Personalization();

    this.recipients.forEach(recipient => {
      personalize.addTo(recipient);
    });
    this.addPersonalization(personalize);
  }

  async send() {
    //creates the request to send an email
    const request = this.sgApi.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: this.toJSON()
    });

    //this officially sends the email off to sendgrid
    const response = await this.sgApi.API(request);
    return response;
  }
}

module.exports = Mailer;