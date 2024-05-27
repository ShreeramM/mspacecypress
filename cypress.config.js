const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    baseUrl:'http://104.237.6.240/',
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
      
    },
    viewportWidth:1920,
    viewportHeight:1024,
    specPattern: 'cypress/integration/features/*.{feature,features}',
    pageLoadTimeout:200000,
    defaultCommandTimeout:100000,
    chromeWebSecurity:false,
    experimentalSessionAndOrigin:true,
    experimentalModifyObstructiveThirdPartyCode:true,
    video:true,
    screenshotOnRunFailure:true
  },
});
