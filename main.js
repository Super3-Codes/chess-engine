let board = [];
const rows = 8;
const col = 8;
const chessBoard = document.getElementById("chess-board");

class Node{
	constructor(id , rowNum , colNum){
		this.id = id
		this.rowNum = rowNum;
		this.colNum = colNum;
		this.classType = "";
	}

}
function setSquareColor(i,j){
	let squareColor = "";

	if(i%2 == 0){

		if(j%2 == 0){
			squareColor = "dark-square";
		}else{
			squareColor = "light-square";
		}

	}else{
		if(j%2 == 0){
			squareColor = "light-square";
		}else{
			squareColor = "dark-square";
		}
	}

	return squareColor;
	
}
function setId(j){
	
	switch(j){
		case 0 :
			j = "a";
			break;
		case 1 :
			j = "b";
			break;
		case 2 :
			j = "c";
			break;
		case 3 :
			j = "d";
			break;
		case 4 :
			j = "e";
			break;
		case 5 :
			j = "f";
			break;
		case 6 :
			j = "g";
			break;
		case 7 :
			j = "h";
			break;


	}

	return j
	
}
function createBoard(){
	let tableHTML = "";
	let rowNum = 8;

	for (let i = 0; i < rows ; i++ ){
		let currentHTMLRow = `<tr id="row ${i}">`;
		
		

		board.push([]);

		board[i].push(new Array(col));

		for (let j=0; j < col; j++){
			let nodeId = `${setId(j)}${rowNum}`;
			
			let squareColor = setSquareColor(i,j);

			board[i][j] = new Node(nodeId, i ,j);
			board[i][j].classType = squareColor;
			currentHTMLRow +=`<td id = "${nodeId}"  class=${squareColor}></td>`;


		}
		rowNum--;

		tableHTML += `${currentHTMLRow}</tr>`;
		chessBoard.innerHTML = tableHTML;

	}
}
createBoard();
console.log(board);
