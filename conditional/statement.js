//One-line statement

let i = 25;
/*
if (i > 25) {
    console.log("Greater than 25")
}
else {

    console.log("Less than or equal to 25");//Less than or equal to 25

}

*/

console.log(i > 25 ? "Greater than 25" : "Less than or equal to 25");//Less than or equal to 25

if (i > 20) {
    if (i % 2 == 0) {
        console.log("Value is valid somehow")
    }
    else if (i % 2 !== 0) {
        console.log("This is also valid"); //This is also valid
    }
    else {
        console.log("Please learn more")
    }

}
else {
    console.log("You need to learn more");
}




//do while statement

let o = 0;
do {
    o += 2;

}
while (o < 10) {
    console.log(o);//10
}


//for 
/*
let count = 10;

for (let i = 0; i < count; i++) {
    console.log(i); //0,1,2,3,4,5,6,7,8,9
}

*/

//let value = 20;

//for (let i = 0; i < value; i++) {
// console.log(i);//0-19;
//}


//let sf = 10;

//for (let i = 100; i > sf; i--) {
//   console.log(i); //100-10
//}


let df = 5;

for (let i = 50; i > df; i++) {
    console.log(i); //infinity loops
}






