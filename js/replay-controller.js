///////////////////////
// REPLAY CONTROLLER //
///////////////////////

function ReplayController(replay)
{
	this.replay = replay;
	this.timeStep = 0;
	this.playing = false;
	this.listeners = [];
}

ReplayController.prototype.play = function()
{
	if (!this.playing)
	{
		this.playing = true;
		this.animate();
	}
	else
	{
		this.playing = false;
	}
		
	this.notifyListeners();
}

ReplayController.prototype.animate = function()
{
	if (this.playing && this.timeStep < this.replay.gameStates.length) 
	{
		this.next();
		this.notifyListeners();
		setTimeout(jQuery.proxy(this, 'animate'), 20);
	}
}

ReplayController.prototype.start = function() {
	this.move(0);
}

ReplayController.prototype.prev = function() {
	if (this.timeStep > 0)
		this.move(this.timeStep - 1);
}

ReplayController.prototype.next = function() {
	if (this.timeStep < (this.replay.gameStates.length - 1))
		this.move(this.timeStep + 1);
}

ReplayController.prototype.end = function() {
	this.move(this.replay.gameStates.length - 1);
}

ReplayController.prototype.move = function(timeStep) {
	this.timeStep = timeStep;
	this.notifyListeners();
}

ReplayController.prototype.getGameState = function() {
	return this.replay.getGameState(this.timeStep);
}

ReplayController.prototype.registerListener = function(listener) {
	this.listeners.push(listener);
}

ReplayController.prototype.notifyListeners = function(listener) {
	for (i = 0; i < this.listeners.length; i++)
		this.listeners[i].update();
}