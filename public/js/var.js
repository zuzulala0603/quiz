/* view width, height */

let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

/* page */

let introPage = document.getElementById("intro")
let roundPage = document.getElementById("round")
let quizPage = document.getElementById("quiz")
let resultPage = document.getElementById("result")

/* Btn */
let playBtn = document.getElementById("playBtn")

/* round */
let round = 0

/* quiz */

let quizExample = document.querySelectorAll(".quiz__example__card")
let backspace = document.getElementById("quiz__backspace")
let answerLength = 0

/* layout */
if (w > 1024) {
  document.querySelectorAll(".main").forEach(element => {
    element.style.width = 0.7 * w + "px"
    element.style.height = 0.7 * h + "px"
  })
}
