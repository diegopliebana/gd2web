	
var ghosts_imgs = new Array(4);
// var ghost_names = ['blinky', 'pinky', 'inky', 'sue'];
var dir_names = ['up', 'right', 'down', 'left'];	
var pac_imgs = [new Array(3), new Array(3), new Array(3), new Array(3)];
var pac_img_fn = new Array(3);
var maze_imgs_fn = new Array();	
pac_img_fn[0] = new Array(3);
pac_img_fn[1] = new Array(3);
pac_img_fn[2] = new Array(3);
pac_img_fn[3] = new Array(3);
var maze_imgs = new Array();
var pos = 0;
var game_state_index = 0;
var playing = false;

var MAX_EDIBLE_TIME = 200; 
var EDIBLE_ALERT = 30;
var LAIR_TIME = 40;

jQuery(function() {
	load_pacman();
	$("#pillsProgressBar").progressbar({ value: 37, max: 220 });
	
	$("#blinkyEdiblePB").progressbar({ value: 0, max: MAX_EDIBLE_TIME });
	$("#pinkyEdiblePB").progressbar({ value: 0, max: MAX_EDIBLE_TIME });
	$("#inkyEdiblePB").progressbar({ value: 0, max: MAX_EDIBLE_TIME });
	$("#sueEdiblePB").progressbar({ value: 0, max: MAX_EDIBLE_TIME });
	
	$("#blinkyLairPB").progressbar({ value: 0, max: LAIR_TIME });
	$("#pinkyLairPB").progressbar({ value: 0, max: LAIR_TIME });
	$("#inkyLairPB").progressbar({ value: 0, max: LAIR_TIME });
	$("#sueLairPB").progressbar({ value: 0, max: LAIR_TIME });
	
	$("#gameSlider" ).slider({disabled: true, value: 0, max: game_states.length - 1 });
	$("#testbutton").button();
	// $("#gameSlider").slider({
	// 	change: function(event, ui) {
	// 		game_state_index = $("#gameSlider").slider("option", "value");
	// 		draw();
	// 	}
	// });
	
	$( "#gameSlider" ).slider({
		slide: function(event, ui) {
			change_game_state($("#gameSlider").slider("option", "value"));
			draw();
		}
	});
});

function change_game_state(step)
{
	game_state_index = step;
	
	// $("#gameSlider").slider({ value: game_state_index });
	$("#gameSlider").slider( "option", "value", game_state_index );
	$("#gameSlider").slider("option", "range", 'min');
	
	// last
	if (game_state_index == (game_states.length - 1))
	{
		$("#gameSlider" ).slider( "option", "disabled", true);
		$('#playButton').html("Play");
		$('#playButton').attr('disabled', true);
		$('#startButton').attr('disabled', false);
		$('#prevButton').attr('disabled', false);
		$('#nextButton').attr('disabled', true);
		$('#endButton').attr('disabled', true);
		playing = false;
	}
	// first
	else if (game_state_index == 0)
	{
		$('#startButton').attr('disabled', true);
		$('#prevButton').attr('disabled', true);
		$('#nextButton').attr('disabled', false);
		$('#endButton').attr('disabled', false);
		$('#playButton').attr('disabled', false);
		$("#gameSlider" ).slider( "option", "disabled", false);
		playing = false;
	}
	else
	{
		if (playing)
		{
			$('#startButton').attr('disabled', true);
			$('#prevButton').attr('disabled', true);
			$('#nextButton').attr('disabled', true);
			$('#endButton').attr('disabled', true);
		}
		else
		{
			$('#startButton').attr('disabled', false);
			$('#prevButton').attr('disabled', false);
			$('#nextButton').attr('disabled', false);
			$('#endButton').attr('disabled', false);
		}

		$('#playButton').attr('disabled', false);
		$("#gameSlider" ).slider( "option", "disabled", false);
	}
	
	draw();
}
		
// click on the play/stop button
function play()
{
	if (!playing)
	{
		playing = true;
		$('#playButton').html("Stop");
		$('#startButton').attr('disabled', true);
		$('#prevButton').attr('disabled', true);
		$('#nextButton').attr('disabled', true);
		$('#endButton').attr('disabled', true);
		animate();
	}
	else
	{
		playing = false;
		$('#playButton').html("Play");
		$('#startButton').attr('disabled', false);
		$('#prevButton').attr('disabled', false);
		$('#nextButton').attr('disabled', false);
		$('#endButton').attr('disabled', false);
	}
}

function animate()
{
	if (playing && game_state_index < game_states.length)
	{
		controller('next');
		setTimeout("animate()", 20);
	}
}

function stop()
{
	playing = false;
}
 
function controller(action)
{
	switch (action)
	{
		case 'start':
			change_game_state(0);
			break;
		case 'prev':
			if (game_state_index > 0)
				change_game_state(game_state_index - 1);
			break;
		case 'next':
			if (game_state_index < (game_states.length - 1))
				change_game_state(game_state_index + 1);
			break;
		case 'end':
			change_game_state(game_states.length - 1);
			break;
		case 'play':
			play();
			break;
	}
}

function load_pacman()
{		
	// LOAD MAZE IMAGES
	maze_imgs_fn[0] = "maze-a.png";
	maze_imgs_fn[1] = "maze-b.png";
	maze_imgs_fn[2] = "maze-c.png";
	maze_imgs_fn[3] = "maze-d.png";
			
	for (i = 0; i < 4; i++)
	{
		maze_imgs[i] = new Image();
		maze_imgs[i].src = "images/pacman/" + maze_imgs_fn[i];
	}
	
	//////////////////////// 
	// LOAD GHOSTS IMAGES //
	////////////////////////		
	
	for (i = 0; i < 6; i++)
	{
		ghosts_imgs[i] = new Array(4);
		
		for (j = 0; j < 4; j++)
			ghosts_imgs[i][j] = new Array(2);
	}
	
	// this is probably the worst javascript in the history of javascript
	ghosts_imgs[0][0][0] = new Image();
	ghosts_imgs[0][0][0].src = "images/pacman/blinky-up-1.png";
	ghosts_imgs[0][0][1] = new Image();
	ghosts_imgs[0][0][1].src = "images/pacman/blinky-up-2.png";
	ghosts_imgs[0][1][0] = new Image();
	ghosts_imgs[0][1][0].src = "images/pacman/blinky-right-1.png";
	ghosts_imgs[0][1][1] = new Image();
	ghosts_imgs[0][1][1].src = "images/pacman/blinky-right-2.png";
	ghosts_imgs[0][2][0] = new Image();
	ghosts_imgs[0][2][0].src = "images/pacman/blinky-down-1.png";
	ghosts_imgs[0][2][1] = new Image();
	ghosts_imgs[0][2][1].src = "images/pacman/blinky-down-2.png";
	ghosts_imgs[0][3][0] = new Image();
	ghosts_imgs[0][3][0].src = "images/pacman/blinky-left-1.png";
	ghosts_imgs[0][3][1] = new Image();
	ghosts_imgs[0][3][1].src = "images/pacman/blinky-left-2.png";
	
	ghosts_imgs[1][0][0] = new Image();
	ghosts_imgs[1][0][0].src = "images/pacman/pinky-up-1.png";
	ghosts_imgs[1][0][1] = new Image();
	ghosts_imgs[1][0][1].src = "images/pacman/pinky-up-2.png";
	ghosts_imgs[1][1][0] = new Image();
	ghosts_imgs[1][1][0].src = "images/pacman/pinky-right-1.png";
	ghosts_imgs[1][1][1] = new Image();
	ghosts_imgs[1][1][1].src = "images/pacman/pinky-right-2.png";
	ghosts_imgs[1][2][0] = new Image();
	ghosts_imgs[1][2][0].src = "images/pacman/pinky-down-1.png";
	ghosts_imgs[1][2][1] = new Image();
	ghosts_imgs[1][2][1].src = "images/pacman/pinky-down-2.png";
	ghosts_imgs[1][3][0] = new Image();
	ghosts_imgs[1][3][0].src = "images/pacman/pinky-left-1.png";
	ghosts_imgs[1][3][1] = new Image();
	ghosts_imgs[1][3][1].src = "images/pacman/pinky-left-2.png";
	
	ghosts_imgs[2][0][0] = new Image();
	ghosts_imgs[2][0][0].src = "images/pacman/inky-up-1.png";
	ghosts_imgs[2][0][1] = new Image();
	ghosts_imgs[2][0][1].src = "images/pacman/inky-up-2.png";
	ghosts_imgs[2][1][0] = new Image();
	ghosts_imgs[2][1][0].src = "images/pacman/inky-right-1.png";
	ghosts_imgs[2][1][1] = new Image();
	ghosts_imgs[2][1][1].src = "images/pacman/inky-right-2.png";
	ghosts_imgs[2][2][0] = new Image();
	ghosts_imgs[2][2][0].src = "images/pacman/inky-down-1.png";
	ghosts_imgs[2][2][1] = new Image();
	ghosts_imgs[2][2][1].src = "images/pacman/inky-down-2.png";
	ghosts_imgs[2][3][0] = new Image();
	ghosts_imgs[2][3][0].src = "images/pacman/inky-left-1.png";
	ghosts_imgs[2][3][1] = new Image();
	ghosts_imgs[2][3][1].src = "images/pacman/inky-left-2.png";
	
	ghosts_imgs[3][0][0] = new Image();
	ghosts_imgs[3][0][0].src = "images/pacman/sue-up-1.png";
	ghosts_imgs[3][0][1] = new Image();
	ghosts_imgs[3][0][1].src = "images/pacman/sue-up-2.png";
	ghosts_imgs[3][1][0] = new Image();
	ghosts_imgs[3][1][0].src = "images/pacman/sue-right-1.png";
	ghosts_imgs[3][1][1] = new Image();
	ghosts_imgs[3][1][1].src = "images/pacman/sue-right-2.png";
	ghosts_imgs[3][2][0] = new Image();
	ghosts_imgs[3][2][0].src = "images/pacman/sue-down-1.png";
	ghosts_imgs[3][2][1] = new Image();
	ghosts_imgs[3][2][1].src = "images/pacman/sue-down-2.png";
	ghosts_imgs[3][3][0] = new Image();
	ghosts_imgs[3][3][0].src = "images/pacman/sue-left-1.png";
	ghosts_imgs[3][3][1] = new Image();
	ghosts_imgs[3][3][1].src = "images/pacman/sue-left-2.png";
	
	ghosts_imgs[4][0][0] = new Image();
	ghosts_imgs[4][0][0].src = "images/pacman/edible-ghost-1.png";
	ghosts_imgs[4][0][1] = new Image();
	ghosts_imgs[4][0][1].src = "images/pacman/edible-ghost-2.png";
	
	ghosts_imgs[5][0][0] = new Image();
	ghosts_imgs[5][0][0].src = "images/pacman/edible-ghost-blink-1.png";
	ghosts_imgs[5][0][1] = new Image();
	ghosts_imgs[5][0][1].src = "images/pacman/edible-ghost-blink-2.png";
	
	//////////////////////// 
	// LOAD PACMAN IMAGES //
	////////////////////////
			
	// UP
	pac_img_fn[0][0] = "mspacman-up-normal.png";
	pac_img_fn[0][1] = "mspacman-up-open.png";
	pac_img_fn[0][2] = "mspacman-up-closed.png";
	// RIGHT
	pac_img_fn[1][0] = "mspacman-right-normal.png";
	pac_img_fn[1][1] = "mspacman-right-open.png";
	pac_img_fn[1][2] = "mspacman-right-closed.png";
	// DOWN
	pac_img_fn[2][0] = "mspacman-down-normal.png";
	pac_img_fn[2][1] = "mspacman-down-open.png";
	pac_img_fn[2][2] = "mspacman-down-closed.png";
	// LEFT
	pac_img_fn[3][0] = "mspacman-left-normal.png";
	pac_img_fn[3][1] = "mspacman-left-open.png";
	pac_img_fn[3][2] = "mspacman-left-closed.png";
	
	// direction
	for (i = 0; i < 4; i++)
	{
		// image type
		for (j = 0; j < 3; j++)
		{
			pac_imgs[i][j] = new Image();
			pac_imgs[i][j].src = "images/pacman/" + pac_img_fn[i][j];
		}
	}

	change_game_state(0);
	play();
}

function get_maze_name(maze_index)
{
	switch (maze_index)
	{
		case 0:
			return 'A';
		case 1: 
		 	return 'B';
		case 2:
			return 'C';
		case 3:
			return 'D';
	}
}

function get_direction_name(dir)
{
	switch (dir)
	{
		case 0:
			return '&#8593; (Up)';
		case 1: 
		 	return '&#8594; (Right)';
		case 2:
			return '&#8595; (Down)';
		case 3:
			return '&#8592; (Left)';
		case 4:
			return 'Neutral';
		return 'wrong-> '+ dir;
	}
}

function draw()
{
	// var gs_info = document.getElementById('gsInfo');
	// gs_info.innerHTML = (game_state_index + 1) + ' of ' + game_states.length;
		
	// load canvas		
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	
	// current game state
	cur_gs = game_states[game_state_index];
	
	// current maze
	cur_maze = mazes[cur_gs.ma];

	// game
	document.getElementById('total_time').innerHTML = cur_gs.tt + " of " + game_states.length;
	document.getElementById('score').innerHTML = cur_gs.sc;
	document.getElementById('lives_remaining').innerHTML = cur_gs.li;
	
	// maze
	document.getElementById('maze').innerHTML = get_maze_name(cur_gs.ma);
	
	// pills
	pills_counter = 0;
	
	for (i = 0; i < cur_gs.pi.length; i++)
	{
		pill = cur_gs.pi[i];
		
		if (pill == 1)
		{
			pills_counter++;
		}
	}

	$("#pillsProgressBar").progressbar({ max: cur_gs.pi.length });
	$("#pillsProgressBar").progressbar( "option", "value", pills_counter);

	document.getElementById('pills').innerHTML = pills_counter + " of " + cur_gs.pi.length;
	
	// power pills
	powers_counter = 0;
	
	for (i = 0; i < cur_gs.po.length; i++)
	{
		power = cur_gs.po[i];
		
		if (power == 1)
		{
			powers_counter++;
		}
	}

	$("#powerPillsPB").progressbar({ max: cur_gs.po.length });
	$("#powerPillsPB").progressbar( "option", "value", powers_counter);

	document.getElementById('powers').innerHTML = powers_counter + " of " + cur_gs.po.length;
	
	// blinky
	$('#blinky_loc_index').html(cur_gs.gh[0].gn);
	$('#blinky_loc_coord').html(cur_maze.nodes[cur_gs.gh[0].gn][0] + ", " + cur_maze.nodes[cur_gs.gh[0].gn][1]);
	$('#blinky_edible_time').html(cur_gs.gh[0].et);
	$('#blinky_dir').html(get_direction_name(cur_gs.gh[0].di));
	$('#blinky_lair_time').html(cur_gs.gh[0].lt);
	
	$("#blinkyLairPB").progressbar({ value: cur_gs.gh[0].lt });	
	$("#blinkyEdiblePB").progressbar({ value: cur_gs.gh[0].et });
	
	// pinky
	document.getElementById('pinky_loc_index').innerHTML = cur_gs.gh[1].gn;
	document.getElementById('pinky_loc_coord').innerHTML = cur_maze.nodes[cur_gs.gh[1].gn][0]
			+ ", " + cur_maze.nodes[cur_gs.gh[1].gn][1];
	document.getElementById('pinky_edible_time').innerHTML = cur_gs.gh[1].et;
	document.getElementById('pinky_dir').innerHTML = get_direction_name(cur_gs.gh[1].di);
	document.getElementById('pinky_lair_time').innerHTML = cur_gs.gh[1].lt;

	$("#pinkyLairPB").progressbar({ value: cur_gs.gh[1].lt });
	$("#pinkyEdiblePB").progressbar({ value: cur_gs.gh[1].et });

	// inky
	document.getElementById('inky_loc_index').innerHTML = cur_gs.gh[2].gn;
	document.getElementById('inky_loc_coord').innerHTML = cur_maze.nodes[cur_gs.gh[2].gn][0]
			+ ", " + cur_maze.nodes[cur_gs.gh[2].gn][1];
	document.getElementById('inky_edible_time').innerHTML = cur_gs.gh[2].et;
	document.getElementById('inky_dir').innerHTML = get_direction_name(cur_gs.gh[2].di);
	document.getElementById('inky_lair_time').innerHTML = cur_gs.gh[2].lt;

	$("#inkyLairPB").progressbar({ value: cur_gs.gh[2].lt });
	$("#inkyEdiblePB").progressbar({ value: cur_gs.gh[2].et });

	// sue
	document.getElementById('sue_loc_index').innerHTML = cur_gs.gh[3].gn;
	document.getElementById('sue_loc_coord').innerHTML = cur_maze.nodes[cur_gs.gh[3].gn][0]
			+ ", " + cur_maze.nodes[cur_gs.gh[3].gn][1];
	document.getElementById('sue_edible_time').innerHTML = cur_gs.gh[3].et;
	document.getElementById('sue_dir').innerHTML = get_direction_name(cur_gs.gh[3].di);
	document.getElementById('sue_lair_time').innerHTML = cur_gs.gh[3].lt;

	$("#sueLairPB").progressbar({ value: cur_gs.gh[3].lt });
	$("#sueEdiblePB").progressbar({ value: cur_gs.gh[3].et });
	
	// pacman
	document.getElementById('pacman_loc_index').innerHTML = cur_gs.pn;
	document.getElementById('pacman_loc_coord').innerHTML = cur_maze.nodes[cur_gs.pn][0]
			+ ", " + cur_maze.nodes[cur_gs.pn][1];
	document.getElementById('pacman_dir').innerHTML = get_direction_name(cur_gs.pd);

	// fill background
	ctx.fillStyle = "rgba(0, 0, 0, 1.0)";
	ctx.fillRect (0, 0, 224, 280);
	
	// draw Maze
	ctx.drawImage(maze_imgs[cur_gs.ma], 0, 0);

	// draw info
	ctx.font = "13px sans-serif";
	ctx.fillStyle = "White";
	ctx.fillText("S: " + cur_gs.sc, 10, 268);
	ctx.fillText("L: " + (cur_gs.le + 1), 70, 268);
	ctx.fillText("T: " + cur_gs.tt, 110, 268);

	// draw lives	
	for (i = 0; i < cur_gs.li - 1; i++)
		ctx.drawImage(pac_imgs[1][0], 180 + (i * 20), 255);
	
	// draw pills
	for (i = 0; i < cur_gs.pi.length; i++)
	{
		pill = cur_gs.pi[i];
		
		if (pill == 1)
		{
			loc = cur_maze.pillNodes[i];
			ctx.beginPath();
			ctx.fillStyle = "#fff";
			ctx.arc(loc[0] * 2 + 4, loc[1] * 2 + 4, 1, 0, Math.PI * 2, true);
			ctx.closePath();
			ctx.fill();
		}
	}

	// draw power pills
	for (i = 0; i < cur_gs.po.length; i++)
	{
		power = cur_gs.po[i];
		
		if (power == 1)
		{
			loc = cur_maze.powerPillNodes[i];
			ctx.beginPath();
			ctx.fillStyle = "#fff";
			ctx.arc(loc[0] * 2 + 4, loc[1] * 2 + 4, 3, 0, Math.PI * 2, true);
			ctx.closePath();
			ctx.fill();
		}
	}

	// draw pacman
	
	pacLoc = cur_maze.nodes[cur_gs.pn];
	pacDir = cur_gs.pd;
	
	if (pacDir < 0 || pacDir >= 4)
		pacDir = 0;
	
	img = Math.floor((game_state_index % 6) / 2);
	ctx.drawImage(pac_imgs[pacDir][img], pacLoc[0] * 2 - 3, pacLoc[1] * 2 - 2);

	// draw ghosts
	for (i = 0; i < 4; i++)
	{
		gLoc = cur_maze.nodes[cur_gs.gh[i].gn];
		gDir = cur_gs.gh[i].di;
		gEdibleTime = cur_gs.gh[i].et;
		gLairTime = cur_gs.gh[i].lt;
		img = Math.floor((game_state_index % 6) / 2);
		
		if (gEdibleTime > 0)
		{
			if (gEdibleTime < EDIBLE_ALERT && Math.floor(((game_states[game_state_index].tt % 6) / 3)) == 0)
				ctx.drawImage(ghosts_imgs[5][0][Math.floor(((game_states[game_state_index].tt % 6) / 3))], gLoc[0] * 2 -3, gLoc[1] * 2 - 2);
			else
				ctx.drawImage(ghosts_imgs[4][0][Math.floor(((game_states[game_state_index].tt % 6) / 3))], gLoc[0] * 2 -3, gLoc[1] * 2 - 2);			
		}
		else
		{
			if (cur_gs.gh[i].gn.lt > 0)
				ctx.drawImage(ghosts_imgs[i][0][Math.floor(((game_states[game_state_index].tt % 6) / 3))], gLoc[0] * 2 - 3, gLoc[1] * 2 - 2);
			else
				ctx.drawImage(ghosts_imgs[i][gDir][Math.floor(((game_states[game_state_index].tt % 6) / 3))], gLoc[0] * 2 - 3, gLoc[1] * 2 - 2);
		}
	}
	
	// game over
	if (game_state_index == (game_states.length - 1))
	{
		ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
		ctx.fillRect (0, 0, 224, 280);
		ctx.font = "18px sans-serif";
		ctx.fillStyle = "Red";
		ctx.fillText("GAME OVER", 58, 125);
	} 
	else if (game_state_index == 0)
	{
		ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
		ctx.fillRect (0, 0, 224, 280);
		ctx.font = "18px sans-serif";
		ctx.fillStyle = "White";
		ctx.fillText("START", 82, 125);
	}
}
