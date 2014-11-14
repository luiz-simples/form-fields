exports.config = {
  capabilities: {
    'browserName': 'firefox'
    //'chromeOptions': {'args': ['--disable-extensions']}
  },

  baseUrl: 'http://localhost:3000',
  rootElement: 'body',
  specs: ['test/e2e/**/*.js'],

  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: true,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 10000
  }
};
