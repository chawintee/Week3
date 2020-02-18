/* Exercise 4.1 */
// function f4_1(a){
//     let output1 =``;
//     for(let k=1;k<=a;k++){
//         output1 += `*`;
//     }
//     console.log(output1);
// }
// let number1=prompt(`Number`);
// f4_1(number1);


/* Exercise 4.2 */
// function trialfunction(n){
//     let output=``;
//     for(let i=1;i<=n;i++){
//         for(let j=1;j<=n;j++){
//             output +=`*` // output = output + "*"
//         }
//         output +=`\n` // output = output + เว้นบรรทัด
//     }
//     console.log(output)
// }
// let number = prompt(`Number`);
// trialfunction(number);

/*Exercise 4.3*/
// function f4_3(b){
//     let output3 = ``;
//     for (let l=1 ;l<=b ;l++){
//         for(let m=1 ;m<=b ;m++){
//             output3 += `${m}`;
//         }
//         output3 += `\n`;
//     }
//     console.log(output3);
// }
// let num3=prompt(`your number`);
// f4_3(num3);


/*Exercise 4.4 */
// function f4_4(n4){
//     let output4 = ``;
//     for(let i4=1;i4<=n4;i4++){
//         for(let j4=1;j4<=n4;j4++){
            // output4 += `${i4}`;
//         }
//         output4 +=`\n`
//     }
//     console.log(output4);
// }
// number4=prompt(`Number ???`);
// f4_4(number4);

/*Exercise 4.5 */
function f4_5(n5){
    let output5 = ``;
    for(let i5=n5;i5>=0;i5--){
        for(let j5=n5;j5>=0;j5--){
            output5 += `${i5}`;
        }
        output5 += `\n`;
    }
    console.log(output5);
}
num5 = prompt(`Number ???`);
f4_5(num5);
