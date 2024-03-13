class FilteringOVBService extends FilterService {

    static openFilteringContacteByStatus() {
        const [httpName, title, width, height] = HtmlFiles.CONTACTE_STATUS_FILTERS;
        //@ts-expect-error
        Displayer.openHtmlPopup(httpName, title, width, height);
    }

}






