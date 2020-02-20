function bmi(kg, m) {
    let bmi = kg / (m*m);
    return bmi;
}

function compare(none, ntwo, bone, btwo){
    if(bone > btwo) {
        alert(`${none} ${bone}`);
    }else {
        alert(`${ntwo} ${btwo}`);
    }
}

let myFirstName, myFirstBmi, mySecondName, mySecondBmi;
myFirstName = prompt(`put your name 1st`);
myFirstBmi = +prompt(`put your BMI 1st`);
mySecondName = prompt(`put your name 2nd`);
mySecondBmi = +prompt(`put your BMI 2nd`);

compare(myFirstName, mySecondName, myFirstBmi, mySecondBmi);


