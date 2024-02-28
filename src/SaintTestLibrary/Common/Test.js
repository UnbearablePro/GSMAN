/** @class */
class Test {

    constructor(name, type = TestType.NORMAL) {
        if (name == null || name == "") {
            return null;
        }
        
        this.name = name;
        this.type = type;
    }

    static of(name, type) {
        return new this(name, type);
    }

    static createNormalTest(name) {
        return new this(name, TestType.NORMAL);
    }

    static createInteractionTest(name) {
        return new this(name, TestType.INTERACTION);
    }

    static createSheetTest(name) {
        return new this(name, TestType.SHEET);
    }

}

