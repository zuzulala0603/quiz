function goToNextRound() {
  round = round + 1
  document.getElementById("round__title").innerHTML = `ROUND ${round}`
  flex(roundPage)
  setTimeout(() => {
    hide(roundPage)
    block(quizPage)
  }, 500)
}
