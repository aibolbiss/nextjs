enum Direction1 {
	Up,     // 0
	Down,   // 1
	Right,  // 2
	Left,   // 3
}

enum Direction2 {
	Up = 'UP',
	Down = 'DOWN',
	Right = 'RIGHT',
	LEft = 'LEFT'
}

function runEnum(obj: {Up: string}){
	return obj.Up
}

let text = runEnum(Direction2)

console.log(text); // UP
