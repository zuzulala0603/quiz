function settingQuiz(round) {
  cardLetters = [];
  currentQuestion = questionArray[round];
  currentAnswer = answerArray[round];
  currentImgSrc = imgSrcArray[round];
  console.log(currentAnswer);
  document.getElementById("quiz__question__img").setAttribute("src", currentImgSrc);
  document.getElementById("quiz__question__title").innerHTML = currentQuestion;
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

  console.log(cardLetters);
}

quizExample.forEach((element) => {
  element.addEventListener("click", (e) => {
    clickAudio.play();
    answerLength++;
    if (answerLength >= 6) {
      for (let i = 1; i < answerLength - 4; i++) {
        let hidingTarget = document.querySelector(`[data-answerlength="${i}"]`);
        hide(hidingTarget);
      }
    }
    let newAnserCard = document.createElement("div");
    newAnserCard.classList.add("quiz__answer__card", "card");
    newAnserCard.setAttribute("data-answerlength", answerLength);
    newAnserCard.innerHTML = e.target.innerHTML;
    document.getElementById("quiz__answer__useranswer").appendChild(newAnserCard);
  });
});

backspace.addEventListener("click", () => {
  clickAudio.play();
  if (answerLength <= 0) {
    return 0;
  }
  if (answerLength >= 6) {
    let showingTarget = document.querySelector(`[data-answerlength="${answerLength - 5}"]`);
    flex(showingTarget);
  }
  let removingTarget = document.querySelector(`[data-answerlength="${answerLength}"]`);
  document.getElementById("quiz__answer__useranswer").removeChild(removingTarget);
  answerLength--;
});
