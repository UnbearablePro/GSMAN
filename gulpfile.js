

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
const yargs = require('yargs');
const open = require('gulp-open');

// const del = require('del');
const clean = require('gulp-clean');


//    ###################################################### 
//    ##                                                  ##
//    ##                       Paths                      ##
//    ##                                                  ##
//    ######################################################

const src = "src";
const externalLibrariesPath = src + '/ExternalLibrary/*.js';
const saintTestLibraryPath = src + '/SaintTestLibrary/**/*.js';
const buildPath = "build";
const gsForceLibraryPath = src + "/GSForceLibrary/**/*.js";
const ovbrainPath = src + "/OVBRAIN/**/*.js";
const frontEndPath = src + "/**/*.html";
const appscriptJsonPath = src + "/appsscript.json";
const claspConfigPath = ".clasp.json";
const playgroundPath = [src + "/PlayGround.js", src + "/SaintTest.js"];

//    ###################################################### 
//    ##                                                  ##
//    ##                     GULP TASKS                   ##
//    ##                                                  ##
//    ######################################################


gulp.task('default', async function () {
    gutil.log(cyan(GULP_BANNER), magenta(GULP_HELP));
});

gulp.task('help', async function () {
    console.log(GULP_HELP);
    console.log(GULP_COMMANDS);
});

gulp.task('clean', done => {
    deleteBuildContent();
    done();
});

gulp.task('c', async function () {
    deleteBuildContent();
});

gulp.task('build', done => {
    buildApplication(done);
});

gulp.task('b', done => {
    buildApplication(done);
});

gulp.task('toBuild', (done) => {
    changeClaspRootDir(buildPath);
    done();
});

gulp.task('toSrc', (done) => {
    changeClaspRootDir(src);
    done();
});

gulp.task('push', shell.task(['clasp push']));

gulp.task('p', shell.task(['clasp push']));

gulp.task('links', async function () {
    gutil.log(`${blue(`===== Links =====`)}`);
    gutil.log(`${green(`Google Sheet:`)} ${GOOGLE_SHEET_LINK}`);
    gutil.log(`${green(`Apps Script: `)} ${GOOGLE_APPSSCRIPT}`);
});

gulp.task('o', async function () {
    gulp.src('./')
    .pipe(open(OPEN_APPSCRIPT));
});
gulp.task('oe', async function () {
    gulp.src('./')
    .pipe(open(OPEN_EXCEL));
});

//    ###################################################### 
//    ##                                                  ##
//    ##                  GULP TASK CHAINS                ##
//    ##                                                  ##
//    ######################################################

gulp.task('bp', gulp.series('clean', 'build'));

//    ###################################################### 
//    ##                                                  ##
//    ##                    Functionality                 ##
//    ##                                                  ##
//    ######################################################

function buildApplication(done) {
    return gulp.series(
        buildExternalLibraries,
        // buildSaintTestLibrary,
        buildGsForceLibrary,
        // buildOVBRAIN,
        // buildFrontEnd,
        buildPlayGround,
        buildAppsscriptJson
    )(done);
}

function deleteBuildContent(done) {
    gulp.src('build/*', { read: false, allowEmpty: true })
        .pipe(countFiles('Deleted files ##'))
        .pipe(clean());
}

function buildExternalLibraries(done) {
    gulp.src(externalLibrariesPath)
        .pipe(countFiles('External Libraries files builded: ##'))
        .pipe(concat('1ExternalLibraries.js'))
        .pipe(uglify())
        .pipe(gulp.dest(buildPath));
    done();
}

function buildSaintTestLibrary(done) {
    gulp.src(saintTestLibraryPath)
        .pipe(countFiles('SaintTest Library files builded: ##'))
        .pipe(concat('2SaintTestLibrary.js'))
        .pipe(uglify())
        .pipe(gulp.dest(buildPath));
    done();
}

function buildGsForceLibrary(done) {
    gulp.src(gsForceLibraryPath)
        .pipe(countFiles('GSForce Library files builded: ##'))
        .pipe(concat('3GsForce.js'))
        .pipe(uglify())
        .pipe(gulp.dest(buildPath));
    done();
}

function buildOVBRAIN(done) {
    gulp.src(ovbrainPath)
        .pipe(countFiles('OVBRAIN files builded: ##'))
        .pipe(concat('4OVBRAIN.js'))
        .pipe(uglify())
        .pipe(gulp.dest(buildPath))
    done();
}

function buildFrontEnd(done) {
    gulp.src(frontEndPath)
        .pipe(countFiles('Front end files builded: ##'))
        .pipe(gulp.dest(buildPath));
    done();
}

function buildAppsscriptJson(done) {
    gulp.src(appscriptJsonPath)
        .pipe(countFiles('Apps script files builded: ##'))
        .pipe(gulp.dest(buildPath));
    done();
}

function buildPlayGround(done) {
    gulp.src(playgroundPath)
        .pipe(countFiles('Play ground files builded: ##'))
        .pipe(gulp.dest(buildPath));
    done();
}

function changeClaspRootDir(rootDirNewValue) {
    // Read the clasp.json file
    //@ts-ignore
    let claspConfigContent = JSON.parse(fs.readFileSync(claspConfigPath));

    // Change clasp config content rootDir to new value
    claspConfigContent.rootDir = rootDirNewValue;

    // Overwrite the modified clasp.json file
    fs.writeFileSync(claspConfigPath, JSON.stringify(claspConfigContent, null, 2));

    console.log(`Changed CLASP rootDir to ${rootDirNewValue} successfully.`)
}

const GULP_BANNER =
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

const GULP_HELP =
    `
gulp help - show list of commands
`

const GULP_COMMANDS =
    `
  ===  GULP All Commands ===
gulp default - Ping if the gulp is running
gulp b - Build and prepare the application to be delivered ogulp
 the Google app script
gulp clasp-to-build - change rootDir from clasp config file to build folder
gulp clasp-push - push the build product to the google script app
gulp clasp-to-src - change rootDir from clasp configuration file to src folder
gulp bp - Build, prepare and push the application to google acript aps
`;

const GULP_SERIES =
    `

gulp default - Ping if the gulp is running
gulp b - Build and prepare the application to be delivered ogulp
 the Google app script
gulp clasp-to-build - change rootDir from clasp config file to build folder
gulp clasp-push - push the build product to the google script app
gulp clasp-to-src - change rootDir from clasp configuration file to src folder
gulp bp - Build, prepare and push the application to google acript aps
  ==========================
`;



const GOOGLE_SHEET_LINK = `https://docs.google.com/spreadsheets/d/1pZz9arl4ISsnNiEu7sfFsg6INHNteFutXEp73XIJfuA/edit#gid=1187718938`;
const GOOGLE_APPSSCRIPT = `https://script.google.com/u/0/home/projects/1sxPaQBU46RjhM8g2mjtqj37A6BSToo_YSZYnlqBdpl2U6Bjjkw_PfrI1/edit`;
const SCRIPID = `1sxPaQBU46RjhM8g2mjtqj37A6BSToo_YSZYnlqBdpl2U6Bjjkw_PfrI1`;

const OPEN_EXCEL = {
    uri: GOOGLE_SHEET_LINK,
    app: 'chrome',
};

const OPEN_APPSCRIPT = {
    uri: GOOGLE_APPSSCRIPT,
    app: 'chrome',
};

//    ###################################################### 
//    ##                                                  ##
//    ##                    GULP UTILS                    ##
//    ##                                                  ##
//    ######################################################

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