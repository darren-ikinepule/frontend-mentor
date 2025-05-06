const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  console.log(number * 4);
});
numbers.forEach((number) => {
  console.log(number * 2);
});

const words = ["apple", "banana", "cherry"];
const newArray = [];
// Your function here
for (let i = 0; i < words.length; i++) {
  newArray.push(words[i].toUpperCase());
}
console.log(newArray);

function countDown(num) {
  while (num > 0) {
    console.log("Counting " + num);
    num--;
  }
}
countDown(5);

const prices = [100, 200, 300, 400];
const discount = prices.map((price) => {
  return price * 0.9;
});
console.log(discount);

const nums = [10, 20, 30, 40];
const sumAll = nums.reduce((acc, num) => {
  return acc + num;
});
console.log(sumAll);

const elnumbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumbers = elnumbers.filter((num => num % 2 === 0));
console.log(evenNumbers)


const bnumbers = [1, 2, 3, 4, 5];
const timesTwo = bnumbers.forEach((num) => {
     console.log(num * 5)
})

const bwords = ["apple", "banana", "cherry"];
// Your function here
const newWords = [];
for(let i = 0; i < bwords.length; i++){
    newWords.push(bwords[i]);
}
console.log(newWords)

