const Sentry = require("@sentry/node");
console.log("INITIALIZING SENTRY");
Sentry.init({
  dsn:
    "https://77ac1ecb19d4446cafa3f1590221db6b@o415410.ingest.sentry.io/5306847",
  environment: strapi.config.environment,
});

module.exports = (strapi) => {
  return {
    initialize() {
      strapi.app.use(async (ctx, next) => {
        try {
          console.log("Waiting for next");
          await next();
          console.log("NEXT passed");
        } catch (error) {
          console.log("SENDING EXCEPTION TO SENTRY");
          Sentry.captureException(error);
          throw error;
        }
      });
    },
  };
};
