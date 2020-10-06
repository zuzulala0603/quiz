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
let submitBtn = document.getElementById("submitBtn")

/* round */
let round = 0

/* quiz */

let quizExample = document.querySelectorAll(".quiz__example__card")
let backspace = document.getElementById("quiz__backspace")
let answerLength = 0
/* quiz data */
let easyQuiz
let shuffledArray = []
let basicArray = [1, 2, 3, 4, 5]
let questionArray = ["문제"]
let answerArray = ["정답"]
let imgSrcArray = ["이미지경로"]
let currentQuestion = ""
let currentAnswer = ""
let currentImgSrc = ""
let cardLetters = []
let paddingLetters = ["가", "나", "다", "라", "마", "바", "사", "아", "자", "차", "카", "타", "파", "하"]

/* layout */
if (w > 1024) {
  document.querySelectorAll(".main").forEach(element => {
    element.style.width = 0.3 * w + "px"
    element.style.height = 0.85 * h + "px"
    element.style.margin = "auto"
    element.style.marginTop = "10vh"
  })
} else {
  document.querySelectorAll(".main").forEach(element => {
    element.style.width = 1 * w + "px"
    element.style.height = 1 * h + "px"
  })
}
