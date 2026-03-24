const questionsByLevel = {
  facile: [
    {
      clues: "Quel club parmi ceux-là a gagné 5 Ligues des champions ?",
      answer: "FC Barcelone",
      options: ["Paris Saint-Germain", "Crystal Palace", "Ajax Amsterdam", "FC Barcelone"]
    },
    {
      clues: "Quel club parmi ceux-là a gagné 4 Ligues des champions ?",
      answer: "Ajax Amsterdam",
      options: ["Ajax Amsterdam", "Arsenal", "Chelsea", "Atlético de Madrid"]
    },
    {
      clues: "Le club à deviner joue au Parc des Princes.",
      answer: "Paris Saint-Germain",
      options: ["Paris Saint-Germain", "Stade Rennais", "Ajax Amsterdam", "FC Barcelone"]
    },
    {
      clues: "Le club à deviner joue au Roazhon Park.",
      answer: "Stade Rennais",
      options: ["Paris Saint-Germain", "Stade Rennais", "Olympique Lyonnais", "FC Nantes"]
    },
    {
      clues: "Le club à deviner joue au Stade Vélodrome.",
      answer: "Olympique de Marseille",
      options: ["AS Monaco", "Olympique de Marseille", "RC Lens", "Lille OSC"]
    },
    {
      clues: "Le club à deviner joue à Anfield.",
      answer: "Liverpool",
      options: ["Everton", "Liverpool", "Arsenal", "Chelsea"]
    },
    {
      clues: "Le club à deviner joue à l’Allianz Arena.",
      answer: "Bayern Munich",
      options: ["Bayern Munich", "Borussia Dortmund", "RB Leipzig", "Bayer Leverkusen"]
    },
    {
      clues: "Le club à deviner joue à l’Emirates Stadium.",
      answer: "Arsenal",
      options: ["Tottenham Hotspur", "Chelsea", "Arsenal", "West Ham"]
    },
    {
      clues: "Le club à deviner joue à l’Allianz Stadium de Turin.",
      answer: "Juventus",
      options: ["Inter Milan", "Juventus", "AC Milan", "AS Roma"]
    },
    {
      clues: "Le club à deviner joue à Stamford Bridge.",
      answer: "Chelsea",
      options: ["Chelsea", "Fulham", "Arsenal", "Tottenham Hotspur"]
    }
  ],

  moyen: [
    {
      clues: "Quel club parmi ceux-là a gagné 15 Ligues des champions ?",
      answer: "Real Madrid",
      options: ["FC Barcelone", "Real Madrid", "Bayern Munich", "Liverpool"]
    },
    {
      clues: "Quel club parmi ceux-là a gagné 7 Ligues des champions ?",
      answer: "AC Milan",
      options: ["Juventus", "Inter Milan", "AC Milan", "Chelsea"]
    },
    {
      clues: "Quel club parmi ceux-là a gagné 6 Ligues des champions ?",
      answer: "Liverpool",
      options: ["Liverpool", "Arsenal", "Manchester City", "Chelsea"]
    },
    {
      clues: "Le club à deviner joue au Signal Iduna Park.",
      answer: "Borussia Dortmund",
      options: ["Borussia Dortmund", "Schalke 04", "Bayern Munich", "Hambourg SV"]
    },
    {
      clues: "Le club à deviner joue à l’Etihad Stadium.",
      answer: "Manchester City",
      options: ["Manchester United", "Manchester City", "Chelsea", "Arsenal"]
    },
    {
      clues: "Le club à deviner joue au Tottenham Hotspur Stadium.",
      answer: "Tottenham Hotspur",
      options: ["Tottenham Hotspur", "Chelsea", "Arsenal", "West Ham"]
    },
    {
      clues: "Le club à deviner joue au Riyadh Air Metropolitano.",
      answer: "Atlético de Madrid",
      options: ["Séville FC", "Atlético de Madrid", "Valence CF", "Real Betis"]
    },
    {
      clues: "Le club à deviner joue à l’Estádio da Luz.",
      answer: "Benfica",
      options: ["Sporting CP", "FC Porto", "Benfica", "Braga"]
    },
    {
      clues: "Le club à deviner joue à l’Estádio do Dragão.",
      answer: "FC Porto",
      options: ["Benfica", "FC Porto", "Sporting CP", "Boavista"]
    },
    {
      clues: "Le club à deviner joue à Old Trafford et a gagné 3 Ligues des champions.",
      answer: "Manchester United",
      options: ["Manchester City", "Liverpool", "Manchester United", "Chelsea"]
    }
  ],

  difficile: [
    {
      clues: "Le club à deviner joue au City Ground.",
      answer: "Nottingham Forest",
      options: ["Aston Villa", "Nottingham Forest", "Leeds United", "Everton"]
    },
    {
      clues: "Le club à deviner a gagné la Coupe d’Europe des clubs champions en 1967.",
      answer: "Celtic",
      options: ["Rangers", "Aberdeen", "Celtic", "Hearts"]
    },
    {
      clues: "Le club à deviner joue au Volksparkstadion.",
      answer: "Hambourg SV",
      options: ["Borussia Dortmund", "Hambourg SV", "Werder Brême", "Schalke 04"]
    },
    {
      clues: "Le club a deviner a gagné la Coupe d’Europe des clubs champions en 1982.",
      answer: "Aston Villa",
      options: ["Aston Villa", "Nottingham Forest", "Leicester City", "West Ham"]
    },
    {
      clues: "Le club à deviner a gagné 2 Coupes d’Europe consécutives en 1961 et 1962.",
      answer: "Benfica",
      options: ["FC Porto", "Benfica", "Sporting CP", "Braga"]
    },
    {
      clues: "Le club à deviner est portugais, joue à l’Estádio do Dragão et a gagné la Ligue des champions en 1987 puis en 2004.",
      answer: "FC Porto",
      options: ["Benfica", "FC Porto", "Sporting CP", "Boavista"]
    },
    {
      clues: "Le club à deviner est italien, joue à San Siro et a gagné 7 Ligues des champions.",
      answer: "AC Milan",
      options: ["Inter Milan", "Juventus", "AC Milan", "Naples"]
    },
    {
      clues: "Le club à deviner est néerlandais, joue à la Johan Cruijff ArenA et a gagné 4 Ligues des champions.",
      answer: "Ajax Amsterdam",
      options: ["PSV Eindhoven", "Feyenoord", "AZ Alkmaar", "Ajax Amsterdam"]
    },
    {
      clues: "Le club à deviner est espagnol, joue au Bernabéu et a gagné 15 Ligues des champions.",
      answer: "Real Madrid",
      options: ["Atlético de Madrid", "FC Barcelone", "Real Madrid", "Séville FC"]
    },
    {
      clues: "Le club à deviner est anglais, joue à Old Trafford et a été le premier club anglais à gagner la Coupe d’Europe des clubs champions en 1968.",
      answer: "Manchester United",
      options: ["Liverpool", "Manchester United", "Arsenal", "Chelsea"]
    }
  ]
};

const params = new URLSearchParams(window.location.search);
const level = params.get("niveau") || "facile";

const niveauLabel = document.getElementById("niveau-label");
const questionNumberEl = document.getElementById("question-number");
const totalQuestionsEl = document.getElementById("total-questions");
const scoreEl = document.getElementById("score");
const questionTitleEl = document.getElementById("question-title");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const quizContent = document.getElementById("quiz-content");
const resultBox = document.getElementById("result-box");
const finalScoreEl = document.getElementById("final-score");
const replayBtn = document.getElementById("replay-btn");

function melangeQuestion(tableau) {
  const copie = [...tableau];

  for (let i = 0; i < copie.length; i++) {
    const j = Math.floor(Math.random() * copie.length);
    const tmp = copie[i];
    copie[i] = copie[j];
    copie[j] = tmp;
  }

  return copie;
}

const baseQuestions = questionsByLevel[level] || questionsByLevel.facile;
let questions = melangeQuestion(baseQuestions).slice(0, 5);

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

const labels = {
  facile: "Niveau : Facile",
  moyen: "Niveau : Moyen",
  difficile: "Niveau : Difficile"
};

niveauLabel.textContent = labels[level] || "Niveau : Facile";

function initialiserQuizz(){
  questions = melangeQuestion(baseQuestions).slice(0,5);
  currentQuestionIndex = 0;
  score = 0;
  answered = false;

  scoreEl.textContent = score ;
  totalQuestionsEl.textContent = questions.length ;
  feedbackEl.textContent = "";

  resultBox.classList.add("hidden");
  quizContent.classList.remove("hidden");

  renderQuestion();

}

function renderQuestion() {
  const question = questions[currentQuestionIndex];
  const optionsMelangees = melangeQuestion(question.options);

  answered = false;
  feedbackEl.textContent = "";
  nextBtn.disabled = true;

  questionNumberEl.textContent = currentQuestionIndex + 1;
  scoreEl.textContent = score;

  questionTitleEl.textContent = question.clues;
 

  answersEl.innerHTML = "";

  optionsMelangees.forEach((option) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.textContent = option;

    button.addEventListener("click", () => handleAnswer(button, option, question.answer));

    answersEl.appendChild(button);
  });
}

function handleAnswer(clickedButton, selectedOption, correctAnswer) {
  if (answered) return;

  answered = true;

  const allButtons = document.querySelectorAll(".answer-btn");

  allButtons.forEach((btn) => {
    btn.disabled = true;

    if (btn.textContent === correctAnswer) {
      btn.classList.add("correct");
    }

    if (btn === clickedButton && selectedOption !== correctAnswer) {
      btn.classList.add("wrong");
    }
  });

  if (selectedOption === correctAnswer) {
    score++;
    feedbackEl.textContent = "✅ Bonne réponse !";
  } else {
    feedbackEl.textContent = `❌ Mauvaise réponse. La bonne réponse était : ${correctAnswer}`;
  }

  scoreEl.textContent = score;
  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    renderQuestion();
  } else {
    showResults();
  }
});

replayBtn.addEventListener("click", () => initialiserQuizz());


function showResults() {
    feedbackEl.textContent = "";
  quizContent.classList.add("hidden");
  resultBox.classList.remove("hidden");
  finalScoreEl.textContent = `${score} / ${questions.length}`;
}

initialiserQuizz();