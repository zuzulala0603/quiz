quizExample.forEach(element => {
  element.addEventListener("click", () => {
    anserLength++
    if (anserLength >= 6) {
      for (let i = 1; i < anserLength - 4; i++) {
        let removedTarget = document.querySelector(`[data-answerlength="${i}"]`)
        hide(removedTarget)
      }
    }
    let newAnserCard = `<div class="quiz__answer__card" data-answerlength="${anserLength}">${anserLength}</div>`
    document.getElementById("quiz__answer__useranswer").appendChild(newAnserCard)
  })
})

backspace.addEventListener("click", () => {
  console.log("백스페이스 클릭")
  if (anserLength == 0) {
    console.log("지울것이 없습니다.")
    return 0
  }
  let removedTarget = document.querySelector(`[data-answerlength="${anserLength}"]`)
  console.log(removedTarget)
  document.getElementById("quiz__answer__useranswer").removeChild(removedTarget)
  /* $("#quiz__answer__useranswer").remove(document.querySelector(`[data-answerlength="${anserLength}"]`)) */
})
