

////////////
// REPLAY //
////////////

function Replay(gameID, gameStates) {
	this.gameID = gameID;
	this.gameStates = gameStates;
}

Replay.prototype.getGameState = function(timeStep) {
	return this.gameStates[timeStep];
}