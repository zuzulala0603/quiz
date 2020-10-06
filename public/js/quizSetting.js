$.getJSON("/static/data/problem.json", data => {
  console.log("제이슨을 읽어옴")
  easyQuiz = data.easy
  setQuizData()
})

function setQuizData() {
  shuffledArray = shuffle(basicArray)
  for (let i = 0; i < 5; i++) {
    questionArray.push(easyQuiz[shuffledArray[i]][0])
    answerArray.push(easyQuiz[shuffledArray[i]][1])
    imgSrcArray.push(easyQuiz[shuffledArray[i]][2])
  }
}
