class TestModule {

    constructor(testList, name) {
        this.testList = testList;
        this.name = name;
    }

    static empty(name = "Empty test module") {
        return new this([], name);
    }

}