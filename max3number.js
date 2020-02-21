let max1, max2, max3, input, num;
max1 = -Infinity;
max2 = -Infinity;
max3 = -Infinity;
input = -Infinity;

while (input) {
    input = prompt(`input your number `);
    num = Number(input);
    if (num >= max1) { 
        max3 = max2;
        max2 = max1;
        max1 = num;
    }else if ( num >= max2 && num < max1) {
        max3 = max2;
        max2 = num;
    }else if ( num >= max3 && num < max2) {
        max3 = max2;
        max3 = num;
    }


    console.log(`input : ${input} // 1st : ${max1} // 2nd : ${max2} // 3rd : ${max3}`);
}
alert(`1st : ${max1} 2nd : ${max2} 3rd : ${max3}`);