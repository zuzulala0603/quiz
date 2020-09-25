function goToNextRound() {
  round = round + 1
  cleanQuizPage()
  document.getElementById("round__title").innerHTML = `ROUND ${round}`
  flex(roundPage)
  settingQuiz(round)
  setTimeout(() => {
    hide(roundPage)
    block(quizPage)
  }, 500)
}

function settingQuiz(round) {
  currentQuestion = questionArray[round]
  currentAnswer = answerArray[round]

  for (let i = 0; i < currentAnswer.length; i++) {
    cardLetters.push(currentAnswer.split("")[i])
  }
  cardLetters = [...new Set(cardLetters)]
  console.log(cardLetters)
  while (cardLetters.length < 14) {
    cardLetters.push(paddingLetters[generateRandom(0, paddingLetters.length - 1)])
    cardLetters = [...new Set(cardLetters)]
  }

  console.log(cardLetters)
  shuffle(cardLetters)
  for (let k = 0; k < 14; k++) {
    document.querySelector(`[data-example="${k + 1}"]`).innerHTML = cardLetters[k]
  }
}
