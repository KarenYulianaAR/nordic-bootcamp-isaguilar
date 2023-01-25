const Page = require('./Page');

class DemoPage extends Page {
  get userWelcome() { return $('.user-welcome'); }

  get incrementButton() { return $('.demo-button__add'); }

  get decrementButton() { return $('.demo-button__subtract'); }

  get counter() { return $('.demo-counter'); }

  open() {
    super.open('/demo');
    return this;
  }

  getUserWelcomeText() {
    return this.userWelcome.getText();
  }

  incrementCounter() {
    this.incrementButton.click();
  }

  decrementCounter() {
    this.decrementButton.click();
  }

  getCounterValue() {
    return this.counter.getText();
  }
}

module.exports = new DemoPage();
