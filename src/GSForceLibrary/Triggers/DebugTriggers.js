function debugCheckSystemWorks() {
    try {
        Displayer.debug("System works perfectly");
    } catch (e) {
        Displayer.debug(e.message + e.stack);
    }
}



function debugTriggers() {
    try {
        TriggerService.display();
    } catch (e) {
        Displayer.debug(e.message + e.stack);
    }
}

function debugCalendar() {
    try {
        //TODO: Get all calendar events
    } catch (e) {
        Displayer.debug(e.message + e.stack);
    }
}