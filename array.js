let heroes=["Ironman-TonyStark","Thor","Hulk","Spider-Man","Ant-Man","Black-Panther"];

// For Loop
for(let idx=0;idx<heroes.length;idx++){
    console.log(heroes[idx]);
}

// For Of Loop
for(let hero of heroes){
    console.log(hero.toUpperCase());
}

let marks=[85,67,89,55,99];
let sum =0;
for (const val of marks) {
    sum+=val;

};
let avg=sum/marks.length;
console.log(sum);
console.log('Average:',avg);


// For Loop
let items=[600,710,550,800,900];
let i=0;
for(let val of items){
    console.log(`Value at index ${i} = ${val}`);
    let offer = val  / 10;
    items[i]=items[i] - offer;
    console.log(`value after offer=${items[i]}`);
    i++;
};

// Push Pop 

let food=["Alu","Begun","Tometa","Potol"];
console.log(food);
food.push("Apple","Dab");
console.log(food);
food.pop("Apple");
console.log(food);


// Splice Array 

let arr=[10,20,30,40,50,60,70];
//add element
// arr.splice(2,0,101);
//delete element
// arr.splice(5,1);
//Replace Element
arr.splice(2,1,101);

// Question Solve 
let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix","MacroByte iT","MT Group"];
//Remove the first company from array
companies.splice(0,1);

//Remove Uber and Ola in its Place
companies.splice(2,1,"Ola");

//Add Amazon at the end
companies.push("Amazom");