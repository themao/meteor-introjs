Package.describe({
  name: 'themao:introjs',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Intro.js - Step-by-step guide and feature introduction',
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:themao/meteor-introjs.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.7');
  api.use('ecmascript');
  api.mainModule('introjs.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('themao:introjs');
  api.mainModule('introjs-tests.js');
});
