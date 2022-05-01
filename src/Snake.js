

class Snake {

    snakeHead;
    snakeBody = [];

    constructor(board, apple, x=0, y=0) {

        this.boardElement = board.boardElement;
        this.board = board;
        this.apple = apple; //lo usamos solo para impedir que muera si está comiendo

        this.tam = board.cellTam;
        this.x = x;
        this.y = y;

        this.direction = "right";

        this.isDead = false;

        this.initHead();
        this.grow();
        // this.grow();
    }


    initHead(){
        
        //id
        this.snakeHead = document.createElement("div");
        this.snakeHead.id = "snake-head";
        
        //size
        this.snakeHead.style.width = this.tam+'px';
        this.snakeHead.style.height = this.tam+'px';

        //pos
        this.snakeHead.style.left = this.x*this.board.cellTam+'px';
        this.snakeHead.style.top = this.y*this.board.cellTam+'px';

        this.boardElement.appendChild(this.snakeHead);
    }

    grow(){

        //class
        var elem = document.createElement("div");
        elem.classList.add("snake-body");

        //size
        elem.style.width = this.tam+'px';
        elem.style.height = this.tam+'px';

        //pos
        elem.style.left = this.x*this.board.cellTam+'px';
        elem.style.top = this.y*this.board.cellTam+'px';

        this.boardElement.appendChild(elem);
        
        this.snakeBody.push(elem);
    }

    up(){

        this.direction = 'up';
        this.snakeHead.style.transform = "rotate(0deg)";

        this.y --;
        this.snakeHead.style.top = this.y*this.board.cellTam+'px';

        this.move();
    }
    
    left(){

        this.direction = 'left';
        this.snakeHead.style.transform = "rotate(270deg)";

        this.x --;
        this.snakeHead.style.left = this.x*this.board.cellTam+'px';

        this.move();
    }

    right(){

        this.direction = 'right';
        this.snakeHead.style.transform = "rotate(90deg)";

        this.x ++;
        this.snakeHead.style.left = this.x*this.board.cellTam+'px';

        this.move();
    }

    down(){

        this.direction = 'down';
        this.snakeHead.style.transform = "rotate(180deg)";

        this.y ++;
        this.snakeHead.style.top = this.y*this.board.cellTam+'px';

        this.move();
    }

    move(){

        //antes de movernos, comprobamos que la cabeza no ha chocado
        //y que no estás fuera de los límites

        this.checkDangerZone();
        this.checkOfflimits();

        //-- snakeBody actua como una lista, donde el primer elemento del array se mueve a la
        //--  cabeza de la serpiente, y cuando lo hace, se pone el úlimo en la lista y así sucesivamente

        var first = this.snakeBody[0]; //guardamos el primer elemento del array

        //movemos el primer elemento del array al inicio de la serpiente
        first.style.top = this.snakeHead.style.top;
        first.style.left = this.snakeHead.style.left;
        
        this.snakeBody.shift(); //borramos el primer elemento
        this.snakeBody.push(first); //y lo añadimos al final

    }


    checkOfflimits(){

        if(this.x >= this.board.cells || this.x < 0 ||
            this.y >= this.board.cells || this.y < 0)

            this.kill();
        
        // return false;
    }


    checkDangerZone(){

        document.querySelectorAll(".snake-body").forEach((body)=>{

            if(this.snakeHead.style.left == body.style.left && this.snakeHead.style.left != this.apple.appleElement.style.left){

                if(this.snakeHead.style.top == body.style.top && this.snakeHead.style.top != this.apple.appleElement.style.top){

                    this.kill();
                }
            }
            
        })

    }


    kill(){

        this.isDead = true;
    }

    reset(){
        //borramos la snake anterior
        this.snakeBody.forEach(part => {
            part.remove();
        });

        this.snakeBody = [];

        //estado a viva
        this.isDead = false;

        //reinicializamos la posicion, tamaño y dirección
        this.x = 1;
        this.y = 1;

        this.snakeHead.style.left = this.x*this.board.cellTam+'px';
        this.snakeHead.style.top = this.y*this.board.cellTam+'px';

        this.direction = "right";
        this.snakeHead.style.transform = "rotate(90deg)";

        this.grow();
    }


    superGrow(num){

        for(var i = 0; i < num; i++){
            this.grow()
        }

        return "Snake body: "+this.snakeBody.length;
    }

}

