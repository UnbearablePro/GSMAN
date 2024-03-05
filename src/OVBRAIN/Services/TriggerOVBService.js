class TriggerOVBService extends TriggerService {
    
    static startQuotaCycle() {
        this.createRecurringEveryMinutesTimeTriggered('quoteCycleTrigger', 10);
    }

    static stopQuotaCycle() {
        this.deleteTriggerFromFunction('quoteCycleTrigger');
    }
}