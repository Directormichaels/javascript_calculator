console.log("Welcome")
firstNumber = parseFloat(prompt("Enter the first number"));
operation = prompt("Enter your preferred operation");
secondNumber = parseFloat(prompt("Enter the second number"));

let result;
if (operation === "+"){
    result = firstNumber + secondNumber
} else if (operation === "-"){
    result = firstNumber - secondNumber
} else if (operation === "*"){
    result = firstNumber * secondNumber
} else if (operation === "/"){
    result = firstNumber / secondNumber
} else{
    result = "Error"
}
alert(result)