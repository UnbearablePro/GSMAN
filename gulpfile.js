const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const shell = require('gulp-shell');
const print = require('gulp-print').default;
// const debug = require('gulp-debug');
// const filter = require('gulp-filter');
const rename = require('gulp-rename');
const process = require('process');
const fs = require('fs');


/* PATHS */
const src = "src";
const externalLibrariesPath = src + '/ExternalLibrary/*.js';
const buildPath = "build";
const gsForceLibraryPath = src + "/GSForceLibrary/**/*.js";
const ovbrainPath = [src + "/OVBRAIN/**/*.js", src + "/OVBRAIN/**/**/*.js"];
const frontEndPath = src + "/**/*.html";
const appscriptJsonPath = src + "appscript.json";
const claspConfigPath = '.clasp.json';

gulp.task('default', async function () {
    console.log(GULPBANNER);
    console.log(GULPHELP);
});

gulp.task('help', async function () {
    console.log(GULPHELP);
    console.log(GULPCOMMANDS);
});

gulp.task('b', async function () {
    buildExternalLibraries();
    buildGsForceLibrary();
    buildOVBRAIN();
    buildFrontEnd();
    buildAppscriptJson();
});

gulp.task('clasp-to-build', (done) => {
    changeClaspRootDir(build);
    done();
});

gulp.task('clasp-to-src', (done) => {
    changeClaspRootDir(src);
    done();
});

gulp.task('clasp-push', shell.task(['clasp push']));

gulp.task('bpwatch', function() { // TODO: Fixme
    gulp.watch(`src/index.html`, gulp.series('bp'));
})

gulp.task('bp', gulp.series('b', 'clasp-to-build', 'clasp-push', 'clasp-to-src'));

function buildExternalLibraries() {
    gulp.src(externalLibrariesPath)
        // .pipe(debug({title : " -- Building External Libraries... "}))
        .pipe(concat('1ExternalLibraries.js'))
        .pipe(uglify())
        .pipe(gulp.dest(buildPath))
        .on('end', function () {
            console.log('Start of pipeline');
            print();
            console.log('End of pipeline');
        })
    console.log(" -- External Libraries build successfully!");
}

function buildGsForceLibrary() {
    console.log(" -- Building GSForce Library... ");
    gulp.src(gsForceLibraryPath)
        .pipe(concat('2GsForce.js'))
        .pipe(uglify())
        .pipe(gulp.dest(buildPath))
    console.log(" -- GSForce Library build successfully!");
}

function buildOVBRAIN() {
    console.log(" -- Building OVBRAIN... ");
    gulp.src(ovbrainPath)
        .pipe(concat('3OVBRAIN.js'))
        .pipe(uglify())
        .pipe(gulp.dest(buildPath))
    console.log(" -- OVBRAIN build successfully!");
}

function buildFrontEnd() {
    gulp.src(frontEndPath)
        .pipe(gulp.dest(buildPath));
}

function buildAppscriptJson() {
    gulp.src(appscriptJsonPath)
        .pipe(gulp.dest(buildPath));
}

function changeClaspRootDir(rootDirNewValue) {
    // Read the clasp.json file
    let claspConfigContent = JSON.parse(fs.readFileSync(claspConfigPath));

    // Change clasp config content rootDir to new value
    claspConfigContent.rootDir = rootDirNewValue;

    // Overwrite the modified clasp.json file
    fs.writeFileSync(claspConfigPath, JSON.stringify(claspConfig, null, 2));
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