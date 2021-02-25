document.addEventListener("DOMContentLoaded", function() {
    // define variables 
    let counter = document.getElementById("counter");
    let minus = document.getElementById("minus");
    let plus = document.getElementById("plus");
    let heart = document.getElementById("heart");
    let pause = document.getElementById("pause");
    const likesUl = document.querySelector(".likes");

    //stand alone functions
    const count = setInterval(() => {
            counter.innerText++;
        }, 1000);

  function increaseBtn() {
      counter.textContent++;
  }

  function decreaseBtn() {
    counter.textContent--;
  }

    //event listeners
    plus.addEventListener("click", increaseBtn);
    minus.addEventListener("click", decreaseBtn);
    heart.addEventListener("click", function() {
    // grab counter text and see if if it is = null
    // create li 
    // once li is created (use id attribute) = to counter text
    // increment li.data to 1 
    // else 
    // if li already has a counter text 'number 
    // (if exists) increment li.data
    if (document.getElementById(counter.innerText)  === null){
        let li =document.createElement("li")
        li.id = counter.innerText
        li.data = 1
        console.log(li)
        li.innerHTML = counter.innerText + ' has been liked ' + li.data + ' times'
        likesUl.appendChild(li)
        } else {
        let li = document.getElementById(counter.innerText)
        li.data++
        li.innerHTML = counter.innerText + ' has been liked ' + li.data + ' times'
        }
  
  })

    pause.data = false;
    pause.addEventListener("click", () => {
     if (pause.data === false ) {
         pause.data = !pause.data
         window.clearInterval(count)
         heart.disabled = true
         minus.disabled = true
         plus.disabled = true
         pause.innerText = "resume"
     } else {
        pause.data = !pause.data
        heart.disabled = false
        minus.disabled = false
        plus.disabled = false
        pause.innerText = "pause"
     }
  })




    //calling functions
    count()
})