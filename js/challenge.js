
//once page loads, the timer should increase by 1 every time
let counter = setInterval(counting, 1000);
const decreaseBtn = document.getElementById("minus");
const increaseBtn = document.getElementById("plus");
const likeBtn = document.getElementById("heart");
const pauseBtn = document.getElementById("pause");
const submitBtn = document.getElementById("submit");

function counting(){
    let counter = document.querySelector("#counter");
    counter.innerText++;
}
//button enables us to decrease/increase the counter by 1 when it's clicked
decreaseBtn.addEventListener("click", function(){
    let counter = document.querySelector("#counter");
    counter.textContent--;
});
increaseBtn.addEventListener("click", function(){
    let counter = document.querySelector("#counter");
    counter.textContent++;
});
//able to like the counter that they're in and shows the number of likes under the buttons
const likeObj = {}
likeBtn.addEventListener("click", function(){
  const likes = document.querySelector(".likes")
  let like = document.createElement("li")
  let counter = document.querySelector("#counter")
  let a = parseInt(counter.innerText)
  like.id = a
  if(likeObj[a]){
    likeObj[a]++
    document.getElementById(a).innerText = `${a} has been liked ${likeObj[a]} times`
  }else{
    likeObj[a] = 1
    like.innerText = `${a} has been liked ${likeObj[a]} time`
    likes.append(like)
  }
})
//When clicking the pause button, stops the counter.
pauseBtn.addEventListener("click", pauseTimer)

function pauseTimer() {
    clearInterval(counter)
    if(pauseBtn.innerText == "pause"){
        pauseBtn.innerText = "resume";
        decreaseBtn.disabled = true;
        increaseBtn.disabled = true;
        likeBtn.disabled = true;
        submitBtn.disabled = true;
    } else{
        counter = setInterval(counting, 1000);
        pauseBtn.innerText = "pause";
        decreaseBtn.disabled = false;
        increaseBtn.disabled = false;
        likeBtn.disabled = false;
        submitBtn.disabled = false;
    }
}
//able to write comment in the input section of comment form

submitBtn.addEventListener("click", submitComment)


function submitComment(event){
    event.preventDefault();
    const comment = document.getElementById("comment-input").value;
    const commentsList = document.getElementById("list");
    let p = document.createElement("p");
    let node = document.createTextNode(comment);
    p.append(node);
    commentsList.appendChild(p);
    document.getElementById('comment-input').value = "";
}