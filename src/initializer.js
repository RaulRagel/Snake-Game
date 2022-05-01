
var game;
var snake;
var apple;
var board;

//10 fps
var gameSpeed = 100;
var cells = 20;

window.onload = function(){

    var gameContainer = document.getElementById("game-container");

    board = new Board(gameContainer, cells); //default: 20 (cells), 500 (boardTam)
    
    apple = new Apple(board); //default: random (x), random (y)
    snake = new Snake(board, apple); //default: 0 (x), 0 (y)

    game = new SnakeGame(board, snake, apple, gameSpeed); //default: 100 (gameSpeed)



    


}





