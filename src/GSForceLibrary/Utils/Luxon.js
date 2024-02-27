class Luxon {

  /**
   * Convert an input date to luxon DateTime and then checks if a date is today or not.

   * @param {string} dateInput
   * @return {boolean} 
   */
  static isToday(dateInput) {
    let dateToCheck = this.toLuxonDate(dateInput);
    let present = luxon.DateTime.now();
    return this.areEqualsDates_(dateToCheck, present).valueOf();
    
  }

  /**
   * Convert an input date to luxon DateTime and then checks if a date is not older then 6 days.

   * @param {string} dateInput
   * @return {boolean} 
   */
  static isThisWeek(dateInput) {
    let dateToCheck = this.toLuxonDate(dateInput);
    let pastWeek = luxon.DateTime.now().minus({ days: 6 });

    return pastWeek < dateToCheck;
  }

  static areEqualsDates_(firstDate, secondDate) {
    return (firstDate.toLocaleString() != secondDate.toLocaleString()) ? false : true;
  }


  static toLuxonDate(dateInput) {
    /* dateInput is already a Luxon DateTime */
    if (luxon.DateTime.isDateTime(dateInput)) {
      return dateInput;
    }

    let convertedInput;

    /* dateInput is JS Date object */
    if (Object.prototype.toString.call(dateInput) === "[object Date]") {
      convertedInput = luxon.DateTime.fromJSDate(dateInput);
      if (convertedInput.isValid) {
        return convertedInput;
      }
    }

    /* dateInput is ISO Format */
    convertedInput = luxon.DateTime.fromISO(dateInput);
    if (convertedInput.isValid) {
      return convertedInput;
    }

    /* dateInput is a custom RomaniaDate Format */
    convertedInput = luxon.DateTime.fromFormat(dateInput, DateFormat.ROMANIADATE);
    if (convertedInput.isValid) {
      return convertedInput;
    }

    /* dateInput is a SQL format */
    convertedInput = luxon.DateTime.fromSQL(dateInput);
    if (convertedInput.isValid) {
      return convertedInput;
    }
    /* dateInput is a HTTP format */
    convertedInput = luxon.DateTime.fromHTTP(dateInput);
    if (convertedInput.isValid) {
      return convertedInput;
    }
    /* convert to JS date and then to Luxon date */
    convertedInput = new Date(dateInput);
    convertedInput = luxon.DateTime.fromJSDate(convertedInput);
    if (convertedInput.isValid) {
      return convertedInput;
    }

    throw new Error(`The date converted unsuccesfully for the date input : ${dateInput}`);
  }


  static toDay() {
    return luxon.DateTime.local().toFormat(DateFormat.ROMANIADATE);
  }

  static getDateAfterMinutes(date, amoutOfMinutes) {
    return this.toLuxonDate(date).plus({ minutes: amoutOfMinutes }).toJSDate();
  }
}

