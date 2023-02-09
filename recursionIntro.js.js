//console.log("HI");///////// numbers from given number to 1....
/*function solve(n){
    if(n < 1) return ;
    //console.log(n);
    solve(n-1);
    console.log(n);
}
solve(5);
*/
/////////fibonacci...../////
/*function fib(n){
    if(n==0 || n==1){
    return n;
}
    return fib(n-1)+fib(n-2);
    
}
console.log(fib(11));
*/
//OBJECT DESTRUCTURING////
let car =[{
    color: "Black",
    speed: "120Kmph",
    brand: "Audi",
    start: function () {
    console.log('Car started');
    },
    stop: function () {
    console.log('Car stopped');
    }
    },{
        color: 'Red',
        speed: '100Kmph',
        brand: 'BMW',
        start: function () {
        console.log('Car started');
        },
        stop: function () {
        console.log('Car stopped');
        },
       },];

const clonecar = Object.assign({}, car);
for ([key, value] of Object.entries(clonecar)){
console.log(`MY CAR IS  ${value.brand} AND COLOR IS ${value.color} AND SPEED IS ${value.speed} `)
}


//let  color,speed,brand;
/*let{
    color,
    speed,
    brand,
    start,
    stop}=car;
/*console.log(speed);
console.log(color);
console.log(brand);
*/
//let {color:Red ,brand:BMW}=car;
/*console.log(color);
console.log(speed);
console.log(brand);
car.start();
car.stop();
console.log(Object.keys(car));
console.log(Object.values(car));
*/
