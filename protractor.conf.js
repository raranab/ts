// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
 specs: ['./e2e/**/**/*.e2eCreateAccount-spec.ts'],
 // specs: ['./e2e/**/**/specTest.ts'],
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
  baseUrl: 'https://app-dev.truespace.com/create-account',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  suites:{
    createAccount: './e2e/**/**/*.e2eCreateAccount-spec.ts',
    log: './e2e/**/**/*e2eLogIn-spec.ts',
  },
   onPrepare() {
    require('ts-node').register({
     project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  },
  params : {
		createAccount : {
      companyName: 'comcp',
      email : 'jd@tsss',
      pass : 'Qwerty1@'
     
    }

  }
};
