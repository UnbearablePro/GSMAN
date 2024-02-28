User.mail = "";
User.name = "";

Developer.mail = "alexandruiluca71@gmail.com";
Developer.phone = "0752 589 038";

ErrorHandler.contactErrorMessage = `\n\n In cazul unei erori grave ma puteti contacta: \n Telefon: ${Developer.phone} \n Email: ${Developer.mail}. \n\n Daca doriti sa imi lasa-ti un mesaj in privinta erori apasati ~DA~`;

let ui = undefined;

/** @private */
Settings.prefference = null;

AbstractPropertiesService.service = undefined;
AbstractSheetService.sheet = undefined;