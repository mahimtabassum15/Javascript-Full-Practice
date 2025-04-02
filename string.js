let str="Mahim Tabassum";

console.log(str[8]);  

let obj={
    item:"pen",
    price:15,
};
let output=`the cost of ${obj.item} is ${obj.price} taka`;
console.log(output);
// console.log("the cost of",obj.item, "is",obj.price,"$");
// Template Literals

let specialstring=`This is Template Literal`;
console.log(typeof specialstring);
let specialstrig=`This is Template Literal ${1+3+5}`;
console.log(specialstrig);

let srt = "Mahim \n Tabassum";
console.log(srt);

let strr = "Mahim \t Tabassum";
console.log(strr.length);

// uppercse lowercace
let mn="Mahim Tabassum";
let newMn=mn.toUpperCase();
console.log(newMn);

let nn="Mahim Tabassum";
let newnn=nn.toLowerCase();
console.log(newnn)

let n="    Mahim Tabassum   ";
let newn=n.trim();
console.log(newn);
console.log(n.slice(2,9));


