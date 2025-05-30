// 1. Greet Me 
const name = "Sweta Kadam";
console.log(`I am  ${name}!`);


// 2. Create a Greeting Function
function greet(name) {
    return "Hello, " + name + "!";
  }
  
  console.log(greet("Sweta"));


//   3. Even or Odd
  
  let number = 4;

  if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
  
//   4. Countdown Timer
for (let i = 10; i > 0; i--) {
    console.log(i);
  }
  console.log("Done!");
  
//   5. Print All Colors
let colors = ["Green", "Yellow", "Blue"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// 6. Button Click Alert (HTML + JS)
  function showMessage() {
    alert("You clicked me!");
  }

//   7. Change the Paragraph Text
function changeText() {
    document.getElementById("text").innerHTML = "Text Changed!";
  }
//   8. Generate a Random Number
let random = Math.floor(Math.random() * 100);
console.log(random);
// 9. Simple Add Function
function addNumbers(x, y) {
    return x + y;
  }
  
  console.log(addNumbers(3, 7));
// 10. Login Status
let isUserLoggedIn = true;

if (isUserLoggedIn) {
  console.log("Welcome back!");
}
// 11. String Length
let word = "Hello";
console.log("Length:", word.length);

// 12. Add to Fruits Array
let fruits = ["Apple", "Banana"];
fruits.push("Orange");

console.log(fruits);

// 13. Break a Loop at 5
for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break;
    }
    console.log(i);
  }
// 14. Find Variable Type
let age = 20;
console.log(typeof age);
// 15. Make Text Red (HTML + JS)
function makeRed() {
    document.getElementById("myText").style.color = "red";
  }