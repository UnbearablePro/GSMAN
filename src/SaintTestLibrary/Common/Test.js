/** @class */
class Test {

    constructor(functionToTest, type = TestType.NORMAL) {
        if (functionToTest == null || functionToTest == "") {
            return null;
        }
        
        this.functionToTest = functionToTest;
        this.type = type;
    }

    static of(functionToTest, type) {
        return new this(functionToTest, type);
    }

    static createNormalTest(functionToTest) {
        return new this(functionToTest, TestType.NORMAL);
    }

    static createInteractionTest(functionToTest) {
        return new this(functionToTest, TestType.INTERACTION);
    }

}

