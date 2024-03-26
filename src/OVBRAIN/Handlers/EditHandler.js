class EditHandler {

    static handleEvent(event) {
        try {
            const userEvent = UserEvent.fromEditEvent(event);
            OnEditEventRouter.routeUserEvent(userEvent);
        } catch(e) {
            ErrorHandler.handleError(e);
        }    
    }
}

