sBattles = {
  battleInterval: 60 * 4,
  battleCheckInterval: 1000 * 10,
  unitBonusMultiplier: 1.5,
  battle_power_lost_per_round: 500,
  battle_power_lost_winner_ratio: 0.4
};

if (Meteor.isServer && process.env.NODE_ENV == 'development') {
  sBattles.battleInterval = 1000 * 30;
}

if (Meteor.settings.public.GAME_ID == 'speed' || Meteor.settings.public.GAME_ID == 'katar' || Meteor.settings.public.GAME_ID == 'andor') {
  sBattles.battleInterval = 60 * 1;
}
