class DateTime extends LuxonDateTime {

  /**
   * Convert an input date to luxon DateTime and then checks if a date is today or not.

   * @param {string} dateInput
   * @return {boolean} 
   */
  static isToday(dateInput) {
    let dateToCheck = DateTimeMapper.getLuxonDateFrom(dateInput);
    let present = LuxonDateTime.now();
    return this.areEqualsDates_(dateToCheck, present).valueOf();
  }

  /**
   * Convert an input date to luxon DateTime and then checks if a date is not older then 6 days.

   * @param {string} dateInput
   * @return {boolean} 
   */
  static isThisWeek(dateInput) {
    let dateToCheck = DateTimeMapper.getLuxonDateFrom(dateInput);
    let pastWeek = LuxonDateTime.now().minus({ days: 6 });

    return pastWeek < dateToCheck;
  }

  static areEqualsDates_(firstDate, secondDate) {
    return (firstDate.toLocaleString() != secondDate.toLocaleString()) ? false : true;
  }

  static toDay() {
    return LuxonDateTime.local().toFormat(DateFormat.ROMANIADATE);
  }

  static getDateAfterMinutes(date, amoutOfMinutes) {
    return DateTimeMapper.getLuxonDateFrom(date).plus({ minutes: amoutOfMinutes }).toJSDate();
  }
}

