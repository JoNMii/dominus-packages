Meteor.startup(function() {
  if (process.env.DOMINUS_WORKER == 'true') {

    Meteor.setInterval(function() {
      // if battle hasn't been updated in a while then run it
      Games.find({hasStarted:true, hasClosed:false}, {fields: {_id:1}}).forEach(function(game) {
        let interval = _gs.battles(game._id, 'battleInterval');
        let cutoff = moment().subtract(interval, 'ms').toDate();
        Battles2.find({isOver:false, updatedAt: {$lt:cutoff}}, {fields: {gameId:1, x:1, y:1}}).forEach(function(battle) {
          Cue.addTask('runBattle', {isAsync:true, unique:true}, {gameId:battle.gameId, x:battle.x, y:battle.y})
        })
      });
    }, _s.battles.battleCheckInterval);
  }
});
