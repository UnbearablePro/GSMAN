// /**********************************************************************************
//  **********************************************************************************
//  **                                                                              **
//  **                              OVBRAIN MENU BUTTONS                            **
//  **                                                                              **
//  **********************************************************************************
//  **********************************************************************************/

//  function menuButtonDisableAdminMode() {
//     Logger.log("Menu button disable admin mode pressed!");
//     try {
//       Admin.disableAdminMode();
//     } catch (e) {
//       UIUtils.error(e);
//     }
//   }
//   // NOT ADDED
//   function menuButtonSetSimpleReminder() {
//     Logger.log("Menu button set simple reminder pressed!");
//     try {
//       Reminder.createReminderRequest();
//     } catch (e) {
//       UIUtils.error(e);
//     }
//   }
  
//    /**********************************************************************************
//    **********************************************************************************
//    **                                                                              **
//    **                              ADMIN MENU BUTTONS                              **
//    **                                                                              **
//    **********************************************************************************
//    **********************************************************************************/
  
//   function menuButtonDisplayRandomQuote() {
//     Logger.log("Menu button display random quote pressed!");
//     try {
//       MotivationalController.displayRandomMotivationalQuote();
//     } catch (e) {
//       UIUtils.error(e);
//     }
//   }
  
//   function menuButtonRequestAdminMode() {
//     Logger.log("Menu button request admin mode pressed!");
//     try {
//       Admin.requestAdminMode();
//     } catch (e) {
//       UIUtils.error(e);
//     }
//   }
  
//   function menuButtonDisplayUserProperties() {
//     Logger.log("Menu button display user properties pressed!");
//     try {
//       PropertiesHandlerUser.displayProperties();
//     } catch (e) {
//       UIUtils.error(e);
//     }
//   }
  
//   function menuButtonDeleteAllUserProperties() {
//     Logger.log("Menu button delete all user properties pressed!");
//     try {
//       PropertiesHandlerUser.deleteAll();
//       UIUtils.system("Successfully deleted all User Properties!");
//     } catch (e) {
//       UIUtils.error(e);
//     }
//   }
  
//   function menuButtonDeleteAllSettings() {
//     Logger.log("Menu button delete all settings pressed!");
//     try {
//       SettingsOVB.deleteAll();
//       UIUtils.system("Successfully deleted all Settings!");
//     } catch (e) {
//       UIUtils.error(e);
//     }
//   }
  
//   function menuButtonInstallOVBRAIN() {
//     Logger.log("Menu button instal OVBRAIN pressed!");
//     try {
//       Installer.installOVBRAIN();
//       UIUtils.system("Successfully installed OVBRAIN!");
//     } catch (e) {
//       UIUtils.error(e);
//     }
//   }
  
//   function menuButtonInstallUserProperties() {
//     Logger.log("Menu button instal user permission pressed!");
//     try {
//       Installer.installDefaultUserProperties();
//       UIUtils.system("Successfully installed User Properties!");
//     } catch (e) {
//       UIUtils.error(e);
//     }
//   }