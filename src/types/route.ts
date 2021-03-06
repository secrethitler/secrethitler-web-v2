enum Route {
  Landingpage = 'landingpage',
  GameCreate = 'game.create',
  GameJoin = 'game.join',
  GameLobby = 'game.lobby',
  GameInfo = 'game.info',
  GameNominate = 'game.nominate',
  GameVote = 'game.vote',
  GameVoteResult = 'game.vote.result',
  GamePresidentPolicyPick = 'game.president-pick',
  GameChancellorPolicyPick = 'game.chancellor-pick',
  GameWon = 'game.game-over',
  GameIsKilled = 'game.is-eliminated',
  GameSpecialElection = 'game.special-election',
  GamePolicyPeek = 'game.policy-peek',
  GameKillPlayer = 'game.kill-player',
  GameInvestigate = 'game.investigate',
  GameVetoRequested = 'game.veto-requested',
}

export default Route;
