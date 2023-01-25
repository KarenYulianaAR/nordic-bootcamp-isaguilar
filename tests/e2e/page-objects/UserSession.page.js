const { setCookie, deleteCookie } = require('../step-definitions/utils/cookies');

const sessionCookieName = 'ssid';

class UserSessionPage {
  authenticate(sessionName) {
    browser.url('/ping');
    setCookie(sessionCookieName, sessionName);
    return this;
  }

  destroy() {
    browser.url('/ping');
    deleteCookie(sessionCookieName);
    return this;
  }
}

module.exports = new UserSessionPage();
