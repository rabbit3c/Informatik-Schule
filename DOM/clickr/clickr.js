var button_click = document.getElementById("button-click")
var output = document.getElementById("output")
var reset_score = document.getElementById("reset")
var time_dropdown = document.getElementById("time-dropdown")

score = 0
scores = []
timeout = 0
time = 5

function countClicks() {
    if (score == 0) {
        button_click.innerHTML = "<span class=\"spinner-grow spinner-grow-sm\"></span> Click Me"
        reset_score.disabled = false
        timeout = setTimeout(stop, time * 1000)
    }
    score++
    refreshOutput()
}

function refreshOutput() {
    output.innerHTML = score
}

function stop() {
    button_click.disabled = true
    button_click.innerHTML = "Time Out"

    score = `${score / time} cps`
    scores.push(score)
    refreshOutput()
    showScores()
}

function reset() {
    clearTimeout(timeout)

    button_click.innerHTML = "Click Me"
    button_click.disabled = false
    reset_score.disabled = true

    score = 0
    refreshOutput()
}

function changeTime(t) {
    time = t
    time_dropdown.innerHTML = `${t}s`
}

