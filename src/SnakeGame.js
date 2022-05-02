
var interval;
var points = 0;
var record = 0;

class SnakeGame{


    constructor(board, snake, apple, gameSpeed=100){

        this.board = board;
        this.snake = snake;
        this.apple = apple;
        this.gameSpeed = gameSpeed;
        this.points = 0;

        this.playing = false;

        this.controls();
    }


    controls(){

        window.addEventListener('keydown', (event) => {

            if (event.code === 'Space') {

                event.preventDefault();
                this.togglePlayPause();
            }
            else if (event.code === 'ArrowRight' && snake.direction != 'left') {
                
                event.preventDefault();
                snake.direction = 'right';
            }
            else if (event.code === 'ArrowLeft' && snake.direction != 'right') {
                
                event.preventDefault();
                snake.direction = 'left';
            }
            else if (event.code === 'ArrowUp' && snake.direction != 'down') {
                
                event.preventDefault();
                snake.direction = 'up';
            }
            else if (event.code === 'ArrowDown' && snake.direction != 'up') {
                
                event.preventDefault();
                snake.direction = 'down';
            }
        });
    }

    togglePlayPause(){

        this.playing = !this.playing;
    
        if(this.playing) this.play();
        else this.pause();
    }

    play(){
        this.playing = true;

        //si es una función flecha, podemos usar "this.""
        //si queremos usar una funcion normal, debemos usar "game."
        interval = setInterval(()=>{ 
            
            this.snakeMovement(); //primero nos movemos
            this.snakeEat(); //si no hemos muerto, comemos si podemos
            
            //puntos
            this.updatePoints();
            
            if(this.snake.isDead) this.stop(); //luego comprobamos si hemos muerto

        }, this.gameSpeed);
    }

    pause(){
        this.playing = false;

        if(interval) clearInterval(interval)
    }
    
    stop(){
        this.playing = false;
        // window.location.reload();
        
        //reiniciamos la serpiente y la manzana
        this.snake.reset();
        this.apple.reset();

        //reiniciamos los puntos
        this.updatePoints();

        this.pause();
    }

    snakeMovement(){

        switch(this.snake.direction){
    
            case 'up': this.snake.up();
            break;
            case 'left': this.snake.left();
            break;
            case 'right': this.snake.right();
            break;
            case 'down': this.snake.down();
            break;
        }
    }

    snakeEat(){

        if(this.snake.x == this.apple.x && this.snake.y == this.apple.y){

            this.points ++;
            snake.grow();
            apple.new();

        }
    }

    updatePoints(){

        var currentElement = document.getElementById("current");
        var recordElement = document.getElementById("record");

        //puntos actuales
        this.points = this.snake.snakeBody.length-1;

        currentElement.innerText = this.points;

        //record
        if(!localStorage.record) localStorage.record = 0;

        if(localStorage.record < this.points)
            localStorage.record = this.points;

        recordElement.innerHTML = localStorage.record;


    }



}
