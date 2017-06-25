const within = require('./within.js');
const during = require('./during.js');

/*
 * The difference between within and during
 *
 * within - the expression is true within timeout
 * during - the expression remains true during the delay
 */

module.exports = {
  // visibleWithin the jQuery element is visible within timeout
  visibleWithin: ($, timeout = 100) =>
    within(() => $.is(':visible'), timeout, 30, `Was not visibile within ${timeout}ms`),
  // hiddenWithin the jQuery element is hidden within timeout
  hiddenWithin: ($, timeout = 100) =>
    within(() => !$.is(':visible'), timeout, 30, `Was not hidden within ${timeout}ms`),
  // hiddenDuring the jQuery element remains hidden during the delay
  hiddenDuring: ($, delay = 100) =>
    during(() => !$.is(':visible'), delay, `Did not remain hidden for ${delay}ms`),
  // visibleDuring the jQuery element remains hidden during the delay
  visibleDuring: ($, delay = 100) =>
    during(() => $.is(':visible'), delay, `Did not remain visible for ${delay}ms`),
};
