var up = document.querySelector(".up");
var down = document.querySelector(".down");

var sources = ["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg","7.jpeg","8.jpeg","9.jpeg","10.jpeg"]; //original array

var x = parseInt(prompt("Enter the number of cards you want"));

function shuffle(a) { //shuffle function
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

var newsource = []; //create new array

for (var i = 0; i < x; i++) {
  newsource[i] = sources[i];
}


var upper = shuffle(newsource); //array of images for upper
var lower = shuffle(newsource); //array of images for lower

var cardsa = []; //array of cards for up
var cardsb = []; //array of cards for down
var temp = null;

for (let i = 0; i < x; i++) {
  temp = new Card(upper[i],i);
  cardsa.push(temp);  //creates an array of cards
  up.append(temp.imgHTML);
}

for (let i = 0; i < x; i++) {
  temp = new Card(lower[i],i);
  cardsb.push(temp);  //creates an array of cards
  down.append(temp.imgHTML);
}
