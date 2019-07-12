//COLOR BUTTON VARIABLES
var colorButtons = document.querySelectorAll('.btn-colors');

var colorButton1 = colorButtons[0];
var colorButton2 = colorButtons[1];
var colorButton3 = colorButtons[2];
var colorButton4 = colorButtons[3];
var colorButton5 = colorButtons[4];
var colorButton6 = colorButtons[5];

//RGB DISPLAY VARIABLE
var rgbDisplay = document.getElementById("rgbDisplay");

//FEEDBACK DISPLAY VARIABLE
var feedback = document.getElementById("feedback");

//NAV BUTTON VARIABLES
var newColors = document.getElementById("new-colors");
var modeEasy = document.getElementById("easy-mode");
var modeHard = document.getElementById("hard-mode");


//BACKGROUND DISPLAY VARIABLE (Not in use - considering changing color to match correct rgb)
var bodyBackground = document.querySelector("body");

//GENERATE RANDOM RGB SEQUENCE FUNCTION
function generateRandomRgb(){
  var i = Math.floor((Math.random() * colorButtons.length));
  var correctRgb = returnRgb();
  rgbDisplay.textContent = correctRgb;
  colorButtons[i].style.backgroundColor = correctRgb;
}

      //FIND A RANDOM NUMBER BETWEEN 0 - 255
      function randomNumber(){
        var randomNum = Math.floor((Math.random() * 255));
        return randomNum;
      }

      //CONCATENATE A RANDOM RGB VALUE
      function returnRgb(){
        var r = randomNumber();
        var g = randomNumber();
        var b = randomNumber();
        var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
        return rgb;
      }

//FILL THE BOARD WITH RANDOM COLORS, INCLUDING CORRECT RGB
function fillBoard(){
  for (var i = 0; i < colorButtons.length; i++){
    var randomColor = returnRgb();
    colorButtons[i].style.backgroundColor = randomColor;
  }
  generateRandomRgb();
}


//ON LOAD FILL BOARD AND GENERATE RANDOM RGB
fillBoard();

//NEW COLORS: FILLS BOARD AND GENERATES RANDOM RGB
newColors.addEventListener("click", function(){
  if(rowBottom.style.display === "none"){
    playEasy();
  } else {
    fillBoard();
  }
  feedback.textContent = "Have a guess!";
});


//CLICK CORRECT BUTTON AND WIN
function correctGuess(){
  if (this.style.backgroundColor === rgbDisplay.innerHTML){
    feedbackTrue();
  } else {
    feedbackFalse();
    this.style.backgroundColor = "white";
  }
}


      //CHANGE FEEDBACK IN CASE OF CORRECT GUESS
      function feedbackTrue(){
        feedback.textContent = "Correct!";
        for (var i = 0; i < colorButtons.length; i++){
          if (colorButtons[i].style.backgroundColor !== rgbDisplay.innerHTML) {
            colorButtons[i].style.backgroundColor = "white";
          }
        }
      }


      //CHANGE FEEDBACK IN CASE OF INCORRECT GUESS
      function feedbackFalse(){
        feedback.textContent = "Try again";
      }


      //EVENT LISTENERS FOR COLOR BUTTONS
      colorButton1.addEventListener("click", correctGuess);
      colorButton2.addEventListener("click", correctGuess);
      colorButton3.addEventListener("click", correctGuess);
      colorButton4.addEventListener("click", correctGuess);
      colorButton5.addEventListener("click", correctGuess);
      colorButton6.addEventListener("click", correctGuess);


//EASY MODE
var rowBottom = document.querySelector(".row-bottom");

modeEasy.addEventListener("click", playEasy);

    //PLAY EASY FUNCTION
    function playEasy(){
      rowBottom.style.display = "none";
      //MAKE SURE CORRECT RGB IS IN THE TOP THREE BUTTONS
      function generateRandomRgbEasy(){
        var i = Math.floor((Math.random() * 3));
        var correctRgb = returnRgb();
        rgbDisplay.textContent = correctRgb;
        colorButtons[i].style.backgroundColor = correctRgb;
      }


      //FILL THE BOARD WITH RANDOM COLORS, INCLUDING CORRECT RGB
      function fillBoardEasy(){
        for (var i = 0; i < colorButtons.length; i++){
          var randomColor = returnRgb();
          colorButtons[i].style.backgroundColor = randomColor;
        }
        generateRandomRgbEasy();
      }
      fillBoardEasy();
    }


//HARD MODE
modeHard.addEventListener("click", function(){
  rowBottom.style.display = "";
  fillBoard();
});
