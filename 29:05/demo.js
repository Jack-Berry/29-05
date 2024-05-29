// Q1
function add(x, y) {
  return x + y;
}
add(3, 5);

// Q2
var letters = ["a", "b", "c", "d", "e"];

function revOrder(arr) {
  var revReturn = [];
  for (let index = arr.length - 1; index >= 0; index--) {
    revReturn.push(arr[index]);
    console.log(revReturn);
  }
  return revReturn;
}

revOrder(letters);

// Q3
var flavours = [
  "apple",
  "banana",
  "cherry",
  "vanilla",
  "caramel",
  "lemon",
  "strawberry",
  "orange",
  "guava",
  "coffee",
];

// Q4
console.log(flavours[4]);
flavours[4] = "grape";
console.log(flavours[4]);

// Q5
console.log(flavours);
flavours.splice(5, 5);
console.log(flavours);

// Q6
var flavours = [
  "apple",
  "banana",
  "cherry",
  "vanilla",
  "caramel",
  "lemon",
  "strawberry",
  "orange",
  "guava",
  "coffee",
];
//    Pop
console.log("POP");
console.log(flavours.pop());

//    Push
console.log("PUSH");
flavours.push("bubblegum");
console.log(flavours);
//    Shift
console.log("SHIFT");
var shiftRet = flavours.shift();
console.log(flavours);
console.log(shiftRet);
//    Unshift
console.log("UNSHIFT");
flavours.unshift("apple", "oreo");
console.log(flavours);
//    Concatenating
console.log("CONCATENATING");
var containers = ["cone", "tub", "bowl", "spoon fed by server"];
var allProducts = flavours.concat(containers);
console.log(allProducts);
//    Splicing
console.log("SPLICING");
console.log(allProducts);
allProducts.splice(11, 4);
console.log(allProducts);

//    Slicing
console.log("SLICING");
console.log(allProducts.slice(3, 7));
//    Reverse
console.log("REVERSE");
var revRet = allProducts.reverse();
console.log(revRet);
//    Join
console.log("JOIN");
console.log(revRet.join(" or "));
//    forEach
console.log("FOREACH");
var allCaps = [];

revRet.forEach(function (flav) {
  var caps = flav.toUpperCase();
  allCaps.push(caps);
});
console.log(allCaps);

//    Includes
console.log("INCLUDES");
console.log(flavours.includes("strawberry"));
//    indexOf
console.log("INDEXOF");
console.log(flavours.indexOf("strawberry"));
//    Every
console.log("EVERY");
var numbers = [5, 27, 64, 31, 56, 72];
function greaterThan(num) {
  return num > 50;
}
console.log(numbers.every(greaterThan));
//    Some
console.log("SOME");
console.log(numbers.some(greaterThan));
//    Filter
console.log("FILTER");
console.log(numbers.filter(greaterThan));
//    Find
console.log("FIND");
var found = numbers.find(greaterThan);
console.log(found);
//    findIndex
console.log("FINDINDEX");
console.log(numbers.findIndex(greaterThan));
//    Sort
console.log("SORT");
flavours.sort();
console.log(flavours);
//    Map
console.log("MAP");
var arrayOfStuff = [
  { flavour: "Apple", calories: 70, price: 200 },
  { flavour: "Banana", calories: 40, price: 180 },
  { flavour: "Chocolate", calories: 100, price: 320 },
  { flavour: "Vanilla", calories: 65, price: 200 },
  { flavour: "Coffee", calories: 90, price: 280 },
];
var result = arrayOfStuff.map(function (item) {
  return `<div>
            <h1>${item.flavour}</h1>
            <p>Only ${item.calories}cals per scoop!</p>
            <p>&pound;${Math.round(item.price / 100)} per scoop</p>
            </div>`;
});
console.log(result.join(""));
