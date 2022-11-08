const { withSentryConfig } = require('@sentry/nextjs');

const moduleExports = {
  // Your existing module.exports
  i18n: {
    locales: ["en"],
    defaultLocale: "en"
  },
  sentry: {
    hideSourceMaps: true
  }, env: {
    COVALENT_API_KEY: process.env.COVALENT_API_KEY
  }
};

const sentryWebpackPluginOptions = {
  silent: true, // Suppresses all logs
  dryRun: process.env.CONTEXT !== "production"
};

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
