const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './TESTS/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'chromium',
      waitForNavigation: "networkidle",
      waitForTimeout: 5000
    }
  },
  include: {
    "I": "./steps_file.js",
    "homePagePage": "./pages/homePage.js",
    "registerPage": "./pages/register.js"
  },
  name: 'AnLozovskaya'
}