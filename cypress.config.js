const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://mijn.nhg.nl",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
