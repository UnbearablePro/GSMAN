const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const shell = require('gulp-shell');
const print = require('gulp-print').default;
const countFiles = require('gulp-count');
// const debug = require('gulp-debug');
// const filter = require('gulp-filter');
const rename = require('gulp-rename');
const process = require('process');
const fs = require('fs');
// const del = require('del');


/* PATHS */
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

gulp.task('default', async function () {
    console.log(GULPBANNER);
    console.log(GULPHELP);
});

gulp.task('help', async function () {
    console.log(GULPHELP);
    console.log(GULPCOMMANDS);
}); 

gulp.task('b', async function () {
    // deleteBuildContent();
    buildExternalLibraries();
    buildSaintTestLibrary();
    buildGsForceLibrary();
    // buildOVBRAIN();
    // buildFrontEnd();
    buildPlayGround();
    buildAppsscriptJson();
});

// gulp.task('bwt', async function () { 
//     //TODO: In progess
//     buildExternalLibraries();
//     buildGsForceLibraryWithoutTests();
//     buildOVBRAINWithoutTests();
//     buildFrontEndWithoutTests();
//     buildAppscriptJson();
// });

gulp.task('clasp-to-build', (done) => {
    changeClaspRootDir(buildPath);
    done();
});

gulp.task('clasp-to-src', (done) => {
    changeClaspRootDir(src);
    done();
});

gulp.task('clasp-push', shell.task(['clasp push']));

gulp.task('bpwatch', function () { // TODO: Fixme
    gulp.watch(`src/index.html`, gulp.series('bp'));
})

gulp.task('displayLinks', async function() {
    console.log(`Google Sheet: https://docs.google.com/spreadsheets/d/1pZz9arl4ISsnNiEu7sfFsg6INHNteFutXEp73XIJfuA/edit#gid=1187718938`);
    console.log(`Apps Script: https://script.google.com/u/0/home/projects/1sxPaQBU46RjhM8g2mjtqj37A6BSToo_YSZYnlqBdpl2U6Bjjkw_PfrI1/edit `);
});

gulp.task('bp', gulp.series('b', 'clasp-to-build', 'clasp-push', 'clasp-to-src', 'displayLinks'));

// function deleteBuildContent() {
//     return del("build/**/*");
// }

function buildExternalLibraries() {
    gulp.src(externalLibrariesPath)
        .pipe(countFiles('External Libraries files builded: ##'))
        .pipe(concat('1ExternalLibraries.js'))
        .pipe(uglify())
        .pipe(gulp.dest(buildPath));
}

function buildSaintTestLibrary() {
    gulp.src(saintTestLibraryPath)
        .pipe(countFiles('SaintTest Library files builded: ##'))
        .pipe(concat('2SaintTestLibrary.js'))
        .pipe(uglify())
        .pipe(gulp.dest(buildPath));
}

function buildGsForceLibrary() {
    gulp.src(gsForceLibraryPath)
        .pipe(countFiles('GSForce Library files builded: ##'))
        .pipe(concat('3GsForce.js'))
        .pipe(uglify())
        .pipe(gulp.dest(buildPath));
}

function buildOVBRAIN() {
    gulp.src(ovbrainPath)
        .pipe(countFiles('OVBRAIN files builded: ##'))
        .pipe(concat('4OVBRAIN.js'))
        .pipe(uglify())
        .pipe(gulp.dest(buildPath))
}

function buildFrontEnd() {
    gulp.src(frontEndPath)
        .pipe(countFiles('Front end files builded: ##'))
        .pipe(gulp.dest(buildPath));
}

function buildAppsscriptJson() {
    gulp.src(appscriptJsonPath)
        .pipe(countFiles('Apps script files builded: ##'))
        .pipe(gulp.dest(buildPath));
}

function buildPlayGround() {
    gulp.src(playgroundPath)
        .pipe(countFiles('Play ground files builded: ##'))
        .pipe(gulp.dest(buildPath));

}

function changeClaspRootDir(rootDirNewValue) {
    // Read the clasp.json file
    let claspConfigContent = JSON.parse(fs.readFileSync(claspConfigPath));

    // Change clasp config content rootDir to new value
    claspConfigContent.rootDir = rootDirNewValue;

    // Overwrite the modified clasp.json file
    fs.writeFileSync(claspConfigPath, JSON.stringify(claspConfigContent, null, 2));

    console.log(`Changed CLASP rootDir to ${rootDirNewValue} successfully.`)
}

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