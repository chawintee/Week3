let a, firstMax, secondMax, num;
firstMax = -Infinity;
secondMax = -Infinity;
a = -Infinity;
//a = prompt(`input your number`);

while (a) {
    a = prompt(`input your number`);
    num = Number(a);
    if ( num >= firstMax ) {
        secondMax = firstMax;
        firstMax = a;
    }
    else if ( num >= secondMax && num < secondMax){
        secondMax = num
    }

    console.log(num);
    console.log(`first max is ${firstMax}`);
    console.log(`second max is ${secondMax}`);
}
alert(`your first maximum number is ${firstMax} \n your second maximum number is ${secondMax}`);