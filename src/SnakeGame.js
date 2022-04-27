
var interval;
var points = 0;

class SnakeGame{


    constructor(board, snake, apple, gameSpeed=100){

        this.board = board;
        this.snake = snake;
        this.apple = apple;
        this.gameSpeed = gameSpeed;

        this.playing = false;

        this.controls();
    }


    controls(){

        window.addEventListener('keydown', (event) => {
            if (event.code === 'Space') {
              this.togglePlayPause();
            }
            if (event.code === 'ArrowRight') {
              snake.direction = 'right';
            }
            if (event.code === 'ArrowLeft') {
                snake.direction = 'left';
            }
            if (event.code === 'ArrowUp') {
                snake.direction = 'up';
            }
            if (event.code === 'ArrowDown') {
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

        //si es una función flecha, podemos usar "this.""
        //si queremos usar una funcion normal, debemos usar "game."
        interval = setInterval(()=>{ 
            
            this.snakeMovement(); //primero nos movemos
            if(this.snake.isDead) this.stop(); //luego comprobamos si hemos muerto
            this.snakeEat(); //si no hemos muerto, comemos si podemos

        }, this.gameSpeed);
    }

    pause(){

        if(interval) clearInterval(interval)
    }
    
    stop(){

        window.location.reload();
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



}