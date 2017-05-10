////////////////////////////
// REPLAY CONTROLLER VIEW //
////////////////////////////

function ReplayControllerView(replayController, start, prev, next, end, play, pause)
{
	this.replayController = replayController;
	this.replayController.registerListener(this);
	this.startElem = start;
	this.startElem.click(jQuery.proxy(this.replayController, 'start'));
	this.prevElem = prev;
	this.prevElem.click(jQuery.proxy(this.replayController, 'prev'));
	this.nextElem = next;
	this.nextElem.click(jQuery.proxy(this.replayController, 'next'));
	this.endElem = end;
	this.endElem.click(jQuery.proxy(this.replayController, 'end'));
	this.playElem = play;
	this.playElem.click(jQuery.proxy(this.replayController, 'play'));
}

ReplayControllerView.prototype.update = function()
{
	// last
	if (this.replayController.timeStep == (this.replayController.replay.gameStates.length - 1))
	{
		this.playElem.button( "option", "icons", {primary:'ui-icon-play'} );
		this.playElem.button('option', 'disabled', true);
		this.startElem.button('option', 'disabled', false);
		this.prevElem.button('option', 'disabled', false);
		this.nextElem.button('option', 'disabled', true);
		this.endElem.button('option', 'disabled', true);
		this.replayController.playing = false;
	}
	// first
	else if (this.replayController.timeStep == 0)
	{
		this.playElem.button( "option", "icons", {primary:'ui-icon-play'} );
		this.playElem.button('option', 'disabled', false);
		this.startElem.button('option', 'disabled', true);
		this.prevElem.button('option', 'disabled', true);
		this.nextElem.button('option', 'disabled', false);
		this.endElem.button('option', 'disabled', false);
		this.replayController.playing = false;
	}
	else
	{
		if (this.replayController.playing)
		{
			// this.playElem.button( "option", "icons", {primary:'ui-icon-pause'} );				
			this.playElem.button('option', 'disabled', false);
			this.startElem.button('option', 'disabled', true);
			this.prevElem.button('option', 'disabled', true);
			this.nextElem.button('option', 'disabled', true);
			this.endElem.button('option', 'disabled', true);
		}
		else
		{
			this.playElem.button( "option", "icons", {primary:'ui-icon-play'} );
			this.playElem.button('option', 'disabled', false);
			this.startElem.button('option', 'disabled', false);
			this.prevElem.button('option', 'disabled', false);
			this.nextElem.button('option', 'disabled', false);
			this.endElem.button('option', 'disabled', false);
		}
	}
}