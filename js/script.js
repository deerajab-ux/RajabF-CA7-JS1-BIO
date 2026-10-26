
const playername = prompt('Hello, You are now playing Bear hunter ninja. to start, please enter your name: ');
const gameWelcome = ('hi' + playername + 'welcome and enjoy your time here');
      alert(gameWelcome);
const playerInput = prompt('So who are you? bear, ninja, or hunter?');
const computerChoice = "bear"


if ((playerinput === "hunter" && computerinput === "bear")
     || (playerinput === "bear" && computerinput === "ninja")
     || (playerinput === "ninja" && computerinput === "hunter"))
{
    gameOutcomeoutcome = "win";
}
else if(playerinput === computerinput)
{
    gameOutcomeoutcome = "tie"
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

var gameover = playername + ' you chose ' + playerInput 
    + '!\n' + 'The computer chose ' + computerChoice + '!' 
    + gamedecider