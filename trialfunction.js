function trialfunction(n){
    let output=``;
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n;j++){
            output +=`${j}`
        }
        output +=`\n`
    }
    console.log(output)
}

let number = prompt(`Number`);
trialfunction(number);