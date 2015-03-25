Package.describe({
  name: 'jamielob:accounts-ui-no-dropdown',
  version: '1.0.2',
  // Brief, one-line summary of the package.
  summary: 'Removes the dropdown functionality in accounts-ui or accounts-ui-unstyled',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jamielob/accounts-ui-no-dropdown',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4.2');
  api.use('templating', 'client');
  api.addFiles(['accounts-ui-no-dropdown.js', 'accounts-ui-no-dropdown.css']);
});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('jamielob:accounts-ui-no-dropdown');
//   api.addFiles('accounts-ui-no-dropdown-tests.js');
// });
