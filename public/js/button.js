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
    goToNextRound();
    cardLetters = [];
    /*  correctAudio.play(); */
    /*     setTimeout(() => {
      goToNextRound();
    }, 500); */
  } else {
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
