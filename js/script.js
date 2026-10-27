
//establish variables 
let gameOutcome = '';
let gamedecider = '';
//prompt player iwth name and choice of character 
const playername = prompt('Welcome to Bear Hunter Ninja! Please enter your name to get started: ');
const gameWelcome = ('Hi ' + playername + " Let's play!!");
      alert(gameWelcome);
const playerInput = prompt('Who are you: Bear, Ninja, or Hunter?');
let computerInput = "bear" 

//calculate players input with computers 
if ((playerInput === "hunter" && computerInput === "bear")
     || (playerInput === "bear" && computerInput === "ninja")
     || (playerInput === "ninja" && computerInput === "hunter"))
{
    gameOutcome = "win";
}
else if(playerInput === computerInput)
{
    gameOutcome = "tie"
}
else 
{
    gameOutcome = "lose" 
}

switch (gameOutcome)
{
    case "win":
        gamedecider = "You win!!"
        break;
    case "lose":
        gamedecider = "You lose!!"
        break;
    default:
        gamedecider = "its a tie!!"
}
//give the player the deciding game outcome
const gameover = (playername + ' you chose ' + playerInput 
    + '!\n' + 'The computer chose ' + computerInput + '!' 
    + gamedecider);

const element = document.getElementById('demo').innerHTML = 'A string of text!'
  console.log("Hello, if you see this message you are doing soemthing right");