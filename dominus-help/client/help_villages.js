Template.help_villages.helpers({
  sVillages: function() {
    return _s.villages;
  },

  maxVillages: function() {
    return _gs.villages(Session.get('gameId', 'max_can_have'));
  }
})
