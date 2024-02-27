function onEditEvent(event) {
    try {
        EditHandler.handleEvent(event);
    } catch (e) {
        ErrorHandler.handleError(e);
    }
}