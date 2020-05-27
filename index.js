var randomNumber1= Math.floor(Math.random()*6)+1;
var image1src= "images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src", image1src);

var randomNumber2= Math.floor(Math.random()*6)+1;
var image2src= "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",image2src);
if(randomNumber1>randomNumber2)
  document.querySelector("h1").innerHTML="🏆 Player 1 wins!";
else if(randomNumber1<randomNumber2)
  document.querySelector("h1").innerHTML="🏆 Player 2 wins!";
else
    document.querySelector("h1").innerHTML="Draw!";
