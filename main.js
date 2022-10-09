let board = [];
const rows = 8;
const col = 8;
const chessBoard = document.getElementById("chess-board");

const blackPawnImage = "url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png')";
const blackRookImage = "url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/br.png')";
const blackNightImage = "url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bn.png')";
const blackBishopImage = "url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bb.png')";
const blackQueenImage = "url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bq.png')";
const blackKingImage = "url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bk.png')"

const whitePawnImage = "url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png')";
const whiteRookImage = "url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wr.png')";
const whiteNightImage = "url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wn.png')";
const whiteBishopImage = "url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wb.png')";
const whiteQueenImage = "url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wq.png')";
const whiteKingImage = "url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wk.png')";


class Node{
	constructor(id, rowNum , colNum){
		this.id = id
		this.rowNum = rowNum;
		this.colNum = colNum;
		this.classType = "";
		this.piece = "";
	}

}
class BoardPiece{
	constructor(name, position){
		this.name = name;
		this.position = position;
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
			let table_id = `${i}-${j}`
			
			let squareColor = setSquareColor(i,j);

			board[i][j] = new Node(nodeId, i ,j);
			board[i][j].classType = squareColor;
			currentHTMLRow +=`<td id = "${table_id}"  class=${squareColor}><div id="${nodeId}" class="piece"></div></td>`;


		}
		rowNum--;

		tableHTML += `${currentHTMLRow}</tr>`;
		chessBoard.innerHTML = tableHTML;

	}
}
function setPiecs(){
	for(let i = 0; i < rows; i++){
		for(let j = 0; j < col; j++){

			
			let nodeId = board[i][j].id;

			if( i == 1){
				
				board[i][j].element = new BoardPiece("BP","${nodeId}")
				document.getElementById(nodeId).style.backgroundImage = blackPawnImage;
			}

			if(i == 6){
				board[i][j].element = new BoardPiece("WP","${nodeId}")
				document.getElementById(nodeId).style.backgroundImage = whitePawnImage;
			}
			if(i == 0 && j == 0){
				board[i][j].element = new BoardPiece("BR","${nodeId}")
				document.getElementById(nodeId).style.backgroundImage = blackRookImage;
			}
			if( i == 0 && j == 1){
				board[i][j].element = new BoardPiece("BN","${nodeId}")
				document.getElementById(nodeId).style.backgroundImage = blackNightImage;
			}
			if( i ==0 && j == 2){
				board[i][j].element = new BoardPiece("BB","${nodeId}")
				document.getElementById(nodeId).style.backgroundImage = blackBishopImage;
			}
			if( i == 0 && j == 3){
				board[i][j].element = new BoardPiece("BQ","${nodeId}")
				document.getElementById(nodeId).style.backgroundImage = blackQueenImage;
			}
			if( i == 0 && j == 4){
				board[i][j].element = new BoardPiece("BK","${nodeId}")
				document.getElementById(nodeId).style.backgroundImage = blackKingImage;
			}
			if( i == 0 && j == 5){
				board[i][j].element = new BoardPiece("BB","${nodeId}")
				document.getElementById(nodeId).style.backgroundImage = blackBishopImage;
			}
			if( i == 0 && j == 6){
				board[i][j].element = new BoardPiece("BK","${nodeId}")
				document.getElementById(nodeId).style.backgroundImage = blackNightImage;
			}
			if( i == 0 && j == 7){
				board[i][j].element = new BoardPiece("BR","${nodeId}")
				document.getElementById(nodeId).style.backgroundImage = blackRookImage;
			}

			//White Piece

			if(i == 7 && j == 0){
				board[i][j].element = new BoardPiece("WR","${nodeId}")
				document.getElementById(nodeId).style.backgroundImage = whiteRookImage;
			}
			if( i == 7 && j == 1){
				board[i][j].element = new BoardPiece("WN","${nodeId}")
				document.getElementById(nodeId).style.backgroundImage = whiteNightImage;
			}
			if( i == 7&& j == 2){
				board[i][j].element = new BoardPiece("WB","${nodeId}")
				document.getElementById(nodeId).style.backgroundImage = whiteBishopImage;
			}
			if( i == 7 && j == 3){
				board[i][j].element = new BoardPiece("WQ","${nodeId}")
				document.getElementById(nodeId).style.backgroundImage = whiteQueenImage;
			}
			if( i == 7 && j == 4){
				board[i][j].element = new BoardPiece("WK","${nodeId}")
				document.getElementById(nodeId).style.backgroundImage = whiteKingImage;
			}
			if( i == 7 && j == 5){
				board[i][j].element = new BoardPiece("WB","${nodeId}")
				document.getElementById(nodeId).style.backgroundImage = whiteBishopImage;
			}
			if( i == 7 && j == 6){
				board[i][j].element = new BoardPiece("WK","${nodeId}")
				document.getElementById(nodeId).style.backgroundImage = whiteNightImage;
			}
			if( i == 7 && j == 7){
				board[i][j].element = new BoardPiece("WR","${nodeId}")
				document.getElementById(nodeId).style.backgroundImage = whiteRookImage;
			}

		}
	}
}
function transformFen(fen){
	let pos = fen.split("/");
	for(let i = pos.length-1; i >= 0 ; i--){
		let definate_pos = pos[i].split("");

		for(let j = 0; j <= definate_pos.length-1; j++){

			console.log(definate_pos[j] + " "+ setId(j) +  " " + `${i+1}`);
		}
	}
}


createBoard();
setPiecs();
console.log(transformFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"))


let pawn = new BoardPiece("pawn", "a7");

console.log(pawn);




board[1][1].piece = pawn;

console.log(board);
