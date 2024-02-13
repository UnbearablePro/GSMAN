/**
 * PropertiesHandler is singleton class that provide functionality to work with properties from PropertiesService.class.
 * @class
 * @todo WYP
 * @version 0.0.0
 * @date 11-07-2023
 */
class PropertiesUserController {

  /** @private */
  constructor() {}

  /** @private */
  static initialize_() {
    if (this.properties == null) {
     this.properties = PropertiesService.getUserProperties().getProperties();
    }
  }
  
  /** Get a key specific User Property */
  static getProperty(key) {
    return PropertiesService.getUserProperties().getProperty(key);
  }
  /** Get all User Properties */
  static getAllProperties() {
    return PropertiesService.getUserProperties().getProperties();
  }

  /** Set a specific key property in User Property */
  static setProperty(key, value) {
    PropertiesService.getUserProperties().setProperty(key, value);
    Logger.log(`Successfully setted ${key} : ${value} User Propertie.`);
  }

 /** Set a listOfProperties in User Properties */
  static setProperties(listOfProperties) {
    PropertiesService.getUserProperties().setProperties(listOfProperties);
    Logger.log(`Successfully setted the following list of User Properties.`);
    Logger.log(listOfProperties);
  }

  /** Delete one property */
  static deleteProperty(key) {
    PropertiesService.getUserProperties().deleteProperty(key);
    Logger.log(`Successfully deleted ${key} from User Properties.`);
  }

  /** Delete all properties. */
  static deleteAll() {
    PropertiesService.getUserProperties().deleteAllProperties();
    Logger.log(`Successfully deleted all User Properties.`);
  }

  /** Display all properties. */
  static displayProperties() {
    // UIUtils.initialize();
    let message = "\n";
    var documentProperties = PropertiesService.getUserProperties();
    var propAllFields = documentProperties.getProperties();
      
    var propKeys = documentProperties.getKeys();
      propKeys.forEach(propKeys => {
        let propValue = propAllFields[propKeys];
        message = message + propKeys + " = " + propValue + "\n";
      });
    // UIUtils.debug(message);
  }
 
}

