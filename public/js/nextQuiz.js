submitBtn.addEventListener("click", () => {
  let userAnswer = ""
  for (i = 1; i < answerLength + 1; i++) {
    userAnswer = userAnswer + document.querySelector(`[data-answerlength="${i}"]`).innerHTML
  }
  if (userAnswer == currentAnswer) {
    console.log("맞춤")
    correctAudio.play()
    cardLetters = []
    setTimeout(() => {
      goToNextRound()
    }, 500)
  } else {
    showResult()
    console.log("못맞춤")
  }
})

function cleanQuizPage() {
  answerLength = 0
  hide(quizPage)
  $("#quiz__answer__useranswer").empty()
}

function showResult() {
  getResultData()
  hide(quizPage)
  hide(roundPage)
  flex(resultPage)
}

function getResultData() {
  let userOrder = 99 - round * 10
  document.getElementById("result__order").innerHTML = `당신은 상위 ${userOrder}%입니다.`
  document.getElementById("progress__container").style.width = "65%"
  document.getElementById("arrow__container").style.width = "65%"
}
