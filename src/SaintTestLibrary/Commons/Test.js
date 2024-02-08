class Test {

    constructor(functionToTest,  type = TestType.UNITTEST) {
        if (functionToTest == null || functiontoTest == "") {
            throw Error("No function provided for testing");
        }

        // FIXME: Most probably can't call a function from here
        this.functionToTest = functionToTest;
        this.name = functionToTest.name;
        this.type = type;

    }

    static of(functionToTest) {
        return this(functionToTest);
    }

    static createNormalTest(functionToTest) {
        return this(functionToTest);
    }

    static createInteractionTest(functionToTest) {
        return this(functionToTest, TestType.INTERACTIONTEST);
    }

}

