class MailService {

  static isRemainingDailyQuotaOn() {
    return MailApp.getRemainingDailyQuota() >= 5;
  }

  static getRemainingMailsQuota() {
    return MailApp.getRemainingDailyQuota();
  }

  static sendMail(recipient, subject, body) {
    try {
      MailApp.sendEmail({
        to: recipient,
        subject: subject,
        body: body,
      });
      Displayer.complete(`Mail '${subject} sented to ${recipient}'`);
    } catch(e) {
      Displayer.warning(`Mail '${subject} not sented to ${recipient}'`);
    }
  }

  static sendFeedbackMail(subject, body) {
    this.sendMail(Developer.mail, subject, body);
  }

  static sendErrorMail(subject, errorBody, userMessageBody = "") {
    this.sendMail(Developer.mail, `❌ ERROR on User ${User.name} | ${subject} ` , errorBody + "/n/n" + `User message: ${userMessageBody}` + "/n/n/n" + `Mails left: ${this.getRemainingMailsQuota}`);
  }

  static sendMailToYourself(subject, body) {
    this.sendMail(User.mail, subject, body);
  }
}