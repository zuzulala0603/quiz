function showResult() {
  getResultData();
  hide(quizPage);
  hide(roundPage);
  flex(resultPage);
}

function getResultData() {
  let userOrder = 99 - round * 10;
  document.getElementById("result__rank__problem").innerHTML = `총 ${round}문제를 맞추셨습니다.`;
  document.getElementById("result__rank__user").innerHTML = `당신은 상위 ${userOrder}%입니다.`;
  /*   document.getElementById("result__order").innerHTML = `당신은 상위 ${userOrder}%입니다.`;
  document.getElementById("progress__container").style.width = "65%";
  document.getElementById("arrow__container").style.width = "65%"; */
}

function initializeQuiz() {
  questionArray = [];
  answerArray = [];
  imgSrcArray = [];
  round = 0;
  setQuizProblem();
}
