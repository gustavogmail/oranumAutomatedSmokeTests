exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://oranum.com/en/home',
      show: false,
      browser: 'chromium',
      keepCookies: 'session'
    }
  },
  include: {
    I: './steps_file.js',
    homePage: './pages/home.js',
    loginModalPage: './pages/login_modal.js',
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: './step_definitions/*.js'
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  tests: 'tests/*_test.js',
  name: 'OranumAtomatedTests'
}