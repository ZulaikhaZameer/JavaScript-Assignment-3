//? Q1: write a program that return your age in days (take age as an input)
// const ageInYears = prompt("Enter your age in years:");

// if (ageInYears !== null) {
//     const ageInDays = ageInYears * 365;

//     alert("Your age in days is approximately " + ageInDays + " days.");
// } else {
//     alert("You didn't enter a valid age.");
// }


//? Q2: write a function that takes a number as an argument, increments by +1, and returns the result (take the number as an input)
// function incrementByOne(number) {
//     return number + 1;
// }
// const inputNumber = +prompt("Enter a number:");

// if (!isNaN(inputNumber)) {
//     const result = incrementByOne(inputNumber);
//     alert("The result is: " + result);
// } else {
//     alert("You didn't enter a valid number.");
// }

//? Q3: write a function that takes a number as an argument, decrements by -1, and returns the result (take the number as an input)
// function decrementByOne(number) {
//     return number - 1;
// }

// const inputNumber = parseInt(prompt("Enter a number:"));

// if (!isNaN(inputNumber)) {
//     const result = decrementByOne(inputNumber);
//     alert("The result is: " + result);
// } else {
//     alert("You didn't enter a valid number.");
// }

//? Q4: write a function that takes a number and returns square of the number
// function squareNumber(number) {
//     return number * number;
// }

// const inputNumber = +prompt("Enter a number:");

// if (!isNaN(inputNumber)) {
//     const result = squareNumber(inputNumber);
//     alert("The square of the number is: " + result);
// } else {
//     alert("You didn't enter a valid number.");
// }

//? Q5: write a function that tells current time in y-m-d format.
// function getCurrentDateYMD() {
//     const now = new Date();
//     const year = now.getFullYear();
//     const month = now.getMonth() + 1;
//     const day = now.getDate();

//     return `${year}-${month}-${day}`;
// }

// const currentDate = getCurrentDateYMD();
// document.write("Current Date (Y-M-D): " + currentDate);

//? Q6: write a function that tells current time from date object in H:i:s format
// function getCurrentTimeHMS() {
//     const now = new Date();
//     const hours = now.getHours();
//     const minutes = now.getMinutes();
//     const seconds = now.getSeconds();

//     return `${hours}:${minutes}:${seconds}`;
// }

// const currentTime = getCurrentTimeHMS();
// document.write("Current Time (H:i:s): " + currentTime);

//! Chapter 35-38

//? Q1
// function displayCurrentDateTime() {
//     const currentDate = new Date();
//     const formattedDate = currentDate.toString();
//     document.write(formattedDate);
// }
// displayCurrentDateTime();

//? Q2
// function greetUser() {
//     const firstName = prompt('Please enter your first name:');
//     const lastName = prompt('Please enter your last name:');
//     const fullName = firstName + ' ' + lastName;
//     alert('Hello, ' + fullName + '! Welcome!');
// }
// greetUser();

//? Q3
// function addNumbers() {
//     const num1 = +prompt('Enter the first number:');
//     const num2 = +prompt('Enter the second number:');

//     if (!isNaN(num1) && !isNaN(num2)) {
//         const sum = num1 + num2;
//         return sum;
//     } else {
//         return 'Invalid input. Please enter valid numbers.';
//     }
// }
// const result = addNumbers();
// alert(result);

//? Q4
// function calculate(num1, num2, operator) {
//     if (operator === '+') {
//         return num1 + num2;
//     } else if (operator === '-') {
//         return num1 - num2;
//     } else if (operator === '*') {
//         return num1 * num2;
//     } else if (operator === '/') {
//         if (num2 !== 0) {
//             return num1 / num2;
//         } else {
//             return 'Division by zero is not allowed.';
//         }
//     } else {
//         return 'Invalid operator. Please use +, -, *, or /.';
//     }
// }

// const num1 = +prompt('Enter the first number:');
// const num2 = +prompt('Enter the second number:');
// const operator = prompt('Enter the operator (+, -, *, /):');

// const result = calculate(num1, num2, operator);

// document.write(`Result: ${num1} ${operator} ${num2} = ${result}`);

//? Q5
// function square(num) {
//     return num * num;
// }
// const number = 5;
// const result = square(number);
// document.write(`The square of ${number} is ${result}`);

//? Q6
// function factorial(num) {
//     if (num === 0) {
//         return 1;
//     } else if (number < 0) {
//         return "Undefined (Factorial is not defined for negative numbers)";
//     } else {
//         return num * factorial(num - 1);
//     }
// }
// const number = 5;
// const result = factorial(number);
// document.write(`The factorial of ${number} is ${result}`);

//? Q7
// function counting(start, end) {
//     if (start > end) {
//         alert("Start number should be less than the end number.");
//         return;
//     }

//     for (let i = start; i <= end; i++) {
//         document.write(i + "<br>");
//     }
// }
// const startNumber = +prompt("Enter the start number:");
// const endNumber = +prompt("Enter the end number:");
// counting(startNumber, endNumber);

//? Q8
// function calculateHypotenuse() {
//     function calculateSquare(number) {
//         return number * number;
//     }
//     const base = +prompt('Enter the length of the base:');
//     const perpendicular = +prompt('Enter the length of the perpendicular:');

//     if (isNaN(base) || isNaN(perpendicular)) {
//         alert('Please enter valid numbers for the base and perpendicular.');
//         return;
//     }
//     const baseSquared = calculateSquare(base);
//     const perpendicularSquared = calculateSquare(perpendicular);
//     const hypotenuseSquared = baseSquared + perpendicularSquared;
//     const hypotenuse = Math.sqrt(hypotenuseSquared);

//     alert(`The hypotenuse of the right-angled triangle is approximately ${hypotenuse}`);
// }

// calculateHypotenuse();

//? Q9
//* Argument as value approach
// function calculateRectangleArea(width, height) {
//     return width * height;
// }
// const area1 = calculateRectangleArea(5, 8);
// document.write(`Area of the rectangle: ${area1}`);

//* Arguments as variables approach
// function calculateRectangleArea(width, height) {
//     return width * height;
// }
// const width = 5;
// const height = 8;
// const area2 = calculateRectangleArea(width, height);
// document.write(`Area of the rectangle: ${area2}`);

//? Q10
// function isPalindrome(str) {
//     str = str.replace(/[\W_]/g, '').toLowerCase();
//     return str === str.split('').reverse().join('');
// }

// const inputString = prompt('Enter a string to check if it is a palindrome:');

// if (isPalindrome(inputString)) {
//     alert(`${inputString} is a palindrome.`);
// } else {
//     alert(`${inputString} is not a palindrome.`);
// }

//? Q11
// function capitalizeFirstLetters(inputString) {
//     const words = inputString.split(' ');
//     const capitalizedWords = [];

//     for (const word of words) {
//         if (word.length > 0) {
//             capitalizedWords.push(word.charAt(0).toUpperCase() + word.slice(1));
//         } else {
//             capitalizedWords.push(word);
//         }
//     }

//     return capitalizedWords.join(' ');
// }
// const inputString = 'the quick brown fox';
// const result = capitalizeFirstLetters(inputString);
// document.write(`Original: ${inputString}`);
// document.write(`<br>Converted: ${result}`);

//? Q12
// function findLongestWord(inputString) {
//     const words = inputString.split(' ');
//     let longestWord = '';

//     for (const word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }

//     return longestWord;
// }
// const inputString = 'Web Development Tutorial';
// const longest = findLongestWord(inputString);
// document.write(`Longest word in the string is: ${longest}`);

//? Q13
// function countOccurrences(inputString, letter) {
//     let count = 0;

//     for (let i = 0; i < inputString.length; i++) {
//         if (inputString[i] === letter) {
//             count++;
//         }
//     }

//     return count;
// }

// const inputString = 'JSResourceS.com';
// const letter = 'o';
// const occurrences = countOccurrences(inputString, letter);
// document.write(`The letter "${letter}" appears ${occurrences} times in the string.`);

//? Q14
// function calcCircumference(radius) {
//     const circumference = 2 * Math.PI * radius;
//     document.write(`The circumference is approximately ${circumference}`);
// }

// function calcArea(radius) {
//     const area = Math.PI * Math.pow(radius, 2);
//     document.write(`<br>The area is approximately ${area}`);
// }
// const radius = 5;
// calcCircumference(radius);
// calcArea(radius);
