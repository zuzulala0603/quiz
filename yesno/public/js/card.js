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
