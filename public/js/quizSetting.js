$.getJSON("/static/data/problem.json", data => {
  let easyProblem = data.easy
  let shuffledArray = shuffle(basicArray)
  for (let i = 0; i < 5; i++) {
    questionArray.push(easyProblem[shuffledArray[i]][0])
    answerArray.push(easyProblem[shuffledArray[i]][1])
  }
})
