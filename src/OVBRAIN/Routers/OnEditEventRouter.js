class OnEditEventRouter {

    static routeUserEvent(userEvent) {
        switch (userEvent.sheetName) {
            case SheetNames.CONTACTE: ContacteEventRouter.routeEvent(userEvent); break;
            // case SheetNames.CENTRALIZARE_SAPTAMANALA: 
        }
    }
}