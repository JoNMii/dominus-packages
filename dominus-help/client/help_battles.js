Template.help_battles.helpers({
  bonusAmount: function() {
    return _s.army.unitBonusMultiplier + 1;
  },

  sVillages: function() {
    return _s.villages;
  },

  sCastles: function() {
    return _s.castles;
  },

  sArmies: function() {
    return _s.armies;
  },

  battleInterval: function() {
    return _gs.battles(Session.get('gameId'), 'battleInterval');
  }
})
