const quizData = [
  {
    question: "What is the capital city of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Au", "Ag", "Ge"],
    answer: "Au"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
    answer: "Leonardo da Vinci"
  }
];

let currentQuestion = 0;
let score = 0;

// HTML elements
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const scoreText = document.getElementById('score-text');

// Function to initialize the quiz
function initializeQuiz() {
  currentQuestion = 0;
  score = 0;
  scoreText.textContent = `Score: ${score}`;

  loadQuestion();
}

// Function to load a question
function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionText.textContent = currentQuizData.question;
  optionsContainer.innerHTML = '';

  currentQuizData.options.forEach(option => {
    const optionElement = document.createElement('button');
    optionElement.textContent = option;
    optionElement.classList.add('option');
    optionsContainer.appendChild(optionElement);

    optionElement.addEventListener('click', () => {
      checkAnswer(option);
    });
  });
}

// Function to check the selected answer
function checkAnswer(selectedAnswer) {
  const currentQuizData = quizData[currentQuestion];
  if (selectedAnswer === currentQuizData.answer) {
    score++;
    scoreText.textContent = `Score: ${score}`;
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// Function to display the quiz result
function showResult() {
  questionText.textContent = `Quiz Completed! Your Score: ${score}/${quizData.length}`;
  optionsContainer.innerHTML = '';
}

// Start the quiz
initializeQuiz();
