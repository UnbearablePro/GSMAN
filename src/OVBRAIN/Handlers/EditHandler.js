class EditHandler {

    static handleEvent(event) {
        try {
            let userEvent = new UserEvent(event);
            OnEditEventRouter.routeUserEvent(userEvent);
        } catch(e) {
            ErrorHandler.handleError(e);
        }    
    }
}

