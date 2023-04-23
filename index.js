//Selecting the element from HTML

let displayEl = document.getElementById("display-el")

const numBtns = document.querySelectorAll("#number")

const clearBtn = document.getElementById("All-clear")

const deleteBtn = document.getElementById("cancel")

const equalBtn = document.getElementById("equal")


 numBtns.forEach((numBtns) => {
    numBtns.addEventListener("click", insertNum)
})

function insertNum(e){
    const num = e.target.textContent
    displayEl.value += num
} 

clearBtn.addEventListener("click", function(){
    displayEl.value = ""
})

deleteBtn.addEventListener("click", function(){
    displayEl.value = displayEl.value.slice(0, -1)
})

equalBtn.addEventListener("click", function(){
    displayEl.value = eval(displayEl.value)  
})