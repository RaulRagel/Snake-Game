/* startGame, gameOver*/

//reiniciamos la página, recogemos el local Storage e iniciamos con estos valores
function initGame(){
  
  if(localStorage.gameSpeed) gameSpeed = localStorage.gameSpeed;
  
  if(localStorage.cells) cells = localStorage.cells;
  
  gameContainer = document.getElementById("game-container");

  board = new Board(gameContainer, cells, 350); //default: 20 (cells), 500 (boardTam)
    
  apple = new Apple(board); //default: random (x), random (y)
  snake = new Snake(board, apple); //default: 0 (x), 0 (y)

  game = new SnakeGame(board, snake, apple, gameSpeed); //default: 100 (gameSpeed)
  game.updatePoints();
}


/* MODALS of code-settings */

function openModal(modalId){ //used in the code-settings' modal

    var modal = document.getElementById(modalId);

    modal.showModal();
}

function closeModal(modalId){
    var modal = document.getElementById(modalId);

    if(modal.open) modal.close();
}

document.addEventListener("click", (e)=>{

    document.querySelectorAll(".modal").forEach((modal)=>{

        //if target is the *modal, close it
        if(e.target == modal && modal.open)
        modal.close();
    })
})

function initModal(){
  
  
  document.querySelector("#gameSpeed").value = localStorage.gameSpeed ? localStorage.gameSpeed : gameSpeed;
  
  document.querySelector("#cells").value = localStorage.cells ? localStorage.cells : cells; 
 
  
  var buttons = document.querySelectorAll(".modal-buttons button");
    
  buttons[0].addEventListener("click", defaultButton);
  
  buttons[1].addEventListener("click", saveButton);
  
  buttons[2].addEventListener("click", cancelButton);
 
}


function defaultButton (){
  
  localStorage.gameSpeed = '';
  localStorage.cells = '';
  
  window.location.reload()
}

function saveButton(){
  
  if(document.querySelector("#cells").value)
  localStorage.cells = document.querySelector("#cells").value;
  
  if(document.querySelector("#gameSpeed").value)
  localStorage.gameSpeed = document.querySelector("#gameSpeed").value;
  
  window.location.reload();
}

function cancelButton(){
  
  closeModal('code-settings-modal');
}
