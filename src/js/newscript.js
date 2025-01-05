let age = prompt('How old are you?');
let canDrink = (age > 21)? true : false;

if(age == 21){
    alert("You can drink anything.")
} else if(age < 21) {
    alert("Wait until you is 21, son.")
} else{
    alert(`Tell us ur age, boi`);
}
