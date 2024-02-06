// function callButtonSetReminder() {
//     Logger.log("Set Reminder button pressed")
//     try {
//         Reminder.createReminderRequest();
//     } catch (e) {
//         ErrorHandler.handleError(e);
//     }
// }

// function callButtonSetReminderForSelectedPerson() {
//     Logger.log("Set Reminder for selected person button pressed")
//     try {
//         Reminder.createReminderRequestForSelectedPerson();
//     } catch (e) {
//         ErrorHandler.handleError(e);
//     }
// }

// function responseReminder(title = "Reminder", description = "", date, durationTime) {
//     try {
//         if (date == null || date == "") {
//             throw Error("Data pentru reminder nu exista.");
//         }
//         Reminder.createReminder(title, description, date, durationTime);
//     } catch (e) {
//         ErrorHandler.handleError(e);
//     }
// }

// function responseReminderForSelectedPerson(title, date, person, comments, durationTime) {
//     Reminder.createReminderForSelectedPerson(title, date, person, comments, durationTime);
// }

