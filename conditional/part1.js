

var x = 10;
var y = 20;

var z = x > y ? true : false;

console.log(z);//false


let p = "Ramu";
let q = 20;

z = p.toString(true);
x = typeof (q);

console.log(z == String || x == Number ? true : false); //false

let num1 = 10;
let num2 = 20;

let max = (num1 > num2 ? num1 : num2);

console.log(max);//20


let tik = 30;
let doc = 25;

let result = (tik > doc ? tik : doc);
console.log(result);//30


const s = 20;
const d = 20;

const nameOne = () => {

    if (s == d) {
        return (`the value of s is: ${s}>=${d}` ? { s } : { d })
    }
    else {
        return (`${s} is equal to${d}`)
    }
}
let xy = nameOne()
console.log(xy.s);//20










