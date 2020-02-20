let myUser = prompt(`How are you ???`);
console.log(myUser);
if (myUser == `Admin`) {
    let myPassword = prompt('Input your password');
    if (myPassword == `codecamp#5`) {
        alert(`Your welcome`);
        console.log(myPassword);
    }
    else if (myPassword == `` || myPassword == null) {
        alert(`Cancel`);
        console.log(myPassword);
    }
    else {
        alert(`Wrong password`);
        console.log(myPassword);
    }
} else if (!myUser || myUser == ``) {
    alert(`Cancel`);
}
else {
    alert(`I don't know how are you`);
}
