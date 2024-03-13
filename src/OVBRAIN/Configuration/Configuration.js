//@ts-nocheck


luxon.Settings.defaultLocale = "ro";
//# sourceMappingURL=luxon.js.map


Developer.mail = "alexandruiluca71@gmail.com";
Developer.phone = "0752 589 038";

ErrorHandlerOVB.contactErrorMessage = `\n\n In cazul unei erori grave ma puteti contacta: \n Telefon: ${Developer.phone} \n Email: ${Developer.mail}. \n\n Daca doriti sa imi lasa-ti un mesaj in privinta erori apasati ~DA~`;

luxon.Settings.defaultLocale = "ro";
//# sourceMappingURL=luxon.js.map

const Paths = {
    CHECKHEALTH : "/checkhealth",
    CENTRALIZARE : "api/centralizare",
    CONSULTANT : "api/consultant"
}
const ExecutionPath = [
    [Paths.CENTRALIZARE, 'getCentralizareDataAPITrigger', [RequiredPermission.CENTRALIZARE_VIEW]],
    [Paths.CHECKHEALTH, 'checkHealth', []],
]


