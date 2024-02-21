const taskContainer = document.getElementById("task");

const taskQuestions = [
  {
    question: "What does the 'X' axis in the CIE XYZ color space represent?",
  },
  {
    question:
      "What is the range of values possible for each coordinate (X, Y, and Z) in the CIE XYZ space?",
  },
];

let currentTaskQuestion = 0;

function displayQuestion() {
  const questionData = taskQuestions[currentTaskQuestion];

  const html = `
  <div class="task">
    <div class="question">${questionData.question}</div>
    <input type="text" id="answerInput">
    <div>
    <button class="btn" id="submitBtn">Submit</button></div>
    </div>
  `;

  taskContainer.innerHTML = html;

  const submitButton = document.getElementById("submitBtn");
  submitButton.addEventListener("click", handleSubmission);
}

function handleSubmission() {
  const answerInput = document.getElementById("answerInput").value;
  taskQuestions[currentTaskQuestion].answer = answerInput;
  currentTaskQuestion++;

  if (currentTaskQuestion < taskQuestions.length) {
    displayQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const resultHtml = `
    <div id="result">Answers submitted!</div>
    <button class="btn" id="restartBtn">Restart Quiz</button>
  `;

  taskContainer.innerHTML = resultHtml;

  const restartButton = document.getElementById("restartBtn");
  restartButton.addEventListener("click", () => {
    currentTaskQuestion = 0;
    taskQuestions.forEach((question) => {
      question.answer = "";
    });
    displayQuestion();
  });
}

displayQuestion();
