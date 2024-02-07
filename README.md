
## Installation


#### 1. Setup environment.

1.1 Install Node.js environment. LINK: https://nodejs.org/en .

1.2 Install npm 
```bash
npm install
```

1.3 Initialize a package.json for the project.
```bash
npm init
```

#### 2. Setup CLASP for communicating with Google Apps Scripts.

2.1 Install CLASP globaly.

If it does not work run with administrator rights.
```bash
npm install -g @google/clasp
```

2.2 Active Google API so you can connect to the Google Scripts APIs.

Go to LINK: https://script.google.com/home/usersettings and set ON for Google Apps Script API.

2.3 Login on CLASP with google account.
```bash
clasp login
```

2.4 Take the Script ID from script settings.

2.5 Setup CLASP Json.

Becarefull this will overwrite your project in src.
```bash
clasp clone "scriptid" --rootDir src
```

2.6 Install TypeScript definitions for Apps Script in your project.
```bash
npm i -S @types/google-apps-script
```

#### 3. Clone project repository.
```bash
git clone https://github.com/your-username/your-project.git
```
#### 4. Setup GULP.

4.1 Install GULP globally.
```bash
TODO
```
4.2 Install GULP in your project.
```bash
npm install --save-dev-gulp
```
4.3 Install GULP functionalities.
```bash
npm install --save-dev-gulp-uglify
npm install --save-dev-gulp-concat
npm install --save-dev-gulp-shell
npm install --save-dev-gulp-rename
npm install --save-dev-gulp-print
npm install --save-dev-gulp-count
npm install --save-dev-gulp-filter
npm install --save-dev-gulp-debug
```
