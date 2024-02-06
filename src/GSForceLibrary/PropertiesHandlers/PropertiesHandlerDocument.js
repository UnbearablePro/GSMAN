/**
 * PropertiesHandlerDocument is singleton class that provide functionality to work with properties from PropertiesService.class.
 */
class PropertiesHandlerDocument {

  static getAllProperties() {
    this.initialize_();
    return PropertiesHandlerDocument.properties;
  }
  
   /**
   * Increment properties with a list of properties keys.
   * @param {array} listOfPropertiesKeys
   */
   static incrementFromList(listOfPropertiesKeys, incrementingNumber = "1") {
    this.initialize_();
    
    let modifiedListOfProperties = {};
    listOfPropertiesKeys.forEach(key => {
      // FIXME: 
      modifiedListOfProperties[key] = StringUtils.addTwoStrings(this.properties[key], incrementingNumber.toString()); 
    })
    // FIXME: 
    // @ts-ignore
    PropertiesService.getDocumentProperties().setProperties(modifiedListOfProperties);
  }

  static increment(propertyKey, incrementingNumber = "1") {
    this.initialize_();
    let result = StringUtils.addTwoStrings(this.properties[propertyKey], incrementingNumber);
    PropertiesService.getDocumentProperties().setProperty(propertyKey, result.toString());
  }

  static decrement(propertyKey, decrementNumber = "1") {
    this.initialize_();
    let result = StringUtils.subtractTwoStrings(this.properties[propertyKey], decrementNumber);
    PropertiesService.getDocumentProperties().setProperty(propertyKey, result.toString());
  }

  static deleteAll() {
    PropertiesService.getDocumentProperties().deleteAllProperties();
  }

  /** Display all properties. */
  static displayProperties() {
    UIUtils.initialize();
    let message = "";
    var documentProperties = PropertiesService.getDocumentProperties();
    var propAllFields = documentProperties.getProperties();
      
    var propKeys = documentProperties.getKeys();
      propKeys.forEach(propKeys => {
        let propValue = propAllFields[propKeys];
        Logger.log(propKeys + " " + propValue);
        message = message + propKeys + " " + propValue + "\n";
      });

    UIUtils.debug(message);
    }

  /** @private */
  constructor() {}

  /** @private */
  static initialize_() {
    if (this.properties == null) {
     this.properties = PropertiesService.getDocumentProperties().getProperties();
    }
  }
}

/** Properties of document properties.*
 * @type {Object.<string,string>}
 */
PropertiesHandlerDocument.properties = null;