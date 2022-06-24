const num1 = parseFloat(prompt("Enter a number: "));
const num2 =parseFloat(prompt("Enter another number: ")) ;

const operator = prompt("Choose an operator: +, -, *, /, %");

let result = 0;

if (operator == '+'){
    result = num1 + num2;

}else if (operator == '-' ){
    result = num1 - num2;

}else if (operator == '*'){
    result = num1 * num2;
}else if (operator == '/'){
    result = num1 / num2;
}else if (operator == '%'){
    result = num1 % num2;

}else{
    alert("Kindly put in the right data")
}
alert(num1 + operator + num2 + '=' + result)

