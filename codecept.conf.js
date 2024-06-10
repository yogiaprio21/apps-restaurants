exports.config = {
    tests: './e2e/**/*.test.js',
    output: './e2e/output',
    helpers: {
        Playwright: {
            url: 'http://localhost:9000',
            show: true,
            windowSize: '1200x900'
        }
    },
    include: {
        I: './steps_file.js'
    },
    bootstrap: null,
    mocha: {},
    name: 'restaurant-app',
    plugins: {
        retryFailedStep: {
            enabled: true
        },
        screenshotOnFail: {
            enabled: true
        }
    }
};
