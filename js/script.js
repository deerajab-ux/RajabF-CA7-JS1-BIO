
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
        gamedecider = "You Win!!"
        break;
    case "lose":
        gamedecider = "You Lose!!"
        break;
    default:
        gamedecider = "it's a Tie!!"
}
//give the player the deciding game outcome
const gameover = (playername + ' you chose ' + playerInput 
    + '!<br>' + 'The computer chose ' + computerInput + '!<br>' 
    + gamedecider);

const element = document.getElementById('demo').innerHTML = gameover
console.log(gameover);