//COLOR BUTTON VARIABLES
var colorButtons = document.querySelectorAll('.btn-colors');

var arrColorButtons = [];

var colorButton1 = document.querySelectorAll('.btn-colors')[0];
var colorButton2 = document.querySelectorAll('.btn-colors')[1];
var colorButton3 = document.querySelectorAll('.btn-colors')[2];
var colorButton4 = document.querySelectorAll('.btn-colors')[3];
var colorButton5 = document.querySelectorAll('.btn-colors')[4];
var colorButton6 = document.querySelectorAll('.btn-colors')[5];

//RGB DISPLAY VARIABLE
var rgbDisplay = document.getElementById("rgbDisplay");

//FEEDBACK DISPLAY VARIABLE
var feedback = document.getElementById("feedback");

//NAV BUTTON VARIABLES
var newColors = document.getElementById("new-colors");
var modeEasy = document.getElementById("easy-mode");
var modeHard = document.getElementById("hard-mode");


//BUTTON RANDOMIZER VARIABLE
var arrButton = [];

for(var i = 0; i < colorButtons.length; i++){
  var name = i;
  arrColorButtons.push(name);
}


//GENERATE RANDOM RGB SEQUENCE FUNCTION
function generateRandomRgb(){
  var iRandom = Math.floor((Math.random() * colorButtons.length));
  var r = Math.floor((Math.random() * 254) + 1);
  var g = Math.floor((Math.random() * 254) + 1);
  var b = Math.floor((Math.random() * 254) + 1);
  var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
  rgbDisplay.textContent = rgb;
  colorButtons[iRandom].style.backgroundColor = rgb;
}

//FILL THE BOARD WITH RANDOM COLORS, INCLUDING CORRECT RGB
function fillBoard(){
  for (var i = 0; i < colorButtons.length; i++){
    var r = Math.floor((Math.random() * 254) + 1);
    var g = Math.floor((Math.random() * 254) + 1);
    var b = Math.floor((Math.random() * 254) + 1);
    var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
    colorButtons[i].style.backgroundColor = rgb;
  }
  generateRandomRgb();
}



//ON LOAD FILL BOARD AND GENERATE RANDOM RGB
fillBoard();

//NEW COLORS: FILLS BOARD AND GENERATES RANDOM RGB
newColors.addEventListener("click", function(){
  fillBoard();
  feedback.textContent = "Have a guess!";
});


//CLICK CORRECT BUTTON AND WIN
function feedbackTrue(){
  feedback.textContent = "Correct!";
  for (var i = 0; i < colorButtons.length; i++){
    if (colorButtons[i].style.backgroundColor !== rgbDisplay.innerHTML) {
      colorButtons[i].style.backgroundColor = "white";
    }
  }
}

function feedbackFalse(){
  feedback.textContent = "Try again";
}


function correctGuess(){
  if (this.style.backgroundColor === rgbDisplay.innerHTML){
    feedbackTrue();
  } else {
    feedbackFalse();
    this.style.backgroundColor = "white";
  }
}


colorButton1.addEventListener("click", correctGuess);
colorButton2.addEventListener("click", correctGuess);
colorButton3.addEventListener("click", correctGuess);
colorButton4.addEventListener("click", correctGuess);
colorButton5.addEventListener("click", correctGuess);
colorButton6.addEventListener("click", correctGuess);


//EASY MODE
var rowBottom = document.getElementById("row-bottom");

modeEasy.addEventListener("click", function(){
      rowBottom.style.display = "none";
    //GENERATE RANDOM RGB SEQUENCE FUNCTION
    function generateRandomRgbEasy(){
      var iRandom = Math.floor((Math.random() * 3));
      var r = Math.floor((Math.random() * 254) + 1);
      var g = Math.floor((Math.random() * 254) + 1);
      var b = Math.floor((Math.random() * 254) + 1);
      var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
      rgbDisplay.textContent = rgb;
      colorButtons[iRandom].style.backgroundColor = rgb;
    }

    //FILL THE BOARD WITH RANDOM COLORS, INCLUDING CORRECT RGB
    function fillBoardEasy(){
      for (var i = 0; i < colorButtons.length; i++){
        var r = Math.floor((Math.random() * 254) + 1);
        var g = Math.floor((Math.random() * 254) + 1);
        var b = Math.floor((Math.random() * 254) + 1);
        var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
        colorButtons[i].style.backgroundColor = rgb;
      }
      generateRandomRgbEasy();
    }
    fillBoardEasy();
  });


  //HARD MODE
  modeHard.addEventListener("click", function(){
        rowBottom.style.display = "block";
        fillBoard();
      });
