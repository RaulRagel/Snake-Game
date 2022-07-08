

class Board{


    constructor(gameElement, cells=20, boardTam=500){

        //--init board
        this.boardTam = boardTam;
        this.gameElement = gameElement;
        this.boardElement;

        this.init();

        //--paint cells
        this.cells = cells;
        this.cellTam = boardTam/cells;

        this.paintVCells();
        this.paintHCells();
    }

    init(){

        var elem = document.createElement("div");
        elem.id = "board";
        elem.style.width = this.boardTam+'px';
        elem.style.height = this.boardTam+'px';

        this.boardElement = elem;

        this.gameElement.appendChild(this.boardElement);
    }

    paintVCells(){

        var elem;

        for(var i = 0; i < this.cells; i++){

            elem = document.createElement("div");
            elem.classList.add("v-cell");
            elem.style.left = i*this.cellTam+'px';

            this.boardElement.appendChild(elem)
        }
    }

    paintHCells(){

        var elem;

        for(var i = 0; i < this.cells; i++){

            elem = document.createElement("div");
            elem.classList.add("h-cell");
            elem.style.top = i*this.cellTam+'px';

            this.boardElement.appendChild(elem)
        }
    }





}
