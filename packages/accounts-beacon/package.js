Package.describe({
  summary: "Login with SES Beacon credentials",
  version: "0.1.0"
});

Package.on_use(function(api) {
  api.use('check', ['client', 'server']);
  api.use('accounts-base', ['client', 'server']);
  api.use('libbeacon', ['server']);

  // export accounts-base to any packages that use this
  api.imply('accounts-base', ['client', 'server']);

  api.add_files('server.js', 'server');
  api.add_files('client.js', 'client');
});
