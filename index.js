var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage="dice"+randomNumber1+".png";
var randomImageSource=randomDiceImage;
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage1="dice"+randomNumber2+".png";
var randomImageSource1=randomDiceImage1;
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource1);
//player 1 wins
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 Wins!";
}
//player 2 wins
if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 Wins!";
}
//Draw or tie
if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML="Draw!";
}
