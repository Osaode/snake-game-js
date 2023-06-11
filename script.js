const gameboard = document.querySelector("#gmaeboard");
const ctx = gameboard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetbtn = document.querySelector("#resetbtn");
const gamewidth = gameboard.width;
const gameheight = gameboard.height;
const boardbackground = "white";
const snakecolor = "lightgreen";
const snakeboarder = "black";
const foodcolor = "red";
const unitsize = 25;

let running = false;
let xVelocity = unitsize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;
let snake = [
    {x:unitsize * 4, y:0},
    {x:unitsize * 3, y:0},
    {x:unitsize * 2, y:0},
    {x:unitsize, y:0},
    {x:0, y:0}
]

window.addEventListener("keydown", changeDirection);
resetbtn.addEventListener("click", resetGame);

gameStart();

function gameStart(){};
function nextTick(){};
function clearBoard(){};
function createFood(){};