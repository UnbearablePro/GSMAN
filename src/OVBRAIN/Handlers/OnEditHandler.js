class EditHandler {

    static handleEvent(event) {
        try {
            let userEvent = this.getUserEventFrom(event);
            this.chooseSheetHandler(userEvent);
        } catch(e) {
            ErrorHandler.handleError(e);
        }    
    }

    static getUserEventFrom(event) {
        return new UserEvent(event, SpreadSheetService.getCurrentSheetName());
    }

    static chooseSheetHandler(userEvent) {
        switch (userEvent.sheetName) {
            case SheetNames.CONTACTE: ContacteEventHandler.handleEvent(userEvent); break;
            case SheetNames.CENTRALIZARE: 
        }
    }
}

