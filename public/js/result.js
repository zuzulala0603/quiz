let replayBtn = document.getElementById("result__replayBtn")

replayBtn.addEventListener("click", () => {
  hide(resultPage)
  round = 0
  shuffledArray = shuffle(basicArray)
  initializeQuiz()
  goToNextRound()
})

function initializeQuiz() {
  questionArray = []
  answerArray = []
  imgSrcArray = []
  setQuizData()
}
