/**
 * Create a new cookie with a given name and value, or update cookie's value if it is already exist
 *
 * @param {string} cookieName The name of the cookie
 * @param {string} cookieValue The value of the cookie
 */
 function setCookie(cookieName, cookieValue) {
  browser.setCookies({
    name: cookieName,
    value: cookieValue,
    path: '/',
    secure: true,
  });
}

/**
 * Delete the cookie of the cookie name given
 *
 * @param {string} cookieName The name of the cookie
 */
function deleteCookie(cookieName) {
  browser.deleteCookies([cookieName]);
}

module.exports = {
  setCookie,
  deleteCookie,
};
