//create bubble dynamically
function makeBubble(){
    var clutter = ""


for(var i = 1; i<120; i++){

    //create random numbers
    var randomNumber = Math.floor(Math.random()*10)
    clutter +=  `<div class="bubble">${randomNumber}</div>`   
}

document.querySelector(".p-bottom").innerHTML = clutter
}


//timer
var timer  = 60
function runTimer(){
   var timerInterval= setInterval(function(){
        if(timer>0){
            timer--
        document.querySelector("#timerValue").textContent = timer
        }else{

            //stop timer
            clearInterval(timerInterval)
            document.querySelector(".p-bottom").innerHTML = `<h1>Game Over!!<h1>`
        }
        
    }, 1000)
}

//generate new hit
var randomHit = 0
function getNewHit(){
    randomHit = Math.floor(Math.random()*10)
    document.querySelector("#hitvalue").textContent = randomHit
}


//increase score
var score = 0
function increaseScore(){
    score += 10
    document.querySelector("#scoreValue").textContent = score
}

document.querySelector(".p-bottom").addEventListener("click", function(details){
    // alert("bubble was clicked")
    var clickedBubble = Number(details.target.textContent)
    if(clickedBubble === randomHit){

        //if clicked number = hit number 
        increaseScore()
        makeBubble()
        getNewHit()
    }
})

runTimer()
makeBubble()
getNewHit()
// increaseScore()