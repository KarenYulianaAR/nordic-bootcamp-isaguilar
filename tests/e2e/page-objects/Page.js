class Page {
  get rootApp() { return $('#root-app'); }

  open(path) {
    browser.url(path);
    return this;
  }

  waitForPageToLoad() {
    browser.waitUntil(
      async () => {
        const state = await browser.execute(() => document.readyState);
        return state === 'complete';
      },
      {
        timeout: 5000,
        timeoutMsg: 'Page load timeout',
        interval: 100,
      },
    );
    this.waitForRootAppToExist();
  }

  waitForRootAppToExist() {
    this.rootApp.waitForExist(2000);
    return this;
  }

  getTitle() {
    return browser.getTitle();
  }
}

module.exports = Page;
