import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn: SENTRY_DSN || 'https://337890cf85d24d0a8468ba51e4b28b84@o4504105946841088.ingest.sentry.io/4504105948282880',
  tracesSampleRate: 1.0,
});
