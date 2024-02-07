
User.mail = "";

Developer.mail = "alexandruiluca71@gmail.com";
Developer.phone = "0752 589 038";
//# sourceMappingURL=luxon.js.map

//TODO: See if the method is required here
function setDefaultLocateToRomania_() {
    // @ts-ignore
    luxon.Settings.defaultLocale = "ro";
  }
setDefaultLocateToRomania_();

luxon.Settings.defaultLocale = "ro";
ErrorHandler.contactErrorMessage = `\n\n In cazul unei erori grave ma puteti contacta: \n Telefon: ${Developer.phone} \n Email: ${Developer.mail}. \n\n Daca doriti sa imi lasa-ti un mesaj in privinta erori apasati ~DA~`;
