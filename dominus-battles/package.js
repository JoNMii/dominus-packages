Package.describe({
  name: 'danimal:dominus-battles',
  version: '1.0.0',
  git: 'https://github.com/dan335/dominus-packages',
  documentation: 'README.md',
  summary: 'Battles for Dominus - https://dominusgame.net'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use([
    'momentjs:moment@2.11.2'
  ]);
  api.addFiles([
    'calculator/armies.js',
    'calculator/rounds.js'
  ]);
  api.export([
    'BattleArmy',
    'BattleRound'
  ])
});
