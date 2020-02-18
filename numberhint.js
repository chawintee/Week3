let myNumber = prompt(`Input you number for friend (Number between 1 to 100)`);
console.log(myNumber);
for(i=0;i<100;i++){
    let friendNumber = prompt(`You friend Number is (Number between 1 to 100)`);
    if (friendNumber==myNumber){
        alert(`This is right number.`);
        break;
    }
    else if (friendNumber<myNumber){
        alert(`Your number is less than your friend's number.`);
    }
    else if (friendNumber>myNumber){
        alert(`Your number is more than your friend's number.`);
    }
    else{
        alert(`I don't know !!!`);
    }
}