var randomNumber1 = Math.random();
randomNumber1 = (6*randomNumber1) + 1;
// alert(Math.floor(randomNumber1));

document.querySelector(".img1").setAttribute("src","images/dice"+Math.floor(randomNumber1)+".png");

var randomNumber2 = Math.random();
randomNumber2 = (6*randomNumber2) + 1;
// alert(Math.floor(randomNumber2));

document.querySelector(".img2").setAttribute("src","images/dice"+Math.floor(randomNumber2)+".png");

if(Math.floor(randomNumber1) === Math.floor(randomNumber2)){
    document.querySelector("h1").innerHTML = "DRAW";
}
else if(Math.floor(randomNumber1) > Math.floor(randomNumber2)){
    document.querySelector("h1").innerHTML = "PLAYER 1 WON !!";
}
else{
    document.querySelector("h1").innerHTML = "PLAYER 2 WON !!";
}