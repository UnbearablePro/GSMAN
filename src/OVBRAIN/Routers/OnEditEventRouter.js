class OnEditEventRouter {

    /**
     * 
     * @param {UserEvent} userEvent 
     */
    static routeUserEvent(userEvent) {
        switch (userEvent.range.getSheet().getSheetName()) {
            case SheetNames.CONTACTE: ContacteEventRouter.routeEvent(userEvent); break;
        }
    }
}