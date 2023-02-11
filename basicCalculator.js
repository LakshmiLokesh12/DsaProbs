//basic calculator
/*let a=2056;
let b=1567;
var add=a+b;
var sub=a-b;
var mul=a*b;
var div=a/b;
console.log(add);
console.log(sub);
console.log(mul);
console.log(div);
*/

function calculator(a,b,o){
    switch(o){
        case '+':
            return a+b;
            break;
        case'-':
            return a-b;
            break;
        case '*':
            return a*b;
            break;
        case '/':
            return a/b;
            break;
        default:
                return('enter valid numbers');
    }
}

let cal1=calculator(4, 5, "+") // 9
let cal2=calculator(3867, 9347, "+") // 13214
let cal3=calculator(9, 3, "/") // 3
let cal4=calculator(3, 9, "/") // 0.33  to roundOff fractional part use .toFixed(2) 
let cal5=calculator(56, 89, "*") // 4984
let cal6=calculator(-5, 5, "-") // -10
let cal7=calculator(56, 89, "-") // -33

console.log(cal1);
console.log(cal2);
console.log(cal3);
console.log(cal4);
console.log(cal5);
console.log(cal6);
console.log(cal7);