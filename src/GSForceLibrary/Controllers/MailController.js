/**
 * @module MailService
 * 
 * @TODO - Testing create a mail template
 */
class MailController{

  static isRemainingDailyQuotaOn() {
    (MailApp.getRemainingDailyQuota < 2) ? false : true;
  }

  static sendMail(recipient, subject, body) {
    MailApp.sendEmail({
      to: recipient,
      subject: subject,
      body: body,
    });
    UIUtils.system("Mail sented successfully");
  }

  static sendMail(mailMessage) {
    MailApp.sendEmail(mailMessage);
    UIUtils.system("Mail sented successfully");
  }

  static sendFeedbackMail(subject, body) {
    this.sendMail(Developer.mail, subject, body);
  }

  static sendErrorMail(subject, body) {
    this.sendMail(Developer.mail, subject, body);
  }

  static sendMailToYourself(subject, body) {
    this.sendMail(User.mail, subject, body);
  }
}

function testMailUtils() {
  var mailMessage = ObjectCreator.createMailMessage(
    Developer.mail,
    "Subiect",
    
  )
  
}