const questionsByLevel = {
  facile: [
 
    // --- A : STADES (12) ---
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
      options: ["AS Monaco", "Olympique de Marseille", "RC Lens", "LOSC Lille"]
    },
    {
      clues: "Le club à deviner joue à Anfield.",
      answer: "Liverpool",
      options: ["Everton", "Liverpool", "Arsenal", "Chelsea"]
    },
    {
      clues: "Le club à deviner joue à l'Allianz Arena.",
      answer: "Bayern Munich",
      options: ["Bayern Munich", "Borussia Dortmund", "RB Leipzig", "Bayer Leverkusen"]
    },
    {
      clues: "Le club à deviner joue à l'Emirates Stadium.",
      answer: "Arsenal",
      options: ["Tottenham Hotspur", "Chelsea", "Arsenal", "West Ham"]
    },
    {
      clues: "Le club à deviner joue à l'Allianz Stadium de Turin.",
      answer: "Juventus",
      options: ["Inter Milan", "Juventus", "AC Milan", "AS Roma"]
    },
    {
      clues: "Le club à deviner joue à Stamford Bridge.",
      answer: "Chelsea",
      options: ["Fulham", "Chelsea", "Arsenal", "Tottenham Hotspur"]
    },
    {
      clues: "Le club à deviner joue à Old Trafford.",
      answer: "Manchester United",
      options: ["Manchester City", "Manchester United", "Liverpool", "Arsenal"]
    },
    {
      clues: "Le club à deviner joue au Camp Nou.",
      answer: "FC Barcelone",
      options: ["FC Barcelone", "Real Madrid", "Atlético de Madrid", "Séville FC"]
    },
    {
      clues: "Le club à deviner joue au Groupama Stadium.",
      answer: "Olympique Lyonnais",
      options: ["Olympique de Marseille", "Olympique Lyonnais", "AS Monaco", "Stade Rennais"]
    },
    {
      clues: "Le club à deviner joue au Stade de San Mamés.",
      answer: "Athletic Club",
      options: ["Real Sociedad", "Athletic Club", "Valence CF", "Deportivo Alavés"]
    },
 
    // --- B : PALMARÈS LDC (8) ---
    {
      clues: "Quel club parmi ceux-là a remporté 5 Ligues des champions ?",
      answer: "FC Barcelone",
      options: ["Paris Saint-Germain", "Crystal Palace", "Ajax Amsterdam", "FC Barcelone"]
    },
    {
      clues: "Quel club parmi ceux-là a remporté 4 Ligues des champions ?",
      answer: "Ajax Amsterdam",
      options: ["Ajax Amsterdam", "Arsenal", "Chelsea", "Atlético de Madrid"]
    },
    {
      clues: "Quel club a remporté la Ligue des champions en 1999 ?",
      answer: "Manchester United",
      options: ["Arsenal", "Chelsea", "Manchester United", "Liverpool"]
    },
    {
      clues: "Quel club a remporté la Ligue des champions en 2005 ?",
      answer: "Liverpool",
      options: ["Chelsea", "Liverpool", "Arsenal", "Manchester United"]
    },
    {
      clues: "Quel club a remporté la Ligue des champions en 2012 ?",
      answer: "Chelsea",
      options: ["Arsenal", "Manchester City", "Tottenham Hotspur", "Chelsea"]
    },
    {
      clues: "Quel club a remporté la Ligue des champions en 2013 ?",
      answer: "Bayern Munich",
      options: ["Bayern Munich", "Borussia Dortmund", "RB Leipzig", "Bayer Leverkusen"]
    },
    {
      clues: "Quel club a remporté la Ligue des champions en 2023 ?",
      answer: "Manchester City",
      options: ["Liverpool", "Manchester United", "Arsenal", "Manchester City"]
    },
    {
      clues: "Quel club a remporté la Ligue des champions en 2025 ?",
      answer: "Paris Saint-Germain",
      options: ["Paris Saint-Germain", "Real Madrid", "FC Barcelone", "Arsenal"]
    },
 
    // --- C : SURNOMS (10) ---
    {
      clues: "Quel club est surnommé 'The Reds' ?",
      answer: "Liverpool",
      options: ["Chelsea", "Liverpool", "Arsenal", "Everton"]
    },
    {
      clues: "Quel club est surnommé 'The Blues' ?",
      answer: "Chelsea",
      options: ["Arsenal", "Tottenham Hotspur", "Chelsea", "West Ham"]
    },
    {
      clues: "Quel club est surnommé 'The Red Devils' ?",
      answer: "Manchester United",
      options: ["Liverpool", "Arsenal", "Manchester City", "Manchester United"]
    },
    {
      clues: "Quel club est surnommé 'The Citizens' ?",
      answer: "Manchester City",
      options: ["Manchester City", "Chelsea", "Arsenal", "Tottenham Hotspur"]
    },
    {
      clues: "Quel club est surnommé 'Die Roten' ?",
      answer: "Bayern Munich",
      options: ["Borussia Dortmund", "Bayer Leverkusen", "Bayern Munich", "RB Leipzig"]
    },
    {
      clues: "Quel club est surnommé 'I Rossoneri' ?",
      answer: "AC Milan",
      options: ["Juventus", "AC Milan", "Inter Milan", "AS Roma"]
    },
    {
      clues: "Quel club est surnommé 'Les Canaris' ?",
      answer: "FC Nantes",
      options: ["Stade Rennais", "FC Nantes", "Olympique Lyonnais", "AS Monaco"]
    },
    {
      clues: "Quel club est surnommé 'La Vecchia Signora' ?",
      answer: "Juventus",
      options: ["AC Milan", "AS Roma", "Juventus", "Inter Milan"]
    },
    {
      clues: "Quel club est surnommé 'Les Parisiens' ?",
      answer: "Paris Saint-Germain",
      options: ["Stade Rennais", "Olympique de Marseille", "AS Monaco", "Paris Saint-Germain"]
    },
    {
      clues: "Quel club est surnommé 'Spurs' ?",
      answer: "Tottenham Hotspur",
      options: ["Tottenham Hotspur", "Chelsea", "Arsenal", "West Ham"]
    }
  ],

   moyen: [
    {
      clues: "Le club à deviner joue au Signal Iduna Park.",
      answer: "Borussia Dortmund",
      options: ["Schalke 04", "Borussia Dortmund", "Bayern Munich", "Hambourg SV"]
    },
    {
      clues: "Le club à deviner joue à l'Etihad Stadium.",
      answer: "Manchester City",
      options: ["Manchester United", "Arsenal", "Manchester City", "Chelsea"]
    },
    {
      clues: "Le club à deviner joue au Tottenham Hotspur Stadium.",
      answer: "Tottenham Hotspur",
      options: ["Chelsea", "Arsenal", "West Ham", "Tottenham Hotspur"]
    },
    {
      clues: "Le club à deviner joue au Riyadh Air Metropolitano.",
      answer: "Atlético de Madrid",
      options: ["Séville FC", "Atlético de Madrid", "Valence CF", "Real Betis"]
    },
    {
      clues: "Le club à deviner joue à l'Estádio da Luz.",
      answer: "Benfica",
      options: ["Sporting CP", "Benfica", "FC Porto", "Braga"]
    },
    {
      clues: "Le club à deviner joue à l'Estádio do Dragão.",
      answer: "FC Porto",
      options: ["Benfica", "Sporting CP", "Boavista", "FC Porto"]
    },
    {
      clues: "Le club à deviner joue à la Johan Cruijff ArenA.",
      answer: "Ajax Amsterdam",
      options: ["Ajax Amsterdam", "PSV Eindhoven", "Feyenoord", "AZ Alkmaar"]
    },
    {
      clues: "Le club à deviner joue à l'Estadio Santiago Bernabéu.",
      answer: "Real Madrid",
      options: ["FC Barcelone", "Real Madrid", "Atlético de Madrid", "Séville FC"]
    },
    {
      clues: "Le club à deviner joue au Stade Louis II.",
      answer: "AS Monaco",
      options: ["OGC Nice", "AS Monaco", "Olympique de Marseille", "Stade Rennais"]
    },
    {
      clues: "Le club à deviner joue au Stade Pierre-Mauroy.",
      answer: "LOSC Lille",
      options: ["Stade de Reims", "RC Lens", "Olympique Lyonnais", "LOSC Lille"]
    },
    {
      clues: "Quel club parmi ceux-là a remporté 15 Ligues des champions ?",
      answer: "Real Madrid",
      options: ["FC Barcelone", "Real Madrid", "Bayern Munich", "Liverpool"]
    },
    {
      clues: "Quel club parmi ceux-là a remporté 7 Ligues des champions ?",
      answer: "AC Milan",
      options: ["Juventus", "Inter Milan", "Chelsea", "AC Milan"]
    },
    {
      clues: "Quel club parmi ceux-là a remporté 6 Ligues des champions ?",
      answer: "Liverpool",
      options: ["Arsenal", "Liverpool", "Manchester City", "Chelsea"]
    },
    {
      clues: "Quel club parmi ceux-là a remporté 6 Ligues des champions ?",
      answer: "Bayern Munich",
      options: ["Bayern Munich", "Borussia Dortmund", "Bayer Leverkusen", "RB Leipzig"]
    },
    {
      clues: "Quel club parmi ceux-là a remporté 3 Ligues des champions ?",
      answer: "Inter Milan",
      options: ["Juventus", "Chelsea", "Arsenal", "Inter Milan"]
    },
    {
      clues: "Quel club parmi ceux-là a remporté 2 Ligues des champions ?",
      answer: "Juventus",
      options: ["Napoli", "Juventus", "AS Roma", "Lazio"]
    },
    {
      clues: "Quel club parmi ceux-là a remporté 2 Ligues des champions ?",
      answer: "Chelsea",
      options: ["Tottenham Hotspur", "Everton", "Chelsea", "West Ham"]
    },
    {
      clues: "Quel club parmi ceux-là a remporté 2 Ligues des champions ?",
      answer: "FC Porto",
      options: ["Sporting CP", "Braga", "Boavista", "FC Porto"]
    },
    {
      clues: "Quel club est surnommé 'The Gunners' ?",
      answer: "Arsenal",
      options: ["Arsenal", "Chelsea", "Tottenham Hotspur", "West Ham"]
    },
    {
      clues: "Quel club est surnommé 'Les Magpies' ?",
      answer: "Newcastle United",
      options: ["Leeds United", "Newcastle United", "Sunderland", "Middlesbrough"]
    },
    {
      clues: "Quel club est surnommé 'Die Borussen' ?",
      answer: "Borussia Dortmund",
      options: ["Bayern Munich", "Schalke 04", "Borussia Dortmund", "Bayer Leverkusen"]
    },
    {
      clues: "Quel club est surnommé 'Les Phocéens' ?",
      answer: "Olympique de Marseille",
      options: ["AS Monaco", "OGC Nice", "Olympique de Marseille", "Montpellier HSC"]
    },
    {
      clues: "Quel club est surnommé 'The Hammers' ?",
      answer: "West Ham United",
      options: ["Crystal Palace", "Brentford", "Wolverhampton", "West Ham United"]
    },
    {
      clues: "Quel club est surnommé 'Les Gones' ?",
      answer: "Olympique Lyonnais",
      options: ["Stade Rennais", "FC Nantes", "LOSC Lille", "Olympique Lyonnais"]
    },
    {
      clues: "Quel club est surnommé 'I Nerazzurri' ?",
      answer: "Inter Milan",
      options: ["AC Milan", "Inter Milan", "Juventus", "AS Roma"]
    },
    {
      clues: "Quel club est surnommé 'The Foxes' ?",
      answer: "Leicester City",
      options: ["Aston Villa", "Nottingham Forest", "Leicester City", "Wolverhampton"]
    },
    {
      clues: "Quel club a remporté le plus de titres de Premier League ?",
      answer: "Manchester United",
      options: ["Liverpool", "Arsenal", "Manchester United", "Chelsea"]
    },
    {
      clues: "Quel club a remporté le plus de titres de Bundesliga ?",
      answer: "Bayern Munich",
      options: ["Bayern Munich", "Borussia Dortmund", "Bayer Leverkusen", "Schalke 04"]
    },
    {
      clues: "Quel club a remporté le plus de titres de Liga ?",
      answer: "Real Madrid",
      options: ["FC Barcelone", "Atlético de Madrid", "Real Madrid", "Séville FC"]
    },
    {
      clues: "Quel club a remporté le plus de Scudetti ?",
      answer: "Juventus",
      options: ["AC Milan", "Juventus", "Inter Milan", "AS Roma"]
    },
    {
      clues: "Quel club a remporté le plus de FA Cups ?",
      answer: "Arsenal",
      options: ["Manchester United", "Arsenal", "Chelsea", "Liverpool"]
    },
    {
      clues: "Quel club a remporté le plus de titres de Ligue 1 ?",
      answer: "Paris Saint-Germain",
      options: ["Olympique de Marseille", "AS Saint-Étienne", "AS Monaco", "Paris Saint-Germain"]
    },
    {
      clues: "Comment s'appelle le derby entre Arsenal et Tottenham ?",
      answer: "North London Derby",
      options: ["Manchester Derby", "North London Derby", "El Clásico", "Merseyside Derby"]
    },
    {
      clues: "Comment s'appelle le derby entre Real Madrid et FC Barcelone ?",
      answer: "El Clásico",
      options: ["El Clásico", "El Gran Derby", "La Supercoppa", "El Derby Nacional"]
    },
    {
      clues: "Comment s'appelle le derby entre AC Milan et Inter Milan ?",
      answer: "Derby della Madonnina",
      options: ["Derby dello Scudetto", "Derby della Madonnina", "Derby della Lanterna", "Derby della Capitale"]
    },
    {
      clues: "Comment s'appelle le derby entre Liverpool et Everton ?",
      answer: "Merseyside Derby",
      options: ["Merseyside Derby", "Manchester Derby", "North London Derby", "Derby de la Tamise"]
    },
    {
      clues: "Quel club a remporté la toute première Coupe d'Europe des clubs champions en 1956 ?",
      answer: "Real Madrid",
      options: ["AC Milan", "Juventus", "Real Madrid", "Benfica"]
    },
    {
      clues: "Quel club a remporté la Coupe d'Europe des clubs champions en 1979 puis en 1980 ?",
      answer: "Nottingham Forest",
      options: ["Liverpool", "Nottingham Forest", "Aston Villa", "Leeds United"]
    },
    {
      clues: "Quel club anglais a été fondé en 1878 ?",
      answer: "Everton",
      options: ["Everton", "Arsenal", "West Ham", "Chelsea"]
    },
    {
      clues: "Quel club a remporté la toute première Coupe UEFA en 1972 ?",
      answer: "Tottenham Hotspur",
      options: ["Arsenal", "Chelsea", "Tottenham Hotspur", "Liverpool"]
    }
  ],

  difficile: [
 
    // --- A : STADES (8) ---
    {
      clues: "Le club à deviner joue au City Ground.",
      answer: "Nottingham Forest",
      options: ["Aston Villa", "Nottingham Forest", "Leeds United", "Everton"]
    },
    {
      clues: "Le club à deviner joue au Volksparkstadion.",
      answer: "Hambourg SV",
      options: ["Borussia Dortmund", "Hambourg SV", "Werder Brême", "Schalke 04"]
    },
    {
      clues: "Le club à deviner joue au Stade Bollaert-Delelis.",
      answer: "RC Lens",
      options: ["RC Lens", "Stade de Reims", "Valenciennes FC", "FC Metz"]
    },
    {
      clues: "Le club à deviner joue au De Kuip.",
      answer: "Feyenoord",
      options: ["Ajax Amsterdam", "PSV Eindhoven", "Feyenoord", "AZ Alkmaar"]
    },
    {
      clues: "Le club à deviner joue au Estadio Ramón Sánchez-Pizjuán.",
      answer: "Séville FC",
      options: ["Real Betis", "Séville FC", "Valence CF", "Getafe CF"]
    },
    {
      clues: "Le club à deviner joue au Stade Geoffroy-Guichard.",
      answer: "Saint-Étienne",
      options: ["Olympique Lyonnais", "Clermont Foot", "Saint-Étienne", "FC Metz"]
    },
    {
      clues: "Le club à deviner joue au Stadio Diego Armando Maradona.",
      answer: "Napoli",
      options: ["AS Roma", "Lazio", "Juventus", "Napoli"]
    },
    {
      clues: "Le club à deviner joue au Stade de la Beaujoire.",
      answer: "FC Nantes",
      options: ["Stade Rennais", "Angers SCO", "FC Nantes", "FC Lorient"]
    },
 
    // --- B : PALMARÈS LDC (7) ---
    {
      clues: "Quel club a remporté la Ligue des champions en 1967 ?",
      answer: "Celtic",
      options: ["Celtic", "Rangers", "Aberdeen", "Hearts"]
    },
    {
      clues: "Quel club a remporté la Ligue des champions en 1969 ?",
      answer: "AC Milan",
      options: ["Inter Milan", "Juventus", "AC Milan", "AS Roma"]
    },
    {
      clues: "Quel club a remporté la Ligue des champions en 1979 puis en 1980 ?",
      answer: "Nottingham Forest",
      options: ["Liverpool", "Aston Villa", "Nottingham Forest", "Leeds United"]
    },
    {
      clues: "Quel club a remporté la Ligue des champions en 1982 ?",
      answer: "Aston Villa",
      options: ["Nottingham Forest", "Aston Villa", "Leicester City", "Everton"]
    },
    {
      clues: "Quel club a remporté la Ligue des champions en 1991 ?",
      answer: "Étoile Rouge de Belgrade",
      options: ["Partizan Belgrade", "Dinamo Zagreb", "Steaua Bucarest", "Étoile Rouge de Belgrade"]
    },
    {
      clues: "Quel club a remporté la Ligue des champions en 1961 et en 1962 ?",
      answer: "Benfica",
      options: ["FC Porto", "Benfica", "Sporting CP", "Boavista"]
    },
    {
      clues: "Quel club a remporté la Ligue des champions en 1987 et en 2004 ?",
      answer: "FC Porto",
      options: ["Benfica", "Sporting CP", "FC Porto", "Braga"]
    },
 
    // --- C : SURNOMS (7) ---
    {
      clues: "Quel club est surnommé 'The Canaries' ?",
      answer: "Norwich City",
      options: ["Ipswich Town", "Millwall", "Charlton Athletic", "Norwich City"]
    },
    {
      clues: "Quel club est surnommé 'The Hornets' ?",
      answer: "Watford",
      options: ["Brentford", "Watford", "Luton Town", "Charlton Athletic"]
    },
    {
      clues: "Quel club est surnommé 'Les Aiglons' ?",
      answer: "OGC Nice",
      options: ["Olympique de Marseille", "Montpellier HSC", "OGC Nice", "AS Monaco"]
    },
    {
      clues: "Quel club est surnommé 'I Bianconeri' ?",
      answer: "Juventus",
      options: ["AC Milan", "Inter Milan", "Juventus", "Lazio"]
    },
    {
      clues: "Quel club est surnommé 'The Blades' ?",
      answer: "Sheffield United",
      options: ["Sheffield United", "Sheffield Wednesday", "Barnsley", "Rotherham United"]
    },
    {
      clues: "Quel club est surnommé 'Die Werkself' ?",
      answer: "Bayer Leverkusen",
      options: ["Bayern Munich", "Borussia Dortmund", "Schalke 04", "Bayer Leverkusen"]
    },
    {
      clues: "Quel club est surnommé 'Les Sang et Or' ?",
      answer: "RC Lens",
      options: ["FC Metz", "Stade de Reims", "RC Lens", "Valenciennes FC"]
    },
 
    // --- D : PALMARÈS NATIONAL (6) ---
    {
      clues: "Quel club a remporté le plus de Coupes du Roi ?",
      answer: "FC Barcelone",
      options: ["Real Madrid", "Athletic Club", "FC Barcelone", "Atlético de Madrid"]
    },
    {
      clues: "Quel club détient le record de titres de DFB-Pokal ?",
      answer: "Bayern Munich",
      options: ["Borussia Dortmund", "Bayern Munich", "Werder Brême", "Schalke 04"]
    },
    {
      clues: "Quel club a remporté le plus de Coupes d'Italie ?",
      answer: "Juventus",
      options: ["Inter Milan", "AS Roma", "AC Milan", "Juventus"]
    },
    {
      clues: "Quel club a remporté le plus de titres de Primeira Liga ?",
      answer: "Benfica",
      options: ["FC Porto", "Sporting CP", "Benfica", "Boavista"]
    },
    {
      clues: "Quel club a remporté la Premier League en 2016 ?",
      answer: "Leicester City",
      options: ["Aston Villa", "Crystal Palace", "Leicester City", "Wolverhampton"]
    },
    {
      clues: "Quel club a remporté le Scudetto en 2021, pour la première fois depuis 11 ans ?",
      answer: "Inter Milan",
      options: ["Juventus", "AC Milan", "Inter Milan", "AS Roma"]
    },
 
    // --- E : DERBIES (5) ---
    {
      clues: "Comment s'appelle le derby entre Celtic et Rangers ?",
      answer: "Old Firm",
      options: ["Glasgow Derby", "Old Firm", "Tartan Derby", "Scottish Clásico"]
    },
    {
      clues: "Comment s'appelle le derby entre l'AS Roma et la Lazio ?",
      answer: "Derby della Capitale",
      options: ["Derby della Madonnina", "Derby della Capitale", "Derby della Lanterna", "Derby dello Scudetto"]
    },
    {
      clues: "Comment s'appelle le derby entre Borussia Dortmund et Schalke 04 ?",
      answer: "Revierderby",
      options: ["Revierderby", "Rheinderby", "Nordderby", "Bundesderby"]
    },
    {
      clues: "Comment s'appelle le derby entre Feyenoord et Ajax Amsterdam ?",
      answer: "De Klassieker",
      options: ["Het Nationale Derby", "De Confrontatie", "De Klassieker", "De Groote Match"]
    },
    {
      clues: "Comment s'appelle le derby entre l'Olympique de Marseille et le Paris Saint-Germain ?",
      answer: "Le Classique",
      options: ["L'Éternel Derby", "Le Grand Derby", "Le Choc des Titans", "Le Classique"]
    },
 
    // --- F : HISTOIRE (7) ---
    {
      clues: "Quel club est le plus vieux club professionnel du monde, fondé en 1862 ?",
      answer: "Notts County",
      options: ["Nottingham Forest", "Sheffield Wednesday", "Notts County", "Aston Villa"]
    },
    {
      clues: "Quel club a été le premier d'Europe de l'Est à remporter la Ligue des champions ?",
      answer: "Steaua Bucarest",
      options: ["Dinamo Kiev", "Étoile Rouge de Belgrade", "Partizan Belgrade", "Steaua Bucarest"]
    },
    {
      clues: "Quel club a été le premier club anglais à remporter la Ligue des champions, en 1968 ?",
      answer: "Manchester United",
      options: ["Manchester United", "Liverpool", "Arsenal", "Chelsea"]
    },
    {
      clues: "Quel club anglais a inspiré les couleurs noir et blanc du maillot de la Juventus en 1903 ?",
      answer: "Notts County",
      options: ["Newcastle United", "Notts County", "Hambourg SV", "Udinese"]
    },
    {
      clues: "Quel club a été le premier club néerlandais à remporter la Ligue des champions, en 1970 ?",
      answer: "Feyenoord",
      options: ["Ajax Amsterdam", "PSV Eindhoven", "AZ Alkmaar", "Feyenoord"]
    },
    {
      clues: "Quel club a remporté la Ligue des champions 3 années consécutives, de 1971 à 1973 ?",
      answer: "Ajax Amsterdam",
      options: ["Real Madrid", "Ajax Amsterdam", "Bayern Munich", "Liverpool"]
    },
    {
      clues: "Quel club a remporté la Ligue des champions 5 années consécutives, de 1956 à 1960 ?",
      answer: "Real Madrid",
      options: ["AC Milan", "Juventus", "Real Madrid", "Benfica"]
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

// Référence à la quiz-box pour l'animation
const quizBox = document.querySelector(".quiz-box");

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        // 1. Fade-out : on ajoute la classe qui fait disparaître la box
        quizBox.classList.add("fade-out");

        // 2. Après 300ms (le temps du fade-out), on change la question
        setTimeout(() => {
            renderQuestion();
            // 3. On retire fade-out → la box réapparaît en fondu (grâce à la transition CSS)
            quizBox.classList.remove("fade-out");
        }, 300);
    } else {
        // Fade-out avant d'afficher les résultats
        quizBox.classList.add("fade-out");

        setTimeout(() => {
            showResults();
        }, 300);
    }
});
replayBtn.addEventListener("click", () => initialiserQuizz());


function showResults() {
    feedbackEl.textContent = "";
    quizContent.classList.add("hidden");
    resultBox.classList.remove("hidden");
    finalScoreEl.textContent = score + " / " + questions.length;

    // Message personnalisé selon le score
    var messageEl = document.getElementById("result-message");
    if (messageEl) {
        if (score === questions.length) {
            messageEl.textContent = "Parfait ! Tu es un vrai expert ! 🏆";
        } else if (score >= 3) {
            messageEl.textContent = "Bien joué ! Tu connais ton football ! 👏";
        } else if (score >= 1) {
            messageEl.textContent = "Tu peux mieux faire, retente ta chance ! 💪";
        } else {
            messageEl.textContent = "Aïe... Il est temps de réviser ! 😅";
        }
    }
}

initialiserQuizz();