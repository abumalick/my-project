module.exports = {
  load: {
    before: ["sentry", "responseTime", "logger", "cors", "responses", "gzip"],
    order: [
      "Define the middlewares' load order by putting their name in this array is the right order",
    ],
    after: ["parser", "router"],
  },
  settings: {
    sentry: {
      enabled: true,
    },
  },
};
