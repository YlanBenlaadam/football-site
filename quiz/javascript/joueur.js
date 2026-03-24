/* =========================================================
   1) QUESTIONS DU QUIZ RANGEES PAR NIVEAU
   ---------------------------------------------------------
   questionsByLevel est un objet.
   Dedans, on a 3 propriétés :
   - facile
   - moyen
   - difficile

   Chacune contient un tableau de questions.
   Chaque question est un objet avec :
   - clues   : les indices (les clubs)
   - answer  : la bonne réponse
   - options : les choix proposés au joueur
   ========================================================= */

const questionsByLevel = {
  facile: [
    {
      clues: ["Sporting CP", "Manchester United", "Real Madrid", "Juventus Turin","Manchester United", "Al-Nassr"],
      answer: "Cristiano Ronaldo",
      options: ["Cristiano Ronaldo", "Karim Benzema", "Luis Figo", "Bruno Fernandes"]
    },
    {
      clues: ["Basel","Chelsea","Roma","Liverpool"],
      answer: "Mohamed Salah",
      options: ["Mohamed Salah","Sadio Mane","Riyad Mahrez","Hakim Ziyech"]
    },
    {
      clues: ["Manchester City","Chelsea"],
      answer: "Cole Palmer",
      options: ["Cole Palmer","Phil Foden","James Maddison","Harvey Elliott"]
    },
    {
      clues: ["São Paulo", "Milan", "Real Madrid", "Orlando City"],
      answer: "Ricardo Kaká",
      options: ["Ricardo Kaká", "Rivaldo", "Robinho", "Cafu"]
    },
    {
      clues: ["Newell's Old Boys", "FC Barcelone", "Paris Saint-Germain", "Inter Miami"],
      answer: "Lionel Messi",
      options: ["Sergio Agüero", "Lionel Messi", "Ángel Di María", "Neymar"]
    },
    {
      clues: ["Santos", "FC Barcelone", "Paris Saint-Germain", "Al-Hilal","Santos"],
      answer: "Neymar",
      options: ["Neymar", "Robinho", "Raphinha", "Vinícius Jr"]
    },
    {
      clues: ["Olympique Lyonnais", "Real Madrid", "Al-Ittihad"],
      answer: "Karim Benzema",
      options: ["Karim Benzema", "Olivier Giroud", "N'Golo Kanté", "Eden Hazard"]
    },
    {
      clues: ["Rosario Central", "Benfica Lisbonne", "Real Madrid", "Manchester United", "Paris Saint-Germain", "Juventus FC", "Benfica Lisbonne"],
      answer: "Angel Di Maria",
      options: ["Angel Di Maria", "Paulo Dybala", "Carlos Tévez", "Enzo Fernández"]
    },
    {
      clues: ["PSV Eindhoven", "Manchester United", "Olympique Lyonnais", "FC Barcelone", "Atlético de Madrid", "Corinthians"],
      answer: "Memphis Depay",
      options: ["Memphis Depay", "Cody Gakpo", "Steven Bergwijn", "Quincy Promes"]
    },
    {
      clues: ["FC Barcelone", "Valence CF", "FC Barcelone", "Inter Miami"],
      answer: "Jordi Alba",
      options: ["Jordi Alba", "Sergi Roberto", "Alejandro Balde", "Joan Capdevila"]
    },
    {
      clues: ["Paris Saint-Germain", "Juventus FC", "Bayern Munich", "Al-Nassr"],
      answer: "Kingsley Coman",
      options: ["Kingsley Coman", "Franck Ribéry", "Ousmane Dembélé", "Moussa Diaby"]
    },
    {
      clues: ["Grenoble Foot 38", "FC Istres", "Tours FC", "Montpellier HSC", "Arsenal FC", "Chelsea FC", "AC Milan"],
      answer: "Olivier Giroud",
      options: ["Olivier Giroud", "Alexandre Lacazette", "Karim Benzema", "Wissam Ben Yedder"]
    },
    {
      clues: ["Athletic Club", "Chelsea", "Real Madrid", "Arsenal"],
      answer: "Kepa Arrizabalaga",
      options: ["Kepa Arrizabalaga", "David Raya", "Robert Sánchez", "Édouard Mendy"]
    },
    {
      clues: ["Saint-Étienne", "Nice", "Marseille", "Arsenal"],
      answer: "William Saliba",
      options: ["William Saliba", "Ibrahima Konaté", "Jean-Clair Todibo", "Loïc Badé"]
    },
    {
      clues: ["Benfica","Monaco","Manchester City"],
      answer: "Bernardo Silva",
      options: ["Bernardo Silva","Bruno Fernandes","Joao Felix","Vitinha"]
    },
    {
      clues: ["Lyon","Manchester City"],
      answer: "Rayan Cherki",
      options: ["Rayan Cherki","Amine Gouiri","Bradley Barcola","Mathys Tel"]
    },

    {
      clues: ["Hambourg", "Bayer Leverkusen", "Tottenham", "Los Angeles FC"],
      answer: "Son Heung-min",
      options: ["Olivier Giroud", "Modric", "Tanguy Ndombele", "Son Heung-min"]
    }

  ],

  moyen: [
    {
      clues: ["Grêmio", "Paris Saint-Germain", "FC Barcelone", "Milan", "Fluminense", "Atlético Mineiro"],
      answer: "Ronaldinho",
      options: ["Rivaldo", "Ronaldinho", "Ronaldo", "Kaká"]
    },
    {
      clues: ["Anderlecht","Rennes","Manchester City"],
      answer: "Jeremy Doku",
      options: ["Jeremy Doku","Charles De Ketelaere","Leandro Trossard","Yannick Carrasco"]
    },
    {
      clues: [ "LOSC Lille", "Olympique de Marseille", "West Ham", "Olympique de Marseille", "Vasco da Gama"],
      answer: "Dimitri Payet",
      options: ["Samir Nasri", "Dimitri Payet", "Gaetan Laborde", "Florian Thauvin"]
    },
    {
      clues: ["OGC Nice", "Monaco", "Manchester United", "Juventus", "Marseille", "West Ham"],
      answer: "Patrice Evra",
      options: ["Patrice Evra", "Blaise Matuidi", "Thierry Henry", "Paul Pogba"]
    },
    {
      clues: ["Brest", "Metz", "Galatasaray", "Marseille", "Bayern Munich", "Fiorentina", "Salernitana"],
      answer: "Franck Ribéry",
      options: ["Franck Ribéry", "Luca Toni", "Bastian Schweinsteiger", "Arjen Robben"]
    },
    {
      clues: ["Lens", "Real Madrid", "Manchester United", "Como"],
      answer: "Raphaël Varane",
      options: ["Raphaël Varane", "Patrice Evra", "William Saliba", "Laurent Blanc"]
    },
    {
      clues: ["Le Mans Fc", "Guingamp", "L'Olympique de Marseille", "Chelsea","Shanghai Shenhua FC","Galatasaray","Chelsea","Impact de Montréal","Phoenix Rising FC"],
      answer: "Didier Drogba",
      options: ["Samuel Eto'o", "Didier Drogba", "Djibril Cisse", "Loftus-Cheek"]
    },
    {
      clues: ["Ac Milan", "As Saint-Etienne", "Chelsea","L'Olympique de Marseille"],
      answer: "Aubameyang",
      options: ["George Weah", "Didier Drogba", "Aubameyang", "Valentin Rongier"]
    },
    {
      clues: ["Lille", "Stuttgart", "Bayern Munich", "Inter Milan","Olympique de Marseille"],
      answer: "Benjamin Pavard",
      options: ["Benjamin Pavard", "Lucas Hernandez", "Dayot Upamecano", "Kingsley Coman"]
    },
    {
      clues: ["Real Madrid", "Juventus", "Real Madrid","Chelsea","Atlético Madrid","Juventus"],
      answer: "Álvaro Morata",
      options: ["Álvaro Morata", "Gonzalo Higuaín", "Pierre-Emerick Aubameyang", "Cristiano Ronaldo"]
    },
    {
      clues: ["Dijon", "Rennes", "West Ham"],
      answer: "Nayef Aguerd",
      options: ["Nayef Aguerd", "Romain Saiss", "Achraf Dari", "Chancel Mbemba"]
    },
    {
      clues: ["Stuttgart", "As Roma", "Chelsea","Real Madrid"],
      answer: "Antonio Rüdiger",
      options: ["Eden Hazard", "Nicolas Anelka", "Ferland Mendy", "Antonio Rüdiger"]
    },
    {
      clues: ["FC Metz", "Salzbourg", "Southampton","Liverpool","Al-Nassr"],
      answer: "Sadio Mané",
      options: ["Virgil van Dijk", "Sadio Mané", "Luis Suarez", "Mohamed Salah"]
    },

      {
      clues: ["Olympique Lyonnais", "AS Monaco", "Manchester Uited","Seville","Aek Athenes "],
      answer: "Anthony Martial",
      options: ["Anthony Martial", "Sadio Mané", "Mason Greenwood", "Paul Pogba"]
    },
    {
      clues: ["Lorient", "Stade Rennais", "AS Roma", "Sunderland"],
      answer: "Enzo Le Fée",
      options: ["Enzo Le Fée", "Benjamin Bourigeaud", "Jordan Veretout", "Florian Tait"]
    },
    {
      clues: ["Oldham", "Brentford", "Burnley", "Everton"],
      answer: "James Tarkowski",
      options: ["James Tarkowski", "Ben Mee", "Michael Keane", "Conor Coady"]
    },
    {
      clues: ["Shonan Bellmare", "Urawa Red Diamonds", "Sint-Truiden", "Stuttgart", "Liverpool"],
      answer: "Wataru Endo",
      options: ["Wataru Endo", "Takumi Minamino", "Daichi Kamada", "Takehiro Tomiyasu"]
    },
    {
      clues: ["Nice", "Chelsea", "Porto", "Monaco"],
      answer: "Malang Sarr",
      options: ["Malang Sarr", "Axel Disasi", "Benoît Badiashile", "Mohamed Simakan"]
    },
    {
      clues: ["Southampton", "Tottenham",  "Real Madrid", "Tottenham",  "Real Madrid","Los Angeles FC"],
      answer: "Gareth Bale",
      options: ["Aaron Ramsey", "Gareth Bale", "Luka Modrić", "Ryan Giggs"]
    },
    {
      clues: ["Arsenal"],
      answer: "Bukayo Saka",
      options: ["Bukayo Saka", "Ethan Nwaneri", "Leandro Trossard", "Noni Madueke"]
    },
    {
      clues: ["Sion","RB Leipzig","Hertha Berlin","Atlético Madrid","Wolves"],
      answer: "Matheus Cunha",
      options: ["Matheus Cunha","Gabriel Jesus","Richarlison","Raphinha"]
    },
    {
      clues: ["Strømsgodset", "Real Madrid", "Heerenveen", "Vitesse Arnhem", "Real Sociedad", "Arsenal"],
      answer: "Martin Ødegaard",
      options: ["Martin Ødegaard", "Kai Havertz", "Fábio Vieira", "Mikel Merino"]
    },
    {
      clues: ["FC Barcelone","Getafe","Brighton","Chelsea"],
      answer: "Marc Cucurella",
      options: ["Marc Cucurella","Marc Guiu","Jordi Alba","Pervis Estupiñán"]
    },
    {
      clues: ["Troyes", "Stade de Reims", "OGC Nice"],
      answer: "Yehvann Diouf",
      options: ["Yehvann Diouf", "Brice Samba", "Alban Lafont", "Illan Meslier"]
    },
    {
      clues: ["AZ Alkmaar", "VfL Wolfsburg", "Burnley", "Beşiktaş", "Manchester United", "Hoffenheim", "Ajax Amsterdam"],
      answer: "Wout Weghorst",
      options: ["Wout Weghorst", "Luuk de Jong", "Bas Dost", "Sébastien Haller"]
    },
    {
      clues: ["OGC Nice", "AS Saint-Étienne", "Stade Brestois", "Brentford", "Brighton", "Everton FC", "Marseille","Seville"],
      answer: "Neal Maupay",
      options: ["Neal Maupay", "Andy Delort", "Gaëtan Laborde", "Valère Germain"]
    },
    {
      clues: ["Chelsea FC", "Vitesse Arnhem", "Liverpool FC", "Bournemouth", "Tottenham"],
      answer: "Dominic Solanke",
      options: ["Dominic Solanke", "Tammy Abraham", "Callum Wilson", "Ollie Watkins"]
    },
    {
      clues: ["Real Sociedad", "Ajax", "Marseille"],
      answer: "Geronimo Rulli",
      options: ["Geronimo Rulli", "Pau Lopez", "Steve Mandanda", "Illan Meslier"]
    },
    {
      clues: [ "Almería", "RCD Majorque", "Osasuna", "Villarreal", "Brighton"],
      answer: "Pervis Estupiñán",
      options: ["Pervis Estupiñán", "Nicolás Tagliafico", "Piero Hincapié", "Moisés Caicedo"]
    },
    {
      clues: ["Dakar Sacré-Cœur", "Sheffield United", "Olympique de Marseille", "Everton FC"],
      answer: "Iliman Ndiaye",
      options: ["Iliman Ndiaye", "Ismaïla Sarr", "Nicolas Pépé", "Amine Harit"]
    },
    {
      clues: ["RB Leipzig II", "Sparta Rotterdam", "Sampdoria", "Spezia", "Cologne", "Stuttgart"],
      answer: "Julian Chabot",
      options: ["Julian Chabot", "Nico Elvedi", "Waldemar Anton", "Matthias Ginter"]
    },
    {
      clues: ["Brighton","Borussia Dortmund","Brighton"],
      answer: "Pascal Groß",
      options: ["Pascal Groß","Solly March","Billy Gilmour","Adam Lallana"]
    },

    {
      clues: ["Everton","Wigan","Fulham"],
      answer: "Antonee Robinson",
      options: ["Antonee Robinson","Tim Ream","Sergi Canos","Luke Shaw"]
    },
    {
      clues: ["QPR","Crystal Palace","Arsenal"],
      answer: "Eberechi Eze",
      options: ["Eberechi Eze","Michael Olise","Jordan Ayew","Morgan Gibbs-White"]
    },
    {
      clues: ["Hoffenheim","Newcastle"],
      answer: "Joelinton",
      options: ["Joelinton","Bruno Guimaraes","Almiron","Callum Wilson"]
    },
    {
      clues: ["Fluminense","Watford","Brighton","Chelsea"],
      answer: "Joao Pedro",
      options: ["Joao Pedro","Richarlison","Gabriel Jesus","Matheus Cunha"]
    },
    {
      clues: ["Manchester United","Flamengo","Fulham","Palmeiras"],
      answer: "Andreas Pereira",
      options: ["Andreas Pereira","Fred","Joao Gomes","Douglas Luiz"]
    },
    {
      clues: ["Barcelona","Bayern Munich"," Real Valladolid","Everton FC"],
      answer: "Adam Aznou",
      options: ["Adam Aznou","Noussair Mazraoui","Achraf Hakimi","Sofyan Amrabat"]
    },
    {
      clues: ["Nottingham Forest","Tottenham","Crystale Palace"],
      answer: "Brennan Johnson",
      options: ["Brennan Johnson","Kulusevski","Richarlison","Harvey Barnes"]
    },
    {
      clues: ["Lille","Aston Villa","Everton","Paris SG","Everton"],
      answer: "Idrissa Gueye",
      options: ["Idrissa Gueye","Pape Gueye","Cheick Doucoure","Boubacar Kamara"]
    },
    {
      clues: ["Crystal Palace"],
      answer: "Cheick Doucouré",
      options: ["Cheick Doucouré","Ibrahima Sangare","Idrissa Gueye","Seko Fofana"]
    },
    {
      clues: ["Aston Villa","Manchester City","Everton"],
      answer: "Jack Grealish",
      options: ["Jack Grealish","Phil Foden","James Maddison","Mason Mount"]
    },
    {
      clues: ["Blackburn Rovers", "Brentford", "Arsenal"],
      answer: "David Raya",
      options: ["David Raya", "Kepa Arrizabalaga", "Aaron Ramsdale", "Jordan Pickford"]
    },
    {
      clues: ["Nacional", "Groningen", "Ajax", "Liverpool", "FC Barcelone", "Atlético Madrid", "Nacional", "Grêmio", "Inter Miami"],
      answer: "Luis Suárez",
      options: ["Edinson Cavani", "Luis Suárez", "Diego Forlán", "Darwin Núñez"]
    },
    {
      clues: ["Flamengo","Lyon","West Ham"],
      answer: "Lucas Paquetá",
      options: ["Lucas Paquetá","Bruno Guimaraes","Paulo Dybala","Raphinha"]
    },
    {
      clues: ["Angers","Wolves","Manchester City"],
      answer: "Rayan Aït-Nouri",
      options: ["Rayan Aït-Nouri","Nuno Tavares","Nayef Aguerd","Noussair Mazraoui"]
    },

    {
      clues: ["Energetik-BGU","Lens","Manchester City"],
      answer: "Abdukodir Khusanov",
      options: ["Abdukodir Khusanov","Piero Hincapie","Castello Lukeba","Mohamed Simakan"]
    },
    {
      clues: ["Marseille","Aston Villa"],
      answer: "Boubacar Kamara",
      options: ["Boubacar Kamara","Aurelien Tchouameni","Eduardo Camavinga","Youssouf Fofana"]
    },
    {
      clues: ["Manchester City","Celtic","Bayer Leverkusen","Liverpool"],
      answer: "Jeremie Frimpong",
      options: ["Jeremie Frimpong","Denzel Dumfries","Noussair Mazraoui","Achraf Hakimi"]
    },
    {
      clues: ["Manchester City","Celtic","Bayer Leverkusen","Liverpool"],
      answer: "Jeremie Frimpong",
      options: ["Jeremie Frimpong","Denzel Dumfries","Noussair Mazraoui","Achraf Hakimi"]
    },
    {
      clues: ["Bayer Leverkusen","Liverpool"],
      answer: "Florian Wirtz",
      options: ["Florian Wirtz","Kai Havertz","Jamal Musiala","Julian Brandt"]
    },
    {
      clues: ["PSV Eindhoven","Liverpool"],
      answer: "Cody Gakpo",
      options: ["Cody Gakpo","Memphis Depay","Steven Bergwijn","Donyell Malen"]
    },
    {
      clues: ["Rennes", "Bournemouth"],
      answer: "Adrien Truffert",
      options: ["Adrien Truffert", "Rayan Aït-Nouri", "Lucas Digne", "Pervis Estupiñán"]
    },
    {
      clues: ["Lorient", "Bournemouth"],
      answer: "Eli Junior Kroupi",
      options: ["Eli Junior Kroupi", "Elye Wahi", "Romain Faivre", "Hugo Ekitike"]
    },
    {
      clues: ["Manchester United", "Getafe", "Marseille"],
      answer: "Mason Greenwood",
      options: ["Mason Greenwood", "Amine Harit", "Ismaila Sarr", "Vitinha"]
    },
    {
      clues: ["Antiguoko", "Real Sociedad", "Arsenal"],
      answer: "Martín Zubimendi",
      options: ["Martín Zubimendi", "Mikel Merino", "Mikel Zubeldia", "Martin Ødegaard"]
    },
    {
      clues: ["Palmeiras","Real Madrid","Olympique Lyonnais"],
      answer: "Endrick",
      options: ["Endrick", "Rodrygo", "Vinicius Junior", "Gabriel Jesus"]
    },
    {
      clues: ["Lyon", "Barcelona", "Lecce","Lille"],
      answer: "Samuel Umtiti",
      options: ["Samuel Umtiti", "Clément Lenglet", "Dayot Upamecano", "Raphael Varane"]
    },
    {
      clues: ["FAR Rabat", "Rangers","Lille"],
      answer: "Hamza Igamane",
      options: ["Hamza Igamane", "Youssef En-Nesyri", "Ayoub El Kaabi", "Abde Ezzalzouli"]
    },
    {
      clues: ["Grenoble", "Tours", "Montpellier", "Arsenal", "Chelsea", "Milan", "Lille"],
      answer: "Olivier Giroud",
      options: ["Olivier Giroud", "Karim Benzema", "Alexandre Lacazette", "Wissam Ben Yedder"]
    },
    {
      clues: ["Right to Dream", "Nordsjaelland", "Brighton","Union Saint Gilloise","AS Monaco"],
      answer: "Simon Adingra",
      options: ["Simon Adingra", "Kaoru Mitoma", "Jeremy Doku", "Ismaila Sarr"]
    },
    {
      clues: ["Barcelona", "Brighton","AS Monaco"],
      answer: "Ansu Fati",
      options: ["Ansu Fati", "Lamine Yamal", "Simon Adingra", "Raphinha"]
    },
    {
      clues: ["Mallorca", "Celta Vigo"],
      answer: "Lago Junior",
      options: ["Lago Junior", "Iago Aspas", "Bryan Gil", "Nico Williams"]
    },
    {
      clues: ["Leicester", "Chelsea","Crystal Palace","Strastbourg"],
      answer: "Ben Chilwell",
      options: ["Ben Chilwell", "Luke Shaw", "Reece James", "Marc Cucurella"]
    },
    {
      clues: ["Rennes","Strasbourg"],
      answer: "Guela Doue",
      options: ["Guela Doue", "Lorenz Assignon", "Jeanuël Belocian", "Warm Omari"]
    },
    {
      clues: ["Angers", "Strasbourg", "Mainz","Stade Brestois"],
      answer: "Ludovic Ajorque",
      options: ["Ludovic Ajorque", "Romain Del Castillo", "Gaetan Laborde", "Andy Delort"]
    },
    {
      clues: ["Nice", "Marseille", "Getafe", "Brest"],
      answer: "Jordan Amavi",
      options: ["Jordan Amavi", "Lucas Digne", "Theo Hernandez", "Ferland Mendy"]
    },
    {
      clues: ["Metz", "Angers"],
      answer: "Ibrahima Niane",
      options: ["Ibrahima Niane", "Cheikh Sabaly", "Bamba Dieng", "Loïs Diony"]
    },
    {
      clues: ["Toulouse"],
      answer: "Guillaume Restes",
      options: ["Guillaume Restes", "Alban Lafont", "Yehvann Diouf", "Brice Samba"]
    },
    {
      clues: ["Lille", "Monaco", "Everton", "AEK Athènes", "Toulouse"],
      answer: "Djibril Sidibé",
      options: ["Djibril Sidibé", "Ruben Aguilar", "Jonathan Clauss", "Kenny Lala"]
    },
    {
      clues: ["Le Havre"],
      answer: "Yassine Kechta",
      options: ["Yassine Kechta", "Daler Kuzyaev", "Abdoulaye Touré", "Jaouad Zairi"]
    },
    {
      clues: ["FC Barcelone"],
      answer: "Pau Cubarsí",
      options: ["Pau Cubarsí", "Iñigo Martínez", "Eric García", "Clément Lenglet"]
    },

    {
      clues: ["Manchester City", "Valencia", "FC Barcelone"],
      answer: "Ferran Torres",
      options: ["Ferran Torres", "Nico Williams", "Bryan Gil", "Yeremy Pino"]
    },
    {
      clues: ["Arsenal", "FC Barcelone", "Sporting CP","Real Betis"],
      answer: "Héctor Bellerín",
      options: ["Héctor Bellerín", "Álvaro Odriozola", "Kike Femenía", "Jesús Navas"]
    },
    {
      clues: ["FC Barcelone","Osasuna", "Real Betis"],
      answer: "Abde Ezzalzouli",
      options: ["Abde Ezzalzouli", "Abdelhamid Aït Boudlal", "Adam Ounas", "Ilias Akhomach"]
    },
    {
      clues: ["Club Bruges","Hellas Vérone", "Fiorentina",  "Manchester United","Fenerbache", "Real Betis"],
      answer: "Sofyan Amrabat",
      options: ["Sofyan Amrabat", "Azzedine Ounahi", "Bilal El Khannouss", "Noussair Mazraoui"]
    },
    {
      clues: ["Paris xSaint-Germain", "Bayern Munich", "Séville"],
      answer: "Tanguy Nianzou",
      options: ["Tanguy Nianzou", "Kingsley Koman", "Juan Bernat", "Óscar Bobb"]
    },
    {
      clues: ["FC Barcelone", "Arsenal", "Manchester United", "Inter Milan","Olympique de Marseille","Inter Milan","Udinese","FC Seville"],
      answer: "Alexis Sánchez",
      options: ["Alexis Sánchez", "Pedro", "Thierry Henry", "Samuel Eto'o"]
    },
    {
      clues: ["FC Barcelone", "RB Leipzig", "Celta Vigo"],
      answer: "Ilaix Moriba",
      options: [ "Óscar Mingueza", "Javier Rueda","Ilaix Moriba", "Riqui Puig"]
    },
    {
      clues: ["Celta Vigo", "Liverpool", "Séville", "Celta Vigo"],
      answer: "Iago Aspas",
      options: ["Iago Aspas", "Borja Iglesias", "Ferrán Jutglà", "Williot Swedberg"]
    },
    {
      clues: ["Benfica", "PSG", "Valence CF", "Wolverhampton", "Real Sociedad"],
      answer: "Gonçalo Guedes",
      options: ["Carlos Soler", "Gonçalo Guedes", "Ángel Di María", "Brais Méndez"]
    },
    {
      clues: ["Juventus", "AS Roma", "Bournemouth", "Real Madrid"],
      answer: "Dean Huijsen",
      options: ["Álvaro Carreras", "Raúl Asencio", "Dean Huijsen", "Jacobo Ramón"]
    },
    {
      clues: ["Séville", "Manchester City", "Séville"],
      answer: "Jesús Navas",
      options: ["Jesús Navas", "Samir Nasri", "David Silva", "Kike Salas"]
    },
    {
      clues: ["Benfica", "Chelsea", "Manchester United", "AS Roma","Stade Rennais", "Lyon", "Sassuolo"],
      answer: "Nemanja Matić",
      options: ["Nemanja Matić", "Nuno Tavares ", "Adrien Rabiot", "Mattéo Guendouzi"]
    },
    {
      clues: ["Shakhtar Donetsk", "Borussia Dortmund", "Manchester United", "Arsenal", "AS Roma", "Inter Milan"],
      answer: "Henrikh Mkhitaryan",
      options: ["Piotr Zielinski", "Henrikh Mkhitaryan", "Hakan Çalhanoğlu", "Nicolò Barella"]
    },
    {
      clues: ["São Paulo", "Ajax", "Shakhtar Donetsk", "Benfica", "Napoli"],
      answer: "David Neres",
      options: ["David Neres", "Khvicha Kvaratskhelia", "Giacomo Raspadori", "Jesper Lindstrøm"]
    },
    {
      clues: ["Sochaux", "Guingamp", "Borussia Mönchengladbach", "Inter Milan"],
      answer: "Marcus Thuram",
      options: ["Marcus Thuram", "Khéphren Thuram", "Lautaro Martínez", "Romelu Lukaku"]
    },
    {
      clues: ["PSG", "RB Leipzig", "Chelsea", "AC Milan"],
      answer: "Christopher Nkunku",
      options: [ "Xavi Simons", "Christopher Nkunku","Álvaro Morata", "Samuel Chukwueze"]
    },
    {
      clues: ["Gent", "Lille", "Juventus"],
      answer: "Jonathan David",
      options: ["Dusan Vlahovic", "Jonathan David", "Edon Zhegrova", "Renato Sanches"]
    },
    {
      clues: ["Real Madrid", "Como 1907"],
      answer: "Nico Paz",
      options: ["Ante Baturina", "Gabriel Strefezza", "Nico Paz", "Patrick Cutrone"]
    },
    {
      clues: ["Club Brugge", "Lens", "RB Leipzig", "Juventus"],
      answer: "Loïs Openda",
      options: ["Kenan Yıldız", "Francisco Conceição", "Loïs Openda", "Jonathan David"]
    },
    {
      clues: ["Chelsea", "Crystal Palace", "Fulham", "AC Milan"],
      answer: "Ruben Loftus-Cheek",
      options: [ "Youssouf Fofana", "Fikayo Tomori","Ruben Loftus-Cheek", "Tijjani Reijnders"]
    },
    {
      clues: ["Crystal Palace", "Bayern Munich"],
      answer: "Michael Olise",
      options: ["Kingsley Coman", "Michael Olise", "Serge Gnabry", "Leroy Sané"]
    },
    {
      clues: ["Tottenham Hotspur", "Bayern Munich"],
      answer: "Harry Kane",
      options: ["Harry Kane", "Niclas Füllkrug", "Serhou Guirassy", "Deniz Undav"]
    },

    {
      clues: [ "Marseille", "St Etienne", "Montpellier", "Lille","Olympiakos","FC Nantes"],
      answer: "Rémy Cabella",
      options: ["Rémy Cabella", "Benjamin André", "Jonathan Bamba", "Jordan Veretout"]
    }
],
  difficile: [
    {
      clues: ["Genk", "OH Leuven", "Lommel", "Brighton", "Arsenal"],
      answer: "Leandro Trossard",
      options: ["Leandro Trossard", "Jeremy Doku", "Yannick Carrasco", "Ben White"]
    },
    {
      clues: ["VfB Stuttgart", "Burnley", "VfB Stuttgart"],
      answer: "Ameen Al-Dakhil",
      options: ["Ameen Al-Dakhil", "Konstantinos Mavropanos", "Dan-Axel Zagadou", "Hiroki Ito"]
    },
    {
      clues: ["Schalke 04", "VfB Stuttgart", "RB Leipzig"],
      answer: "David Raum",
      options: ["David Raum", "Nuno Tavares", "Alejandro Grimaldo", "Luca Netz"]
    },
    {
      clues: ["Freiburg", "Augsburg", "VfB Stuttgart"],
      answer: "Ermedin Demirović",
      options: ["Deniz Undav", "Ermedin Demirović", "Chris Führich", "Enzo Millot"]
    },
    {
      clues: ["Nancy", "Lens", "AS Roma"],
      answer: "Neil El Aynaoui",
      options: ["Anass Salah-Eddine", "Bryan Cristante", "Leandro Paredes", "Neil El Aynaoui"]
    },
    {
      clues: ["Djugardens IF", "Hellas Vérone", "Atalanta"],
      answer: "Isak Hien",
      options: ["Berat Djimsiti", "Giorgio Scalvini", "Odilon Kossounou", "Isak Hien"]
    },
    {
      clues: ["Sassuolo", "West Ham", "Atalanta"],
      answer: "Gianluca Scamacca",
      options: ["Mateo Retegui", "Gianluca Scamacca", "Nikolaj Krstović", "Giacomo Raspadori"]
    },
    {
      clues: ["Chelsea", "Norwich City", "Brighton", "Napoli"],
      answer: "Billy Gilmour",
      options: ["Scott McTominay", "Stanislav Lobotka", "Billy Gilmour", "André Zambo Anguissa"]
    },
    {
      clues: ["Norwich City", "Marseille", "Bologna"],
      answer: "Jon Rowe",
      options: ["Billy Gilmour", "Jon Rowe", "Thijs Dallinga", "Jesper Karlsson"]
    },
    {
      clues: ["IFK Göteborg", "Sønderjyske", "Spezia", "Atalanta", "Bologna", "Juventus"],
      answer: "Emil Holm",
      options: ["Raoul Bellanova", "Davide Zappacosta", "Emil Holm", "Tommaso Pobega"]
    },
    {
      clues: ["OFI Crète", "Lazio", "Bournemouth"],
      answer: "Christos Mandas",
      options: ["Ivan Provedel", "Christos Mandas", "Odysseas Vlachodimos", "Stefanos Kapino"]
    },
    {
      clues: ["VfB Stuttgart", "Hertha Berlin", "Como 1907"],
      answer: "Marc Kempf",
      options: ["Éric Bailly", "Raphaël Guerreiro", "Marc Kempf", "Bojan Šarić"]
    },
    {
      clues: ["Napoli","Frosinone","Espanyol Barcelone", "Sassuolo", "Lecce"],
      answer: "Walid Cheddira",
      options: ["Neil el Aynaoui", "Walid Cheddira", "Lameck Banda", "Santiago Pierotti"]
    },
    {
      clues: ["Chelsea", "Sassuolo", "Atalanta", "OGC Nice", "Juventus"],
      answer: "Jérémie Boga",
      options: ["Edon Zhegrova", "Francisco Conceição", "Kenan Yıldız", "Jérémie Boga"]
    },
    {
      clues: ["Arsenal", "Hertha Berlin", "Marseille", "Lazio", "Fenerbahçe"],
      answer: "Mattéo Guendouzi",
      options: ["Nicolò Rovella", "Mattéo Guendouzi", "Jordan Veretout", "Lazar Samardžić"]
    },
    {
      clues: ["Spezia", "Inter Milan"],
      answer: "Francesco Pio Esposito",
      options: ["Lautaro Martínez", "Ange-Yoan Bonny", "Sebastiano Esposito", "Francesco Pio Esposito"]
    },
    {
      clues: ["Inter Milan"],
      answer: "Francesco Stante",
      options: ["Yann Bisseck", "Kristjan Asllani", "Francesco Stante", "Zinho Vanheusden"]
    },
    {
      clues: ["Ajax", "Club Brugge", "PSV", "Napoli","Galatasaray"],
      answer: "Noa Lang",
      options: ["Khvicha Kvaratskhelia", "Giacomo Raspadori", "David Neres", "Noa Lang"]
    },
    {
      clues: ["Real Sociedad"],
      answer: "Mikel Oyarzabal",
      options: ["Ander Barrenetxea", "Carlos Soler", "Brais Méndez", "Mikel Oyarzabal"]
    },
    {
      clues: ["Séville", "Getafe CF"],
      answer: "David Soria",
      options: ["David Soria", "Borja Mayoral", "Paulo Gazzaniga", "Álvaro Fernández"]
    },
    {
      clues: ["Dinamo Zagreb", "Napoli", "Séville", "Cagliari"],
      answer: "Marko Rog",
      options: ["Marko Rog", "Luka Sucic", "Nikola Vlasic", "Petar Sucic"]
    },
    {
      clues: ["Athletic Bilbao"],
      answer: "Unai Gómez",
      options: ["Unai Gómez", "Mikel Jauregizar", "Yuri Berchiche", "Unai Simon"]
    },
    {
      clues: ["Defensor Sporting","Boston River", "Bordeaux", "Getafe CF"],
      answer: "Mauro Arambarri",
      options: ["Mauro Arambarri", "Luis Milla", "Óscar Valentín", "Damián Musto"]
    },
    {
      clues: ["Olympique Lyonnais","Valencia CF"],
      answer: "Mouctar Diakhaby",
      options: ["Mouctar Diakhaby", "Enzo Loiodice", "Robin le Normand", "Yarek Gasiorowski"]
    },
    {
      clues: ["Málaga", "Southampton", "Real Sociedad", "Real Betis", "Getafe CF"],
      answer: "Juanmi",
      options: ["Ayoze Pérez", "Borja Mayoral", "Juanmi", "Christantus Uche"]
    },
    {
      clues: ["Defensor Sporting", "Bordeaux", "Getafe CF"],
      answer: "Mauro Arambarri",
      options: ["Mauro Arambarri", "Luis Milla", "Óscar Valentín", "Damián Musto"]
    },
    {
      clues: ["Real Sociedad", "PSG", "Athletic Bilbao"],
      answer: "Yuri Berchiche",
      options: ["Yuri Berchiche", "Mikel Balenziaga", "Juan Bernat", "Adama Boiro"]
    },
    {
      clues: ["CF Santa Eulàlia","Espanyol Barcelone"],
      answer: "Omar El Hilali",
      options: ["Omar El Hilali", "Hamza Koutoune", "Leandro Cabrera", "Ismail Bakhty"]
    },
    {
      clues: ["Betis Deportivo", "Real Betis"],
      answer: "Pablo García",
      options: ["Pablo García", "Marc Roca", "Giovani Lo Celso", "Sergi Altimira"]
    },
    {
      clues: ["Tacoma  Defiance", "Seattle Sounders", "Atlético de Madrid"],
      answer: "Obed Vargas",
      options: ["Obed Vargas", "Pablo Lara", "Lucien Agoumé", "Gabriel Suazo"]
    },
    {
      clues: ["Flamengo", "RB Bragantino", "Napoli","Real Betis"],
      answer: "Natan",
      options: ["Natan", "Marc Bartra", "Victor Roque", "Cédric Bakambu"]
    },
    {
      clues: ["Real Madrid", "Deportivo Alaves","Naples", "Villarreal"],
      answer: "Rafa Marín",
      options: ["Rafa Marín", "Pau Navarro", "Koni De Winter", "Cédric Hountondji"]
    },
    {
      clues: ["FC Barcelone"],
      answer: "Marc Bernal",
      options: ["Marc Bernal", "Adama Traoré", "Pedri", "Alexis Sanchèz"]
    },

    {
      clues: ["Nantes", "Genoa", "Fatih Karagümrük", "Le Havre"],
      answer: "Abdoulaye Touré",
      options: ["Abdoulaye Touré", "Moussa Sissoko", "Haris Belkebla", "Azzedine Ounahi"]
    },
    {
      clues: ["Red Star", "Le Havre"],
      answer: "Arouna Sangante",
      options: ["Arouna Sangante", "Etienne Youté", "Christopher Operi", "Yoann Salmier"]
    },
    {
      clues: ["FC Barcelone"],
      answer: "Marc Casadó",
      options: ["Marc Casadó", "Olmo", "Pedri", "Xavi Simons"]
    },
    {
      clues: ["Udinense","Atalanta Bergame", "Atlético Madrid"],
      answer: "Juan Musso",
      options: ["Juan Musso", "Jan Oblak", "Paulo Gazzaniga", "Giorgi Mamardashvili"]
    },
    {
      clues: ["Philadelphia Union", "Genk", "Toulouse"],
      answer: "Mark McKenzie",
      options: ["Mark McKenzie", "Aissa Mandi", "Tim Ream", "Weston McKennie"]
    },
    {
      clues: ["Leeds United", "Millwall", "Toulouse"],
      answer: "Charlie Cresswell",
      options: ["Charlie Cresswell", "Joe Rodon", "Maxence Lacroix", "Nathan Collins"]
    },
    {
      clues: ["FC Mantois", "Angers"],
      answer: "Yassin Belkhdim",
      options: ["Yassin Belkhdim", "Azzedine Ounahi", "Himad Abdelli", "Haris Belkebla"]
    },
    {
      clues: ["Amiens", "Young Boys", "Paris FC", "Angers"],
      answer: "Jordan Lefort",
      options: ["Jordan Lefort", "Cédric Hountondji", "Jean-Kévin Duverne", "Anthony Briançon"]
    },
    {
      clues: ["Diambars", "Marseille", "Lorient"],
      answer: "Bamba Dieng",
      options: ["Bamba Dieng", "Iliman Ndiaye", "Habib Diallo", "M'Baye Niang"]
    },
    {
      clues: ["Montpellier"],
      answer: "Joris Chotard",
      options: ["Joris Chotard", "Teji Savanier", "Jordan Ferri", "Benjamin Lecomte"]
    },
    {
      clues: [ "Troyes"],
      answer: "Serigne Diop",
      options: ["Serigne Diop", "Renaud Ripart", "Mama Balde", "Wilson Odobert"]
    },
    {
      clues: [ "Auxerre"],
      answer: "Moussa Meite",
      options: ["Moussa Meite", "Gaetan Perrin", "Lassine Sinayoko", "Gauthier Hein"]
    },
     {
      clues: [ "Bordeaux"],
      answer: "Ibrahima Siba",
      options: ["Ibrahima Siba", "Zuriko Davitashvili", "Yoann Barbet", "Gaetan Weissbeck"]
    },
    {
      clues: [ "Reims"],
      answer: "Yaya Akakpo",
      options: ["Yaya Akakpo", "Emmanuel Agbadou", "Yehvann Diouf", "Marshall Munetsi"]
    },
    {
      clues: [ "Strasbourg"],
      answer: "Ismael Zogbe",
      options: ["Ismael Zogbe", "Abakar Sylla", "Gerzino Nyamsi", "Frédéric Guilbert"]
    },

    {
      clues: [ "Rennes"],
      answer: "Noah Bourgault",
      options: ["Noah Bourgault", "Guela Doue", "Jeanuël Belocian", "Lorenz Assignon"]
    },
      {
      clues: ["Sparta Rotterdam", "Antwerp", "Sturm Graz", "Strasbourg"],
      answer: "Emanuel Emegha",
      options: ["Emanuel Emegha", "Lois Openda", "Joshua Zirkzee", "Brian Brobbey"]
    },
    {
      clues: ["Toulouse"],
      answer: "Ilyes Mourabet",
      options: ["Ilyes Mourabet", "Zakaria Aboukhlal", "Omar Al Hilali", "Thijs Dallinga"]
    },

    {
      clues: ["Benfica", "Chelsea", "Lyon","RC Strasbourg"],
      answer: "Diego Moreira",
      options: ["Diego Moreira", "Guela Doue", "Ben Chilwell", "Mathys Tel"]
    },

    {
      clues: ["Lens"],
      answer: "Ayanda Hasbi",
      options: ["Ayanda Hasbi", "Neil El Aynaoui", "Andy Diouf", "Salem Abdul Samed"]
    },
    {
      clues: ["Arsenal", "Motherwell", "Sturm Graz","AS Monaco"],
      answer: "Mika Biereth",
      options: ["Mika Biereth", "Ansu Fati", "Cesc Fabregas", "Paul Pogba"]
    },
    {
      clues: ["Monaco"],
      answer: "Maghnes Akliouche",
      options: ["Maghnes Akliouche", "Eliesse Ben Seghir", "Takumi Minamino", "Aleksandr Golovin"]
    },
    {
      clues: ["Rennes"],
      answer: "Mahamadou Idumbogue",
      options: ["Mahamadou Idumbogue", "Guela Doue", "Jeanuël Belocian", "Lorenz Assignon"]
    },
    {
      clues: ["Sporting CP", "Tottenham", "Bayern Munich","AS Monaco"],
      answer: "Eric Dier",
      options: ["Eric Dier", "Harry Maguire", "John Stones", "Ben White"]
    },
    {
      clues: ["Reims", "Real Betis", "Villarreal", "Lille"],
      answer: "Aissa Mandi",
      options: ["Aissa Mandi", "Nayef Aguerd", "Romain Saiss", "Chancel Mbemba"]
    },
    {
      clues: ["Valerenga", "Heerenveen", "Lille"],
      answer: "Osame Sahraoui",
      options: ["Osame Sahraoui", "Adam Ounas", "Ismaila Sarr", "Amine Gouiri"]
    },
    {
      clues: ["Montpellier", "Marseille"],
      answer: "Junior Ngoy",
      options: ["Junior Ngoy", "Elye Wahi", "Bilal Nadir", "Sepe Elye"]
    },
    {
      clues: ["Lille"],
      answer: "Ayyoub Bouaddi",
      options: ["Ayyoub Bouaddi", "Ait Bouddlal", "Benjamin Andre", "Hakon Haraldsson"]
    },
    {
      clues: ["Guingamp", "Rennes", "Nantes"],
      answer: "Ludovic Blas",
      options: ["Ludovic Blas", "Benjamin Bourigeaud", "Morgane Sanson", "Florian Tait"]
    },
    {
      clues: ["Olympique Lyonnais"],
      answer: "Adil Hamdani",
      options: ["Adil Hamdani", "Rayan Cherki", "Mahamadou Diawara", "Ayoub Akabou"]
    },
    {
      clues: ["Rennes"],
      answer: "Ayoub Akabou",
      options: ["Ayoub Akabou", "Jeanuël Belocian", "Guela Doue", "Desire Doue"]
    },
    {
      clues: ["Stade Rennais"],
      answer: "Yassir Zabiri",
      options: ["Yassir Zbiri", "Steve Mandanda", "Brice Samba", "Adil Hamdani"]
    },
    {
      clues: ["Manchester City", "Burnley", "Marseille"],
      answer: "CJ Egan-Riley",
      options: ["CJ Egan-Riley", "Nathan Collins", "Taylor Harwood-Bellis", "Maxime Esteve"]
    },
    {
      clues: ["Leicester City", "Rangers", "Ajax", "Fulham"],
      answer: "Calvin Bassey",
      options: ["Calvin Bassey", "Tosin Adarabioyo", "Tim Ream", "Issa Diop"]
    },
    {
      clues: ["RB Leipzig", "Huddersfield Town", "Arsenal", "Fulham"],
      answer: "Emile Smith Rowe",
      options: ["Emile Smith Rowe", "Harvey Elliott", "Curtis Jones", "Cole Palmer"]
    },
    {
      clues: ["Villarreal", "AC Milan", "Fulham"],
      answer: "Samuel Chukwueze",
      options: ["Samuel Chukwueze", "Alex Iwobi", "Adama Traoré", "Wilfried Zaha"]
    },
    {
      clues: ["Crvena zvezda", "Bournemouth"],
      answer: "Veljko Milosavljević",
      options: ["Veljko Milosavljević", "Abdukodir Khusanov", "Illia Zabarnyi", "Milos Kerkez"]
    },
    
    {
      clues: ["Milton Keynes Dons", "Middlesbrough", "Bournemouth"],
      answer: "Marcus Tavernier",
      options: ["Marcus Tavernier", "Lewis Cook", "Jacob Ramsey", "Joe Willock"]
    },
    {
      clues: ["Montpellier","Grenoble Foot 38","Lens"],
      answer: "Florian Sotoca",
      options: ["Florian Sotoca", "Gael Kakuta", "Adrien Thomasson", "Wesley Said"]
    },
    {
      clues: ["Milton Keynes Dons", "Middlesbrough", "Bournemouth"],
      answer: "Marcus Tavernier",
      options: ["Marcus Tavernier", "Lewis Cook", "Jacob Ramsey", "Joe Willock"]
    },
    {
      clues: ["Celtic", "Crystal Palace", "Lens"],
      answer: "Odsonne Edouard",
      options: ["Odsonne Edouard", "Moussa Dembele", "Terem Moffi", "Alexandre Lacazette"]
    },
    {
      clues: ["Fluminense", "Porto", "Bournemouth"],
      answer: "Evanilson",
      options: ["Evanilson", "Igor Thiago", "João Pedro", "Matheus Cunha"]
    },
    {
      clues: ["Leeds United", "Bournemouth"],
      answer: "Lewis Cook",
      options: ["Lewis Cook", "Marcus Tavernier", "James Garner", "Sean Longstaff"]
    },
    {
      clues: ["Chelsea","Liverpool"],
      answer: "Rio Ngumoha",
      options: ["Rio Ngumoha","Ben Doak","Bobby Clark","Harvey Elliott"]
    },
    {
      clues: ["Liverpool"],
      answer: "Curtis Jones",
      options: ["Curtis Jones","Harvey Elliott","James Milner","Jordan Henderson"]
    },
    {
      clues: ["Chelsea","Brighton","Chelsea"],
      answer: "Levi Colwill",
      options: ["Levi Colwill","Fikayo Tomori","Marc Guehi","Trevoh Chalobah"]
    },
    {
      clues: ["Chelsea","Brighton","Chelsea"],
      answer: "Levi Colwill",
      options: ["Levi Colwill","Fikayo Tomori","Marc Guehi","Trevoh Chalobah"]
    },
    {
      clues: ["Lille","Paris SG","Roma","Barcelona","Everton","Aston Villa"],
      answer: "Lucas Digne",
      options: ["Lucas Digne","Theo Hernandez","Ferland Mendy","Benjamin Mendy"]
    },
    {
      clues: ["Lille","Paris SG","Roma","Barcelona","Everton","Aston Villa"],
      answer: "Lucas Digne",
      options: ["Lucas Digne","Theo Hernandez","Ferland Mendy","Benjamin Mendy"]
    },
    {
      clues: ["Avispa Fukuoka","Sint-Truiden","Bologna","Arsenal"],
      answer: "Takehiro Tomiyasu",
      options: ["Takehiro Tomiyasu","Takefusa Kubo","Ko Itakura","Daichi Kamada"]
    },
    {
      clues: ["Partizan", "Fiorentina", "Manchester City", "Inter Milan","Manchester City", "Seville FC","Inter Milan","Monaco"],
      answer: "Stevan Jovetić",
      options: ["Stevan Jovetić", "Edin Džeko", "Aleksandar Kolarov", "Luka Jović"]
    },
    {
      clues: ["River Plate","Manchester City", "River Plate","Atlético Madrid"],
      answer: "Julián Álvarez",
      options: ["Lautaro Martínez", "Julián Álvarez", "Enzo Fernández", "Paolo Dybala "]
    }, 
    {
      clues: ["Borussia Mönchengladbach","Borussia Dortmund","Bayern Munich","VFL Wolfsburg","OGC Nice"],
      answer: "Dante",
      options: ["Jonathan David", "Dante", "David Luiz", "Eden Hazard"]
    },
    {
      clues: ["Sunderland", "Liverpool", "Ettifaq fc","Ajax Amsterdam ","Brentford"],
      answer: "Jordan Henderson",
      options: ["James Milner", "Dusan Tadic", "Jordan Henderson", "Ryan Gravenberch"]
    },
    {
      clues: ["Le Havre", "L'Olympique de Marseille", "Crystal Palace","L'Olympique Marseille","Stade Rennais"],
      answer: "Steve Mandanda",
      options: ["Valentin Rongier", "Amine Gouiri", "Jonathan Clauss", "Steve Mandanda"]
    },
    {
      clues: ["Blackburn Rovers", "Crystal Palace"],
      answer: "Adam Wharton",
      options: ["Adam Wharton", "Eberechi Eze", "Lewis Cook", "Conor Gallagher"]
    },
    {
      clues: ["Brøndby IF", "Genoa"],
      answer: "Morten Frendrup",
      options: ["Morten Frendrup", "Morten Hjulmand", "Christian Nørgaard", "Albert Grønbæk"]
    },
    {
      clues: ["Freiburger FC", "SC Freiburg"],
      answer: "Noah Atubolu",
      options: ["Noah Atubolu", "Finn Dahmen", "Oliver Baumann", "Gregor Kobel"]
    },
    {
      clues: ["NAC Breda", "Anderlecht", "Brighton"],
      answer: "Bart Verbruggen",
      options: ["Bart Verbruggen", "Matz Sels", "Justin Bijlow", "Mark Flekken"]
    },
    {
      clues: ["Liverpool","Brentford"],
      answer: "Caoimhin Kelleher",
      options: ["Caoimhin Kelleher","Alisson","Ederson","Robert Sanchez"]
    },
    {
      clues: ["PEC Zwolle","Liverpool","Schalke","Mainz","Brentford"],
      answer: "Sepp van den Berg",
      options: ["Sepp van den Berg","Nathan Collins","Ben Mee","Max Kilman"]
    },
    {
      clues: ["Groningen", "Hellas Verona"],
      answer: "Tomáš Suslov",
      options: ["Tomáš Suslov", "Ondrej Duda", "László Bénes", "Albert Gudmundsson"]
    },
    {
      clues: ["Fiorentina","Brentford"],
      answer: "Michael Kayode",
      options: ["Michael Kayode","Destiny Udogie","Giovanni Di Lorenzo","Raoul Bellanova"]
    },
    {
      clues: ["Dnipro-1","Brentford"],
      answer: "Yehor Yarmoliuk",
      options: ["Yehor Yarmoliuk","Ruslan Malinovskyi","Oleksandr Zinchenko","Mykhaylo Mudryk"]
    },
    {
      clues: ["Cruzeiro","Ludogorets","Club Brugge","Brentford"],
      answer: "Igor Thiago",
      options: ["Igor Thiago","Dango Ouattara","Richarlison","Matheus Cunha"]
    },
    {
      clues: ["Sparta Rotterdam", "Royal Antwerp", "Sturm Graz", "Strasbourg"],
      answer: "Emanuel Emegha",
      options: ["Emanuel Emegha", "Joshua Zirkzee", "Brian Brobbey", "Loïs Openda"]
    },
    {
      clues: ["Osasuna B", "Osasuna"],
      answer: "Aimar Oroz",
      options: ["Aimar Oroz", "Brais Méndez", "Oihan Sancet", "Pablo Barrios"]
    },
    {
      clues: ["Waldhof Mannheim", "TSG Hoffenheim", "Bayer Leverkusen", "Genoa", "Mainz 05"],
      answer: "Nadiem Amiri",
      options: ["Nadiem Amiri", "Florian Wirtz", "Kerem Demirbay", "Maximilian Arnold"]
    },
    {
      clues: ["Mainz 05 II", "Mainz 05", "Augsburg"],
      answer: "Finn Dahmen",
      options: ["Finn Dahmen", "Noah Atubolu", "Jonas Urbig", "Alexander Nübel"]
    },
    {
      clues: ["Lausanne-Sport", "Nice", "Basel", "Bologna", "Nottingham Forest"],
      answer: "Dan Ndoye",
      options: ["Dan Ndoye", "Jesper Lindstrøm", "Noni Madueke", "Dango Ouattara"]
    },
    {
      clues: ["Majestic FC", "Lorient", "Bournemouth"],
      answer: "Dango Ouattara",
      options: ["Dango Ouattara", "Ismaïla Sarr", "Hamed Traoré", "Noni Madueke"]
    },
    {
      clues: ["Boca Juniors", "Brighton"],
      answer: "Valentín Barco",
      options: ["Valentín Barco", "Lisandro Martínez", "Facundo Medina", "Carlos Alcaraz"]
    },
    {
      clues: ["Portimonense","Udinese","Everton"],
      answer: "Beto",
      options: ["Beto","Matheus Cunha","Raul Jimenez","Dominic Calvert-Lewin"]
    },
    {
      clues: ["Manchester United","Nottingham Forest","Everton"],
      answer: "James Garner",
      options: ["James Garner","Scott McTominay","Conor Gallagher","Sean Longstaff"]
    },
    {
      clues: ["Le Havre"],
      answer: "Rayane Fofana",
      options: ["Rayane Fofana", "Arnaud Kalimuendo", "Yassine Kechta", "Georges Mikautadze"]
    },
    {
      clues: ["Hajduk Split", "Tottenham (saison pro)"],
      answer: "Luka Vušković",
      options: ["Luka Vušković", "Joško Gvardiol", "Duje Caleta-Car", "Martin Erlić"]
    },
    {
      clues: ["Paris FC", "Reims"],
      answer: "Yunis Abdelhamid",
      options: ["Yunis Abdelhamid", "Jean-Clair Todibo", "Loïc Badé", "Nayef Aguerd"]
    },
    {
      clues: ["Boavista", "Lille"],
      answer: "Tiago Djaló",
      options: ["Tiago Djaló", "José Fonte", "Alexsandro Ribeiro", "Benoît Badiashile"]
    },
    {
      clues: ["Guingamp", "Reims", "Leicester"],
      answer: "Wout Faes",
      options: ["Wout Faes", "Timothy Castagne", "Jan Vertonghen", "Arthur Theate"]
    },
    {
      clues: ["Nîmes", "Atalanta", "Nice"],
      answer: "Mario Pašalić",
      options: ["Mario Pašalić", "Teun Koopmeiners", "Josip Iličić", "Martín de Roon"]
    },
    {
      clues: ["Anderlecht", "Bologna"],
      answer: "Alexis Saelemaekers",
      options: ["Alexis Saelemaekers", "Leandro Trossard", "Charles De Ketelaere", "Jérémy Doku"]
    },
    {
      clues: ["Spezia", "Empoli"],
      answer: "Tommaso Baldanzi",
      options: ["Tommaso Baldanzi", "Nicolò Zaniolo", "Giacomo Raspadori", "Mattia Zaccagni"]
    },
    {
      clues: ["Schalke 04", "RB Leipzig"],
      answer: "Benjamin Henrichs",
      options: ["Benjamin Henrichs", "Lukas Klostermann", "David Raum", "Josko Gvardiol"]
    },
    {
      clues: ["Toulouse", "RB Leipzig"],
      answer: "Ibrahim Konaté",
      options: ["Ibrahim Konaté", "Dayot Upamecano", "Castello Lukeba", "Mohamed Simakan"]
    },
    {
      clues: ["Valence", "Tottenham"],
      answer: "Bryan Gil",
      options: ["Bryan Gil", "Yeremy Pino", "Ferran Torres", "Nico Williams"]
    },
    {
      clues: ["Sassuolo", "Cremonese", "PEC Zwolle", "Ascoli", "Genoa", "West Ham", "Atalanta Bergame"],
      answer: "Gianluca Scamacca",
      options: ["Gianluca Scamacca", "Mateo Retegui", "Andrea Belotti", "Moise Kean"]
    },
    {
      clues: ["FC Cologne", "Union Berlin"],
      answer: "Robin Knoche",
      options: ["Robin Knoche", "Jonathan Tah", "Matthias Ginter", "Nico Schlotterbeck"]
    },
    {
      clues: ["Southampton", "West Ham", "Nottingham Forest","Burnley"],
      answer: "James Ward-Prowse",
      options: ["James Ward-Prowse", "Declan Rice", "Aaron Ramsey", "Conor Gallagher"]
    },
    {
      clues: ["Génération Foot", "FC Metz", "Stade Brestois", "RC Strasbourg", "Al-Shabab", "Damac FC"],
      answer: "Habib Diallo",
      options: ["Habib Diallo", "Ibrahima Niane", "Famara Diédhiou", "Bamba Dieng"]
    },
    {
      clues: ["Ajax","Bayern Munich","Manchester United"],
      answer: "Noussair Mazraoui",
      options: ["Rayane Gravenberch","Donyel Van de beek","Noussair Mazraoui","Sofyan Amrabat"]
    },
    {
      clues: ["Troyes","Brentford"],
      answer: "Bryan Mbeumo",
      options: ["Bryan Mbeumo","Yoane Wissa","Eli Kroupi jr","Callum Wilson"]
    },
    {
      clues: ["Nordsjælland","Lecce","Manchester United"],
      answer: "Patrick Dorgu",
      options: ["Patrick Dorgu","Victor Kristiansen","Rasmus Kristensen","Joakim Maehle"]
    },
    {
      clues: ["Sassuolo"],
      answer: "Domenico Berardi",
      options: ["Berardi","Politano","Zaniolo","Chiesa"]
    },
    {
      clues: ["Roma","Inter Milan","Atalanta"],
      answer: "Nicola Zalewski",
      options: ["Nicola Zalewski","Stephan El Shaarawy","Lorenzo Pellegrini","Leonardo Spinazzola"]
    },
    {
      clues: ["Feyenoord", "Ajax", "Arsenal"],
      answer: "Jurriën Timber",
      options: ["Jurriën Timber", "Micky van de Ven", "Nathan Aké", "Jorrel Hato"]
    },
    {
      clues: ["Crystal Palace"],
      answer: "Jesse Rak-Sakyi",
      options: ["Jesse Rak-Sakyi","Michael Olise","Eberechi Eze","Dean Henderson"]
    },
    {
      clues: ["Atalanta","Inter","Union Berlin","Fiorentina"],
      answer: "Robin Gosens",
      options: ["Gosens","Raum","Kostic","Henrichs"]
    }
  ]
}

/* =========================================================
   2) LIRE LE NIVEAU DANS L'URL
   ---------------------------------------------------------
   Exemple d'URL :
   joueur.html?niveau=facile

   window.location.search = "?niveau=facile"
   URLSearchParams permet de lire proprement ce paramètre.
   ========================================================= */

const params = new URLSearchParams(window.location.search);

/* On récupère la valeur du paramètre "niveau" directement dans l'url  */
const level = params.get("niveau") || "facile";

/*
   Si "niveau" n'existe pas dans l'URL,
   alors on prend "facile" par défaut.
*/



/* =========================================================
   3) RECUPERER LES ELEMENTS HTML
   ---------------------------------------------------------
   On va chercher les éléments de la page qu'on veut modifier.
   ========================================================= */

const niveauLabel = document.getElementById("niveau-label");
const questionNumberEl = document.getElementById("question-number");
const questionCluesEl = document.getElementById("question-clues");
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

/*
   Exemple :
   const scoreEl = document.getElementById("score");

   permet ensuite de faire :
   scoreEl.textContent = 2;
   pour afficher 2 dans le HTML.
*/

/* =========================================================
   3.1 Melanger les questions
   ---------------------------------------------------------
  sert a ne pas repeter a chaque fois la mm question
   ========================================================= */
    function melangeQuestion (tableau){
        const copie = [...tableau]; // on fait une copie du tableau

        for( let i = 0;i<copie.length;i++){
            const j = Math.floor(Math.random() * copie.length);// math floor genere un reel entre 0 et 1, et on le multiplie par une case du tableau pr avoir de plus grand nombre
            /* et on use math floor car si on a -> 5,3 sa arrondie a 5 
               RQ -> on mutltiplie pas copie.length car max(Maths.Random) = 1 donc au max pon aura la derniere valeur du tableau au min la 1ere 
            */
            const tmp = copie[i];
            copie[i] = copie[j];
            copie[j] = tmp;

        }

        return copie ;
   }



/* =========================================================
   4) VARIABLES D'ETAT DU QUIZ
   ---------------------------------------------------------
   Elles servent à suivre la progression de la partie.
   ========================================================= */

/* On prend les questions du niveau choisi
   On prend donc les question du tableau en fonction du niveau passer en url
   On fait pas questionsByLevel.level car level = string <=> questionsByLevel."Level" != questionsByLevel.Facile (qui lui marcherait )
*/
const baseQuestions = questionsByLevel[level] || questionsByLevel.facile;
// sera rempli dans initialiserQuizz()
let questions = [];


/* Index de la question actuelle (0 = première question) */
let currentQuestionIndex = 0;

/* Score du joueur */
let score = 0;

/* Sert à empêcher plusieurs clics sur une même question */
let answered = false;


/* =========================================================
   5) PETIT OBJET JUSTE POUR AFFICHER UN JOLI TEXTE
   ========================================================= */

const labels = {
  facile: "Niveau : Facile",
  moyen: "Niveau : Moyen",
  difficile: "Niveau : Difficile"
};

/* On affiche le niveau sur la page et comme dab si yavais rien on affiche faccile 
*/
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

/* =========================================================
   6) FONCTION QUI AFFICHE LA QUESTION ACTUELLE
   ---------------------------------------------------------
   Cette fonction remplit tout l'écran du quiz :
   - le numéro de question
   - le score
   - le texte de la question
   - les indices
   - les 4 boutons réponses
   ========================================================= */

function renderQuestion() {
  /* On récupère la question actuelle dans le tableau 
     On accede aux tableau de question melanger et on prend la 1ere
  */
  const question = questions[currentQuestionIndex];
  const optionsMelangees = melangeQuestion(question.options);

  /* On remet l'état "propre" pour la nouvelle question
     Donc pas de feedback car pas encore repondu 
  */
  answered = false;
  feedbackEl.textContent = "";
  nextBtn.disabled = true;

  /* On met à jour les infos du haut */
  questionNumberEl.textContent = currentQuestionIndex + 1;
  scoreEl.textContent = score;

  /* On affiche le titre de la question */
  questionTitleEl.textContent = "Qui est ce joueur ?";

  /*
     question.clues est un tableau.
     join(" → ") transforme le tableau en texte.
     donc mtn l'element de jointure entre les element de clues(parcours du joueur ) est la fleche 
  */
  questionCluesEl.textContent = question.clues.join("  →  ");

  /* On vide les anciens boutons réponses */
  answersEl.innerHTML = "";

  /*
     Pour chaque option, on crée un bouton HTML en JS
     et ici on parcourt le tableau d'option d'option pour chaque indice du tableau des question
  */
  optionsMelangees.forEach((option) => {
    const button = document.createElement("button");// donc chaque options est un boutton
    button.className = "answer-btn";
    button.textContent = option;// est le nom du boutton est l'option en question 

    /*
       Quand on clique sur ce bouton,
       on appelle la fonction handleAnswer(...)
       button -> le boutton le boutton cliquer 
       option -> option le nom de l'option sur le bouton
       question.answer -> la reponse correct de la question associer 
    */
    button.addEventListener("click", () => handleAnswer(button, option, question.answer));

    /* On ajoute le bouton dans la zone answers 
      c'est a dire dans la grille du html prevue a cette effet
    */
    answersEl.appendChild(button);
  });
}


/* =========================================================
   7) FONCTION QUI GERE LA REPONSE
   ---------------------------------------------------------
   Cette fonction :
   - vérifie si la réponse est correcte
   - colore les boutons
   - met à jour le score
   - active le bouton "question suivante"
   ========================================================= */

function handleAnswer(clickedButton, selectedOption, correctAnswer) {
  /* Si on a déjà répondu, on stoppe la fonction */
  if (answered) return;

  /* On marque la question comme "déjà répondue" */
  answered = true;

  /* On récupère tous les boutons réponses */
  const allButtons = document.querySelectorAll(".answer-btn");

  allButtons.forEach((btn) => {
    /* On désactive tous les boutons */
    btn.disabled = true;

    /* Le bon bouton devient vert */
    if (btn.textContent === correctAnswer) {
      btn.classList.add("correct"); // gerer par le css la class correct un background color green 
    }

    /* Le mauvais bouton cliqué devient rouge */
    if (btn === clickedButton && selectedOption !== correctAnswer) {
      btn.classList.add("wrong");
    }
  });

  /* Si la réponse choisie est correcte */
  if (selectedOption === correctAnswer) {
    score++;
    feedbackEl.textContent = "✅ Bonne réponse !";
  } else {
    feedbackEl.textContent = `❌ Mauvaise réponse. La bonne réponse était : ${correctAnswer}`;
  }

  /* On met à jour le score affiché */
  scoreEl.textContent = score;

  /* On active le bouton suivant */
  nextBtn.disabled = false;
}


/* =========================================================
   8) BOUTON "QUESTION SUIVANTE"
   ---------------------------------------------------------
   Quand on clique dessus :
   - on passe à la question suivante
   - ou on affiche le résultat final si le quiz est fini
   ========================================================= */

nextBtn.addEventListener("click", () => {
  /* On passe à la question suivante */
  currentQuestionIndex++;

  /* S'il reste des questions */
  if (currentQuestionIndex < questions.length) {
    renderQuestion();
  } else {
    /* Sinon fin du quiz */
    showResults();
  }
});


/* =========================================================
   9) AFFICHER LE RESULTAT FINAL
   ---------------------------------------------------------
   On cache la partie quiz
   puis on affiche la partie résultat
   ========================================================= */

function showResults() {
  feedbackEl.textContent = "";
  quizContent.classList.add("hidden");
  resultBox.classList.remove("hidden");
  finalScoreEl.textContent = `${score} / ${questions.length}`;
}


/* =========================================================
   10) LANCEMENT DU QUIZ
   ---------------------------------------------------------
   Sans cette ligne, rien ne s'affiche au départ.
   ========================================================= */

   replayBtn.addEventListener("click", () => initialiserQuizz());
   initialiserQuizz();

