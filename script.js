
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const questions = [
  {
    question: "Qual das opções corresponde às cinco leis da alimentação de Escudero?",
    answers: [
      { text: "Quantidade, qualidade, harmonia, adequação e individualidade", correct: false },
      { text: "Qualidade, quantidade, frequência, digestibilidade e custo", correct: false },
      { text: "Quantidade, qualidade, harmonia e adequação", correct: true },
      { text: "Variedade, densidade, harmonia e adequação", correct: false }
    ]
  },
  {
    question: "O Guia Alimentar para a População Brasileira (2014) classifica alimentos em:",
    answers: [
      { text: "Macronutrientes e micronutrientes", correct: false },
      { text: "Monossacarídeos, dissacarídeos e polissacarídeos", correct: false },
      { text: "In natura/minimamente processados, processados e ultraprocessados", correct: true },
      { text: "Animais e vegetais", correct: false }
    ]
  },
  {
    question: "A principal evolução do Guia Alimentar brasileiro em relação ao antigo modelo de pirâmide foi:",
    answers: [
      { text: "Excluir proteínas animais", correct: false },
      { text: "Dar enfoque ao grau de processamento dos alimentos", correct: true },
      { text: "Aumentar a recomendação de gorduras", correct: false },
      { text: "Substituir o prato por gráfico de pizza", correct: false }
    ]
  },
  {
    question: "Exemplo de alimento ultraprocessado:",
    answers: [
      { text: "Banana", correct: false },
      { text: "Feijão", correct: false },
      { text: "Refrigerante", correct: true },
      { text: "Arroz integral", correct: false }
    ]
  },
  {
    question: "A lei da adequação significa:",
    answers: [
      { text: "A dieta deve ser suficiente para suprir energia", correct: false },
      { text: "O alimento precisa ser saboroso", correct: false },
      { text: "A alimentação deve se ajustar à idade, saúde e condições da pessoa", correct: true },
      { text: "Comer somente o que está disponível na região", correct: false }
    ]
  },
  {
    question: "A pirâmide alimentar clássica organiza alimentos por:",
    answers: [
      { text: "Nutrientes predominantes", correct: true },
      { text: "Processamento", correct: false },
      { text: "Custo", correct: false },
      { text: "Funções fisiológicas", correct: false }
    ]
  }
  ,
  {
    question: "No Guia Alimentar (2014), recomenda-se evitar:",
    answers: [
      { text: "Frutas e verduras", correct: false },
      { text: "Alimentos ultraprocessados", correct: true },
      { text: "Feijões e leguminosas", correct: false },
      { text: "Cereais integrais", correct: false }
    ]
  }
  ,
  {
    question: "Um dos princípios do Guia Alimentar é:",
    answers: [
      { text: "Comer sempre alimentos industrializados em pequenas quantidades", correct: false },
      { text: "Valorizar a cultura alimentar regional", correct: true },
      { text: "Priorizar suplementos em vez de alimentos naturais", correct: false },
      { text: "Garantir ingestão mínima de 3 mil calorias diárias", correct: false }
    ]
  }
  ,
  {
    question: "Qual lei da alimentação se refere ao equilíbrio entre nutrientes?",
    answers: [
      { text: "Quantidade", correct: false },
      { text: "Qualidade", correct: false },
      { text: "Harmonia", correct: true },
      { text: "Adequação", correct: false }
    ]
  }
  ,
  {
    question: "A deficiência de vitamina D está associada a:",
    answers: [
      { text: "Escorbuto", correct: false },
      { text: "Raquitismo", correct: true },
      { text: "Anemia perniciosa", correct: false },
      { text: "Beribéri", correct: false }
    ]
  }
    ,
  {
    question: "Qual micronutriente é essencial para a síntese de hemoglobina?",
    answers: [
      { text: "Zinco", correct: false },
      { text: "Ferro", correct: true },
      { text: "Cálcio", correct: false },
      { text: "Selênio", correct: false }
    ]
  }
    ,
  {
    question: "O iodo é fundamental para o funcionamento de:",
    answers: [
      { text: "Pâncreas", correct: false },
      { text: "Tireoide", correct: true },
      { text: "Intestino", correct: false },
      { text: "Fígado", correct: false }
    ]
  }
    ,
  {
    question: "A deficiência de vitamina B12 pode causar:",
    answers: [
      { text: "Escorbuto", correct: false },
      { text: "Anemia perniciosa", correct: true },
      { text: "Raquitismo", correct: false },
      { text: "Xeroftalmia", correct: false }
    ]
  }
    ,
  {
    question: "A vitamina K está relacionada à:",
    answers: [
      { text: "Coagulação sanguínea", correct: true },
      { text: "Saúde ocular", correct: false },
      { text: "Função neurológica", correct: false },
      { text: "Regulação glicêmica", correct: false }
    ]
  }
    ,
  {
    question: "Uma boa fonte de vitamina C é:",
    answers: [
      { text: "Laranja", correct: true },
      { text: "Arroz", correct: false },
      { text: "Carne bovina", correct: false },
      { text: "Queijo", correct: false }
    ]
  }
    ,
  {
    question: "O cálcio tem como principal função:",
    answers: [
      { text: "Regular glicemia", correct: false },
      { text: "Formação óssea", correct: true },
      { text: "Transporte de oxigênio", correct: false },
      { text: "Síntese proteica", correct: false }
    ]
  }
    ,
  {
    question: "Qual micronutriente é antioxidante potente?",
    answers: [
      { text: "Selênio", correct: true },
      { text: "Sódio", correct: false },
      { text: "Cloro", correct: false },
      { text: "Fósforo", correct: false }
    ]
  }
    ,
  {
    question: "A deficiência de vitamina A pode causar:",
    answers: [
      { text: "Cegueira noturna", correct: true },
      { text: "Hipertensão", correct: false },
      { text: "Escorbuto", correct: false },
      { text: "Fraqueza muscular", correct: false }
    ]
  }
    ,
  {
    question: "O magnésio atua principalmente em:",
    answers: [
      { text: "Síntese de colágeno", correct: false },
      { text: "Ativação de enzimas e função muscular", correct: true },
      { text: "Transporte de lipídios", correct: false },
      { text: "Função plaquetária", correct: false }
    ]
  }
    ,
  {
    question: "O que são aminoácidos essenciais?",
    answers: [
      { text: "Aqueles sintetizados pelo organismo", correct: false },
      { text: "Aqueles que devem ser obtidos pela dieta", correct: true },
      { text: "Aqueles usados apenas para energia", correct: false },
      { text: "Aqueles presentes em proteínas vegetais", correct: false }
    ]
  }
    ,
  {
    question: "Exemplo de aminoácido essencial:",
    answers: [
      { text: "Glicina", correct: false },
      { text: "Alanina", correct: false },
      { text: "Leucina", correct: true },
      { text: "Prolina", correct: false }
    ]
  }
    ,
  {
    question: "Pessoas com fenilcetonúria devem evitar alimentos ricos em:",
    answers: [
      { text: "Lisina", correct: false },
      { text: "Fenilalanina", correct: true },
      { text: "Valina", correct: false },
      { text: "Treonina", correct: false }
    ]
  }
    ,
  {
    question: "Aminoácidos glicogênicos são aqueles que:",
    answers: [
      { text: "Produzem corpos cetônicos", correct: false },
      { text: "Produzem glicose", correct: true },
      { text: "Produzem colesterol", correct: false },
      { text: "São eliminados na urina", correct: false }
    ]
  }
    ,
  {
    question: "Aminoácidos cetogênicos produzem:",
    answers: [
      { text: "Ácido úrico", correct: false },
      { text: "Corpos cetônicos", correct: true },
      { text: "Hemoglobina", correct: false },
      { text: "Insulina", correct: false }
    ]
  }
    ,
  {
    question: "A ligação entre dois aminoácidos é chamada:",
    answers: [
      { text: "Dissulfeto", correct: false },
      { text: "Hidrogênio", correct: false },
      { text: "Peptídica", correct: true },
      { text: "Iônica", correct: false }
    ]
  }
    ,
  {
    question: "O triptofano é precursor de qual neurotransmissor?",
    answers: [
      { text: "Dopamina", correct: false },
      { text: "Serotonina", correct: true },
      { text: "Acetilcolina", correct: false },
      { text: "GABA", correct: false }
    ]
  }
    ,
  {
    question: "Proteínas de alto valor biológico são aquelas que:",
    answers: [
      { text: "Têm todos os aminoácidos essenciais", correct: true },
      { text: "São de origem vegetal", correct: false },
      { text: "Contêm só carboidratos associados", correct: false },
      { text: "São resistentes à digestão", correct: false }
    ]
  }
    ,
  {
    question: "Exemplo de proteína completa:",
    answers: [
      { text: "Feijão", correct: false },
      { text: "Arroz", correct: false },
      { text: "Ovo", correct: true },
      { text: "Pão", correct: false }
    ]
  }
    ,
  {
    question: "Aminoácidos de cadeia ramificada (BCAAs) incluem:",
    answers: [
      { text: "Glicina, prolina, lisina", correct: false },
      { text: "Valina, leucina, isoleucina", correct: true },
      { text: "Serina, treonina, tirosina", correct: false },
      { text: "Glutamina, arginina, histidina", correct: false }
    ]
  }
    ,
  {
    question: "O índice glicêmico mede:",
    answers: [
      { text: "A quantidade de gordura ingerida", correct: true },
      { text: "A velocidade com que o carboidrato eleva a glicemi", correct: false },
      { text: "O valor calórico do alimento", correct: false },
      { text: "A digestibilidade da proteína", correct: false }
    ]
  }
    ,
  {
    question: "A carga glicêmica considera:",
    answers: [
      { text: "Apenas o tipo de carboidrato", correct: false },
      { text: "O IG e a quantidade de carboidrato no alimento", correct: true },
      { text: "A velocidade de digestão dos lipídios", correct: false },
      { text: "O teor de proteínas", correct: false }
    ]
  }
    ,
  {
    question: "Um alimento de baixo IG:",
    answers: [
      { text: "Refrigerante", correct: false },
      { text: "Pão branco", correct: false },
      { text: "Lentilha", correct: true },
      { text: "Batata frita", correct: false }
    ]
  }
    ,
  {
    question: "A importância de usar CG em vez de IG é porque:",
    answers: [
      { text: "Inclui também as proteínas", correct: false },
      { text: "Considera a quantidade real de carboidrato consumido", correct: true },
      { text: "Mede a saciedade", correct: false },
      { text: "Avalia vitaminas e minerais", correct: false }
    ]
  }
    ,
  {
    question: "Qual fator não influencia o IG de um alimento?",
    answers: [
      { text: "Fibra alimentar", correct: false },
      { text: "Grau de cozimento", correct: false },
      { text: "Tipo de carboidrato", correct: false },
      { text: "Teor de proteínas", correct: true }
    ]
  }
    ,
  {
    question: "Um alimento de alto IG pode causar:",
    answers: [
      { text: "Aumento rápido da glicemia", correct: true },
      { text: "Maior saciedade prolongada", correct: false },
      { text: "Digestão mais lenta", correct: false },
      { text: "Menor liberação de insulina", correct: false }
    ]
  }
    ,
  {
    question: "Exemplo de alimento com baixo IG e alta fibra:",
    answers: [
      { text: "Maçã", correct: true },
      { text: "Pão francês", correct: false },
      { text: "Suco de laranja industrializado", correct: false },
      { text: "Bala de goma", correct: false }
    ]
  }
    ,
  {
    question: "Índice glicêmico de referência (100) é atribuído a:",
    answers: [
      { text: "Glicose", correct: true },
      { text: "Amido", correct: false },
      { text: "Sacarose", correct: false },
      { text: "Frutose", correct: false }
    ]
  }
    ,
  {
    question: "Carga glicêmica baixa é considerada quando o valor é:",
    answers: [
      { text: "< 5", correct: false },
      { text: "< 10", correct: true },
      { text: "< 20", correct: false },
      { text: "< 40", correct: false }
    ]
  }
    ,
  {
    question: "Um prato rico em fibras e proteínas tende a:",
    answers: [
      { text: "Aumentar o IG", correct: false },
      { text: "Diminuir o IG da refeição", correct: true },
      { text: "Tornar o IG irrelevante", correct: false },
      { text: "Não influenciar a glicemia", correct: false }
    ]
  }
    ,
  {
    question: "Exemplo de dissacarídeo:",
    answers: [
      { text: "Glicose", correct: false },
      { text: "Frutose", correct: false },
      { text: "Sacarose", correct: true },
      { text: "Amido", correct: false }
    ]
  }
    ,
  {
    question: "Gorduras saturadas são caracterizadas por:",
    answers: [
      { text: "Ligações duplas", correct: false },
      { text: "Ligações simples entre carbonos", correct: true },
      { text: "Presença de anel aromático", correct: false },
      { text: "Estrutura ramificada", correct: false }
    ]
  }
    ,
  {
    question: "Proteínas são compostas por:",
    answers: [
      { text: "Ácidos graxos", correct: false },
      { text: "Aminoácidos", correct: true },
      { text: "Monossacarídeos", correct: false },
      { text: "Glicerol", correct: false }
    ]
  }
    ,
  {
    question: "O amido é classificado como:",
    answers: [
      { text: "Dissacarídeo", correct: false },
      { text: "Polissacarídeo", correct: true },
      { text: "Monossacarídeo", correct: false },
      { text: "Lipídio", correct: false }
    ]
  }
    ,
  {
    question: "Ácidos graxos trans são:",
    answers: [
      { text: "Naturais e benéficos", correct: false },
      { text: "Formados por hidrogenação industrial", correct: true },
      { text: "Exclusivos de vegetais crus", correct: false },
      { text: "Inofensivos ao colesterol", correct: false }
    ]
  }
    ,
  {
    question: "A digestão de carboidratos inicia-se na:",
    answers: [
      { text: "Boca", correct: true },
      { text: "Estômago", correct: false },
      { text: "Intestino delgado", correct: false },
      { text: "Intestino grosso", correct: false }
    ]
  }
    ,
  {
    question: "A enzima pepsina atua sobre:",
    answers: [
      { text: "Carboidratos", correct: false },
      { text: "Proteínas", correct: true },
      { text: "Lipídios", correct: false },
      { text: "Ácidos nucleicos", correct: false }
    ]
  }
    ,
  {
    question: "Lipídios são emulsificados por:",
    answers: [
      { text: "Bile", correct: true },
      { text: "Tripsina", correct: false },
      { text: "Amilase", correct: false },
      { text: "Lisozima", correct: false }
    ]
  }
    ,
  {
    question: "A principal enzima pancreática que digere lipídios é:",
    answers: [
      { text: "Pepsina", correct: false },
      { text: "Lipase pancreática", correct: true },
      { text: "Amilase", correct: false },
      { text: "Maltase", correct: false }
    ]
  }
    ,
  {
    question: "A absorção final dos nutrientes ocorre principalmente em:",
    answers: [
      { text: "Estômago", correct: false },
      { text: "Intestino delgado", correct: true },
      { text: "Intestino grosso", correct: false },
      { text: "Boca", correct: false }
    ]
  }
    ,
  {
    question: "Função principal dos carboidratos:",
    answers: [
      { text: "Reserva energética", correct: false },
      { text: "Energia imediata", correct: true },
      { text: "Estrutural", correct: false },
      { text: "Transporte de vitaminas", correct: false }
    ]
  }
    ,
  {
    question: "Função principal das proteínas:",
    answers: [
      { text: "Regular pressão arterial", correct: false },
      { text: "Fornecer energia rápida", correct: false },
      { text: "Formação de enzimas, hormônios e tecidos", correct: true },
      { text: "Transporte de oxigênio exclusivamente", correct: false }
    ]
  }
    ,
  {
    question: "Função principal dos lipídios:",
    answers: [
      { text: "Serem excretados", correct: false },
      { text: "Fornecer energia e transportar vitaminas lipossolúveis", correct: true },
      { text: "Apenas reserva energética", correct: false },
      { text: "Regular pH", correct: false }
    ]
  }
    ,
  {
    question: "Uma dieta hipoglicídica pode ser aplicada em:",
    answers: [
      { text: "Diabetes tipo 2", correct: true },
      { text: "Escorbuto", correct: false },
      { text: "Hipertireoidismo", correct: false },
      { text: "Osteoporose", correct: false }
    ]
  }
    ,
  {
    question: "Aumenta-se ingestão proteica em:",
    answers: [
      { text: "Pós-operatório e cicatrização", correct: true },
      { text: "Hipertensão arterial", correct: false },
      { text: "Osteoporose", correct: false },
      { text: "Cálculo renal", correct: false }
    ]
  }
    ,
  {
    question: "Fonte de carboidratos complexos:",
    answers: [
      { text: "Pão branco", correct: false },
      { text: "Arroz integral", correct: true },
      { text: "Açúcar refinado", correct: false },
      { text: "Refrigerante", correct: false }
    ]
  }
    ,
  {
    question: "Fonte de proteína vegetal:",
    answers: [
      { text: "Ovo", correct: false },
      { text: "Feijão", correct: true },
      { text: "Frango", correct: false },
      { text: "Peixe", correct: false }
    ]
  }
    ,
  {
    question: "Fonte de lipídios saudáveis:",
    answers: [
      { text: "Bacon", correct: false },
      { text: "Óleo de coco hidrogenado", correct: false },
      { text: "Azeite de oliva", correct: true },
      { text: "Margarina industrial", correct: false }
    ]
  }
    ,
  {
    question: "Segundo a FAO/OMS, a dieta deve conter:",
    answers: [
      { text: "55–65% carboidratos, 10–15% proteínas e 20–30% lipídios", correct: true },
      { text: "20% carboidratos, 60% proteínas e 20% lipídios", correct: false },
      { text: "30% carboidratos, 30% proteínas e 40% lipídios", correct: false },
      { text: "10% carboidratos, 40% proteínas e 50% lipídios", correct: false }
    ]
  }
      ,
  {
    question: "Lipídios não devem ultrapassar 30% do VET porque:",
    answers: [
      { text: "Não têm função biológica", correct: false },
      { text: "Associam-se ao risco de doenças cardiovasculares quando em excesso", correct: true },
      { text: "São insolúveis em água", correct: false },
      { text: "São difíceis de digerir", correct: false }
    ]
  }
        ,
  {
    question: "Qual enzima atua na digestão do amido no intestino delgado?",
    answers: [
      { text: "Pepsina", correct: false },
      { text: "Amilase pancreática", correct: true },
      { text: "Lipase gástrica", correct: false },
      { text: "Maltase", correct: false }
    ]
  }      ,
  {
    question: "Qual vitamina depende dos lipídios da dieta para ser absorvida?",
    answers: [
      { text: "Vitamina C", correct: false },
      { text: "Vitamina B12", correct: false },
      { text: "Vitamina A", correct: true },
      { text: "Vitamina B1", correct: false }
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
