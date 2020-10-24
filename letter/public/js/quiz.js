function goToNextRound() {
  if (isLastProblem()) {
    cleanQuizPage();
    showResult();
    return 0;
  }
  round = round + 1;
  cleanQuizPage();
  flex(submitBtn);
  document.getElementById("round__title").innerHTML = `ROUND ${round}`;
  flex(roundPage);
  settingQuiz(round);
  setTimeout(() => {
    hide(roundPage);
    block(quizPage);
  }, 1000);
}

function cleanQuizPage() {
  answerLength = 0;
  hide(quizPage);
  $("#quiz__answer__useranswer").empty();
}

function settingQuiz(round) {
  cardLetters = [];
  currentQuestion = questionArray[round - 1];
  currentAnswer = answerArray[round - 1];
  currentImgSrc = imgSrcArray[round - 1];

  console.log(currentAnswer);
  document.getElementById("quiz__question__img").setAttribute("src", currentImgSrc);
  document.getElementById("quiz__question__title").innerHTML = `Round ${round}`;
  for (let i = 0; i < currentAnswer.length; i++) {
    cardLetters.push(currentAnswer.split("")[i]);
  }
  while (cardLetters.length < 14) {
    cardLetters.push(paddingLetters[generateRandom(0, paddingLetters.length - 1)]);
    cardLetters = [...new Set(cardLetters)];
  }
  shuffle(cardLetters);
  for (let k = 0; k < 14; k++) {
    document.querySelector(`[data-example="${k + 1}"]`).innerHTML = cardLetters[k];
  }
}
