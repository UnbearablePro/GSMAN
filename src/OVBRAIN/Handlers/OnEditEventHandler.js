/*
  # PURPOSE
  OnEdit has the responsibility of handling all the events are occuring when user interacts.

  # DESCRIPTION
    * onEditEvent(event) 
      - is the equivalant of built in onEdit() and is runned on an automatically triggered when a change occurs. This is needed because dodges bugs.
      - it has the purpose to start the event handling, store the event in a global container {eventGlobal} and calls onEdit_ChooseSheet to manage the targeted sheet
    * onEdit_ChooSheet(sheetName) - has the purpose to redirect the event to the right sheet.
    * onEdit


*/

function onEditEvent(event) {
    try {
        var eventHolder = new EventHolder(event);
        let sheetName = app.getActiveSheet().getSheetName();
        OnEditEventHandler.chooseSheet(sheetName, event);
    } catch (e) {
        ErrorHandler.handleError(e);
    }
}

class OnEditEventHandler {
    static chooseSheet(sheetName, event) {
        switch (sheetName) {
            case ContacteSheet.name: ContacteEventHandler.handleEvent(event); break;
                // case 'Service':
                //     editService();
                //     break;
                // case 'Calendar':
                //     editCalendar();
                //     break;
                // case 'Echipa':
                //     editEchipa();
                //     break;
                // case 'Recrutare':
                //     editRecrutare();
                //     break;
                // case 'Challenges':
                //     editChallenges();
                //     break;
                // case 'Istoric':
                //     editIstoric();
                break;
            default:
        }
    }
}
