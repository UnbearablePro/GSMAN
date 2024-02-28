function HtmlControllerTest() {
    let listOfTests = [
        Test.createInteractionTest("openHtmlPopupSuccessfully"),
        Test.createInteractionTest("openHtmlPopupFreeSuccessfully"),
        Test.createInteractionTest("openHtmlSidebarSuccessfully")
    ];
    return new TestModule(listOfTests, "HtmlDisplayer");
}

function openHtmlPopupSuccessfully() {
    const sut = AbstractHtmlDisplayer;

    sut.openHtmlPopup("HtmlTestTemplate.html","Title-test fixed", 200, 700);
    assertInteraction("Html pop-up should be appeared having the heigh larger","Html pop-up didn't appeared");
}

function openHtmlPopupFreeSuccessfully() {
    const sut = AbstractHtmlDisplayer;

    sut.openHtmlPopupFree("HtmlTestTemplate.html","Title-test non fixed", 700, 200);
    assertInteraction("Html pop-up should be appeared having the width larger and not being fixed","Html pop-up didn't appeared");
}

function openHtmlSidebarSuccessfully() {
    const sut = AbstractHtmlDisplayer;

    sut.openHtmlSidebar("HtmlTestTemplate.html", 400, 700);
    assertInteraction("Html side should be appeared ","Html sidebar didn't appeared");
}