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