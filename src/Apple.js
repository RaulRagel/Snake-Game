

class Apple {

    apple;

    constructor(board, x, y) {

        this.boardElement = board.boardElement;
        this.board = board;

        this.tam = board.cellTam;
        
        this.ranX = Math.floor(Math.random()*board.cells);
        this.ranY = Math.floor(Math.random()*board.cells);

        x ? this.x = x : this.x = this.ranX;
        y ? this.y = y : this.y = this.ranY;

        this.create();
        this.init();
    }


    create(){

        var elem = document.createElement("div");
        elem.id = "apple";

        this.apple = elem;
    }
    
    init(){
        
        this.apple.style.left = this.x*this.board.cellTam+'px';
        this.apple.style.top = this.y*this.board.cellTam+'px';

        this.apple.style.width = this.tam+'px';
        this.apple.style.height = this.tam+'px';

        this.boardElement.appendChild(this.apple)
    }


    new(){

        this.x = Math.floor(Math.random()*this.board.cells);
        this.y = Math.floor(Math.random()*this.board.cells);

        this.apple.style.left = this.x*this.board.cellTam+'px';
        this.apple.style.top = this.y*this.board.cellTam+'px';
    }





}

