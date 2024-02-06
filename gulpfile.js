const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const shell = require('gulp-shell');
const rename = require('gulp-rename');
const process = require('process');
const fs = require('fs');

const src = "src"
const nested = "nested"

/*
    -- TOP LEVEL FUNCTIONS -- 
    gulp.task - Define tasks
    gulp.src - Point to files to use
    gulp.dest - Points to folder to output
    gulp.watch - Watch files and folders for changes
*/

gulp.task('default', function() {
    console.log(GULPBANNER);
});









gulp.task('faCeva', function() {
    console.log("Fa ceva");
});


gulp.task('b', async function() {
    // JS
    gulp.src(['src/**/*.js', 'src/test/**/*.js']) // exclude tests
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('nested'))
    // FREND
    gulp.src('src/appsscript.json')
    .pipe(gulp.dest('nested'));
    // APPSCRIPT
    gulp.src('src/**/*.html')
    .pipe(gulp.dest('nested'));
});

// gulp.task('change-root-dir', (done) => {
//     const claspConfigPath = '.clasp.json';
  
//     // Read the clasp.json file
//     const claspConfig = JSON.parse(fs.readFileSync(claspConfigPath));
  
//     // Backup the original rootDir value
//     const originalRootDir = claspConfig.rootDir;
  
//     // Change the rootDir value to "nested"
//     claspConfig.rootDir = nested;
  
//     // Write the modified clasp.json file
//     fs.writeFileSync(claspConfigPath, JSON.stringify(claspConfig, null, 2));
  
//     console.log(`Changed rootDir value to ${nested} in ${claspConfigPath}`);
  
//     done();
//   });

//   // Task to revert the changes in clasp.json
// gulp.task('revert-root-dir', (done) => {
//     const claspConfigPath = '.clasp.json';
  
//     // Read the clasp.json file
//     const claspConfig = JSON.parse(fs.readFileSync(claspConfigPath));
  
//     // Restore the original rootDir value
//     claspConfig.rootDir = src;
  
//     // Write the modified clasp.json file
//     fs.writeFileSync(claspConfigPath, JSON.stringify(claspConfig, null, 2));
  
//     console.log(`Reverted rootDir value to ${src} in ${claspConfigPath}`);
  
//     done();
//   });


// // Run clasp push using gulp-shell
// gulp.task('clasppush', shell.task(['clasp push']));

// gulp.task('bp', gulp.series('b', 'change-root-dir', 'clasppush', 'revert-root-dir'));

// gulp.task('bpwatch', function() {
//     gulp.watch(`src/index.html`, gulp.series('bp'));
// })


const GULPBANNER = 
`
======================================================================================================

#####  #     # #       ######     ###  #####     ######  #     # #     # #     # ### #     #  #####  
#     # #     # #       #     #     #  #     #    #     # #     # ##    # ##    #  #  ##    # #     # 
#       #     # #       #     #     #  #          #     # #     # # #   # # #   #  #  # #   # #       
#  #### #     # #       ######      #   #####     ######  #     # #  #  # #  #  #  #  #  #  # #  #### 
#     # #     # #       #           #        #    #   #   #     # #   # # #   # #  #  #   # # #     # 
#     # #     # #       #           #  #     #    #    #  #     # #    ## #    ##  #  #    ## #     # 
 #####   #####  ####### #          ###  #####     #     #  #####  #     # #     #gulp  ### #     #  #####  

======================================================================================================                                                                                                   

`;

const HELPCOMMANDS = "HELP";