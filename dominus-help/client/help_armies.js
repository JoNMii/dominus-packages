Template.help_armies.helpers({
  bonusAmount: function() {
    return _s.army.unitBonusMultiplier + 1;
  },

  sCastles: function() {
    return _s.castles;
  }
})
