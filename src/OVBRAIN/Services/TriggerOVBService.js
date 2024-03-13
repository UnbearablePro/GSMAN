class TriggerOVBService extends TriggerService {

    static startCentralizareCycle() {
        this.createRecurringWeeklyTimeTrigger('centralizareCycleTrigger', ScriptApp.WeekDay.MONDAY, 3, 0);
    }

    static stopCentralizareCycle() {
        this.deleteTriggerFromFunction('centralizareCycleTrigger');
    }
    
    static startQuotaCycle() {
        this.createRecurringEveryMinutesTimeTriggered('quoteCycleTrigger', 10);
    }

    static stopQuotaCycle() {
        this.deleteTriggerFromFunction('quoteCycleTrigger');
    }
}