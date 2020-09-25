submitBtn.addEventListener("click", () => {
  let userAnswer = ""
  for (i = 1; i < answerLength + 1; i++) {
    userAnswer = userAnswer + document.querySelector(`[data-answerlength="${i}"]`).innerHTML
  }
  console.log(userAnswer)
  goToNextRound()
})

function cleanQuizPage() {
  answerLength = 0
  hide(quizPage)
  $("#quiz__answer__useranswer").empty()
}
