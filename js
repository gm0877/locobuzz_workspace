function tem(){
    console.log("Hello....");
}
tem();



let a=10;
function type(){
    console.log("Hello",a);
}
type();

let a=10;
console.log(typeof a);


function tem(){
    console.log("Hello....");
}
tem();


let a=10;
function type(){
    console.log("Hello",a);
}
type();


let a=1;
function tmp(){
    a=10;
    console.log(a);
    {
        a=18;
        console.log(a);
    }
}
console.log(a);
tmp();


let x=myfun(4,3);
function myfun(a,b){
    return a*b;
}
console.log(x);


IF else conditions
function fun(n){
    if(n>=18){
        console.log("False");
    }
    else{
        console.log("True");
    }
}
fun(20);


switch

let a=1;
switch(a){
    case 0:
        console.log("Zero");
        break;
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
}

let text;
switch (new Date().getDay()) {
    case 6:
      text = "Today is Saturday";
      break;
    case 0:
      text = "Today is Sunday";
      break;
    default:
      text = "Looking forward to the Weekend";
  }



function fun(a,b){
    return a*b;
}
console.log(fun(8,9))


let a=10;
let b=10;
console.log(a+b);
// //_______________________Synchronous_________________________________

// //Example 1:
console.log("Hiii....");
function Synchronous(){
    console.log("Good Moring....");
}
Synchronous();
console.log("Bye...");

// // Example2
console.log("Start");
for(let i=0; i<3; i++){
    console.log("Step "+i);
}
console.log("End");

// // Example 3:
console.log("Start Function");
function fun2(){
    console.log("2nd Step");
}
function fun(){
    console.log("1st Step");
    fun2();
}
fun();
console.log("Function End");




// // ____________________________Asynchronous Examples______________________

// // Example 1

console.log("Hii....");
setTimeout(()=>{
    console.log("Hello...");
},5000);
console.log("How are You");

// // Example 2
console.log("Starting");
function fun1(){
    console.log("Transferred data successfully...")
}
function fun(){
    console.log("Waiting for the response....");
    setTimeout(()=>{
        console.log("End")
    },2000);
    fun1();
}

fun();
console.log("Completed..");

//Example 3
console.log("Staring...");
function fun3(){
    console.log("Waiting in 3rd function");
}
function fun2(){
    setTimeout(()=>{
        console.log("Statement 3");
    },2000);
    fun3();
}
function  fun() {
    console.log("Statement 1");
    setTimeout(()=>{
        console.log("Continue 2nd function because more waiting time in 3rd function")
        console.log("Statement 2");
    },0);
    fun2();
}
fun();


// // ______________________________________________Call Back___________________________________________________________

// //example 1:
let test1 = (a)=>{
    console.log("a---->",a);
    a();
};
let test2 = ()=>{
    console.log("Hello");
};
test1(test2);

// //Example 2:
function fun(name, callback){
    console.log("Hello, "+name);
    callback();
}
function fun1(){
    console.log("Goodbye!...");
}
fun("Lalith",fun1);

// //Example 3:
function fun(name,callback){
    console.log("Hello, "+name);
    setTimeout(function (){
        callback();
    },2000);
}
function fun1(){
    console.log("Goodbe after 2 seconds!");
}
fun("Bob",fun1);



// //________________________________________________Promise__________________________________________________________

// //Example 1:
let newpromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let success = true;
        if(success){
            resolve("Operation Successful");
        }else{
            reject("Operation Failed");
        }
    },2000);
});
newpromise
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.error(error);
    });

// // Example 2:
let a=1;
let newpromise = new Promise((resolve, reject)=>{
    if(a>=5){
        resolve(a);
    }else{
        reject(a);
    }
});
newpromise
    .then((val)=> console.log("Login Success with number:",val))
    .catch((val)=> console.log("Login Failed with number:",val));
    
// let a=10;
// let b=10;
// console.log(a+b);


let a=10;
let b=14;
function fun(a,b){
    return a*b;
}
console.log(fun(a,b));

let a=1;
function tmp(){
    a=10;
    console.log(a);
    {
        a=18;
        console.log(a);
    }
}
console.log(a);
tmp();