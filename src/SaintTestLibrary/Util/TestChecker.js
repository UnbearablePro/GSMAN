class TestChecker {

    static checkTestFiles(fileNames) {
        try {
            this.checkEmptyFileNames(fileNames);
            this.checkFilesToBeCallable(fileNames);
            this.checkFilesForHavingTestInName(fileNames);
            this.checkFilesToBeCallable(fileNames);
            TestLogger.logProgress("Test checkers for test files passed.");
        } catch (e) {
            TestLogger.logError(e.message);
            throw Error(e.message);
        }

        return fileNames;
    }

    static checkEmptyFileNames(fileNames) {
        if (fileNames.length == 0 || fileNames == null || fileNames == undefined) {
            throw Error("No files provided for testing!");
        }
    }

    static checkFilesForHavingTestInName(fileNames) {
        fileNames.forEach(fileName => {
            if (fileName.includes("Test")) { true } else { throw Error(`File provided for testing: <${fileName}> does not include the text <Test> in it!`) };
        });
    }

    static checkFilesToBeCallable(fileNames) {
        fileNames.forEach(fileName => {
            try {
                !eval(`${fileName} instanceof Function`);
            } catch (e) {
                throw Error(`File provided for testing: <${fileName}> is not callable, function <${fileName}> does not exists`);
            }
        });
    }

    static isTestModule(testModule, testFile) {
        if (!(testModule instanceof TestModule)) {
            TestLogger.logWarn(`Test file <${testFile}> is an empty Test Module. Reason: <${testFile}> does not return a TestModule object`);
            return false;
        }
        if (testModule.testList.length < 1) {
            TestLogger.logWarn(`Test file <${testFile}> is an empty Test Module. Reason: No function provided for testing`);
            return false;
        }
        return true;
    }
}