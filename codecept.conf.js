exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://oranum.com/en',
      show: false,
      browser: 'chromium',
      restart: 'session' 
    }
  },
  include: {
    I: './steps_file.js',
    homePage: './pages/home.js',
    loginModalPage: './pages/login_modal.js',
    signUpModalPage: './pages/signup_modal.js',
    livestreamPage: './pages/livestream.js',
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
    allure: {},
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