class AbstractPropertiesService  {

    static initialize () {};

    static set(key, newValue) {
        this.initialize();
        this.service.setProperty(key, newValue);
    };

    static setByList(newPropertiesList) {
        this.initialize();
        const result = Object.keys(newPropertiesList).reduce((acc, key, index) => {
            acc[key] = Object.values(newPropertiesList)[index];
            return acc;
        }, {});
        //FIXME: Problem
        this.service.setProperties(newPropertiesList);
    };

    static get(key) {
        this.initialize();
        return this.service.getProperty(key);
    };
    
    static getAll() {
        this.initialize();
        return this.service.getProperties();
    };

    static delete(key) {
        this.initialize();
        this.service.deleteProperty(key);
    };

    static deleteAll() {
        this.initialize();
        this.service.deleteAllProperties();
    };

    static increment(key) {
        this.initialize();
        this.incrementBy(key, "1");
    };

    static incrementBy(key, incValue = "1") {
        this.initialize();
        let currentValue = this.get(key);
        let newValue = StringUtils.addTwoStrings(currentValue, incValue);
        this.set(key, newValue);
    };

    static decrement(key) {
        this.initialize();
        this.decrementBy(key, "1");
    };

    static decrementBy(key, decValue = "1") {
        this.initialize();
        let currentValue = this.get(key);
        let newValue = StringUtils.subtractTwoStrings(currentValue, decValue);
        this.set(key, newValue);
    };

    static log() {
        this.initialize();
        console.log(this.getAll());
    };

    static display() {
        this.initialize();
        let message = "";
        
        var properties = this.service.getProperties();
        var keys = this.service.getKeys();

        keys.forEach(key => {
            message = message + key + " : " + properties[key] + "\n";
        });

        Displayer.debug(message);
    };
}