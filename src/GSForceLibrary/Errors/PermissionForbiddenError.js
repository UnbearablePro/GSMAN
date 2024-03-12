class PermissionForbiddenError extends Error {

    constructor(message) {
        super(message);
        this.name = "PermissionForbiddenError";
    }
}