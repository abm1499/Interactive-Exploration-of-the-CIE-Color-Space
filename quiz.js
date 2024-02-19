const quizContainer = document.getElementById("quiz");

const questions = [
  {
    question: "What does the 'X' axis in the CIE XYZ color space represent?",
    options: ["Redness", "Greenness", "Blueness", "Brightness"],
    answer: 0,
  },
  {
    question:
      "What is the range of values possible for each coordinate (X, Y, and Z) in the CIE XYZ space?",
    options: ["0 to 100", "0 to 255", "-1 to 1", "None of the above"],
    answer: 2,
  },
  {
    question:
      "Which of the following colors has the highest Y value in the CIE XYZ space?",
    options: ["Pure red", "Pure green", "Pure blue", "Pure white"],
    answer: 3,
  },
  {
    question:
      "What happens when you increase the X value of a color in the CIE XYZ space?",
    options: [
      "It becomes more red.",
      "It becomes more green.",
      "It becomes brighter.",
      "It becomes more saturated.",
    ],
    answer: 0,
  },
  {
    question:
      "What is the main advantage of using the CIE XYZ color space over RGB?",
    options: [
      "It is more intuitive for humans to understand.",
      "It is device-independent, meaning colors appear consistent across different displays.",
      "It requires less data to represent colors.",
      "It has a wider range of colors.",
    ],
    answer: 1,
  },
  {
    question:
      "True or False: The sum of X, Y, and Z values for any color in the CIE XYZ space always equals 1.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    question:
      "How can you convert a color from the CIE XYZ space to the RGB space?",
    options: [
      "There is no direct conversion formula.",
      "Use a specific mathematical matrix multiplication.",
      "It requires additional information about the display device.",
      "Both b and c are correct.",
    ],
    answer: 3,
  },
  {
    question:
      "Which of the following applications heavily utilizes the CIE XYZ color space?",
    options: [
      "Image editing software",
      "Color television broadcasting",
      "Architectural lighting design",
      "All of the above",
    ],
    answer: 3,
  },
  {
    question:
      "What does the 3D model visualization in the web app represent in relation to the CIE XYZ space?",
    options: [
      "It shows the physical location of different colors.",
      "It depicts the relative distances between colors based on their XYZ values.",
      "It allows users to manipulate the actual color components (X, Y, Z).",
      "None of the above",
    ],
    answer: 1,
  },
  {
    question:
      "How can the interactive quiz feature benefit your understanding of the CIE XYZ color space?",
    options: [
      "By testing your knowledge and providing immediate feedback.",
      "By visualizing colors in 3D and linking them to specific questions.",
      "By allowing you to practice applying your knowledge in different scenarios.",
      "All of the above",
    ],
    answer: 3,
  },
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
  const questionData = questions[currentQuestion];
  const optionsHtml = questionData.options
    .map(
      (option, index) =>
        `<label><input type="radio" name="option" value="${index}">${option}</label><br>`
    )
    .join("");

  const html = `
        <div class="question">${questionData.question}</div>
        <form id="optionForm">${optionsHtml}</form>
        <button class="btn" id="nextBtn">Next</button>
    `;

  quizContainer.innerHTML = html;

  const nextButton = document.getElementById("nextBtn");
  nextButton.addEventListener("click", handleNext);
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (!selectedOption) {
    return false; // No option selected
  }
  const selectedOptionIndex = parseInt(selectedOption.value);
  const questionData = questions[currentQuestion];
  if (selectedOptionIndex === questionData.answer) {
    score++; // Increment score if correct
  }
  return true;
}

function handleNext() {
  if (!checkAnswer()) {
    alert("Please select an option");
    return; // Don't proceed if no option is selected
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    // Quiz completed
    showResult();
  }
}

function showResult() {
  const resultHtml = `
        <div id="result">You got ${score} out of ${questions.length} questions correct!</div>
        <button class="btn" id="restartBtn">Restart Quiz</button>
    `;

  quizContainer.innerHTML = resultHtml;

  const restartButton = document.getElementById("restartBtn");
  restartButton.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    displayQuestion();
  });
}

displayQuestion();
