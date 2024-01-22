let first = document.createElement("div")
let insideBottle = document.querySelector("#insideBottle")
let goal = document.querySelector(".goal")
let topDIV = document.querySelector(".container2").querySelector(".div1")

let botDiv = document.querySelector(".container2").querySelector(".div2")

for (let i = 0; i < 4; i++) {
    let first = document.createElement("div")
    first.setAttribute("class", "miniBottle")
    let text = "250 ml"
    first.innerText = text
    topDIV.appendChild(first)
    
}
for (let i = 0; i < 4; i++) {
    let first = document.createElement("div")
    first.setAttribute("class", "miniBottle")
    let text = "250 ml"
    first.innerText = text
    botDiv.appendChild(first)
    
}

var i = 0;
function move(quantity) {
  if (i == 0) {
    i = 1;
    var elem = document.getElementsByClassName("myProgress")[0];
    var height = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (height >= quantity) {
        clearInterval(id);
        i = 0;
      } else {
        height++;
        elem.style.height = height + "%";
      }
    }
  }
}
move(0)


document.querySelectorAll(".miniBottle")[0].addEventListener('click', ()=>{
    move(12.5)
    insideBottle.innerText = "12.5%"
    goal.innerText = "THIS IS THE FIRST SHOT!!!!"

    document.querySelectorAll(".miniBottle")[0].style.backgroundColor = "aqua"
    if (document.querySelectorAll(".miniBottle")[1].style.backgroundColor == "aqua") {
        document.querySelectorAll(".miniBottle")[1].style.backgroundColor = "#FFFF"
        console.log("blanc");
    }
    if (document.querySelectorAll(".miniBottle")[2].style.backgroundColor == "aqua") {
        document.querySelectorAll(".miniBottle")[2].style.backgroundColor = "#FFFF"
        console.log("blanc");
    }
    if (document.querySelectorAll(".miniBottle")[3].style.backgroundColor == "aqua") {
        document.querySelectorAll(".miniBottle")[3].style.backgroundColor = "#FFFF"
        console.log("blanc");
    }
    if (document.querySelectorAll(".miniBottle")[4].style.backgroundColor == "aqua") {
        document.querySelectorAll(".miniBottle")[4].style.backgroundColor = "#FFFF"
        console.log("blanc");
    }
    if (document.querySelectorAll(".miniBottle")[5].style.backgroundColor == "aqua") {
        document.querySelectorAll(".miniBottle")[5].style.backgroundColor = "#FFFF"
        console.log("blanc");
    }
    if (document.querySelectorAll(".miniBottle")[6].style.backgroundColor == "aqua") {
        document.querySelectorAll(".miniBottle")[6].style.backgroundColor = "#FFFF"
        console.log("blanc");
    }
    if (document.querySelectorAll(".miniBottle")[7].style.backgroundColor == "aqua") {
        document.querySelectorAll(".miniBottle")[7].style.backgroundColor = "#FFFF"
        console.log("blanc");
    }


})
document.querySelectorAll(".miniBottle")[1].addEventListener('click', ()=>{
    move(25)
    insideBottle.innerText = "25%"
    goal.innerText = "SECOND SHOT !!!!"

    document.querySelectorAll(".miniBottle")[1].style.backgroundColor = "aqua"
    document.querySelectorAll(".miniBottle")[0].style.backgroundColor = "aqua"
    
    if (document.querySelectorAll(".miniBottle")[2].style.backgroundColor == "aqua") {
        document.querySelectorAll(".miniBottle")[2].style.backgroundColor = "#FFFF"
        console.log("blanc");
    }
    if (document.querySelectorAll(".miniBottle")[3].style.backgroundColor == "aqua") {
        document.querySelectorAll(".miniBottle")[3].style.backgroundColor = "#FFFF"
        console.log("blanc");
    }
    if (document.querySelectorAll(".miniBottle")[4].style.backgroundColor == "aqua") {
        document.querySelectorAll(".miniBottle")[4].style.backgroundColor = "#FFFF"
        console.log("blanc");
    }
    if (document.querySelectorAll(".miniBottle")[5].style.backgroundColor == "aqua") {
        document.querySelectorAll(".miniBottle")[5].style.backgroundColor = "#FFFF"
        console.log("blanc");
    }
    if (document.querySelectorAll(".miniBottle")[6].style.backgroundColor == "aqua") {
        document.querySelectorAll(".miniBottle")[6].style.backgroundColor = "#FFFF"
        console.log("blanc");
    }
    if (document.querySelectorAll(".miniBottle")[7].style.backgroundColor == "aqua") {
        document.querySelectorAll(".miniBottle")[7].style.backgroundColor = "#FFFF"
        console.log("blanc");
    }

})
document.querySelectorAll(".miniBottle")[2].addEventListener('click', ()=>{
    move(37.5)
    insideBottle.innerText = "37.5%"
    goal.innerText = "ALMOST THE HALF !!!!"

    document.querySelectorAll(".miniBottle")[2].style.backgroundColor = "aqua"
    document.querySelectorAll(".miniBottle")[1].style.backgroundColor = "aqua"
    document.querySelectorAll(".miniBottle")[0].style.backgroundColor = "aqua"

    if (document.querySelectorAll(".miniBottle")[3].style.backgroundColor == "aqua") {
        document.querySelectorAll(".miniBottle")[3].style.backgroundColor = "#FFFF"
        console.log("blanc");
    }
    if (document.querySelectorAll(".miniBottle")[4].style.backgroundColor == "aqua") {
        document.querySelectorAll(".miniBottle")[4].style.backgroundColor = "#FFFF"
        console.log("blanc");
    }
    if (document.querySelectorAll(".miniBottle")[5].style.backgroundColor == "aqua") {
        document.querySelectorAll(".miniBottle")[5].style.backgroundColor = "#FFFF"
        console.log("blanc");
    }
    if (document.querySelectorAll(".miniBottle")[6].style.backgroundColor == "aqua") {
        document.querySelectorAll(".miniBottle")[6].style.backgroundColor = "#FFFF"
        console.log("blanc");
    }
    if (document.querySelectorAll(".miniBottle")[7].style.backgroundColor == "aqua") {
        document.querySelectorAll(".miniBottle")[7].style.backgroundColor = "#FFFF"
        console.log("blanc");
    }

})
document.querySelectorAll(".miniBottle")[3].addEventListener('click', ()=>{
    move(50)
    insideBottle.innerText = "50%"
    goal.innerText = "U HAVE THE HALF OF IT !!!!"

    document.querySelectorAll(".miniBottle")[3].style.backgroundColor = "aqua"
    document.querySelectorAll(".miniBottle")[2].style.backgroundColor = "aqua"
    document.querySelectorAll(".miniBottle")[1].style.backgroundColor = "aqua"
    document.querySelectorAll(".miniBottle")[0].style.backgroundColor = "aqua"

    if (document.querySelectorAll(".miniBottle")[4].style.backgroundColor == "aqua") {
        document.querySelectorAll(".miniBottle")[4].style.backgroundColor = "#FFFF"
        console.log("blanc");
    }
    if (document.querySelectorAll(".miniBottle")[5].style.backgroundColor == "aqua") {
        document.querySelectorAll(".miniBottle")[5].style.backgroundColor = "#FFFF"
        console.log("blanc");
    }
    if (document.querySelectorAll(".miniBottle")[6].style.backgroundColor == "aqua") {
        document.querySelectorAll(".miniBottle")[6].style.backgroundColor = "#FFFF"
        console.log("blanc");
    }
    if (document.querySelectorAll(".miniBottle")[7].style.backgroundColor == "aqua") {
        document.querySelectorAll(".miniBottle")[7].style.backgroundColor = "#FFFF"
        console.log("blanc");
    }
})
document.querySelectorAll(".miniBottle")[4].addEventListener('click', ()=>{
    move(62.5)
    insideBottle.innerText = "62.5%"
    goal.innerText = "C'MON BRO !!!!"

    document.querySelectorAll(".miniBottle")[4].style.backgroundColor = "aqua"
    document.querySelectorAll(".miniBottle")[3].style.backgroundColor = "aqua"
    document.querySelectorAll(".miniBottle")[2].style.backgroundColor = "aqua"
    document.querySelectorAll(".miniBottle")[1].style.backgroundColor = "aqua"
    document.querySelectorAll(".miniBottle")[0].style.backgroundColor = "aqua"
    if (document.querySelectorAll(".miniBottle")[5].style.backgroundColor == "aqua") {
        document.querySelectorAll(".miniBottle")[5].style.backgroundColor = "#FFFF"
        console.log("blanc");
    }
    if (document.querySelectorAll(".miniBottle")[6].style.backgroundColor == "aqua") {
        document.querySelectorAll(".miniBottle")[6].style.backgroundColor = "#FFFF"
        console.log("blanc");
    }
    if (document.querySelectorAll(".miniBottle")[7].style.backgroundColor == "aqua") {
        document.querySelectorAll(".miniBottle")[7].style.backgroundColor = "#FFFF"
        console.log("blanc");
    }
})
document.querySelectorAll(".miniBottle")[5].addEventListener('click', ()=>{
    move(75)
    insideBottle.innerText = "75%"
    goal.innerText = "A LITTLE BIT MORE !!!!"

    document.querySelectorAll(".miniBottle")[5].style.backgroundColor = "aqua"
    document.querySelectorAll(".miniBottle")[4].style.backgroundColor = "aqua"
    document.querySelectorAll(".miniBottle")[3].style.backgroundColor = "aqua"
    document.querySelectorAll(".miniBottle")[2].style.backgroundColor = "aqua"
    document.querySelectorAll(".miniBottle")[1].style.backgroundColor = "aqua"
    document.querySelectorAll(".miniBottle")[0].style.backgroundColor = "aqua"
    if (document.querySelectorAll(".miniBottle")[6].style.backgroundColor == "aqua") {
    document.querySelectorAll(".miniBottle")[6].style.backgroundColor = "#FFFF"
    console.log("blanc");
    }
    if (document.querySelectorAll(".miniBottle")[7].style.backgroundColor == "aqua") {
        document.querySelectorAll(".miniBottle")[7].style.backgroundColor = "#FFFF"
        console.log("blanc");

    }
})
document.querySelectorAll(".miniBottle")[6].addEventListener('click', ()=>{
    move(87.5)
    insideBottle.innerText = "87.5%"
    goal.innerText = "last one BRO !!!!"
    document.querySelectorAll(".miniBottle")[6].style.backgroundColor = "aqua"
    document.querySelectorAll(".miniBottle")[5].style.backgroundColor = "aqua"
    document.querySelectorAll(".miniBottle")[4].style.backgroundColor = "aqua"
    document.querySelectorAll(".miniBottle")[3].style.backgroundColor = "aqua"
    document.querySelectorAll(".miniBottle")[2].style.backgroundColor = "aqua"
    document.querySelectorAll(".miniBottle")[1].style.backgroundColor = "aqua"
    document.querySelectorAll(".miniBottle")[0].style.backgroundColor = "aqua"

    if (document.querySelectorAll(".miniBottle")[7].style.backgroundColor == "aqua") {
        document.querySelectorAll(".miniBottle")[7].style.backgroundColor = "#FFFF"
        console.log("blanc");

    }
})
document.querySelectorAll(".miniBottle")[7].addEventListener('click', ()=>{
    move(100)
    insideBottle.innerText = "100%"
    goal.innerText = "YESS SIR !!!!"

    document.querySelectorAll(".miniBottle")[7].style.backgroundColor = "aqua"
    document.querySelectorAll(".miniBottle")[6].style.backgroundColor = "aqua"
    document.querySelectorAll(".miniBottle")[5].style.backgroundColor = "aqua"
    document.querySelectorAll(".miniBottle")[4].style.backgroundColor = "aqua"
    document.querySelectorAll(".miniBottle")[3].style.backgroundColor = "aqua"
    document.querySelectorAll(".miniBottle")[2].style.backgroundColor = "aqua"
    document.querySelectorAll(".miniBottle")[1].style.backgroundColor = "aqua"
    document.querySelectorAll(".miniBottle")[0].style.backgroundColor = "aqua"
})
