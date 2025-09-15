
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const questions = [
  {
    question: "O que é saúde segundo a OMS?",
    answers: [
      { text: "Ausência de doença", correct: false },
      { text: "Equilíbrio físico, mental e social", correct: true },
      { text: "Apenas bem-estar físico", correct: false },
      { text: "Estar sempre feliz", correct: false }
    ]
  },
  {
    question: "O que caracteriza a doença?",
    answers: [
      { text: "Desequilíbrio no corpo ou mente", correct: true },
      { text: "Felicidade constante", correct: false },
      { text: "Apenas sintomas físicos", correct: false },
      { text: "Exercícios e boa alimentação", correct: false }
    ]
  },
  {
    question: "Qual fator influencia a saúde?",
    answers: [
      { text: "Somente genética", correct: false },
      { text: "Fatores biológicos, sociais e ambientais", correct: true },
      { text: "Apenas ambiente", correct: false },
      { text: "Nenhum fator", correct: false }
    ]
  },
  {
    question: "Qual é o conceito de prevenção primária?",
    answers: [
      { text: "Tratar a doença após surgir", correct: false },
      { text: "Evitar o aparecimento da doença", correct: true },
      { text: "Reduzir complicações de uma doença", correct: false },
      { text: "Melhorar a qualidade de vida de pacientes crônicos", correct: false }
    ]
  },
  {
    question: "O que é promoção da saúde?",
    answers: [
      { text: "Curar doenças", correct: false },
      { text: "Criar condições que aumentem o bem-estar e qualidade de vida", correct: true },
      { text: "Diagnosticar precocemente doenças", correct: false },
      { text: "Prescrever medicamentos", correct: false }
    ]
  },
  {
    question: "Qual é a diferença entre saúde e doença?",
    answers: [
      { text: "Saúde = ausência de doença; doença = presença de sintomas", correct: false },
      { text: "Saúde = equilíbrio físico, mental e social; doença = desequilíbrio", correct: true },
      { text: "Saúde = apenas física; doença = apenas mental", correct: false },
      { text: "Não há diferença", correct: false }
    ]
  }
  ,
  {
    question: "Qual é um determinante social da saúde?",
    answers: [
      { text: "Genética", correct: false },
      { text: "Educação e renda", correct: true },
      { text: "Circulação sanguínea", correct: false },
      { text: "Temperatura corporal", correct: false }
    ]
  }
  ,
  {
    question: "Qual fator não é considerado determinante da saúde?",
    answers: [
      { text: "Fatores genéticos", correct: false },
      { text: "Fatores socioeconômicos", correct: true },
      { text: "Fatores culturais", correct: false },
      { text: "Sorte", correct: false }
    ]
  }
  ,
  {
    question: "O que é morbidade?",
    answers: [
      { text: "Número de mortes em uma população", correct: false },
      { text: "Número de pessoas doentes em uma população", correct: true },
      { text: "Qualidade de vida", correct: false },
      { text: "Capacidade funcional do corpo", correct: false }
    ]
  }
  ,
  {
    question: "O que é mortalidade?",
    answers: [
      { text: "Número de pessoas doentes", correct: false },
      { text: "Número de mortes em uma população", correct: true },
      { text: "Número de hospitalizações", correct: false },
      { text: "Taxa de recuperação de doenças", correct: false }
    ]
  }

];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result");
const quizContainer = document.getElementById("quiz");
const scoreElement = document.getElementById("score");
const totalElement = document.getElementById("total");

let shuffledQuestions = shuffleArray([...questions]); // embaralha as perguntas


function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  quizContainer.classList.remove("hidden");
  resultContainer.classList.add("hidden");
  nextButton.classList.add("hidden");
  showQuestion();
}

function showQuestion() {
  resetState(); // limpa alternativas antigas

  const currentQuestion = shuffledQuestions[currentQuestionIndex]; // <- array embaralhado
  questionElement.innerText = currentQuestion.question; // título da pergunta

  const shuffledAnswers = shuffleArray([...currentQuestion.answers]); // embaralha alternativas

  shuffledAnswers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("answer-btn");
    button.addEventListener("click", () => selectAnswer(answer));
    answerButtons.appendChild(button);
  });
}


function resetState() {
  nextButton.classList.add("hidden");
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(answer) {
  const correct = answer.correct;
  if (correct) score++;

  Array.from(answerButtons.children).forEach(button => {
    const isCorrect = shuffledQuestions[currentQuestionIndex].answers.find(a => a.text === button.innerText).correct;
    button.style.backgroundColor = isCorrect ? "#28a745" : "#dc3545";
    button.disabled = true;
  });

  nextButton.classList.remove("hidden");
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < shuffledQuestions.length) { // <-- usar shuffledQuestions
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  quizContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");
  scoreElement.innerText = score;
  totalElement.innerText = questions.length;
}

function restartQuiz() {
  startQuiz();
}

// Inicia o quiz
startQuiz();
