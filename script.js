var timer = 60;
var score = 0;
var HitRandom = 0 

// Event Bubbling - jispe click karoge vo element per event raise hoga, aur event listener na milne per event element ke parent per listener dhundhega, waha bhi naa milne per event parent ke parent ke parent per listener dhundega

function Score() {
    score += 10;
    document.getElementById('Scorevalue').innerHTML = score;
}

function getNewHit() {
    HitRandom = Math.floor(Math.random() * 10);
    document.getElementById('Hitvalue').innerHTML = HitRandom;
}

function Bubble() {
    var clutter = "";

    for (var i = 1; i <= 168; i++) {
        var random = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${random}</div>`
    }

    document.querySelector('.pbottom').innerHTML = clutter;
}

function Timer() {

    var timerinterval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.getElementById('timervalue').innerHTML = timer
        }
        else {
            clearInterval(timer)
            document.querySelector('.pbottom').innerHTML = `<h1 style = font-size:80px;>Game Over</h1>`
        }
    }, 1000)
}

document.querySelector('.pbottom').addEventListener("click", function(abhay){
    var clickedNumber = Number(abhay.target.textContent);
    if(clickedNumber == HitRandom)
    {
        Bubble();
        getNewHit()
        Score();

    }

})


getNewHit()
Bubble();
Timer();
