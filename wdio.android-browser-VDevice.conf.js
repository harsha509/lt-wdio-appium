export const config = {

    user: process.env.LT_USERNAME || "YOUR_USERNAME",
    key: process.env.LT_ACCESS_KEY || "YOUR_ACCESS_KEY",
    path: "/wd/hub",
    hostname: "hub.lambdatest.com",
    port: 80,

    specs: [
        './test/specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{
        "lt:options": {
            "w3c": true,
            "platformName": "android",
            "deviceName": "Pixel 2",
            "appiumVersion": "1.22.3",
            "platformVersion": "10",
            "build": "Appium Android VD",
            "name": "Chrome Test",
            "project": "WDIO-appium-android"
        }
    }],

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}