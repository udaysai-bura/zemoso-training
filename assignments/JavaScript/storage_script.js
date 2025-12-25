// Initialize Local Score
let localScore = localStorage.getItem("localScore");
if (localScore === null) {
    localScore = 0;
    localStorage.setItem("localScore", localScore);
}
document.getElementById("localScore").innerText = localScore;
// Initialize Session Score
let sessionScore = sessionStorage.getItem("sessionScore");
if (sessionScore === null) {
    sessionScore = 0;
    sessionStorage.setItem("sessionScore", sessionScore);
}
document.getElementById("sessionScore").innerText = sessionScore;

// Increment Local Score
function incrementLocal() {
    localScore++;
    localStorage.setItem("localScore", localScore);
    document.getElementById("localScore").innerText = localScore;
}

// Increment Session Score
function incrementSession() {
    sessionScore++;
    sessionStorage.setItem("sessionScore", sessionScore);
    document.getElementById("sessionScore").innerText = sessionScore;
}
