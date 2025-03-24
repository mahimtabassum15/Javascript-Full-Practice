// Promt use
// let name=prompt("Hello Mahim!");
// console.log(name);

let num=prompt("ENter a Number");
if(num%5===0){
    console.log(num,"is a multiple of 5");
}
else{
    console.log(num,"is Not a multiple of 5");
}

// Arithmetic Operators

let a=10;
let b=3;
console.log("a = ", a, "& b = ", b);
console.log("a + b = ", a+b);
console.log("a - b = ", a-b);
console.log("a * b = ", a*b);
console.log("a / b = ", a/b);

//Modulas
console.log("a % b = ", a%b);

// Exponentiation
console.log("a ** b = ", a**b);

// Unary Operator-- increment(++) & Decrement(--)

// increment(++)

let x=25;
let y=36;
console.log("x = ", x, "& y = ", y);
// x=x+1 //26
x++;
// y=y-2 //35
y--;
console.log("x = ", x);
console.log("y = ", y);

// assignment Operatorss
let c=15;
let d=5;
c+=4;  // c = c + 4
console.log("c = ",c);

// Compression Operator
let m=25;
let n=5;
console.log("m==n",m==n);
console.log("m!=n",m!=n);

// conditional statements

let age=21;
if(age<18){
    console.log("You can get License");
}

// another one
let mode="dark";
let color;
if(mode === "dark"){
    color="black";
}

if(mode==="light"){
    color="white";
}

console.log(color);

//another 

let mod="blue";
let colour;
if(mod === "dark"){
    colour="black";
}
else{
    colour="white";
}

console.log(colour);

//another 

let mud="blue";
let colur;
if(mud === "dark"){
    colur="black";
}
else if(mud==="white"){
    colur="white";
}
else if(mud==="pink"){
    colur="pink";
}
else {
    colur="blue";
}

console.log(colur);

// ternary operator

let mahim=22;
// mahim>=22?console.log("adult"):console.log("not adult");
let results=mahim>=22?"adult":"not adult";
console.log(results); 

