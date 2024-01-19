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