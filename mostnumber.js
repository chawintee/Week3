// function mostnumber(a) {
//     let max=0;
//         if(a>max){
//             max =a;
//         }
//     alert(max);
// }



/* maxnumber */
let a,max=-Infinity;
let num=prompt(`Input your number`);
while(num != null) {
    a=Number(num);
    if(a>max) {
        max = a;
    }
    num=prompt(`Input your number`);
}
alert(max);

// let check = prompt(`teststring`);
// console.log(check)
// console.log(typeof check)
// let num = Number(check);
// console.log(num)
// console.log(typeof num)





