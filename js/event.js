function makeRed() {
    document.body.style.backgroundColor = 'red';
}
// YELLOW-BUTTON 
const yellowButton = document.getElementById("make-yellow-button");
// JUST SET THE NAME OF THE FUNCTION 
yellowButton.onclick = makeYellow;
function makeYellow() {
    document.body.style.backgroundColor = "yellow";
}

// GREEN-BUTTON 
const greenButton = document.getElementById('make-green-button');
// ANONYMOUS FUNCTION
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

// YELLOW-BUTTON ADD-EVENT-LISTENER
const orangeButton = document.getElementById("make-orange-button");
orangeButton.addEventListener('click', makeGreen);
function makeGreen() {
    document.body.style.backgroundColor = 'orange'
}

// HOT-PINK BUTTON 
const hotPinkButton = document.getElementById('make-hotpink-button');
// console.log(hotPinkButton);FOR CHECKING ONLY
hotPinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})

// LIGHTBLUE BUTTON SHORTCUT
document.getElementById('make-lightblue-button').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})
