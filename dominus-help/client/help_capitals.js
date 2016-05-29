Template.help_capitals.helpers({
  _s: function() {
    return _s;
  },

  income: function() {
    return _gs.capitals(Session.get('gameId'), 'income');
  }
})
