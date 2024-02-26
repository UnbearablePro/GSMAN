class TestChecker {

    static checkTestFiles(fileNames) {
        this.checkTests(fileNames);
        this.checkListOfFunctions(fileNames);
        return fileNames;
    }

    static checkTests(fileNames) {
        if (fileNames.length == 0 || fileNames == null || fileNames == undefined) {
            throw Error("No files provided for testing!");
        }
        fileNames.forEach(this.check);
    }

    static check(fileName) {
        if (fileName == "" || fileName == null || fileName == undefined || fileName == " ") throw Error(`File provided for testing is empty`) ; // FIXME: File is not checked if it is empty of tests.
        if (fileName.includes("Test")) { true } else { throw Error(`File provided for testing: <${fileName}> does not include the text <Test> in it!`) };
    }

    static checkListOfFunctions(listOfFunctions) {
        listOfFunctions.forEach(func => {
            if (!typeof eval(`${func}()`)) {
                throw Error(`Test function doesn't exist for ${func}!`);
            }
        });
    }

}