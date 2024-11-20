## pre-requisites
* Install NodeJS latest (LTS preferred)
* Set LT credentails in env variables **`LT_USERNAME`** and **`LT_ACCESS_KEY`**, as code picks LT creds from variables
<br> (or) <br> you can set LT USERNAME and KEY in config _(wdio.*-browser.conf.js)_ file at     
`user: process.env.LT_USERNAME || "YOUR_USERNAME",`<br>
`key: process.env.LT_ACCESS_KEY || "YOUR_ACCESS_KEY",` 

## Getting Started
* Clone repo with `git clone https://github.com/harsha509/lt-wdio-appium`
* perform npm install to install deps

## Running the Tests

### Android
* To run tests in android: `npm run wdio-android` <br>
* To run tests in android virtual device: `npm run wdio-android-VD` <br>

### IOS
* To run tests in ios: `npm run wdio-ios` <br>
* To run tests in ios virtual device: `npm run wdio-ios-VD` <br>

