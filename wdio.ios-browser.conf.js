export const config = {

    user: process.env.LT_USERNAME || "YOUR_USERNAME",
    key: process.env.LT_ACCESS_KEY || "YOUR_ACCESS_KEY",
    path: "/wd/hub",
    hostname: "mobile-hub.lambdatest.com",
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
            "platformName": "ios",
            "deviceName": "iPhone 16",
            "platformVersion": "18",
            "isRealMobile": true
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