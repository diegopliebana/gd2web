var MAX_EDIBLE_TIME = 200; 
var EDIBLE_ALERT = 30;
var LAIR_TIME = 100;

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