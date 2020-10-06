function goToNextRound() {
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
