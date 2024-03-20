//@ts-nocheck
class DateTime extends LuxonDateTime {

  /**
   * Convert an input date to luxon DateTime and then checks if a date is today or not.

   * @param {string} dateInput
   * @return {boolean} 
   */
  static isToday(dateInput) {
    let present = LuxonDateTime.now();
    return this.areEqualsDates(dateInput, present).valueOf();
  }

  static now() {
    return LuxonDateTime.now().toFormat(DateFormat.ROMANIADATE);
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

  static areEqualsDates(firstDate, secondDate) {
    try {
      const d1 = DateTimeMapper.getLuxonDateFrom(firstDate).toISO();
      const d2 = DateTimeMapper.getLuxonDateFrom(secondDate).toISO();
      return d1 == d2;
    } catch (e) {
      Lug.error(`Cannot compare luxon dates d1:${firstDate}, d2: ${secondDate}`, e.name, e.stack);
      ErrorHandler.handleError(e);
    }
  }

  static toDay() {
    return LuxonDateTime.local().toFormat(DateFormat.ROMANIADATE);
  }

  static getDateAfterMinutes(date, amoutOfMinutes) {
    return DateTimeMapper.getLuxonDateFrom(date).plus({ minutes: amoutOfMinutes }).toJSDate();
  }

  static toRomanianFormat(date) {
    return DateTimeMapper.getLuxonDateFrom(date).toFormat(DateFormat.ROMANIADATE);
  }

}

