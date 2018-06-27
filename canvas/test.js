var cardArr = [];
for (var i = 1; i <= 52; i++) {
    cardArr.push(i);
}
var num = Math.random();
console.log(praseInt(num * 10) + 1);