let yourPoint=prompt('Your point is');
if(yourPoint>=80)
{
    alert(`your point is ${yourPoint} you get 'A' grade.`);
    console.log(yourPoint);
}
else if(yourPoint>=70)
{
    alert(`your point is ${yourPoint} you get 'B' grade.`);
    console.log(yourPoint);
}
else if(yourPoint>=60)
{
    alert(`your point is ${yourPoint} you get 'C' grade.`);
    console.log(yourPoint);
}
else if(yourPoint>=50)
{
    alert(`your point is ${yourPoint} you get 'D' grade.`);
    console.log(yourPoint);
}
else if(yourPoint<50 && yourPoint>0)
{
    alert(`your point is ${yourPoint} you get 'F' grade.`);
    console.log(yourPoint);
}
else 
{
    alert("Could you put your point again");
    console.log(yourPoint);
}

