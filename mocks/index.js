const env = require('nordic/env');

if (!env.PRODUCTION) {
  const mock = require('nordic-dev/mocks')(); // eslint-disable-line

  const ignoreParams = env.TEST
    ? [
      'referrer',
      'navigation-type',
    ]
    : [
      'current_session_id',
      'delete_sessions',
      'platform_id',
    ];

  mock.intercept('https://internal-api.mercadolibre.com', [
    '/sites/*',
  ], { ignoreParams });

  if (env.TEST) {
    // Sessions api
    mock.intercept('https://internal-api.mercadolibre.com',
      ['/auth/user_session*'], {
        ignoreParams: ['platform_id', 'site_id'],
        includeHeaders: ['x-session-id'],
      });

    // Users API
    mock.intercept('https://internal-api.mercadolibre.com', [
      '/users/:userId',
    ], { ignoreParams: ['caller.id', 'api_version'] });

    // ML Header stuff
    mock.intercept('https://internal-api.mercadolibre.com', [
      '/users/:userId/*',
    ], { ignoreParams: ['access_token', 'caller.id', 'marketplace', 'locale', 'operatorUserId'] });

    // Frontend Carts
    mock.intercept('https://internal-api.mercadolibre.com', [
      '/frontend/carts/*',
    ], { ignoreParams: ['site_id'] });

    mock.intercept('https://internal-api.mercadolibre.com/', [
      '/v2/kyc/vault',
    ]);
  }
}
