"use strict";

/**
 * A set of functions called "actions" for `test-error`
 */

module.exports = {
  index: async (ctx, next) => {
    throw new Error("This error should be sent to sentry");
  },
};
