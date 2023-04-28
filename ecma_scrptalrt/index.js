//alert functions id else
// let a=prompt("what is officail name of java script",'');
// if ((a.toLowerCase()) == "ecmascript") {
//     alert("correct");
// }
// else {
//     alert("you dont know dumb.\n its ECMAScript");
// }
//add7 function
function add7(a){
return a+7;
}
console.log(add7(5));


//mun two numbers
function muntiply(a,b){
    return a*b;
}
console.log(muntiply(2,5));


//captalize fist letter
function captalize(k){
    let a=(k.slice(0,1));

    return (a.toUpperCase()+k.slice(1));
}
console.log(captalize("KNGJ"));


//function last letter 
function last_letter(k){
    return k.slice(-1);
}
console.log(last_letter("biswa"));
