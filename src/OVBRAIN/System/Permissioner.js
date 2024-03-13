class Permisioner {

    static requireAdminPermsission(errorMessage) {
        if (!Admin.isAdminModeOn_()) {
            throw new PermissionForbiddenError(errorMessage);
        }
    }

    static requireAdminPermsissionWithNoError(errorMessage) {
        return Admin.isAdminModeOn_();
    }

}