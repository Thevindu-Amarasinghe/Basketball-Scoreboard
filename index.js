let HomeScore = document.getElementById("h-score") 
let GuestScore = document.getElementById("g-score")
let HomeCount = 0
let GuestCount = 0

function HomeButton1() {
    HomeCount += 1
    HomeScore.textContent = HomeCount
}

function HomeButton2() {
    HomeCount += 2
    HomeScore.textContent = HomeCount
}

function HomeButton3() {
    HomeCount += 3
    HomeScore.textContent = HomeCount
}

function HomeButton4() {
  HomeCount -= 1
  HomeScore.textContent = HomeCount
}

function GuestButton1() {
    GuestCount += 1
    GuestScore.textContent = GuestCount
}

function GuestButton2() {
    GuestCount += 2
    GuestScore.textContent = GuestCount
}

function GuestButton3() {
    GuestCount += 3
    GuestScore.textContent = GuestCount
}

function GuestButton4() {
  GuestCount -= 1
  GuestScore.textContent = GuestCount
}

function ResetButton() { 
    HomeCount = 0 // define the function action on a variable
    GuestCount = 0
    HomeScore.textContent = 0
    GuestScore.textContent = 0
}