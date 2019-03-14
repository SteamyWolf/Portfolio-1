

// function wyatt(a,b) {
//     return a+b;
// }
// alert( wyatt(455,572) )
// document.getElementById("JSTEST").innerHTML = wyatt(19,45);

// function age(name, age) {
//     return name + " " + age;
// }
// const any = age("Wyatt", 24)
// alert(any)

// var name = prompt("What is your name?"); var lastName = prompt("What is your last name?"); alert(name + " " + lastName);
import {  } from "module";

var age = prompt("How old are you?"); {
if (age < 16) { 
    alert("you can't drive, stay off the road loser!"); 
} else {
    alert("You can drive, Hooray!! But unfortunately, you're getting older.")
}
}

// var h1 = "Welcome, my name is Wyatt";
// document.getElementById("JSTEST").innerHTML = h1;

// var myList = ["oranges", "apples", "bananas"]
// myList.forEach(function(x) {
// console.log(x)
// });

const numStars = 100

for (let i = 0; i < numStars; i++) {
    let star = document.createElement("div");
    star.classname = "star";
    var xy = getRandomPosition();
    star.style.top = xy[0] + 'px';
    star.style.left = xy[1] + 'px';
    document.body.append(star);
}


function getRandomPosition() {
    var y = window.innerWidth;
    var x = window.innerHeight;
    var randomX = Math.floor(Math.random()*x);
    var randomY = Math.floor(Math.random()*y);
    return [randomX, randomY];
}

