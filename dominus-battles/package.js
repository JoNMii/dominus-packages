Package.describe({
  name: 'danimal:dominus-battles',
  version: '1.0.0',
  summary: 'Battles for Dominus',
  git: 'https://github.com/dan335/dominus-packages',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use([
    'blaze-html-templates',
    'less',
    'mongo',
    'accounts-base',
    'danimal:cue',
    'momentjs:moment',
    'dominus-armies',
    'dominus-castles',
    'dominus-villages',
    'dominus-capitols',
    'dominus-init',
    'dominus-hexmap',
    'dominus-alerts',
    'dominus-mapmaker'
  ]);
  api.addFiles([
    'lib/collectionsBattles.js',
    'lib/settingsBattles.js',
    'calculator/armies.js',
    'calculator/rounds.js'
  ]);
  api.addFiles([
    'server/publishBattles.js',
    'server/battle.js',
    'server/jobBattle.js',
    'calculatorPanel/server/publishCalc.js'
  ], 'server');
  api.addFiles([
    'reports/client/battleReport.html',
    'reports/client/battleReport.js',
    'reports/client/battleReport.less',
    'reports/client/battleReportUnit.html',
    'reports/client/battleReportUnit.js',
    'reports/client/battleReportUnitInfo.html',
    'reports/client/battleReportUnitInfo.js',
    'reports/client/roundTitle.html',
    'reports/client/roundTitle.js',
    'battleReport/client/battle.html',
    'battleReport/client/battle.js',
    'battleReport/client/battle.less',
    'calculatorPanel/client/calc_army.html',
    'calculatorPanel/client/calc_army.js',
    'calculatorPanel/client/calculatorPanel.html',
    'calculatorPanel/client/calculatorPanel.js',
    'calculatorPanel/client/calculatorPanel.less',
    'calculatorPanel/client/collectionsCalc.js',
  ], 'client');
  api.export([
    'Battles2',
    'Rounds',
    'BattleArmy',
    'BattleRound'
  ]);
  api.export('Roundtitles', 'client');
  api.export('BattleJob', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use([
    'dominus-init',
    'dominus-battles',
    'dominus-armies',
    'dominus-mapmaker'
  ]);
  api.addFiles([
    'tests/battleTests-server-rounds.js',
    'tests/battleTests-server-armies.js',
    'tests/battleTests-server.js'
  ], 'server');
});
