var myArr = [];
var myNumbers = [];

while(myArr.length < 5) {
var rndNum = getRnd(1, 100);
if (!myArr.includes(rndNum)) {
myArr.push(rndNum);
  }

}

alert('ricorda questi numeri: ' + myArr);

setTimeout(function() {
for (var i = 0; i < 5; i++) {
var myNum = parseInt(prompt('scrivi i numeri memorizzati prima: '));
for (var x = 0; x < myArr.length; x++) {
if (myNum == myArr[x]) {
myNumbers.push(myNum);
   }

  }

 }

alert('Hai indovinato ' + myNumbers.length  + ' numeri: ' + myNumbers);
}, 5000);

function getRnd(min, max) {
    var minRnd = min;
    var maxRnd= max - minRnd + 1;
    var rnd = Math.floor(Math.random() * maxRnd) +minRnd;
    return rnd;
}
