//    ###################################################### 
//    ##                                                  ##
//    ##                      Imports                     ##
//    ##                                                  ##
//    ######################################################

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const shell = require('gulp-shell');
const print = require('gulp-print').default;
const countFiles = require('gulp-count');
const gutil = require('gulp-util');
// const debug = require('gulp-debug');
// const filter = require('gulp-filter');
const rename = require('gulp-rename');
const process = require('process');
const fs = require('fs');
const del = require('gulp-clean');
const gulpIf = require('gulp-if');
const insert = require('gulp-insert');
const argv = require('yargs').argv;
const open = require('gulp-open');

//    ###################################################### 
//    ##                                                  ##
//    ##              Configuration & Paths               ##
//    ##                                                  ##
//    ######################################################

const GOOGLE_SHEET_LINK = `https://docs.google.com/spreadsheets/d/1pZz9arl4ISsnNiEu7sfFsg6INHNteFutXEp73XIJfuA/edit#gid=1187718938`;
const GOOGLE_APPSSCRIPT = `https://script.google.com/u/0/home/projects/1sxPaQBU46RjhM8g2mjtqj37A6BSToo_YSZYnlqBdpl2U6Bjjkw_PfrI1/edit`;
const SCRIPTID = `1sxPaQBU46RjhM8g2mjtqj37A6BSToo_YSZYnlqBdpl2U6Bjjkw_PfrI1`;

const OPEN_EXCEL = {
    uri: GOOGLE_SHEET_LINK,
    app: 'chrome',
};

const OPEN_APPSCRIPT = {
    uri: GOOGLE_APPSSCRIPT,
    app: 'chrome',
};

var fileToBuild = 0;
var fileBuilded = 0;

const paths = {
    src: "src",
    dest: "build",
    delDest: "build/**/*",
    claspConfig: ".clasp.json",
}

const ACTIONS = {
    LIBRARY: 'LIBRARY',
    CONFIG: 'CONFIG',
    LAUNCHER: 'LAUNCHER',
    FRONTEND: 'FRONTEND',
    NONE: 'NONE'
}
const externalLibraryPaths = {
    externalLibraryLibrary: [['src/ExternalLibrary/*.js', '!src/**/Configuration/*.js'], `ExternalLibrary.js`, ACTIONS.LIBRARY]
}

const saintTestLibraryPaths = {
    saintTestLibrary: [['src/SaintTestLibrary/**/*.js', '!src/**/Configuration/*.js'], `SaintTestLibrary.js`, ACTIONS.LIBRARY],
    saintTest: ["src/SaintTest.js", `SaintTest.js`, ACTIONS.LAUNCHER]
}

const gsForceLibraryPaths = {
    gsForceLibrary: [["src/GSForceLibrary/**/*.js", '!src/**/Configuration/*.js'], `GSForce.js`, ACTIONS.LIBRARY]
}

const ovbrainPaths = {
    ovbrain: [["src/OVBRAIN/**/*.js", '!src/**/Configuration/*.js'], `OVBRAIN.js`, ACTIONS.LIBRARY]
}

const defaultPaths = {
    configuration: ["src/**/Configuration.js", "Configuration.js", ACTIONS.CONFIG],
    appscriptJson: [`src/appsscript.json`, `appsscript.json`, ACTIONS.NONE],
    playground: ["src/PlayGround.js", `PlayGround.js`, ACTIONS.LAUNCHER]
}

const buildPaths = {
    externalLibraries: [['src/ExternalLibrary/*.js', '!src/**/Configuration/*.js'], `ExternalLibrary.js`, ACTIONS.LIBRARY],
    saintTestLibrary: [['src/SaintTestLibrary/**/*.js', '!src/**/Configuration/*.js'], `SaintTestLibrary.js`, ACTIONS.LIBRARY],
    gsForceLibrary: [["src/GSForceLibrary/**/*.js", '!src/**/Configuration/*.js'], `GSForce.js`, ACTIONS.LIBRARY],
    ovbrain: [["src/OVBRAIN/**/*.js", '!src/**/Configuration/*.js'], `OVBRAIN.js`, ACTIONS.LIBRARY],
    frontEnd: ["src/**/**/*.html", `FrontEnd.html`, ACTIONS.FRONTEND],
    configuration: ["src/**/Configuration.js", "Configuration.js", ACTIONS.CONFIG],
    appscriptJson: [`src/appsscript.json`, `appsscript.json`, ACTIONS.NONE],
    playground: ["src/PlayGround.js", `PlayGround.js`, ACTIONS.LAUNCHER],
    saintTest: ["src/SaintTest.js", `SaintTest.js`, ACTIONS.LAUNCHER]
}

// TODO: Change productionPaths to be uglify
const buildProductionPaths = {
    externalLibraries: [['src/ExternalLibrary/*.js', '!src/**/Configuration/*.js', '!src/**/Tests/*.js'], `ExternalLibrary.js`, ACTIONS.LIBRARY],
    gsForceLibrary: [["src/GSForceLibrary/**/*.js", '!src/**/Configuration/*.js', '!src/**/Tests/*.js'], `GSForce.js`, ACTIONS.LIBRARY],
    ovbrain: [["src/OVBRAIN/**/*.js", '!src/**/Configuration/*.js', '!src/**/Tests/*.js'], `OVBRAIN.js`, ACTIONS.LIBRARY],
    frontEnd: ["src/**/**/*.html", `FrontEnd.html`, ACTIONS.FRONTEND],
    configuration: ["src/**/Configuration.js", "Configuration.js", ACTIONS.CONFIG],
    appscriptJson: [`src/appsscript.json`, `appsscript.json`, ACTIONS.NONE],
    playground: ["src/PlayGround.js", `PlayGround.js`, ACTIONS.LAUNCHER],

}

//    ###################################################### 
//    ##                                                  ##
//    ##                     GULP TASKS                   ##
//    ##                                                  ##
//    ######################################################


gulp.task('default', async function () {
    gutil.log(cyan(GULPBANNER), magenta(GULPHELP));
});

// TODO: Build help after finish
gulp.task('help', async function () {
    console.log(GULPHELP);
    console.log(GULPCOMMANDS);
});

gulp.task('build', build);
gulp.task('b', build)

gulp.task('delete', cleanBuild);
gulp.task('d', cleanBuild);

gulp.task('clasp-push', claspPush);
gulp.task('p', claspPush);

gulp.task('watch',  watch);

gulp.task('links', displayLinks);

gulp.task('open', openLinks);
gulp.task('o', openLinks);

gulp.task('test', runTests);

gulp.task('toBuild', (done) => {
    changeClaspRootDir(paths.dest);
    done();
});

gulp.task('toSrc', (done) => {
    changeClaspRootDir(paths.src);
    done();
});

//    ###################################################### 
//    ##                                                  ##
//    ##                    Functionality                 ##
//    ##                                                  ##
//    ######################################################

async function build() {

    let flagIfToBuildAll = true;
    // @ts-ignore
    if (argv.external) {flagIfToBuildAll = false; buildOf(externalLibraryPaths)};
    // @ts-ignore
    if (argv.saint) {flagIfToBuildAll = false; buildOf(externalLibraryPaths)};
    // @ts-ignore
    if (argv.ovbrain) {flagIfToBuildAll = false; buildOf(externalLibraryPaths)};
    // @ts-ignore
    if (argv.gsforce) {flagIfToBuildAll = false; buildOf(externalLibraryPaths)};
    // @ts-ignore
    if (argv.production) {flagIfToBuildAll = false; buildOf(externalLibraryPaths)};

    flagIfToBuildAll ? buildOf(buildPaths) : buildOf(defaultPaths);
}

async function buildOf(buildConfig) {

    //TODO: Make it simple
    let count = -1;
    Object.keys(buildConfig).forEach(key => {
        fileToBuild = fileToBuild + 1;
        const [path, newName, action] = buildConfig[key];
        if (count < 6) {
            count = count + 1;
        }
        switch (action) {
            case ACTIONS.LIBRARY: buildUglified(path, newName, count.toString()); break;
            case ACTIONS.NONE: buildNone(path, newName); break;
            case ACTIONS.CONFIG: buildConcat(path, newName, '8'); break;
            case ACTIONS.LAUNCHER: buildNone(path, newName, '9'); break;
            case ACTIONS.FRONTEND: buildFE(path, newName); break;
            default:
                gutil.log(yellow(`No action provided for ${newName} building with path: `) + `${path}`);
                buildNone(path, newName);
                break;
        }
    });
}

//TODO: Combine all types of builds
async function buildUglified(path, newName, count = '0') {
    let nrOfFiles = 0;
    gulp.src(path)
        .on('data', function (file) {
            nrOfFiles += 1;
            // console.log('File Name:', file.relative);
        })
        .pipe(concat(count + newName))
        .pipe(uglify())
        .pipe(gulp.dest(paths.dest))
        .on('end', function () {
            if (fileBuilded == 0) {
                gutil.log(`===================== ${blue(`Building Started`)} =====================`)
            }
            fileBuilded = fileBuilded + 1;
            gutil.log(`${magenta(`${fileBuilded}/${fileToBuild}`)} ${cyan(`${newName}`)} build complete! Files builded: ${magenta(`${nrOfFiles}`)}`);
        });
}

async function buildNone(path, newName = 'NoName', count = '') {
    let nrOfFiles = 0;
    gulp.src(path)
        .on('data', function (data) {
            nrOfFiles += 1;
        })
        .pipe(rename(count + newName))
        .pipe(gulp.dest(paths.dest))
        .on('end', function () {
            if (fileBuilded == 0) {
                gutil.log(`===================== ${blue(`Building started`)} =====================`)
            }
            fileBuilded += 1;
            gutil.log(`${magenta(`${fileBuilded}/${fileToBuild}`)} ${cyan(`${newName}`)} build complete! Files builded: ${magenta(`${nrOfFiles}`)}`);
        });
}

async function buildFE(path, newName = 'NoName') {
    let nrOfFiles = 0;
    gulp.src(path)
        .on('data', function (data) {
            nrOfFiles += 1;
        })
        .pipe(rename({ dirname: '' }))
        .pipe(gulp.dest(paths.dest))
        .on('end', function () {
            if (fileBuilded == 0) {
                gutil.log(`===================== ${blue(`Building started`)} =====================`)
            }
            fileBuilded += 1;
            gutil.log(`${magenta(`${fileBuilded}/${fileToBuild}`)} ${cyan(`${newName}`)} build complete! Files builded: ${magenta(`${nrOfFiles}`)}`);
        });
}

async function buildConcat(path, newName = 'NoName', count = '') {
    let nrOfFiles = 0;
    gulp.src(path)
        .on('data', function (data) {
            nrOfFiles += 1;
        })
        .pipe(insert.transform(function (contents, file) {
            //TODO: Make it better
            // Get the path segments
            const pathSegments = file.relative.split('\\');
            // Get the second folder name
            const secondFolderName = pathSegments.length > 1 ? pathSegments[0] : '';
            // Prepend a comment line with the second folder name
            return `/* =========================== ${secondFolderName} Configuration =========================== */\n${contents}`;
        }))
        .pipe(concat(count + newName))
        .pipe(gulp.dest(paths.dest))
        .on('end', function () {
            if (fileBuilded == 0) {
                gutil.log(`===================== ${blue(`Building started`)} =====================`)
            }
            fileBuilded = fileBuilded + 1;
            gutil.log(`${magenta(`${fileBuilded}/${fileToBuild}`)} ${cyan(`${newName}`)} build complete! Files builded: ${magenta(`${nrOfFiles}`)}`);
        });
}

async function cleanBuild() {
    let nrOfFiles = 0;
    gulp.src(paths.delDest, { read: false, allowEmpty: false })
        .on('data', () => nrOfFiles += 1)
        .pipe(del())
        .on('finish', function () {
            gutil.log(`===================== ${blue(`Cleaning build folder started`)} =====================`)
            nrOfFiles ? gutil.log(`Deleted ${magenta(`${nrOfFiles}`)} files successfully.`) :
                gutil.log(yellow(`Deletion failed cause folder is empty.`));
        });
}

async function watch() {
    gutil.log(`===================== ${blue(`Watch changes on src and build`)} =====================`)
    gulp.watch(paths.src, gulp.series('b'));
    gulp.watch(paths.dest, gulp.series('p'));
}

async function claspPush() {
    gutil.log(`===================== ${blue(`Clasp Push starting`)} =====================`);
    shell.task(['clasp push']).apply();
}

async function changeClaspRootDir(rootDirNewValue) {
    gutil.log(`===================== ${blue(`Changing CLASP rootDir to ${rootDirNewValue} started`)} =====================`);
    // Read the clasp.json file
    //@ts-ignore
    let claspConfigContent = JSON.parse(fs.readFileSync(paths.claspConfig));
    // Change clasp config content rootDir to new value
    claspConfigContent.rootDir = rootDirNewValue;
    // Overwrite the modified clasp.json file
    fs.writeFileSync(paths.claspConfig, JSON.stringify(claspConfigContent, null, 2));
    console.log(`Changed CLASP rootDir to ${magenta(rootDirNewValue)} successfully!`);
}

async function displayLinks() {
    gutil.log(`===================== ${blue(`Links`)} =====================`);
    gutil.log(`${green(`Google Sheet:`)} ${GOOGLE_SHEET_LINK}`);
    gutil.log(`${green(`Apps Script: `)} ${GOOGLE_APPSSCRIPT}`);
}

async function openLinks(target, ) {
    openLink(OPEN_APPSCRIPT);
    openLink(OPEN_EXCEL);
}

async function openLink(target) {
    gulp.src('./')
    .pipe(open(target));
}

async function runTests() {
    //TODO: implement this to run tests
}

//    ###################################################### 
//    ##                                                  ##
//    ##                    GULP UTILS                    ##
//    ##                                                  ##
//    ######################################################

const GULPBANNER =
    `
======================================================================================================
 #####  #     # #       ######     ###  #####     ######  #     # #     # #     # ### #     #  #####  
#     # #     # #       #     #     #  #     #    #     # #     # ##    # ##    #  #  ##    # #     # 
#       #     # #       #     #     #  #          #     # #     # # #   # # #   #  #  # #   # #       
#  #### #     # #       ######      #   #####     ######  #     # #  #  # #  #  #  #  #  #  # #  #### 
#     # #     # #       #           #        #    #   #   #     # #   # # #   # #  #  #   # # #     # 
#     # #     # #       #           #  #     #    #    #  #     # #    ## #    ##  #  #    ## #     # 
 #####   #####  ####### #          ###  #####     #     #  #####  #     # #     # ### #     #  #####  
======================================================================================================                                                                                                   
`;

const GULPHELP =
    `
gulp help - show list of commands
`

const GULPCOMMANDS =
    `
  ===  GULP All Commands ===

gulp default - Ping if the gulp is running
gulp b - Build and prepare the application to be delivered ogulp
 the Google app script
gulp clasp-to-build - change rootDir from clasp config file to build folder
gulp clasp-push - push the build product to the google script app
gulp clasp-to-src - change rootDir from clasp configuration file to src folder
gulp bp - Build, prepare and push the application to google acript aps

  ==========================
`;

function green(message) {
    return gutil.colors.green(message);
}

function red(message) {
    return gutil.colors.red(message);
}

function magenta(message) {
    return gutil.colors.magenta(message);
}

function cyan(message) {
    return gutil.colors.cyan(message);
}

function blue(message) {
    return gutil.colors.blue(message);
}

function yellow(message) {
    return gutil.colors.yellow(message);
}