const questionsByLevel = {
  facile: [

    // --- A : PAR ANNÉE (12) ---
    {
      clues: "Qui a remporté le Ballon d'Or 2025 ?",
      answer: "Ousmane Dembélé",
      options: ["Kylian Mbappé", "Ousmane Dembélé", "Vinícius Júnior", "Lamine Yamal"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 2024 ?",
      answer: "Rodri",
      options: ["Vinícius Júnior", "Jude Bellingham", "Rodri", "Erling Haaland"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 2023 ?",
      answer: "Lionel Messi",
      options: ["Erling Haaland", "Kylian Mbappé", "Lionel Messi", "Kevin De Bruyne"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 2022 ?",
      answer: "Karim Benzema",
      options: ["Sadio Mané", "Karim Benzema", "Luka Modrić", "Robert Lewandowski"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 2021 ?",
      answer: "Lionel Messi",
      options: ["Robert Lewandowski", "Lionel Messi", "Jorginho", "Karim Benzema"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 2019 ?",
      answer: "Lionel Messi",
      options: ["Cristiano Ronaldo", "Virgil van Dijk", "Sadio Mané", "Lionel Messi"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 2018 ?",
      answer: "Luka Modrić",
      options: ["Cristiano Ronaldo", "Antoine Griezmann", "Luka Modrić", "Raphaël Varane"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 2017 ?",
      answer: "Cristiano Ronaldo",
      options: ["Lionel Messi", "Neymar", "Cristiano Ronaldo", "Gianluigi Buffon"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 2016 ?",
      answer: "Cristiano Ronaldo",
      options: ["Antoine Griezmann", "Cristiano Ronaldo", "Lionel Messi", "Luis Suárez"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 2015 ?",
      answer: "Lionel Messi",
      options: ["Neymar", "Cristiano Ronaldo", "Andrés Iniesta", "Lionel Messi"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 2014 ?",
      answer: "Cristiano Ronaldo",
      options: ["Manuel Neuer", "Lionel Messi", "Cristiano Ronaldo", "Arjen Robben"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 2013 ?",
      answer: "Cristiano Ronaldo",
      options: ["Franck Ribéry", "Lionel Messi", "Zlatan Ibrahimović", "Cristiano Ronaldo"]
    },

    // --- B : NOMBRE DE BALLONS D'OR (6) ---
    {
      clues: "Quel joueur a remporté le plus de Ballons d'Or de l'histoire ?",
      answer: "Lionel Messi",
      options: ["Cristiano Ronaldo", "Lionel Messi", "Johan Cruyff", "Michel Platini"]
    },
    {
      clues: "Quel joueur a remporté 5 Ballons d'Or ?",
      answer: "Cristiano Ronaldo",
      options: ["Marco van Basten", "Michel Platini", "Cristiano Ronaldo", "Ronaldinho"]
    },
    {
      clues: "Quel joueur a remporté 3 Ballons d'Or consécutifs de 1983 à 1985 ?",
      answer: "Michel Platini",
      options: ["Johan Cruyff", "Marco van Basten", "Michel Platini", "Franz Beckenbauer"]
    },
    {
      clues: "Quel joueur néerlandais a remporté 3 Ballons d'Or entre 1971 et 1974 ?",
      answer: "Johan Cruyff",
      options: ["Ruud Gullit", "Johan Cruyff", "Marco van Basten", "Dennis Bergkamp"]
    },
    {
      clues: "Quel joueur néerlandais a remporté 3 Ballons d'Or avec l'AC Milan ?",
      answer: "Marco van Basten",
      options: ["Ruud Gullit", "Marco van Basten", "Frank Rijkaard", "Patrick Kluivert"]
    },
    {
      clues: "Quel joueur allemand a remporté 2 Ballons d'Or avec le Bayern Munich, en 1972 et 1976 ?",
      answer: "Franz Beckenbauer",
      options: ["Gerd Müller", "Karl-Heinz Rummenigge", "Lothar Matthäus", "Franz Beckenbauer"]
    },

    // --- C : PREMIERS / RECORDS (4) ---
    {
      clues: "Quel joueur a remporté le tout premier Ballon d'Or en 1956 ?",
      answer: "Stanley Matthews",
      options: ["Alfredo Di Stéfano", "Raymond Kopa", "Stanley Matthews", "Ferenc Puskás"]
    },
    {
      clues: "Quel joueur français a été le premier à remporter le Ballon d'Or, en 1958 ?",
      answer: "Raymond Kopa",
      options: ["Michel Platini", "Just Fontaine", "Raymond Kopa", "Jean Tigana"]
    },
    {
      clues: "Quel joueur a été le premier non-Européen à remporter le Ballon d'Or, en 1995 ?",
      answer: "George Weah",
      options: ["Romário", "George Weah", "Ronaldo", "Hristo Stoichkov"]
    },
    {
      clues: "En quelle année le Ballon d'Or n'a pas été décerné en raison de la pandémie de Covid-19 ?",
      answer: "2020",
      options: ["2019", "2022", "2020", "2021"]
    },

    // --- D : NATIONALITÉ (4) ---
    {
      clues: "Quel joueur français a remporté le Ballon d'Or 2022 ?",
      answer: "Karim Benzema",
      options: ["Antoine Griezmann", "Kylian Mbappé", "Karim Benzema", "Zinédine Zidane"]
    },
    {
      clues: "Quel joueur brésilien a remporté le Ballon d'Or 2005 ?",
      answer: "Ronaldinho",
      options: ["Ronaldo", "Kaká", "Ronaldinho", "Adriano"]
    },
    {
      clues: "Quel joueur croate a remporté le Ballon d'Or 2018 ?",
      answer: "Luka Modrić",
      options: ["Mario Mandžukić", "Ivan Rakitić", "Ivan Perišić", "Luka Modrić"]
    },
    {
      clues: "Quelle est la nationalité de Lionel Messi, le recordman du Ballon d'Or avec 8 titres ?",
      answer: "Argentine",
      options: ["Brésilienne", "Espagnole", "Argentine", "Uruguayenne"]
    },

    // --- E : CLUB AU MOMENT DU TITRE (4) ---
    {
      clues: "Dans quel club jouait Ronaldinho lorsqu'il a remporté le Ballon d'Or 2005 ?",
      answer: "FC Barcelone",
      options: ["Paris Saint-Germain", "AC Milan", "Manchester United", "FC Barcelone"]
    },
    {
      clues: "Dans quel club jouait Kaká lorsqu'il a remporté le Ballon d'Or 2007 ?",
      answer: "AC Milan",
      options: ["Real Madrid", "Inter Milan", "AC Milan", "Juventus"]
    },
    {
      clues: "Dans quel club jouait Rodri lorsqu'il a remporté le Ballon d'Or 2024 ?",
      answer: "Manchester City",
      options: ["Real Madrid", "Manchester United", "Manchester City", "Arsenal"]
    },
    {
      clues: "Dans quel club jouait Lionel Messi lorsqu'il a remporté son 8ème Ballon d'Or en 2023 ?",
      answer: "Inter Miami",
      options: ["FC Barcelone", "Paris Saint-Germain", "Real Madrid", "Inter Miami"]
    }
  ],

  moyen: [

    // --- A : PAR ANNÉE (16) ---
    {
      clues: "Qui a remporté le Ballon d'Or 2012 ?",
      answer: "Lionel Messi",
      options: ["Cristiano Ronaldo", "Andrés Iniesta", "Lionel Messi", "Xavi"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 2011 ?",
      answer: "Lionel Messi",
      options: ["Xavi", "Cristiano Ronaldo", "Lionel Messi", "Andrés Iniesta"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 2010 ?",
      answer: "Lionel Messi",
      options: ["Xavi", "Andrés Iniesta", "Wesley Sneijder", "Lionel Messi"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 2009 ?",
      answer: "Lionel Messi",
      options: ["Cristiano Ronaldo", "Xavi", "Fernando Torres", "Lionel Messi"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 2008 ?",
      answer: "Cristiano Ronaldo",
      options: ["Lionel Messi", "Cristiano Ronaldo", "Fernando Torres", "Kaká"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 2007 ?",
      answer: "Kaká",
      options: ["Cristiano Ronaldo", "Lionel Messi", "Kaká", "Didier Drogba"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 2006 ?",
      answer: "Fabio Cannavaro",
      options: ["Ronaldinho", "Fabio Cannavaro", "Thierry Henry", "Gianluigi Buffon"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 2005 ?",
      answer: "Ronaldinho",
      options: ["Kaká", "Thierry Henry", "Ronaldinho", "Andriy Shevchenko"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 2004 ?",
      answer: "Andriy Shevchenko",
      options: ["Ronaldinho", "Andriy Shevchenko", "Thierry Henry", "Deco"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 2003 ?",
      answer: "Pavel Nedvěd",
      options: ["Thierry Henry", "Pavel Nedvěd", "Paolo Maldini", "Raúl"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 2002 ?",
      answer: "Ronaldo",
      options: ["Roberto Carlos", "Oliver Kahn", "Raúl", "Ronaldo"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 2001 ?",
      answer: "Michael Owen",
      options: ["Raúl", "Oliver Kahn", "Michael Owen", "Luis Figo"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 2000 ?",
      answer: "Luis Figo",
      options: ["Zinédine Zidane", "Luis Figo", "Rivaldo", "David Beckham"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 1999 ?",
      answer: "Rivaldo",
      options: ["David Beckham", "Rivaldo", "Andriy Shevchenko", "Gabriel Batistuta"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 1998 ?",
      answer: "Zinédine Zidane",
      options: ["Ronaldo", "Davor Šuker", "Rivaldo", "Zinédine Zidane"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 1995 ?",
      answer: "George Weah",
      options: ["Romário", "George Weah", "Hristo Stoichkov", "Ronaldo"]
    },

    // --- B : NOMBRE DE BALLONS D'OR (4) ---
    {
      clues: "Quel joueur a remporté 2 Ballons d'Or consécutifs en 1978 et 1979 en jouant pour le Hambourg SV ?",
      answer: "Kevin Keegan",
      options: ["Bobby Charlton", "Kevin Keegan", "Gary Lineker", "Alan Shearer"]
    },
    {
      clues: "Quel joueur a remporté 2 Ballons d'Or consécutifs en 1980 et 1981 ?",
      answer: "Karl-Heinz Rummenigge",
      options: ["Franz Beckenbauer", "Gerd Müller", "Karl-Heinz Rummenigge", "Lothar Matthäus"]
    },
    {
      clues: "Quel joueur a remporté 4 Ballons d'Or consécutifs de 2009 à 2012 ?",
      answer: "Lionel Messi",
      options: ["Cristiano Ronaldo", "Xavi", "Lionel Messi", "Andrés Iniesta"]
    },
    {
      clues: "Quel joueur a remporté le Ballon d'Or avec Manchester United en 2008, puis à nouveau avec le Real Madrid ?",
      answer: "Cristiano Ronaldo",
      options: ["Wayne Rooney", "Paul Scholes", "Cristiano Ronaldo", "David Beckham"]
    },

    // --- C : PREMIERS / RECORDS (5) ---
    {
      clues: "Quel magazine français décerne chaque année le Ballon d'Or depuis 1956 ?",
      answer: "France Football",
      options: ["L'Équipe", "So Foot", "France Football", "Onze Mondial"]
    },
    {
      clues: "Quel est le seul Allemand de l'Est à avoir remporté le Ballon d'Or, en 1996 ?",
      answer: "Matthias Sammer",
      options: ["Lothar Matthäus", "Michael Ballack", "Karl-Heinz Rummenigge", "Matthias Sammer"]
    },
    {
      clues: "Quel est le premier joueur brésilien à avoir remporté le Ballon d'Or, en 1997 ?",
      answer: "Ronaldo",
      options: ["Pelé", "Ronaldinho", "Rivaldo", "Ronaldo"]
    },
    {
      clues: "Quel joueur français a remporté le Ballon d'Or 1991 en jouant à l'Olympique de Marseille ?",
      answer: "Jean-Pierre Papin",
      options: ["Zinédine Zidane", "Didier Deschamps", "Jean-Pierre Papin", "Éric Cantona"]
    },
    {
      clues: "Quel joueur a remporté le Ballon d'Or en 2006 alors qu'il était défenseur central et venait de remporter la Coupe du Monde avec l'Italie ?",
      answer: "Fabio Cannavaro",
      options: ["Gianluigi Buffon", "Alessandro Nesta", "Fabio Cannavaro", "Marco Materazzi"]
    },

    // --- D : NATIONALITÉ (7) ---
    {
      clues: "Quel joueur ukrainien a remporté le Ballon d'Or 2004 ?",
      answer: "Andriy Shevchenko",
      options: ["Serhiy Rebrov", "Andriy Shevchenko", "Andrei Kanchelskis", "Kakha Kaladze"]
    },
    {
      clues: "Quel joueur tchèque a remporté le Ballon d'Or 2003 ?",
      answer: "Pavel Nedvěd",
      options: ["Tomáš Rosický", "Vladimír Šmicer", "Petr Čech", "Pavel Nedvěd"]
    },
    {
      clues: "Quel joueur brésilien a remporté le Ballon d'Or 2002 ?",
      answer: "Ronaldo",
      options: ["Ronaldinho", "Rivaldo", "Kaká", "Ronaldo"]
    },
    {
      clues: "Quel joueur anglais a remporté le Ballon d'Or 2001 ?",
      answer: "Michael Owen",
      options: ["David Beckham", "Steven Gerrard", "Michael Owen", "Frank Lampard"]
    },
    {
      clues: "Quel joueur portugais a remporté le Ballon d'Or 2000 ?",
      answer: "Luis Figo",
      options: ["Rui Costa", "Nuno Gomes", "Luís Figo", "Deco"]
    },
    {
      clues: "Quel joueur brésilien a remporté le Ballon d'Or 1999 ?",
      answer: "Rivaldo",
      options: ["Ronaldo", "Ronaldinho", "Roberto Carlos", "Rivaldo"]
    },
    {
      clues: "Quel joueur libérien a remporté le Ballon d'Or 1995 ?",
      answer: "George Weah",
      options: ["Abedi Pelé", "Nwankwo Kanu", "George Weah", "Hossam Hassan"]
    },

    // --- E : CLUB AU MOMENT DU TITRE (8) ---
    {
      clues: "Dans quel club jouait Zinédine Zidane lorsqu'il a remporté le Ballon d'Or 1998 ?",
      answer: "Juventus",
      options: ["Real Madrid", "Bordeaux", "Juventus", "Marseille"]
    },
    {
      clues: "Dans quel club jouait Ronaldo lorsqu'il a remporté le Ballon d'Or 2002 ?",
      answer: "Real Madrid",
      options: ["Inter Milan", "FC Barcelone", "Real Madrid", "Flamengo"]
    },
    {
      clues: "Dans quel club jouait Michael Owen lorsqu'il a remporté le Ballon d'Or 2001 ?",
      answer: "Liverpool",
      options: ["Manchester United", "Arsenal", "Newcastle United", "Liverpool"]
    },
    {
      clues: "Dans quel club jouait Luis Figo lorsqu'il a remporté le Ballon d'Or 2000 ?",
      answer: "Real Madrid",
      options: ["FC Barcelone", "Sporting CP", "Inter Milan", "Real Madrid"]
    },
    {
      clues: "Dans quel club jouait Andriy Shevchenko lorsqu'il a remporté le Ballon d'Or 2004 ?",
      answer: "AC Milan",
      options: ["Dynamo Kiev", "Chelsea", "AC Milan", "Juventus"]
    },
    {
      clues: "Dans quel club jouait Pavel Nedvěd lorsqu'il a remporté le Ballon d'Or 2003 ?",
      answer: "Juventus",
      options: ["Lazio", "Chelsea", "Juventus", "Bayern Munich"]
    },
    {
      clues: "Dans quel club jouait Fabio Cannavaro lorsqu'il a remporté le Ballon d'Or 2006 ?",
      answer: "Real Madrid",
      options: ["Juventus", "Real Madrid", "Inter Milan", "Napoli"]
    },
    {
      clues: "Dans quel club jouait Rivaldo lorsqu'il a remporté le Ballon d'Or 1999 ?",
      answer: "FC Barcelone",
      options: ["Real Madrid", "FC Barcelone", "AC Milan", "Deportivo La Coruña"]
    }
  ],

  difficile: [

    // --- A : PAR ANNÉE (15) ---
    {
      clues: "Qui a remporté le Ballon d'Or 1997 ?",
      answer: "Ronaldo",
      options: ["Zinédine Zidane", "Ronaldo", "Roberto Carlos", "Rivaldo"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 1996 ?",
      answer: "Matthias Sammer",
      options: ["Jürgen Klinsmann", "Matthias Sammer", "Oliver Bierhoff", "Andreas Möller"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 1994 ?",
      answer: "Hristo Stoichkov",
      options: ["Romário", "Roberto Baggio", "Hristo Stoichkov", "Bebeto"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 1993 ?",
      answer: "Roberto Baggio",
      options: ["Romário", "Dennis Bergkamp", "Roberto Baggio", "Eric Cantona"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 1992 ?",
      answer: "Marco van Basten",
      options: ["Hristo Stoichkov", "Marco van Basten", "Dennis Bergkamp", "Jean-Pierre Papin"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 1991 ?",
      answer: "Jean-Pierre Papin",
      options: ["Lothar Matthäus", "Marco van Basten", "Jean-Pierre Papin", "Roberto Baggio"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 1990 ?",
      answer: "Lothar Matthäus",
      options: ["Diego Maradona", "Lothar Matthäus", "Marco van Basten", "Gary Lineker"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 1989 ?",
      answer: "Marco van Basten",
      options: ["Lothar Matthäus", "Franco Baresi", "Marco van Basten", "Roberto Donadoni"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 1988 ?",
      answer: "Marco van Basten",
      options: ["Ruud Gullit", "Marco van Basten", "Frank Rijkaard", "Rudi Völler"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 1987 ?",
      answer: "Ruud Gullit",
      options: ["Marco van Basten", "Ruud Gullit", "Frank Rijkaard", "Lothar Matthäus"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 1986 ?",
      answer: "Igor Belanov",
      options: ["Diego Maradona", "Gary Lineker", "Jean-Pierre Papin", "Igor Belanov"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 1985 ?",
      answer: "Michel Platini",
      options: ["Karl-Heinz Rummenigge", "Preben Elkjær", "Diego Maradona", "Michel Platini"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 1984 ?",
      answer: "Michel Platini",
      options: ["Jean Tigana", "Michel Platini", "Alain Giresse", "Bernard Lacombe"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 1983 ?",
      answer: "Michel Platini",
      options: ["Karl-Heinz Rummenigge", "Zbigniew Boniek", "Paolo Rossi", "Michel Platini"]
    },
    {
      clues: "Qui a remporté le Ballon d'Or 1982 ?",
      answer: "Paolo Rossi",
      options: ["Zico", "Falcão", "Karl-Heinz Rummenigge", "Paolo Rossi"]
    },

    // --- B : NOMBRE DE BALLONS D'OR (2) ---
    {
      clues: "Quel joueur a remporté le Ballon d'Or à deux reprises avec le Real Madrid, en 1957 et en 1959 ?",
      answer: "Alfredo Di Stéfano",
      options: ["Raymond Kopa", "Ferenc Puskás", "Alfredo Di Stéfano", "Didi"]
    },
    {
      clues: "Combien de Ballons d'Or Lionel Messi a-t-il remportés avec le FC Barcelone ?",
      answer: "6",
      options: ["5", "7", "6", "8"]
    },

    // --- C : PREMIERS / RECORDS (8) ---
    {
      clues: "Quel âge avait Stanley Matthews lorsqu'il a remporté le premier Ballon d'Or en 1956, faisant de lui le plus vieux lauréat de l'histoire ?",
      answer: "41 ans",
      options: ["36 ans", "38 ans", "41 ans", "44 ans"]
    },
    {
      clues: "Quel est le seul gardien de but à avoir remporté le Ballon d'Or, en 1963 ?",
      answer: "Lev Yashin",
      options: ["Peter Schmeichel", "Dino Zoff", "Gordon Banks", "Lev Yashin"]
    },
    {
      clues: "Quel joueur a remporté le Ballon d'Or en jouant pour le Dynamo Kiev en 1975 ?",
      answer: "Oleg Blokhin",
      options: ["Igor Belanov", "Andriy Shevchenko", "Oleg Blokhin", "Serhiy Rebrov"]
    },
    {
      clues: "Quel joueur a remporté le Ballon d'Or en jouant pour le Dynamo Kiev en 1986 ?",
      answer: "Igor Belanov",
      options: ["Oleg Blokhin", "Igor Belanov", "Andriy Shevchenko", "Sergei Baltacha"]
    },
    {
      clues: "Quel est le seul joueur hongrois à avoir remporté le Ballon d'Or, en 1967 ?",
      answer: "Flórián Albert",
      options: ["Ferenc Puskás", "Sándor Kocsis", "Flórián Albert", "Zoltán Czibor"]
    },
    {
      clues: "Quel joueur a remporté le Ballon d'Or en 1962 en jouant pour le Dukla Prague ?",
      answer: "Josef Masopust",
      options: ["Jan Popluhár", "Ladislav Novák", "Josef Masopust", "Jiří Veselý"]
    },
    {
      clues: "Quel joueur a remporté le Ballon d'Or lors de l'année de la victoire de l'Angleterre à la Coupe du Monde, en 1966 ?",
      answer: "Bobby Charlton",
      options: ["Geoff Hurst", "Gordon Banks", "Bobby Moore", "Bobby Charlton"]
    },
    {
      clues: "Quel joueur danois a remporté le Ballon d'Or en 1977 en jouant pour le Borussia Mönchengladbach ?",
      answer: "Allan Simonsen",
      options: ["Kevin Keegan", "Franz Beckenbauer", "Sepp Maier", "Allan Simonsen"]
    },

    // --- D : NATIONALITÉ (7) ---
    {
      clues: "Quel joueur allemand a remporté le Ballon d'Or en 1972 et en 1976 avec le Bayern Munich ?",
      answer: "Franz Beckenbauer",
      options: ["Gerd Müller", "Sepp Maier", "Franz Beckenbauer", "Bernd Schuster"]
    },
    {
      clues: "Quel joueur néerlandais a remporté le Ballon d'Or en 1971, 1973 et 1974 ?",
      answer: "Johan Cruyff",
      options: ["Ruud Gullit", "Marco van Basten", "Johan Neeskens", "Johan Cruyff"]
    },
    {
      clues: "Quel joueur soviétique a remporté le Ballon d'Or en 1963 ?",
      answer: "Lev Yashin",
      options: ["Oleg Blokhin", "Igor Belanov", "Eduard Streltsov", "Lev Yashin"]
    },
    {
      clues: "Quel joueur soviétique a remporté le Ballon d'Or en 1975 ?",
      answer: "Oleg Blokhin",
      options: ["Igor Belanov", "Rinat Dasayev", "Oleg Blokhin", "Valeri Lobanovski"]
    },
    {
      clues: "Quel joueur bulgare a remporté le Ballon d'Or 1994 ?",
      answer: "Hristo Stoichkov",
      options: ["Krassimir Balakov", "Emil Kostadinov", "Hristo Stoichkov", "Georgi Asparuhov"]
    },
    {
      clues: "Quel joueur tchécoslovaque a remporté le Ballon d'Or en 1962 ?",
      answer: "Josef Masopust",
      options: ["Ladislav Novák", "Jan Popluhár", "Josef Masopust", "Zdeněk Nehoda"]
    },
    {
      clues: "Quel joueur irlandais du Nord a remporté le Ballon d'Or en 1968 ?",
      answer: "George Best",
      options: ["Denis Law", "Bobby Charlton", "George Best", "Pat Jennings"]
    },

    // --- E : CLUB AU MOMENT DU TITRE (8) ---
    {
      clues: "Dans quel club jouait Lothar Matthäus lorsqu'il a remporté le Ballon d'Or 1990 ?",
      answer: "Inter Milan",
      options: ["Bayern Munich", "Inter Milan", "Borussia Dortmund", "Juventus"]
    },
    {
      clues: "Dans quel club jouait Ruud Gullit lorsqu'il a remporté le Ballon d'Or 1987 ?",
      answer: "AC Milan",
      options: ["Feyenoord", "PSV Eindhoven", "AC Milan", "Chelsea"]
    },
    {
      clues: "Dans quel club jouait Michel Platini lorsqu'il a remporté ses 3 Ballons d'Or consécutifs (1983, 1984, 1985) ?",
      answer: "Juventus",
      options: ["AS Saint-Étienne", "Nancy", "Juventus", "Inter Milan"]
    },
    {
      clues: "Dans quel club jouait Paolo Rossi lorsqu'il a remporté le Ballon d'Or 1982 ?",
      answer: "Juventus",
      options: ["AC Milan", "Fiorentina", "Juventus", "Vicenza"]
    },
    {
      clues: "Dans quel club jouait Matthias Sammer lorsqu'il a remporté le Ballon d'Or 1996 ?",
      answer: "Borussia Dortmund",
      options: ["Bayern Munich", "Borussia Dortmund", "Schalke 04", "VfB Stuttgart"]
    },
    {
      clues: "Dans quel club jouait Hristo Stoichkov lorsqu'il a remporté le Ballon d'Or 1994 ?",
      answer: "FC Barcelone",
      options: ["CSKA Sofia", "Parme", "FC Barcelone", "Galatasaray"]
    },
    {
      clues: "Dans quel club jouait Roberto Baggio lorsqu'il a remporté le Ballon d'Or 1993 ?",
      answer: "Juventus",
      options: ["Fiorentina", "AC Milan", "Juventus", "Inter Milan"]
    },
    {
      clues: "Dans quel club jouait George Best lorsqu'il a remporté le Ballon d'Or 1968 ?",
      answer: "Manchester United",
      options: ["Manchester City", "Liverpool", "Arsenal", "Manchester United"]
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
