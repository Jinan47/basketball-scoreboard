let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homeScoreCount = 0;
let guestScoreCount = 0;

///////////////////////////////////////////////////
function incrementOneHome() {
    homeScoreCount += 1;
    homeScore.textContent = homeScoreCount;
}

function incrementTwoHome() {
    homeScoreCount += 2;
    homeScore.textContent = homeScoreCount;
}

function incrementThreeHome() {
    homeScoreCount += 3;
    homeScore.textContent = homeScoreCount;
}

///////////////////////////////////////////////////
function incrementOneGuest() {
    guestScoreCount += 1;
    guestScore.textContent = guestScoreCount;
}

function incrementTwoGuest() {
    guestScoreCount += 2;
    guestScore.textContent = guestScoreCount;
}

function incrementThreeGuest() {
    guestScoreCount += 3;
    guestScore.textContent = guestScoreCount;
}

///////////////////////////////////////////////////
function resetScores() {
    homeScoreCount = 0;
    guestScoreCount = 0;
    homeScore.textContent = homeScoreCount;
    guestScore.textContent = guestScoreCount;
}