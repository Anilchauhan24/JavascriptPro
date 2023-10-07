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

}
else {
    console.log("You need to learn more");
}