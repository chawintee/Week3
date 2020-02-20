/* exercise 6.2 Arrow function */
// let ask = (question, yes, no) => {
//     if (confirm(question)) yes()
//     else no();
//   }

//   ask(
//     "Do you agree?",
//     () => { alert("You agreed."); },
//     () => { alert("You canceled the execution."); }
//   );



/* Exercise 1.10 */
function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) result *= x;
    return result;
}

let x = prompt("x?", ''), n = prompt("n?", '');

if (n <= 0) {
    alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
}
else {
    alert(pow(x, n));
}




/*


function a (aaaa){alert("a")}


// let a = (aaa) => { alert("a") }


function callback(a, b , c){
a();
}

// callback( a )

let sum=(a,b=0,c=0,d=0)=>{sum=a+b+c+d; alert(sum);}
// sum(20,30,40,54);
// a=+prompt(`first`);
// b=+prompt(`second`);
// c=+prompt(`third`);


/*test function&jQuery*/

submit = (e)=>{
    console.log("test")
    e.preventDefault()
    $("."    )
 let a,b,c,d;
    a=$(".item1").val();
    b=$(".item2").val();
    c=$(".item3").val();
    d=$(".item4").val();
    sum(a,b,c,d);
}





