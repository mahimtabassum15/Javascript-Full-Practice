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
console.log(avg);
