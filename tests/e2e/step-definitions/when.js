const { When } = require('@cucumber/cucumber');

const demoPage = require('../page-objects/Demo.page');

When('I click on increment counter', () => {
  demoPage.incrementCounter();
});

When('I click on decrement counter', () => {
  demoPage.decrementCounter();
});
