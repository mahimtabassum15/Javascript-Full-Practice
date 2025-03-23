// primitive deta type (7)

// 1. Number 
let age=21;
console.log(age);
let price=500;
console.log(typeof price);
console.log(price);

// 2. String 

let name="Mahim Tabassum";
console.log(name);
console.log(typeof name);

// 3. Boolean

isFollow= true;
console.log(typeof isFollow);

// 4.  Undedined 
let X;
console.log(X);
console.log(typeof X);

// 5. null 
let y=null;
console.log(y);
console.log(typeof y);

// 6. BigInt
let b=BigInt("123");

// 7. Symbol
let z=Symbol("Hello");

// Object

const mahim ={
    fullnme: " Mahim Tabassum ",
    age: 21,
    cgpa: 2.7,
    ispass: true,
};

mahim["age"]=mahim["age"]+1;

console.log(mahim.age);

console.log(mahim["cgpa"]); 