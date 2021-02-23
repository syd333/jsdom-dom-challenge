function setCounter () {
    const counterButton = document.getElementById("counter")
    counterButton.addEventListener("DOMContentLoaded", function (){

    })
}

// function stopCounter(){
//     clearInterval(counterButton)
// }

function pauseCounter() {
    debugger
    const pauseButton =document.getElementById("pause")
        pauseButton.addEventListener("click", function (){
    // pause counter button
    // disable all other buttons
    // button when clicked show text "resume"
    // when resume is clicked restart counter, re enable other buttons
    // eventpropagation 
    })
}

function submitComment() {
    const submitButton = document.getElementById("submit")
        submitButton.addEventListener("click", function (){
    // when button clicked 
    // submit message
    })
}


function increaseCounter() {
    const plusButton = document.getElementById("plus")
        plusButton.addEventListener("click", function (){
    // get current value of counter
    // increment += 1
    })
}

function decreaseCounter () {
    const minusButton = document.getElementById("minus")
        minusButton.addEventListener("click", function (){
    // get current value of counter
    // decrease counter =-1 
    })
}
