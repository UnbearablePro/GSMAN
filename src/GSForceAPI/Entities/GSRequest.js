class GSRequest {

    constructor(queryString, parameters, pathInfo, contextPath, contentLength, postData) {
        this.queryString = queryString;
        this.parameters = parameters;
        this.pathInfo = pathInfo;
        this.contextPath = contextPath;
        this.contentLength = contentLength;
        this.postData = postData;
    }

    static of(e) {
        return new GSRequest(e.queryString, e.parameters, e.pathInfo, e.postData)
    } 

}