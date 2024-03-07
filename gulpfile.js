/**
 * @version 1.0.0
 */

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
// const gulpSequence = require('gulp-sequence');

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
    /** BUILD MULTIPLE FILES/CONCAT */
    CONCAT: 'CONCAT',
    /** BUILD MULTIPLE FILES/CONCAT AND UGLIFY THEM */
    UGLIFY: 'UGLIFY',
    /** BUILD MULTIPLE FILES WITHOUT COUNTING */
    SIMPLE: 'SIMPLE',
    /** BUILD MULTIPLE FILES WITH COUNTING */
    MULTIPLE: 'MULTIPLE',
    /** BUILD MULTIPLE FILES/CONCAT AND UGLIFY THEM */
    LIBRARY: 'LIBRARY',
    /** BUILD ONE FILE */
    LAUNCHER: 'LAUNCHER',
    FE: 'FE', // TODO: Implement a custom for FE
    /** BUILD MULTIPLE FILES/CONCAT AND SEPARATE THEM BY FATHER FOLDER NAME */
    CONFIG: 'CONFIG',
}


const TEST_PATH = 'src/**/Tests/*.js';
const CONFIG_PATH = 'src/**/Configuration/*.js'
const NO_TEST_PATH = '!src/**/Tests/*.js';
const NO_CONFIG_PATH = '!src/**/Configuration/*.js';
const NO_SAINT_PATH = '!src/SaintTestLibrary/**/*.js';
const FE_PATH = 'src/**/*.html';

const ALLJS_PATH = ['src/**/*.js', NO_CONFIG_PATH, NO_TEST_PATH];
const ALLJS_PRODUCTION_PATH = ['src/!(SaintTestLibrary)/**/*.js', NO_CONFIG_PATH, NO_TEST_PATH];

const EXTERNALLIBRARY_PATH = ['src/ExternalLibrary/**/*.js', NO_CONFIG_PATH, NO_TEST_PATH];
const SAINT_PATH = ['src/SaintTestLibrary/**/*.js', NO_CONFIG_PATH, NO_TEST_PATH];
const GSFORCE_PATH = ['src/GSForceLibrary/**/*.js', NO_CONFIG_PATH, NO_TEST_PATH];
const OVBRAIN_PATH = ['src/OVBRAIN/**/*.js', NO_CONFIG_PATH, NO_TEST_PATH];



const PLAYGROUND_LAUNCHER_PATH = [`src/PlayGround.js`]
const SAINT_LAUNCHER_PATH = [`src/SaintTest.js`];
const APPSSCRIPT_PATH = [`src/appsscript.json`];

const externalLibraryBuildConfig = {
    externalLibrary: [EXTERNALLIBRARY_PATH, `ExternalLibrary.js`, ACTIONS.LIBRARY],
    appscriptJson: [APPSSCRIPT_PATH, `appsscript.json`, ACTIONS.SIMPLE],
    playground: [PLAYGROUND_LAUNCHER_PATH, `PlayGround.js`, ACTIONS.LAUNCHER]
}

// const saintTestLibraryBuildConfig = {
//     saintTestLibrary: [SAINT_PATH, `SaintTestLibrary.js`, ACTIONS.MULTIPLE],
//     saintTest: [SAINT_LAUNCHER_PATH, `SaintTest.js`, ACTIONS.LAUNCHER],
//     saintTests: [SAINT_TEST_PATH, ``, ACTIONS.MULTIPLE],
//     appscriptJson: [APPSSCRIPT_PATH, `appsscript.json`, ACTIONS.SIMPLE],
//     playground: [PLAYGROUND_LAUNCHER_PATH, `PlayGround.js`, ACTIONS.LAUNCHER],
//     configuration: [SAINT_CONFIGURATION_PATH, "Configuration.js", ACTIONS.CONFIG]
// }

// const gsForceLibraryBuildConfig = {
//     externalLibraryLibrary: [EXTERNALLIBRARY_PATH, `ExternalLibrary.js`, ACTIONS.LIBRARY],
//     saintTestLibrary: [SAINT_PATH, `SaintTestLibrary.js`, ACTIONS.LIBRARY],
//     gsForceLibrary: [GSFORCE_PATH, `GSForce.js`, ACTIONS.MULTIPLE],

//     appscriptJson: [APPSSCRIPT_PATH, `appsscript.json`, ACTIONS.SIMPLE],
//     playground: [PLAYGROUND_LAUNCHER_PATH, `PlayGround.js`, ACTIONS.LAUNCHER],
//     saintTest: [SAINT_LAUNCHER_PATH, `SaintTest.js`, ACTIONS.LAUNCHER],

//     configuration: [SAINT_CONFIGURATION_PATH, GSFORCE_CONFIGURATION_PATH, "Configuration.js", ACTIONS.CONFIG],
//     tests: [GSFORCE_TEST_PATH, 'Test.js', ACTIONS.MULTIPLE]
// }

const ovbrainBuildConfig = {
    gsForceLibrary: [["src/GSForceLibrary/**/*.js", '!src/**/Configuration/*.js'], `GSForce.js`, ACTIONS.CONCAT],
    externalLibraryLibrary: [['src/ExternalLibrary/*.js', '!src/**/Configuration/*.js'], `ExternalLibrary.js`, ACTIONS.CONCAT],
    ovbrain: [["src/OVBRAIN/**/*.js", '!src/**/Configuration/*.js'], `OVBRAIN.js`, ACTIONS.SIMPLE]
}

const buildDevelopment = {
    externalLibraries: [EXTERNALLIBRARY_PATH, `ExternalLibrary.js`, ACTIONS.CONCAT],
    saintTestLibrary: [SAINT_PATH, `SaintTestLibrary.js`, ACTIONS.CONCAT],
    gsForceLibrary: [GSFORCE_PATH, `GSForce.js`, ACTIONS.CONCAT],
    ovbrain: [OVBRAIN_PATH, `OVBRAIN.js`, ACTIONS.CONCAT],
    frontEnd: [FE_PATH, `FrontEnd.html`, ACTIONS.FE],
    configuration: [CONFIG_PATH, "Configuration.js", ACTIONS.CONFIG],
    appscriptJson: [APPSSCRIPT_PATH, `appsscript.json`, ACTIONS.SIMPLE],
    playground: [PLAYGROUND_LAUNCHER_PATH, `PlayGround.js`, ACTIONS.LAUNCHER],
    saintTest: [SAINT_LAUNCHER_PATH, `SaintTest.js`, ACTIONS.LAUNCHER]
}

const buildProductionBuildPath = {
    application : [ALLJS_PRODUCTION_PATH, `App.js`, ACTIONS.LIBRARY],
    configuration: [[CONFIG_PATH, NO_SAINT_PATH], "Configuration.js", ACTIONS.CONFIG],
    playground: [PLAYGROUND_LAUNCHER_PATH, `PlayGround.js`, ACTIONS.LAUNCHER],
    appscriptJson: [APPSSCRIPT_PATH, `appsscript.json`, ACTIONS.SIMPLE]
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

gulp.task('push', claspPush);
gulp.task('p', claspPush);

gulp.task('watch', watch);

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

gulp.task('dbp', deleteBuildPush);

//    ###################################################### 
//    ##                                                  ##
//    ##                    Functionality                 ##
//    ##                                                  ##
//    ######################################################

async function build() {
    let flagIfToBuildAll = true;

    // @ts-ignore
    if (argv.external) { flagIfToBuildAll = false; buildOf(externalLibraryBuildConfig); };
    // @ts-ignore
    if (argv.saint) { flagIfToBuildAll = false; buildOf(saintTestLibraryBuildConfig); return};
    // @ts-ignore
    if (argv.ovbrain) { flagIfToBuildAll = false; buildOf(ovbrainPaths); };
    // @ts-ignore
    if (argv.gsforce) { flagIfToBuildAll = false; buildOf(gsForceLibraryBuildConfig); };
    // @ts-ignore
    if (argv.production) { flagIfToBuildAll = false; buildOf(buildProductionBuildPath); };
    // @ts-ignore
    if (argv.default) { flagIfToBuildAll = false; buildOf(defaultPaths); };

    flagIfToBuildAll ? buildOf(buildDevelopment) : buildDevelopment;
}

async function buildOf(buildConfig) {

    //TODO: Make it simple
    let count = 8;
    Object.keys(buildConfig).forEach(key => {
        fileToBuild = fileToBuild + 1;
        const [path, newName, action] = buildConfig[key];
        if (count >= 3) {
            count = count - 1;
        }

        switch (action) {
            case ACTIONS.CONCAT: buildConcat(path, newName, count.toString()); break;
            case ACTIONS.UGLIFY: buildUglify(path, newName, count.toString()); break;
            case ACTIONS.MULTIPLE: buildSimple(path, newName, count.toString()); break;
            case ACTIONS.SIMPLE: buildSimple(path, newName); break;
            case ACTIONS.LAUNCHER: buildSimple(path, newName, '0'); break;
            case ACTIONS.LIBRARY: buildUglyCat(path, newName, count.toString()); break;
            case ACTIONS.CONFIG: buildConfiguration(path, newName); break;
            case ACTIONS.FE: buildSimple(path, newName); break;
            default:
                gutil.log(yellow(`No action provided for ${newName} building with path: `) + `${path}`);
                buildSimple(path, newName);
                break;
        }
    });
}

//TODO: Combine all types of builds
async function buildUglyCat(path, newName, count = '') {
    let nrOfFiles = 0;
    gulp.src(path)
        .on('data', function (file) {
            nrOfFiles += 1;
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

function buildConcat(path, newName = 'NoName', count = '') {
    let nrOfFiles = 0;
    gulp.src(path)
        .on('data', function (file) {
            nrOfFiles += 1;
        })
        .pipe(concat(count + newName))
        .pipe(gulp.dest(paths.dest))
        .on('end', function () {
            if (fileBuilded == 0) {
                gutil.log(`===================== ${blue(`Building started`)} =====================`)
            }
            fileBuilded += 1;
            gutil.log(`${magenta(`${fileBuilded}/${fileToBuild}`)} ${cyan(`${newName}`)} build complete! Files builded: ${magenta(`${nrOfFiles}`)}`);
        });
}

async function buildUglify(path, newName, count = '') {
    let nrOfFiles = 0;
    gulp.src(path)
        .on('data', function (file) {
            nrOfFiles += 1;
            // console.log('File Name:', file.relative);
        })
        .pipe(rename({ dirname: '' }))
        .pipe(rename(count + newName))
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

async function buildSimple(path, newName = 'NoName', count = '') {
    let nrOfFiles = 0;
    gulp.src(path)
        .on('data', function (data) {
            nrOfFiles += 1;
        })
        .pipe(rename({ dirname: '' }))
        .pipe(rename(function(path) {
            path.basename = count + path.basename;
        }))
        .pipe(gulp.dest(paths.dest))
        .on('end', function () {
            if (fileBuilded == 0) {
                gutil.log(`===================== ${blue(`Building started`)} =====================`)
            }
            fileBuilded += 1;
            gutil.log(`${magenta(`${fileBuilded}/${fileToBuild}`)} ${cyan(`${newName}`)} build complete! Files builded: ${magenta(`${nrOfFiles}`)}`);
        });
}

async function buildFE(path, newName = 'NoName') { //TODO: WYP
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

async function buildConfiguration(path, newName = 'NoName', count = '') {
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
        .pipe(del())
        .pipe(del())
        .pipe(del())
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
    gutil.log(`Changed CLASP rootDir to ${magenta(rootDirNewValue)} successfully!`);
}

async function displayLinks() {
    gutil.log(`===================== ${blue(`Links`)} =====================`);
    gutil.log(`${green(`Google Sheet:`)} ${GOOGLE_SHEET_LINK}`);
    gutil.log(`${green(`Apps Script: `)} ${GOOGLE_APPSSCRIPT}`);
}

async function openLinks(target,) {
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

async function deleteBuildPush() {
    cleanBuild();
    await new Promise(resolve => setTimeout(resolve, 3000));
    build();
    changeClaspRootDir(paths.dest);
    await new Promise(resolve => setTimeout(resolve, 2000));
    claspPush();
    await new Promise(resolve => setTimeout(resolve, 16000));
    displayLinks();
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