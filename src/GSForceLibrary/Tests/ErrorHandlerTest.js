function ErrorHandlerTest() {
    let listOfTests = [
        Test.createInteractionTest("handleErrorActively"),
        Test.createInteractionTest("handlingErrorShouldNotSendEmailToDeveloperWhenUserRefused"),
        Test.createInteractionTest("handlingErrorShouldBeSendAutomaticaly"),
        Test.createInteractionTest("handlingErrorShouldBeSendAtAll")
    ];
    return new TestModule(listOfTests, "ErrorHandlerTest");
}

function handleErrorActively() {
    Settings.initialize();
    Settings.prefference.isActiveErrorHandlingOn = true;
    ErrorHandler.contactErrorMessage = "Press yes to continue the test";
    const sut = ErrorHandler;
    explainExpectedResult("Next test is for handling errors and contact developer. Press yes when alert appears and check if developer catch a message");

    try{
        throw Error("Thrown error to be handled");
    } catch(e) {
        sut.handleError(e);
    }

    assertInteraction("Do developer mail has received an email with all specifications? stack|userMessage|Remaining mails", "Developer didn't receive correct error mail.");
}

function handlingErrorShouldNotSendEmailToDeveloperWhenUserRefused() {
    Settings.initialize();
    Settings.prefference.isActiveErrorHandlingOn = true;
    ErrorHandler.contactErrorMessage = "Press no to continue the test";
    
    const sut = ErrorHandler;
    explainExpectedResult("Next test is for handling errors and contact developer. Press no when alert appears and check if developer catch a message.");

    try{
        throw Error("Thrown error to be handled");
    } catch(e) {
        sut.handleError(e);
    }

    assertInteraction("Developer should receive no error email from the user!", "Developer received error mail even he shouldn't");
}

function handlingErrorShouldBeSendAutomaticaly() {
    Settings.initialize();
    Settings.prefference.isActiveErrorHandlingOn = false;
    Settings.prefference.isSentMailAutomaticalyToDeveloperWhenErrorOccursOn = true;

    ErrorHandler.contactErrorMessage = "Press no to continue the test";
    
    const sut = ErrorHandler;

    try{
        throw Error("Thrown error to be handled");
    } catch(e) {
        sut.handleError(e);
    }

    assertInteraction("Do developer mail has received an email with specification except user message? stack|Remaining mails", "Developer didn't receive correct error mail.");
}

function handlingErrorShouldBeSendAtAll() {
    Settings.initialize();
    Settings.prefference.isActiveErrorHandlingOn = false;
    Settings.prefference.isSentMailAutomaticalyToDeveloperWhenErrorOccursOn = false;
    ErrorHandler.contactErrorMessage = "Press no to continue the test";
    
    const sut = ErrorHandler;

    try{
        throw Error("Thrown error to be handled");
    } catch(e) {
        sut.handleError(e);
    }

    assertInteraction("Developer should receive no error email from the user!", "Developer received error mail even he shouldn't");
}