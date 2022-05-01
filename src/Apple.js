

class Apple {

    appleElement;

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

        this.appleElement = elem;
    }
    
    init(){
        
        this.appleElement.style.left = this.x*this.board.cellTam+'px';
        this.appleElement.style.top = this.y*this.board.cellTam+'px';

        this.appleElement.style.width = this.tam+'px';
        this.appleElement.style.height = this.tam+'px';

        this.boardElement.appendChild(this.appleElement)
    }


    new(){

        this.x = Math.floor(Math.random()*this.board.cells);
        this.y = Math.floor(Math.random()*this.board.cells);

        this.appleElement.style.left = this.x*this.board.cellTam+'px';
        this.appleElement.style.top = this.y*this.board.cellTam+'px';
    }


    reset(){
        
        this.appleElement.style.left = this.x*this.board.cellTam+'px';
        this.appleElement.style.top = this.y*this.board.cellTam+'px';
    }


}

