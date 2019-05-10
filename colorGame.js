/*
In Design patterns We do this, defining everthing to a particular object
 
game.init = function(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

game.init();

Sometimes in design patterns we there are no variables 
Everything is defined in a particular object
*/




var numSquares = 6;
var colors = []; //Returns an array of random generated colors
var pickedColor;  // Returns the random color which is generated and is also the Winning Color of the game
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("resetButton");
var modeButtons = document.querySelectorAll(".mode");

init();

function init()
{
	setUpModeButtons();
	setUpSquares();
	reset();
}
resetButton.addEventListener("click",function()
{
	reset();
});

function setUpModeButtons()
{
	for(var i=0;i<modeButtons.length;i++)
	{
		modeButtons[i].addEventListener("click",function()
		{
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");		
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}
function setUpSquares()
{
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.background = colors[i]; // add initial colors to squares
		//add click listeners to squares
		squares[i].addEventListener("click", function()
		{
			var clickedColor = this.style.background; //grab color of clicked squares
			if(clickedColor === pickedColor) //compare color to pickedColor
			{
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again ?"
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} 
			else
			{
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}	
}
function reset()
{
	resetButton.textContent = "New Colors";
	message.textContent = "";
	colors = generateRandomColors(numSquares); //generate all new Colors Array
	pickedColor = pickColor(); // Returns the random color which is generated and is also the Winning Color of the game
	colorDisplay.textContent = pickedColor;// Changes the h1 text to winning color text i.e., 'rgb()' form
	//change colors of squares
	for(var i =0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];	
		}
		else
		{
			squares[i].style.display = "none";	
		}
	}
	h1.style.background = "steelblue";
}

function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = color; //change each color to match given color
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length); //Picks a random number from 1 to length of the colors array
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

// easyBtn.addEventListener("click",function(){
// 	numSquares = 3; // Since Easy Mode has only 3 colors
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	colors = generateRandomColors(numSquares); //Returns an array of random generated colors
// 	pickedColor = pickColor(); // Returns the random color which is generated and is also the Winning Color of the game
// 	colorDisplay.textContent = pickedColor; // Changes the h1 text to winning color text i.e., 'rgb()' form
// 	for(var i =0;i<squares.length;i++)
// 	{
// 		if(colors[i])
// 		{
// 			squares[i].style.background = colors[i]; // Assigning Colors to the squares 
// 		}
// 		else
// 		{
// 			squares[i].style.display = "none"; // As there are only 3 squares in easy mode
// 		}
// 	}
// });
// hardBtn.addEventListener("click",function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i =0;i<squares.length;i++)
// 	{
// 			squares[i].style.background = colors[i]; // Returns the random color which is generated and is also the Winning Color of the game
// 			squares[i].style.display = "block"; //Though, the easy mode converts the display to be none it's good to be in block in hard mode
// 	}
// });
// resetButton.addEventListener("click",function()
// {
	// this.textContent = "New Colors";
	// message.textContent = "";
	// colors = generateRandomColors(numSquares); //generate all new Colors Array
	// pickedColor = pickColor(); // Returns the random color which is generated and is also the Winning Color of the game
	// colorDisplay.textContent = pickedColor;// Changes the h1 text to winning color text i.e., 'rgb()' form
	// //change colors of squares
	// for(var i =0;i<squares.length;i++)
	// {
	// 	squares[i].style.background = colors[i];
	// }
	// h1.style.background = "steelblue";
// });