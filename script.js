console.log("JS is alive!");

window.onload = function() {


//game start
var gs_count = 0;
document.querySelector(".board").addEventListener('click', count);
function count() {
	gs_count += 1;
}

//first player 

var player = "";

(function (){
	
	if (Math.random() <= 0.5)  {
		player = " X";
	}
	else {
		player = " O";
	}
	document.querySelector('.first').innerText += player;

})();

// x/o

var turn = "";
function xo(e) {
	if (gs_count === 0){	
		if (player === " X") {
				turn = "X";
				document.querySelector('.playerTurn').innerText += turn;
		}
		else if (player === " O") {
				turn = "O";
				document.querySelector('.playerTurn').innerText +=  turn;
		}
	}
	else if (gs_count > 0 && event.target.innerText === '*') {
		if (turn === "X") {
				turn = "O";
				document.querySelector('.playerTurn').innerText += turn;
		}
		else if (turn === "O") {
				turn = "X";
				document.querySelector('.playerTurn').innerText += turn;
		}
	}
}

var cell = document.querySelectorAll('.col');

for (var i=0; i<cell.length; i++) {
	cell[i].addEventListener('click', mark);
}

function mark(e) {
	xo(e);
	e.target.innerText = turn;
}

//reset button

var reset_btn = document.querySelector('.btn');
reset_btn.addEventListener('click', reset);
	
function reset(e) {
	for (var i=0; i<cell.length; i++) {
		cell[i].innerText = "*";
	}
}

};

















