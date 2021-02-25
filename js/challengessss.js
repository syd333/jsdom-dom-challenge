document.addEventListener("DOMContentLoaded", function () {

//defining variables 
let counter = document.getElementById("counter");
const decreaseBtn = document.getElementById("minus");
const increaseBtn = document.getElementById("plus");
const heartBtn = document.getElementById("heart");
const likesUl = document.querySelector(".likes");
const pauseBtn = document.getElementById("pause");
const submitBtn = document.getElementById("submit");



// stand alone functions
intervalHandler = () => {
    setInterval(() => {
        counter.innerText++
    }, 1000)
}

// stand alone event listeners
increaseBtn.addEventListener("click", function (){
    counter.textContent++;
})

decreaseBtn.addEventListener("click", function() {
    counter.textContent--;
})

heartBtn.addEventListener("click", function() {
    //create li for counter innertext
    if (document.getElementById(counter.innerText)  === null) {
    let li = document.createElement("li")
    li.id = counter.innerText
    li.data = 1
    li.innerHTML = counter.innerText + ' has been liked ' + li.data + ' times'
    likesUl.appendChild(li)
    } else {
        let li = document.getElementById(counter.innerText)
        li.data++
        li.innerHTML = counter.innerText + ' has been liked ' + li.data + ' times'
    }
})

pause.data = false;
pauseBtn.addEventListener("click", () => {
    if (pause.data === false){
        pause.data = !pause.data
        intervalHandler.clearInterval()
        counter.disabled = true
        increaseBtn.disabled = true
        decreaseBtn.disabled = true
        heartBtn.disabled = true
    } else {
        pause.data = !pause.data
        counter.disabled = false
        increaseBtn.disabled = false
        decreaseBtn.disabled = false
        heartBtn.disabled = false

    }
})



//call functions
intervalHandler()

})
