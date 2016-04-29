/**
 * This generates and returns all the expected babel-helpers
 */

import generate from 'babel-generator';
import * as helpers from 'babel-helpers';

export const babelHelpers = helpers.list
  .map(fnName => `var _${fnName} = ${generate(helpers.get(fnName)).code};`)
  .join('\n');
