playBtn.addEventListener("click", () => {
  hide(introPage);
  goToNextRound();
});

submitBtn.addEventListener("click", () => {
  let userAnswer = "";
  hide(submitBtn);
  for (i = 1; i < answerLength + 1; i++) {
    userAnswer = userAnswer + document.querySelector(`[data-answerlength="${i}"]`).innerHTML;
  }
  if (userAnswer == currentAnswer) {
    correctAudio.play();
    goToNextRound();
    cardLetters = [];
  } else {
    round = round - 1;
    showResult();
  }
});

replayBtn.addEventListener("click", () => {
  hide(resultPage);
  round = 0;
  shuffledArray = shuffle(basicArray);
  initializeQuiz();
  goToNextRound();
});
