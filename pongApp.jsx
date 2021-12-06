let grid = document.querySelector(".grid");
let popup = document.querySelector(".popup");
let playAgain = document.querySelector(".playAgain");
let scoreDisplay = document.querySelector(".scoreDisplay");
let highScoreDisplay = document.querySelector(".highScore");
let difficultyLevels = document.querySelector(".difficulty");
let width = 20;
let direction = 1;
let score = 0;
let intervalTime = 0;
let interval = 0;
let highScore = '';
let difLevel = window.location.href.replace('file:///Users/mastinfitness/Desktop/General_Assembly/ga_seir/projects/project_1/project_1_redo/pong.html?', '')
let speed = 0.7;

switch (difLevel) {
    case 'medium':
        speed = 0.6
        break;
    case 'hard':
        speed = 0.5
        break;
    default:
        speed = 0.7
        break;
}

let control = (e) => {
    switch (e.key) {
        case "ArrowLeft":
            if (direction === 1) {
            break;
            }
            direction = -1
            break;
        case "ArrowRight":
            if (direction === -1) {
            break;
            }
            direction = 1
            break;      
        default:
            break;        
    }
        
}
document.addEventListener('keydown', control);
