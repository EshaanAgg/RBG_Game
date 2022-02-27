var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');

var countSquares = 6;

var colors = [];
var pickedColor;

initializeSetup();

function initializeSetup(){
  
  setUpModeButtons();
  setUpSquares();
  reset();

}

function setUpModeButtons(){
  
  for(var i = 0; i < modeButtons.length; i++){
    
    modeButtons[i].addEventListener('click', function(){
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');
      countSquares = this.textContent === "Easy" ? 3 :6;   
      reset();
    });

  }
}

function setUpSquares(){
  
  for(var i = 0; i < squares.length; i++){
  
    squares[i].addEventListener("click", function(){
      var chosenColor = this.style.background;
      if(chosenColor === pickedColor){
        messageDisplay.textContent = 'Correct Answer!';
        resetButton.textContent = "Want to Play Again?";
        changeColors(chosenColor);
        h1.style.background = chosenColor;
      } 
      else
      {
        this.style.background = "#232323";
        messageDisplay.textContent = 'Try Another Brick';
      }
    });
  
  }
}

function reset(){
  
  colors = generateRandomColors(countSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  
  for(var i = 0; i < squares.length; i++){
    
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } 
    else
    {
      squares[i].style.display = "none";
    }
  }

  h1.style.background = "rgb(219, 193, 47)";

}

resetButton.addEventListener('click', function(){
  reset();
});

function changeColors(color){
  
  for(var i = 0; i < colors.length; i++){
    squares[i].style.background = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  
  var arr = [];
  
  for(var i = 0; i < num; i++){
    arr.push(randomColor());
  }
  
  return arr;

}

function randomColor(){
  
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";

}
