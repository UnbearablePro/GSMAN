class Permisioner {

    static requireAdminPermsission(errorMessage) {
        if (!Admin.isAdminModeOn_()) {
            throw new PermissionForbiddenError(errorMessage);
        }
    }

}