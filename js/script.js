
const playername = prompt('Hello, You are now playing Bear hunter ninja. to start, please enter your name: ');
const gameWelcome = ('hi ' + playername + ' welcome and enjoy your time here');
      alert(gameWelcome);
const playerInput = prompt('So who are you? bear, ninja, or hunter?');
const computerInput = "bear"
const gameOutcome = '';
const gamedecider = '';


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
    case "Win":
        gamedecider = "You win!"
        break;
    case "lose":
        gamedecider = "You lose!"
        break;
    default:
        gamedecider = "its a tie!"
}

const gameover = (playername + ' you chose ' + playerInput 
    + '!\n' + 'The computer chose ' + computerInput + '!' 
    + gamedecider);