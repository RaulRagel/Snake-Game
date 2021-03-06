var gameContainer;
var game;
var snake;
var apple;
var board;

//default values if local is empty
var gameSpeed = 100;
var cells = 10;

//en móvil es más recomendable usar esta velocidad:
// var gameSpeed = 150;

window.onload = function(){
  
  initModal();
  initGame();

}




document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX
    yDown = firstTouch.clientY;                                      
};                                                
                                                                         
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* right swipe */ 
            if(snake && snake.direction != 'right')
            snake.direction = 'left' 
        } else {
            /* left swipe */
            if(snake && snake.direction != 'left')
            snake.direction = 'right' 
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* down swipe */ 
            if(snake && snake.direction != 'down')
            snake.direction = 'up' 
        } else { 
            /* up swipe */
            if(snake && snake.direction != 'up')
            snake.direction = 'down' 
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};
