//////////////////////
// REPLAY DASHBOARD //
//////////////////////

function ReplayDashboard(replayController, totalTimeElem, scoreElem, livesElem,
	mazeElem, pillsElem, powerPillsElem,
	pacLocIndexElem, pacLocCoordElem, pacDirElem,
	blinkyLocIndexElem, blinkyLocCoordElem, blinkyEdTimeElem, blinkyDirElem, blinkyLairTimeElem,
	pinkyLocIndexElem, pinkyLocCoordElem, pinkyEdTimeElem, pinkyDirElem, pinkyLairTimeElem,
	inkyLocIndexElem, inkyLocCoordElem, inkyEdTimeElem, inkyDirElem, inkyLairTimeElem,
	sueLocIndexElem, sueLocCoordElem, sueEdTimeElem, sueDirElem, sueLairTimeElem,
	blinkyEdiblePB, pinkyEdiblePB, inkyEdiblePB, sueEdiblePB,
	blinkyLairPB, pinkyLairPB, inkyLairPB, sueLairPB, pillsProgressBar, powerPillsPB
	)
{
	this.replayController = replayController;
	this.replayController.registerListener(this);
	this.totalTimeElem = totalTimeElem;
	this.scoreElem = scoreElem;
	this.livesElem = livesElem;
	this.mazeElem = mazeElem;
	this.pillsElem = pillsElem;
	this.powerPillsElem = powerPillsElem;
	this.pacLocIndexElem = pacLocIndexElem;
	this.pacLocCoordElem = pacLocCoordElem;
	this.pacDirElem = pacDirElem;
	this.blinkyLocIndexElem = blinkyLocIndexElem;
	this.blinkyLocCoordElem = blinkyLocCoordElem;
	this.blinkyEdTimeElem = blinkyEdTimeElem;
	this.blinkyDirElem = blinkyDirElem;
	this.blinkyLairTimeElem = blinkyLairTimeElem;
	this.pinkyLocIndexElem = pinkyLocIndexElem;
	this.pinkyLocCoordElem = pinkyLocCoordElem;
	this.pinkyEdTimeElem = pinkyEdTimeElem;
	this.pinkyDirElem = pinkyDirElem;
	this.pinkyLairTimeElem = pinkyLairTimeElem;
	this.inkyLocIndexElem = inkyLocIndexElem;
	this.inkyLocCoordElem = inkyLocCoordElem;
	this.inkyEdTimeElem = inkyEdTimeElem;
	this.inkyDirElem = inkyDirElem;
	this.inkyLairTimeElem = inkyLairTimeElem;
	this.sueLocIndexElem = sueLocIndexElem;
	this.sueLocCoordElem = sueLocCoordElem;
	this.sueEdTimeElem = sueEdTimeElem;
	this.sueDirElem = sueDirElem;
	this.sueLairTimeElem = sueLairTimeElem;
	this.blinkyEdiblePB = blinkyEdiblePB;
	this.pinkyEdiblePB = pinkyEdiblePB;
	this.inkyEdiblePB = inkyEdiblePB;
	this.sueEdiblePB = sueEdiblePB;
	this.blinkyLairPB = blinkyLairPB;
	this.pinkyLairPB = pinkyLairPB;
	this.inkyLairPB = inkyLairPB;
	this.sueLairPB = sueLairPB;
	this.pillsProgressBar = pillsProgressBar;
	this.powerPillsPB = powerPillsPB;
}

ReplayDashboard.prototype.update = function()
{
	cur_gs = this.replayController.replay.gameStates[this.replayController.timeStep];
	cur_maze = mazes[cur_gs.ma];
	this.totalTimeElem.html(cur_gs.tt + " of " + game_states.length);
	this.scoreElem.html(cur_gs.sc);
	this.livesElem.html(cur_gs.li);

	this.mazeElem.html(get_maze_name(cur_gs.ma));

	// pills
	pills_counter = 0;

	for (var i = 0; i < cur_gs.pi.length; i++)
		if (cur_gs.pi[i] == 1)
			pills_counter++;

	// 
	this.pillsElem.html(pills_counter + " of " + cur_gs.pi.length);
	this.pillsProgressBar.progressbar({ value: pills_counter, max: cur_gs.pi.length });

	// power pills
	powers_counter = 0;
	
	for (var i = 0; i < cur_gs.po.length; i++)
		if (cur_gs.po[i] == 1)
			powers_counter++;

	this.powerPillsElem.html(powers_counter + " of " + cur_gs.po.length);
	this.powerPillsPB.progressbar({ value: powers_counter, max: cur_gs.po.length });

	// pacman
	this.pacLocIndexElem.html(cur_gs.pn);
	this.pacLocCoordElem.html(cur_maze.nodes[cur_gs.pn][0]
			+ ", " + cur_maze.nodes[cur_gs.pn][1]);
	this.pacDirElem.html(get_direction_name(cur_gs.pd));

	// blinky
	this.blinkyLocIndexElem.html(cur_gs.gh[0].gn);
	this.blinkyLocCoordElem.html(cur_maze.nodes[cur_gs.gh[0].gn][0] + ", " + cur_maze.nodes[cur_gs.gh[0].gn][1]);
	this.blinkyEdTimeElem.html(cur_gs.gh[0].et);
	this.blinkyDirElem.html(get_direction_name(cur_gs.gh[0].di));
	this.blinkyLairTimeElem.html(cur_gs.gh[0].lt);
	this.blinkyLairPB.progressbar({ value: cur_gs.gh[0].lt });
	this.blinkyEdiblePB.progressbar({ value: cur_gs.gh[0].et });

	// pinky
	this.pinkyLocIndexElem.html(cur_gs.gh[1].gn);
	this.pinkyLocCoordElem.html(cur_maze.nodes[cur_gs.gh[1].gn][0]
			+ ", " + cur_maze.nodes[cur_gs.gh[1].gn][1]);
	this.pinkyEdTimeElem.html(cur_gs.gh[1].et);
	this.pinkyDirElem.html(get_direction_name(cur_gs.gh[1].di));
	this.pinkyLairTimeElem.html(cur_gs.gh[1].lt);
	this.pinkyLairPB.progressbar({ value: cur_gs.gh[1].lt });
	this.pinkyEdiblePB.progressbar({ value: cur_gs.gh[1].et });
			
	// inky
	this.inkyLocIndexElem.html(cur_gs.gh[2].gn);
	this.inkyLocCoordElem.html(cur_maze.nodes[cur_gs.gh[2].gn][0]
			+ ", " + cur_maze.nodes[cur_gs.gh[2].gn][1]);
	this.inkyEdTimeElem.html(cur_gs.gh[2].et);
	this.inkyDirElem.html(get_direction_name(cur_gs.gh[2].di));
	this.inkyLairTimeElem.html(cur_gs.gh[2].lt);
	this.inkyLairPB.progressbar({ value: cur_gs.gh[2].lt });
	this.inkyEdiblePB.progressbar({ value: cur_gs.gh[2].et });
			
	// sue
	this.sueLocIndexElem.html(cur_gs.gh[3].gn);
	this.sueLocCoordElem.html(cur_maze.nodes[cur_gs.gh[3].gn][0]
			+ ", " + cur_maze.nodes[cur_gs.gh[3].gn][1]);
	this.sueEdTimeElem.html(cur_gs.gh[3].et);
	this.sueDirElem.html(get_direction_name(cur_gs.gh[3].di));
	this.sueLairTimeElem.html(cur_gs.gh[3].lt);
	this.sueLairPB.progressbar({ value: cur_gs.gh[3].lt });
	this.sueEdiblePB.progressbar({ value: cur_gs.gh[3].et });
}