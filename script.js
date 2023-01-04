console.log("adsad");
let pcSelection = 0;
let playerSelection = 0;
let result = 0;
let pcScore = 0;
let playerScore = 0;

let pcScoreHTML = document.querySelector(".pcScore");
let playerScoreHTML = document.querySelector(".playerScore");
let pcHand = document.querySelector(".pcHand");
let playerHand = document.querySelector(".playerHand");
let resultHTML = document.querySelector(".result");
let scoreboard = document.querySelector(".scoreboard");

playerScore.innerHTML = 16;

function pcSelectFunc(min, max) {
  pcSelection = Math.floor(Math.random() * (max - min) + min);

  switch (pcSelection) {
    case 1:
      pcHand.src = "./img/rock.png";
      pcSelection = "rock"; //pc selection assignment
      break;
    case 2:
      pcHand.src = "./img/paper.png";
      pcSelection = "paper"; //pc selection assignment
      break;
    case 3:
      pcHand.src = "./img/scissors.png";
      pcSelection = "scissors"; //pc selection assignment
      break;

    default:
      break;
  }
}

function playerSelected(param) {
  // playerHand.style.transform = 2,5
  scoreboard.style.visibility = "visible";
  scoreboard.classList.add("scoreboard2");
  pcSelectFunc(1, 4);
  pcHand.classList.add("rotate180");
  playerSelection = param; //player selection assignment

  playerHand.src = `./img/${param}.png`;

  console.log("pcSelection:", pcSelection, "playerSelection:", playerSelection);

  function drawFunc() {
    resultHTML.innerHTML = "Draw, Pick Again!";    
    resultHTML.style.backgroundColor = "DodgerBlue";
    resultHTML.style.color = "white";
  }
  function playerWonFunc() {
    resultHTML.innerHTML = "Player Won!";
    resultHTML.style.backgroundColor = "ForestGreen";
    resultHTML.style.color = "white";
    playerScore++;
    playerScoreHTML.innerHTML = playerScore;
    console.log(pcScore, playerScore);
    
  }
  function pcWonFunc() {
    resultHTML.innerHTML = "PC WON";
    resultHTML.style.backgroundColor = "FireBrick";
    resultHTML.style.color = "white";
    pcScore++;
    pcScoreHTML.innerHTML = pcScore;
    console.log(pcScore, playerScore);
  }

  switch (true) {
    case pcSelection == playerSelection:
      drawFunc();
      break;

    case pcSelection == "rock" && playerSelection == "paper":
      playerWonFunc();
      break;
    case pcSelection == "rock" && playerSelection == "scissors":
      pcWonFunc();
      break;
      case pcSelection == "paper" && playerSelection == "rock":
        pcWonFunc();
        
      // resultHTML.innerHTML = "PC WON";
      // pcScore++;
      // pcScoreHTML.innerHTML = pcScore;
      // console.log(pcScore, playerScore);
      break;
    case pcSelection == "paper" && playerSelection == "scissors":
      playerWonFunc();

      // resultHTML.innerHTML = "Player WON";
      // playerScore++;
      // playerScoreHTML.innerHTML = playerScore;
      // console.log(pcScore, playerScore);
      break;
    case pcSelection == "scissors" && playerSelection == "rock":
      playerWonFunc();

      // resultHTML.innerHTML = "Player WON";
      // playerScore++;
      // playerScoreHTML.innerHTML = playerScore;
      // console.log(pcScore, playerScore);
      break;
    case pcSelection == "scissors" && playerSelection == "paper":
      playerWonFunc();

      // resultHTML.innerHTML = "PC WON";
      // pcScore++;
      // pcScoreHTML.innerHTML = pcScore;
      // console.log(pcScore, playerScore);
      break;

    default:
      resultHTML.innerHTML = "Something Went WRONG :( !!!";

      break;
  }
}
