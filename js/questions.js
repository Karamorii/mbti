import { questions } from './data.js'

const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')

let currentNumber = 0
let mbti = ''

function renderQuestion() {
  if (currentNumber === questions.length - 1) {
    showResultPage()
    return
  }
  const question = questions[currentNumber]
  numberEl.innerHTML = question.number
  questionEl.innerHTML = question.question
  choice1El.innerHTML = question.choices[0].text
  choice2El.innerHTML = question.choices[1].text
  progressValueEl.style.width = (currentNumber + 1) * 10 + '%'
}
function nextQuestion(choiceNumber) {
  const question = questions[currentNumber]
  mbti = mbti + question.choices[choiceNumber].value
  //mbti = '' + 'i' + 'n' + 'T' + 'J'
  currentNumber = currentNumber + 1
  renderQuestion()
}
function showResultPage() {
  location.href = '/results.html?mbti=' + mbti //?이름=전달할 값 -> 주소에 정보를 담아서 이동하게하는것, 쿼리스트링이라고 함
}


choice1El.addEventListener('click', function () {
  nextQuestion(0)
})
choice2El.addEventListener('click', function () {
  nextQuestion(1)
})


renderQuestion()