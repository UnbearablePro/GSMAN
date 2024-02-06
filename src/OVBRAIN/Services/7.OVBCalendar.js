// class OVBCalendar {
//   /** @private */
//   static initialize_() {
//     if(this.calendar == null) {
//       this.calendar = this.getCalendar_();
//     }
//   }

//   /** @private */
//   static getCalendar_() {
  
//     var calendar = CalendarApp.getCalendarsByName("OVB");
  
//     if(calendar == "" || calendar == null){
//       Logger.log("OVB calendar not found.");
//       return this.createCalendar();
//     } else {
//       Logger.log("Calendar OVB found.")
//     }
//     return calendar[0];
//   }

//   static createCalendar_() {
//     let calendar;
//     try {
//      calendar = CalendarApp.createCalendar("OVB").setColor(color.BLUE)
//     } catch(e) {
//       UIUtils.error("Nu s-a putut crea calendarul OVB.");
//       return;
//     }
//     Logger.log("Calendar created successfully!")
//     UIUtils.system("S-a create cu succes calendarul OVB!");
//     return calendar;
//   }

//   /**
//    * Create a google calendar event for OVB calendar.
//    * 
//    * @param {string} title
//    * @param {string} description
//    * @param {Date|string} start
//    * @param {number} durationTime
//    */
//   static createCalendarEvent(title, start, descriptionText, durationTime) {
//     this.initialize_();
//     const end = DTUtils.getDateAfterMinutes(start, durationTime);
//     start = DTUtils.toLuxonDate(start).toJSDate();

//     var event = this.calendar.createEvent(title, start, end,{
//       description: descriptionText,
//         reminders: { useDefault: false, 
//         overrides: [{ method: 'popup', minutesBefore: 1 }] }
//     })
//     event.addPopupReminder(1);
    
//     Logger.log(`Google calendar event created successfully. Event ${event}`);
//   }

//   // Return the id of the event founded
//   /**
//    * FIXME
//    */
//   static findEventIdByTitle(title, calendar) {
    
//     var events = calendar.getEvents(new Date(), new Date(new Date().getTime() + (365 * 24 * 60 * 60 * 1000))); // Get events for the next year (you can adjust the time window as needed)

//     for (var i = 0; i < events.length; i++) {
//       if (events[i].getTitle() === title) {
//         Logger.log('Event found:');
//         Logger.log('Event ID: ' + events[i].getId());
//         Logger.log('Event Title: ' + events[i].getTitle());
//         Logger.log('Event Start Time: ' + events[i].getStartTime());
//         Logger.log('Event End Time: ' + events[i].getEndTime());
//         return events[i].getId();
//       }
//     }

//     Logger.log('Event not found with title: ' + title);
//     return null;
//   }

//   static deleteEvent(title){
//     let calendar = getCalendar();
//     let id = findEventIdByTitle(title, calendar[0]);
//     calendar[0].getEventById(id).deleteEvent()
//     Logger.log("Calendarul cu titlul: " + title + " cu id-ul: " + id + " a fost sters.")
//   }

//   static deleteCalendar(){
//     let calendar = CalendarApp.getCalendarsByName("OVB");
//     if (calendar == "" || calendar == null) { 
//       Logger.log("Calendar not found.")
//     } else {
//       cal.deleteCalendar(cal);
//     Logger.log("OVB calendar deleted succesffully");
//     }
//   }
// }

// OVBCalendar.calendar = null;

// // function createGoogleCalendarEvent(title,dateStart,dateEnd,description){
// //   return createEventBody(title,description,dateStart,dateEnd)
  
// // }


// // function createEventBody(title, location,description,startTime,endTime){
// //   return {
// //   'summary': title,
// //   'description': description,
// //   'start': {
// //     'dateTime': startTime,
// //     'timeZone': 'Europe/Bucharest'
// //   },
// //   'end': {
// //     'dateTime': endTime,
// //     'timeZone': 'Europe/Bucharest'
// //   },
// //   'reminders': {
// //     'useDefault': false,
// //     'overrides': [
// //   //  { 'method': 'email', 'minutes': 24 * 60 },
// //       { 'method': 'popup', 'minutes': 1 }
// //     ]
// //   }
// //   };
// // }



// function deleteEvent(title){
//   let calendar = getCalendar();
//   let id = findEventIdByTitle(title, calendar[0]);
//   calendar[0].getEventById(id).deleteEvent()
//   Logger.log("Calendarul cu titlul: " + title + " cu id-ul: " + id + " a fost sters.")
// }