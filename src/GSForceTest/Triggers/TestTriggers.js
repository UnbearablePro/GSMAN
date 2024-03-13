

function testAllTrigger() {
    TestPermission.setAllPermissionOn();
    startTests();
}

function testAllWithoutInteractionTrigger() {
    TestPermission.setAllPermissionWithout(TestFlags.INTERACTION);
    startTests();
}