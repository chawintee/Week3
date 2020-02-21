function bmi (kg, cm) {
    let bmi0;
    bmi0 = kg / ((cm/100) ** 2);
    return bmi0;
}

function printName(Name, BMI){
    alert (`Name : ${Name} \n BMI. : ${BMI}`);
}


function compare(n1, w1, h1, n2, w2 ,h2 ) {
    let bmi1=bmi(w1, h1), bmi2=bmi(w2, h2);
    console.log(bmi1);
    console.log(bmi2);
    if(bmi1 > bmi2){
        // alert(`${n1} ${bmi1}`);
        printName(n1,bmi1);
    }else {
        // alert(`${n2} ${bmi2}`);
        printName(n2,bmi2);
    }
}


// function compare(none, ntwo, bone, btwo){
//     if(bone > btwo) {
//         alert(`${none} ${bone}`);
//     }else {
//         alert(`${ntwo} ${btwo}`);
//     }
// }


let myFirstName, myFirstWeight, myFirstHeight, mySecondName, mySecondWeight, mySecondHeight;
myFirstName = prompt(`put your name 1st`);
myFirstWeight = +prompt(`put your weight 1st`);
myFirstHeight = +prompt(`put your height 1st`);
mySecondName = prompt(`put your name 2nd`);
mySecondWeight = +prompt(`put your weight 2nd`);
mySecondHeight = +prompt(`put your height 2nd`);

compare(myFirstName, myFirstWeight, myFirstHeight, mySecondName, mySecondWeight, mySecondHeight)

// compare(myFirstName, mySecondName, myFirstBmi, mySecondBmi);