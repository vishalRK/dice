var randomNumber1 = Math.floor(Math.random()*6)+1;

 var randomImage = "dice"+randomNumber1+".png";
 //var randomImageSource = "images/"+randomImage;

 var image1 = document.querySelectorAll("img")[0];
 image1.setAttribute("src", randomImage);

 var randomNumber2 = Math.floor(Math.random()*6)+1;
 var randomImageSource2 = "dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player1 Wins";
}
else if(randomNumber2 > randomNumber1)
{
  document.querySelector("h1").innerHTML = "Player2 Wins";
}
else{
  document.querySelector("h1").innerHTML = "Draw";
}