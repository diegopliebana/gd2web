///////////////////
// REPLAY CANVAS //
///////////////////

function ReplayCanvas(ctx, replayController) {
	this.ctx = ctx;
	this.replayController = replayController;
	this.replayController.registerListener(this);
	this.mazeImages = new Array();
	this.mazeImages[0] = new Image();
	this.mazeImages[0].src = "images/pacman/maze-a.png";
	this.mazeImages[1] = new Image();
	this.mazeImages[1].src = "images/pacman/maze-b.png";
	this.mazeImages[2] = new Image();
	this.mazeImages[2].src = "images/pacman/maze-c.png";
	this.mazeImages[3] = new Image();
	this.mazeImages[3].src = "images/pacman/maze-d.png";
	// pacman
	this.pacmanImages = [new Array(3), new Array(3), new Array(3), new Array(3)];
	// UP
	this.pacmanImages[0][0] = new Image();
	this.pacmanImages[0][0].src = "images/pacman/mspacman-up-normal.png";
	this.pacmanImages[0][1] = new Image();
	this.pacmanImages[0][1].src = "images/pacman/mspacman-up-open.png";
	this.pacmanImages[0][2] = new Image();
	this.pacmanImages[0][2].src = "images/pacman/mspacman-up-closed.png";
	// RIGHT
	this.pacmanImages[1][0] = new Image();
	this.pacmanImages[1][0].src = "images/pacman/mspacman-right-normal.png";
	this.pacmanImages[1][1] = new Image();		
	this.pacmanImages[1][1].src = "images/pacman/mspacman-right-open.png";
	this.pacmanImages[1][2] = new Image();
	this.pacmanImages[1][2].src = "images/pacman/mspacman-right-closed.png";
	// DOWN
	this.pacmanImages[2][0] = new Image();
	this.pacmanImages[2][0].src = "images/pacman/mspacman-down-normal.png";
	this.pacmanImages[2][1] = new Image();
	this.pacmanImages[2][1].src = "images/pacman/mspacman-down-open.png";
	this.pacmanImages[2][2] = new Image();
	this.pacmanImages[2][2].src = "images/pacman/mspacman-down-closed.png";
	// LEFT
	this.pacmanImages[3][0] = new Image();
	this.pacmanImages[3][0].src = "images/pacman/mspacman-left-normal.png";
	this.pacmanImages[3][1] = new Image();
	this.pacmanImages[3][1].src = "images/pacman/mspacman-left-open.png";
	this.pacmanImages[3][2] = new Image();
	this.pacmanImages[3][2].src = "images/pacman/mspacman-left-closed.png";

	//////////////////////// 
	// LOAD GHOSTS IMAGES //
	////////////////////////

	this.ghosts_imgs = new Array(6);

	for (i = 0; i < 6; i++)
	{
		this.ghosts_imgs[i] = new Array(4);

		for (j = 0; j < 4; j++)
			this.ghosts_imgs[i][j] = new Array(2);
	}

	// this is probably the worst javascript in the history of javascript
	this.ghosts_imgs[0][0][0] = new Image();
	this.ghosts_imgs[0][0][0].src = "images/pacman/blinky-up-1.png";
	this.ghosts_imgs[0][0][1] = new Image();
	this.ghosts_imgs[0][0][1].src = "images/pacman/blinky-up-2.png";
	this.ghosts_imgs[0][1][0] = new Image();
	this.ghosts_imgs[0][1][0].src = "images/pacman/blinky-right-1.png";
	this.ghosts_imgs[0][1][1] = new Image();
	this.ghosts_imgs[0][1][1].src = "images/pacman/blinky-right-2.png";
	this.ghosts_imgs[0][2][0] = new Image();
	this.ghosts_imgs[0][2][0].src = "images/pacman/blinky-down-1.png";
	this.ghosts_imgs[0][2][1] = new Image();
	this.ghosts_imgs[0][2][1].src = "images/pacman/blinky-down-2.png";
	this.ghosts_imgs[0][3][0] = new Image();
	this.ghosts_imgs[0][3][0].src = "images/pacman/blinky-left-1.png";
	this.ghosts_imgs[0][3][1] = new Image();
	this.ghosts_imgs[0][3][1].src = "images/pacman/blinky-left-2.png";

	this.ghosts_imgs[1][0][0] = new Image();
	this.ghosts_imgs[1][0][0].src = "images/pacman/pinky-up-1.png";
	this.ghosts_imgs[1][0][1] = new Image();
	this.ghosts_imgs[1][0][1].src = "images/pacman/pinky-up-2.png";
	this.ghosts_imgs[1][1][0] = new Image();
	this.ghosts_imgs[1][1][0].src = "images/pacman/pinky-right-1.png";
	this.ghosts_imgs[1][1][1] = new Image();
	this.ghosts_imgs[1][1][1].src = "images/pacman/pinky-right-2.png";
	this.ghosts_imgs[1][2][0] = new Image();
	this.ghosts_imgs[1][2][0].src = "images/pacman/pinky-down-1.png";
	this.ghosts_imgs[1][2][1] = new Image();
	this.ghosts_imgs[1][2][1].src = "images/pacman/pinky-down-2.png";
	this.ghosts_imgs[1][3][0] = new Image();
	this.ghosts_imgs[1][3][0].src = "images/pacman/pinky-left-1.png";
	this.ghosts_imgs[1][3][1] = new Image();
	this.ghosts_imgs[1][3][1].src = "images/pacman/pinky-left-2.png";

	this.ghosts_imgs[2][0][0] = new Image();
	this.ghosts_imgs[2][0][0].src = "images/pacman/inky-up-1.png";
	this.ghosts_imgs[2][0][1] = new Image();
	this.ghosts_imgs[2][0][1].src = "images/pacman/inky-up-2.png";
	this.ghosts_imgs[2][1][0] = new Image();
	this.ghosts_imgs[2][1][0].src = "images/pacman/inky-right-1.png";
	this.ghosts_imgs[2][1][1] = new Image();
	this.ghosts_imgs[2][1][1].src = "images/pacman/inky-right-2.png";
	this.ghosts_imgs[2][2][0] = new Image();
	this.ghosts_imgs[2][2][0].src = "images/pacman/inky-down-1.png";
	this.ghosts_imgs[2][2][1] = new Image();
	this.ghosts_imgs[2][2][1].src = "images/pacman/inky-down-2.png";
	this.ghosts_imgs[2][3][0] = new Image();
	this.ghosts_imgs[2][3][0].src = "images/pacman/inky-left-1.png";
	this.ghosts_imgs[2][3][1] = new Image();
	this.ghosts_imgs[2][3][1].src = "images/pacman/inky-left-2.png";

	this.ghosts_imgs[3][0][0] = new Image();
	this.ghosts_imgs[3][0][0].src = "images/pacman/sue-up-1.png";
	this.ghosts_imgs[3][0][1] = new Image();
	this.ghosts_imgs[3][0][1].src = "images/pacman/sue-up-2.png";
	this.ghosts_imgs[3][1][0] = new Image();
	this.ghosts_imgs[3][1][0].src = "images/pacman/sue-right-1.png";
	this.ghosts_imgs[3][1][1] = new Image();
	this.ghosts_imgs[3][1][1].src = "images/pacman/sue-right-2.png";
	this.ghosts_imgs[3][2][0] = new Image();
	this.ghosts_imgs[3][2][0].src = "images/pacman/sue-down-1.png";
	this.ghosts_imgs[3][2][1] = new Image();
	this.ghosts_imgs[3][2][1].src = "images/pacman/sue-down-2.png";
	this.ghosts_imgs[3][3][0] = new Image();
	this.ghosts_imgs[3][3][0].src = "images/pacman/sue-left-1.png";
	this.ghosts_imgs[3][3][1] = new Image();
	this.ghosts_imgs[3][3][1].src = "images/pacman/sue-left-2.png";

	this.ghosts_imgs[4][0][0] = new Image();
	this.ghosts_imgs[4][0][0].src = "images/pacman/edible-ghost-1.png";
	this.ghosts_imgs[4][0][1] = new Image();
	this.ghosts_imgs[4][0][1].src = "images/pacman/edible-ghost-2.png";

	this.ghosts_imgs[5][0][0] = new Image();
	this.ghosts_imgs[5][0][0].src = "images/pacman/edible-ghost-blink-1.png";
	this.ghosts_imgs[5][0][1] = new Image();
	this.ghosts_imgs[5][0][1].src = "images/pacman/edible-ghost-blink-2.png";

}

ReplayCanvas.prototype.update = function() {
	this.draw();
}

ReplayCanvas.prototype.draw = function()
{
	// background
	this.ctx.fillStyle = "rgba(0, 0, 0, 1.0)";
	this.ctx.fillRect (0, 0, 224, 280);
	
	// maze
	this.ctx.drawImage(this.mazeImages[this.replayController.getGameState().ma], 0, 0);
	
	// draw info
	this.ctx.font = "13px sans-serif";
	this.ctx.fillStyle = "White";
	this.ctx.fillText("S: " + this.replayController.getGameState().sc, 10, 268);
	this.ctx.fillText("L: " + (this.replayController.getGameState().le + 1), 70, 268);
	this.ctx.fillText("T: " + this.replayController.getGameState().tt, 110, 268);
	
	// draw lives	
	for (i = 0; i < this.replayController.getGameState().li - 1; i++)
		this.ctx.drawImage(this.pacmanImages[1][0], 180 + (i * 20), 255);
		
	// draw pills
	for (i = 0; i < this.replayController.getGameState().pi.length; i++)
	{
		pill = this.replayController.getGameState().pi[i];

		if (pill == 1)
		{
			loc = mazes[this.replayController.getGameState().ma].pillNodes[i];
			this.ctx.beginPath();
			this.ctx.fillStyle = "#fff";
			this.ctx.arc(loc[0] * 2 + 4, loc[1] * 2 + 4, 1, 0, Math.PI * 2, true);
			this.ctx.closePath();
			this.ctx.fill();
		}
	}
	
	// draw power pills
	for (i = 0; i < this.replayController.getGameState().po.length; i++)
	{
		power = this.replayController.getGameState().po[i];

		if (power == 1)
		{
			loc = mazes[this.replayController.getGameState().ma].powerPillNodes[i];
			this.ctx.beginPath();
			this.ctx.fillStyle = "#fff";
			this.ctx.arc(loc[0] * 2 + 4, loc[1] * 2 + 4, 3, 0, Math.PI * 2, true);
			this.ctx.closePath();
			this.ctx.fill();
		}
	}
	
	// draw pacman

	pacLoc = mazes[this.replayController.getGameState().ma].nodes[this.replayController.getGameState().pn];
	pacDir = this.replayController.getGameState().pd;

	if (pacDir < 0 || pacDir >= 4)
		pacDir = 0;

	img = Math.floor((this.replayController.timeStep % 6) / 2);
	this.ctx.drawImage(this.pacmanImages[pacDir][img], pacLoc[0] * 2 - 3, pacLoc[1] * 2 - 2);
	

	
	// draw ghosts
	for (i = 0; i < 4; i++)
	{
		gLoc = mazes[this.replayController.getGameState().ma].nodes[this.replayController.getGameState().gh[i].gn];
		gDir = this.replayController.getGameState().gh[i].di;
		gEdibleTime = this.replayController.getGameState().gh[i].et;
		gLairTime = this.replayController.getGameState().gh[i].lt;
		img = Math.floor((this.replayController.timeStep % 6) / 2);

		if (gEdibleTime > 0)
		{
			if (gEdibleTime < EDIBLE_ALERT && Math.floor(((this.replayController.getGameState().tt % 6) / 3)) == 0)
				this.ctx.drawImage(this.ghosts_imgs[5][0][Math.floor(((this.replayController.getGameState().tt % 6) / 3))], gLoc[0] * 2 -3, gLoc[1] * 2 - 2);
			else
				this.ctx.drawImage(this.ghosts_imgs[4][0][Math.floor(((this.replayController.getGameState().tt % 6) / 3))], gLoc[0] * 2 -3, gLoc[1] * 2 - 2);
		}
		else
		{
			if (this.replayController.getGameState().gh[i].gn.lt > 0)
				this.ctx.drawImage(this.ghosts_imgs[i][0][Math.floor(((this.replayController.getGameState().tt % 6) / 3))], gLoc[0] * 2 - 3, gLoc[1] * 2 - 2);
			else
				this.ctx.drawImage(this.ghosts_imgs[i][gDir][Math.floor(((this.replayController.getGameState().tt % 6) / 3))], gLoc[0] * 2 - 3, gLoc[1] * 2 - 2);
		}
	}
	
	// game over
	if (this.replayController.timeStep == (this.replayController.replay.gameStates.length - 1))
	{
		this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
		this.ctx.fillRect (0, 0, 224, 280);
		this.ctx.font = "18px sans-serif";
		this.ctx.fillStyle = "Red";
		this.ctx.fillText("GAME OVER", 58, 125);
	} 
	else if (this.replayController.timeStep == 0)
	{
		this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
		this.ctx.fillRect (0, 0, 224, 280);
		this.ctx.font = "18px sans-serif";
		this.ctx.fillStyle = "White";
		this.ctx.fillText("START", 82, 125);
	}
}