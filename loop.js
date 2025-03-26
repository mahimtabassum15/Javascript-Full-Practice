for (let count=1; count<=5; count++){
    console.log("My Love My wife");
}
for (let num=25; num<=100; num++){
    if(num%2===0){
        console.log("even number",num)
    }
    else{
        // console.log("odd number")
    }
}
console.log("My Love My wife",);
let i=0;
while(i<=15){
    console.log("Our Commpany Name MT Group");
    i++;
}

let m=20;
do{
    console.log("Hey Mahim",m);
    m++;
}while(i<=10);

// for-of loop

let str = "Mahim Tabassum";
let size=0;
for(let i of str){
    console.log("i=",i);
    size++;
}

console.log("String Size=",size);

// for in loop

let student={
    name: "Mahim",
    age: 21,
    cgpa: 2.71,
    isPass: true,
};
for (let key in student){
    console.log("key=",key,"value=", student["key"]);
};
// for (let i in student){
//     console.log(i);
// };
