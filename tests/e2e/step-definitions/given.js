const { Given } = require('@cucumber/cucumber');

const demoPage = require('../page-objects/Demo.page');
const userSessionPage = require('../page-objects/UserSession.page');

Given('I am on the Demo page', () => {
  demoPage.open();
  demoPage.waitForPageToLoad();
});

Given('I am logged in with the session name {string}', (sessionName) => {
  userSessionPage.authenticate(sessionName);
});

Given('I am a guest user', () => {
  userSessionPage.destroy();
});
