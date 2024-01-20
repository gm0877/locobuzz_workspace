/////--For loop
let k=0;
for(let i=0;i<10;i++){
k+=i
}

////whileloop

while(k>0){
    console.log(k);
    k-=1;
}

// ///iterating through object
let person={
    name:"qwerty",
    age:30,
    job:"Web 3.0 developer"
};
for(let key in person){
    console.log(`${key}-> ${person[key]}`);
}

///ForEach
const d=[];
const num=[1,2,3,4,5]

num.forEach(function(n){
    d.push(n*2);
})
console.log(d)


///Push
let fruits = ['apple', 'orange', 'banana'];
fruits.push('grape');
console.log(fruits); 

// // ///Pop
let names=["hari","krisj","Swpna","rao"]
names.pop();
console.log(names)

// ///Slice
let numbers = [1, 2, 3, 4, 5];
let slicedNumbers = [];
let requiredLength=4
for (let i = 1; i < requiredLength; i++) {
    slicedNumbers.push(numbers[i]);
}

console.log("Sliced array using for loop:", slicedNumbers);
let sliceed=[]
 sliceed=numbers.slice(1,requiredLength)
console.log("Without slice :",slicedNumbers)
console.log("With Slice: ",sliceed)


///Join

let fruit = ['apple', 'orange', 'banana', 'grape'];
let joinedFruits = '';

for(let i=0;i<fruit.length;i++){
    joinedFruits+=fruit[i]
    if(i<fruit.length){
        joinedFruits+=', ';
    }
}
console.log("Joined using for loop:", joinedFruits);

let alt=fruit.join(', ')
console.log("After using join:",alt)

//Split

let sentence = 'This is the sentence';

let a=sentence.split(' ');
console.log(a);