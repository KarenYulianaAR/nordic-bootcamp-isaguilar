const { Then } = require('@cucumber/cucumber');

const demoPage = require('../page-objects/Demo.page');

Then('The page should have {string} as title', (title) => {
  expect(demoPage.getTitle()).toBe(title);
});

Then('The counter value is {string}', (counterValue) => {
  expect(demoPage.getCounterValue()).toBe(counterValue);
});

Then('The page should have {string} as user welcome legend', (userWelcomeText) => {
  expect(demoPage.getUserWelcomeText()).toBe(userWelcomeText);
});
