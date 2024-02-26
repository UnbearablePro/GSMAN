const TestType = {
    /* test that has no dependency to Google Script, should be plain java script code.*/
    NORMAL : "NORMAL_TEST",
    /* test that has no interaction with the user and use google script services. */
    GS : "GS_TEST",
    /* test that has to interact with the user and the result is determine by the user. */
    INTERACTION: "INTERACTION_TEST"
}
