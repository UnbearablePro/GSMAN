User.mail = "";

Developer.mail = "alexandruiluca71@gmail.com";
Developer.phone = "0752 589 038";

luxon.Settings.defaultLocale = "ro";
ErrorHandler.contactErrorMessage = `\n\n In cazul unei erori grave ma puteti contacta: \n Telefon: ${Developer.phone} \n Email: ${Developer.mail}. \n\n Daca doriti sa imi lasa-ti un mesaj in privinta erori apasati ~DA~`;

var ui = null;

/** Properties of document properties.*
 * @type {Object.<string,string>}
 */
PropertiesDocumentController.properties = undefined;

/** Properties of user properties. * @type {Object.<string,string>} */
PropertiesUserController.properties = undefined;

/** @private */
Settings.prefference = null;

/** 
 * ActiveSpreadSheet 
 * ```
 * app=SpreadsheetApp.getActiveSpreadsheet();
 * 
 * ```
*/
var app = SpreadsheetApp.getActiveSpreadsheet();