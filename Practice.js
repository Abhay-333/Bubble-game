var Timer = 6
var random = 0
var hitRandom = 0
var score = 0

function Score() {
    
    document.querySelector('.main-box').addEventListener('click', function (Abhay) {
        var clickedNumber = Number(Abhay.target.innerHTML)
        if (clickedNumber === hitRandom) {
            score += 10;
            Hit()
            Bubble();
        }
        document.getElementById("Scorer").innerHTML = score
    })

}

function Hit() {
    hitRandom = Math.floor(Math.random() * 10);
    document.getElementById('Hit').innerHTML = hitRandom
}

function Time() {
    var Interval = setInterval(function () {
        document.getElementById('Timer').innerHTML = Timer

        if (Timer > 0) {
            Timer--
        }
        else {
            document.querySelector('.main-box').innerHTML = `<h1 style = font-size:60px >Game Over</h1>`
        }

        // console.log(Timer)
    }, 1000)

}

function Bubble() {
    var clutter = ''

    for (let i = 1; i <= 133; i++) {
        random = Math.floor(Math.random() * 10)
        clutter += `<div class ="bubble">${random}</div>`
    }

    document.querySelector('.main-box').innerHTML = clutter
}

Score()
Bubble();
Time()
Hit()