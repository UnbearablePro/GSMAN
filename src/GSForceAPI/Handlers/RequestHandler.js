class RequestHandler {

    static handleGETRequest(e) {
        Logger.log(`🌐 GET Request received: ${e}`);
        const request = new GSRequest(e);

        RequestRouter.route(request);
    }

    static handlePOSTRequest(e) {
        Logger.log(`🌐 POST Request received: ${e}`);
        const request = new GSRequest(e);

        RequestRouter.route(request);
    }
}