Package.describe({
  name: 'danimal:dominus-rankings',
  version: '1.0.0',
  git: 'https://github.com/dan335/dominus-packages',
  documentation: 'README.md',
  summary: 'Overall player rankings for Dominus - https://dominusgame.net'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use([
    'ecmascript',
    'danimal:cue@1.1.8'
  ]);
  api.addFiles([
    'findPlayerRankings.js'
  ], 'server');
});
