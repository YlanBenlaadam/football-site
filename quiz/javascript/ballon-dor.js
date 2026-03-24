const questionsByLevel = {
  facile: [
    {
      clues: "Qui a gagné le Ballon d'Or 2023 ?",
      answer: "Lionel Messi",
      options: ["Erling Haaland", "Kylian Mbappé", "Lionel Messi", "Kevin De Bruyne"]
    },
    {
      clues: "Qui a gagné le Ballon d'Or 2022 ?",
      answer: "Karim Benzema",
      options: ["Karim Benzema", "Sadio Mané", "Luka Modrić", "Robert Lewandowski"]
    },
    {
      clues: "Qui a gagné le Ballon d'Or 2021 ?",
      answer: "Lionel Messi",
      options: ["Robert Lewandowski", "Lionel Messi", "Jorginho", "Karim Benzema"]
    },
    {
      clues: "Quel joueur a remporté le plus de Ballons d'Or ?",
      answer: "Lionel Messi",
      options: ["Cristiano Ronaldo", "Lionel Messi", "Johan Cruyff", "Michel Platini"]
    },
    {
      clues: "Quel joueur a remporté 5 Ballons d'Or ?",
      answer: "Cristiano Ronaldo",
      options: ["Marco van Basten", "Cristiano Ronaldo", "Michel Platini", "Ronaldinho"]
    },
    {
      clues: "Qui a gagné le Ballon d'Or 2018 ?",
      answer: "Luka Modrić",
      options: ["Cristiano Ronaldo", "Antoine Griezmann", "Luka Modrić", "Raphaël Varane"]
    },
    {
      clues: "Qui a gagné le Ballon d'Or 2005 ?",
      answer: "Ronaldinho",
      options: ["Kaká", "Ronaldinho", "Thierry Henry", "Andriy Shevchenko"]
    },
    {
      clues: "Qui a gagné le Ballon d'Or 2007 ?",
      answer: "Kaká",
      options: ["Cristiano Ronaldo", "Lionel Messi", "Kaká", "Didier Drogba"]
    },
    {
      clues: "Quel Français a gagné le Ballon d'Or 2022 ?",
      answer: "Karim Benzema",
      options: ["Antoine Griezmann", "Zinédine Zidane", "Karim Benzema", "Kylian Mbappé"]
    },
    {
      clues: "Quel joueur portugais a gagné plusieurs Ballons d'Or ?",
      answer: "Cristiano Ronaldo",
      options: ["Luis Figo", "Rui Costa", "Cristiano Ronaldo", "Bernardo Silva"]
    }
  ],

  moyen: [
    {
      clues: "Qui a gagné le Ballon d'Or 2017 ?",
      answer: "Cristiano Ronaldo",
      options: ["Cristiano Ronaldo", "Lionel Messi", "Neymar", "Gianluigi Buffon"]
    },
    {
      clues: "Qui a gagné le Ballon d'Or 2016 ?",
      answer: "Cristiano Ronaldo",
      options: ["Antoine Griezmann", "Cristiano Ronaldo", "Lionel Messi", "Luis Suárez"]
    },
    {
      clues: "Qui a gagné le Ballon d'Or 2015 ?",
      answer: "Lionel Messi",
      options: ["Neymar", "Cristiano Ronaldo", "Andrés Iniesta", "Lionel Messi"]
    },
    {
      clues: "Qui a gagné le Ballon d'Or 2014 ?",
      answer: "Cristiano Ronaldo",
      options: ["Manuel Neuer", "Lionel Messi", "Arjen Robben", "Cristiano Ronaldo"]
    },
    {
      clues: "Qui a gagné le Ballon d'Or 2013 ?",
      answer: "Cristiano Ronaldo",
      options: ["Franck Ribéry", "Cristiano Ronaldo", "Lionel Messi", "Zlatan Ibrahimović"]
    },
    {
      clues: "Qui a gagné le Ballon d'Or 2010 ?",
      answer: "Lionel Messi",
      options: ["Xavi", "Andrés Iniesta", "Wesley Sneijder", "Lionel Messi"]
    },
    {
      clues: "Qui a gagné le Ballon d'Or 2004 ?",
      answer: "Andriy Shevchenko",
      options: ["Ronaldinho", "Thierry Henry", "Andriy Shevchenko", "Deco"]
    },
    {
      clues: "Qui a gagné le Ballon d'Or 2003 ?",
      answer: "Pavel Nedvěd",
      options: ["Pavel Nedvěd", "Thierry Henry", "Paolo Maldini", "Raúl"]
    },
    {
      clues: "Quel joueur a gagné 3 Ballons d'Or consécutifs de 1983 à 1985 ?",
      answer: "Michel Platini",
      options: ["Johan Cruyff", "Marco van Basten", "Michel Platini", "Franz Beckenbauer"]
    },
    {
      clues: "Qui a gagné 3 Ballons d'Or ?",
      answer: "Johan Cruyff",
      options: ["Ruud Gullit", "Marco van Basten", "Johan Cruyff", "Dennis Bergkamp"]
    }
  ],

  difficile: [
    {
      clues: "Qui a gagné le Ballon d'Or 1995 ?",
      answer: "George Weah",
      options: ["George Weah", "Romário", "Ronaldo", "Hristo Stoichkov"]
    },
    {
      clues: "Qui a gagné le Ballon d'Or 1998 ?",
      answer: "Zinédine Zidane",
      options: ["Ronaldo", "Davor Šuker", "Zinédine Zidane", "Rivaldo"]
    },
    {
      clues: "Qui a gagné le Ballon d'Or 1999 ?",
      answer: "Rivaldo",
      options: ["Rivaldo", "David Beckham", "Andriy Shevchenko", "Gabriel Batistuta"]
    },
    {
      clues: "Qui a gagné le Ballon d'Or 2001 ?",
      answer: "Michael Owen",
      options: ["Raúl", "Oliver Kahn", "Michael Owen", "Luis Figo"]
    },
    {
      clues: "Qui a gagné le Ballon d'Or 2002 ?",
      answer: "Ronaldo",
      options: ["Ronaldo", "Roberto Carlos", "Oliver Kahn", "Raúl"]
    },
    {
      clues: "Qui a gagné le Ballon d'Or 1991 ?",
      answer: "Jean-Pierre Papin",
      options: ["Lothar Matthäus", "Jean-Pierre Papin", "Marco van Basten", "Roberto Baggio"]
    },
    {
      clues: "Qui a gagné le Ballon d'Or 1987 ?",
      answer: "Ruud Gullit",
      options: ["Ruud Gullit", "Marco van Basten", "Frank Rijkaard", "Lothar Matthäus"]
    },
    {
      clues: "Qui a gagné le Ballon d'Or 1988 ?",
      answer: "Marco van Basten",
      options: ["Marco van Basten", "Ruud Gullit", "Franco Baresi", "Rudi Völler"]
    },
    {
      clues: "Qui a gagné le Ballon d'Or 1989 ?",
      answer: "Marco van Basten",
      options: ["Lothar Matthäus", "Marco van Basten", "Franco Baresi", "Roberto Donadoni"]
    },
    {
      clues: "Quel joueur a gagné le Ballon d'Or en 1990 ?",
      answer: "Lothar Matthäus",
      options: ["Lothar Matthäus", "Diego Maradona", "Marco van Basten", "Gary Lineker"]
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
// sera rempli dans initialiserQuizz()
let questions = [];

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
    /*
      btn === clickedButton -> utile car c btn qu'on va mettre en rouge donc faut savoir quand on est dessus   
    */
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
