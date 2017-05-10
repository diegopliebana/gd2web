////////////////////////
// REPLAY SLIDER VIEW //
////////////////////////

function ReplaySliderView(replayController, sliderElem)
{
	this.replayController = replayController;
	this.replayController.registerListener(this);
	this.sliderElem = sliderElem;
	this.sliderElem.slider({
		slide: function(event, ui) {
			replayController.move(ui.value);
		}
	});
}

ReplaySliderView.prototype.update = function()
{
	this.sliderElem.slider("option", "value", this.replayController.timeStep);
	if (this.replayController.playing)
		this.sliderElem.slider("option", "disabled", true);
	else
		this.sliderElem.slider("option", "disabled", false);
}