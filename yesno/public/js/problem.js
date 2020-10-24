$.getJSON("/static/data/problem.json", (data) => {
  easyQuiz = data.easy;
  setQuizProblem();
});

function setQuizProblem() {
  shuffledArray = shuffle(basicArray);
  for (let i = 0; i < 5; i++) {
    questionArray.push(easyQuiz[shuffledArray[i]][0]);
    answerArray.push(easyQuiz[shuffledArray[i]][1]);
    imgSrcArray.push(easyQuiz[shuffledArray[i]][2]);
  }
}

function isLastProblem() {
  let quizLength = questionArray.length;
  if (round == quizLength) {
    return true;
  } else {
    return false;
  }
}
