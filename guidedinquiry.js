//very easy
let num1 = 2000;
let num2 = 500;

console.log(num1 - num2);
//easy

let name1= 'Ethan';
let name2= 'Bartholomew';
console.log(`${name1} is shorter than ${name2} by ${name2.length - name1.length}`);

//medium
let tone = prompt('Whats up?');
if (tone === tone.toUpperCase()) {
    console.log('user needs to lower their tone')
} else if (tone === tone.toLowerCase()) {
    console.log ('speak up')
} else {
    console.log ('normal tone')
}

//Hard and very hard
let number1 = Number(prompt(`Please enter a number`));
let operator = prompt(`enter operator ( either +, -, * , and /): `);
let number2 = (prompt(`Please enter another number `));

let result;

if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

console.log(`${number1} ${operator} ${number2} =${result}`);
