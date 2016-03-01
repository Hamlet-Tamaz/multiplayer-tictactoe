console.log("JS is alive!");

window.onload = function() {


//game start
var gs_count = 0;
var cell = document.querySelectorAll('.col');

addEventListener('click', count);
function count() {
	gs_count += 1;
	console.log(gs_count);
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
pturn = document.querySelector('.playerTurn');
function xo(e) {
	if (gs_count === 0){	
		if (player === " X") {
				turn = "X";
				pturn.innerText += turn;
		}
		else if (player === " O") {
				turn = "O";
				pturn.innerText +=  turn;
		}
	}
	else if (gs_count > 0 && event.target.innerText === '*') {
		if (turn === "X") {
				turn = "O";
				pturn.innerText += turn;
		}
		else if (turn === "O") {
				turn = "X";
				pturn.innerText += turn;
		}
	}
}


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
		pturn.innerText = "Turns: ";
	}
}



// Game overs
// function compare(testArr) {
//     if (this.length != testArr.length) return false;
//     for (var i = 0; i < testArr.length; i++) {
//         if (this[i].compare) { 
//             if (!this[i].compare(testArr[i])) return false;
//         }
//         if (this[i] !== testArr[i]) return false;
//     }
//     return true;
// }

	function needle(a, b) {
  		for(var i = 0; i < a.length; i++){
    		if(b.indexOf(a[i]) === -1) {
       			return false;
    		}
    	}
  		return true;
	}

for (var i=0; i<cell.length; i++) {
	cell[i].addEventListener('click', winner);
}

	var cell = document.querySelectorAll('.col');
	var xWinStreak = [];
	var oWinStreak = [];
	var winCount = 0;
	var wCombos = [[0,1,2],[3,4,5],[6,7,8],
	[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


function winner(e) {

	if (e.target.innerText === "X") {
		xWinStreak.push(Number(e.target.getAttribute('id')[4]));
		compareX(xWinStreak,wCombos);

	}
	else {
		oWinStreak.push(Number(e.target.getAttribute('id')[4]));
		compareO(xWinStreak,wCombos);

	}



	function compareX(xWinStreak, wCombos) {
	    // debugger
	    // var winCount = 0;
	    // var arr = [];
	    console.log(wCombos, xWinStreak);
	    for (var j in wCombos) {
	        if (needle(wCombos[j], xWinStreak)) {
	            alert("Game Over; X WINS!");
	            reset();
	            xWinStreak = [];
	        }
	    }    
	}    

	function compareO(oWinStreak, wCombos) {
	    // var winCount = 0;
	    // var arr = [];
	    console.log(wCombos, oWinStreak);
	    for (var j in wCombos) {
	        if (needle(wCombos[j], oWinStreak)) {
	            alert("Game Over; O WINS!");
	            reset();
	            oWinStreak = [];
	        }
	    }    
	}    
// debugger
}







};

















