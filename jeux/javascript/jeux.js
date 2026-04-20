// ===================== TABLEAU DES JEUX (GameMonetize) =====================
// Chaque objet contient les infos d'un jeu
// Ce tableau est utilisé par jeux.html (grille) ET play.html (iframe + infos)

const jeux = [
    {
        nom: "Soccer Duel",
        image: "images/football-dual.jpg",
        iframe: "https://html5.gamemonetize.co/cmu4j0nhxsgrh6dg4kkjgm0fmblfenzn/",
        description: "Un jeu de football en duel où vous affrontez votre adversaire dans des matchs intenses.",
        instructions: "Cliquez ou appuyez pour jouer.",
        compatible: "iOS - Android"
    },
    {
        nom: "Football Kick 3D",
        image: "images/Football-Kick-3D.jpg",
        iframe: "https://html5.gamemonetize.co/faldmlyi3o26ppqc18vmuvsd9dqierk2/",
        description: "Football Kick 3D est un jeu de football 3D ultra-dynamique où il ne s'agit pas seulement de dribbler : il faut percer la défense adverse pour récupérer le ballon et marquer. Foncez vers l'avant, repoussez vos adversaires avec des tacles puissants, récupérez le ballon et progressez sur le terrain jusqu'au but.",
        instructions: "Cliquez ou appuyez pour jouer.",
        compatible: "iOS - Android"
    },
    {
        nom: "Ultra Kick Goal",
        image: "images/Ultra Kick  Goal Crazy-512x384.jpg",
        iframe: "https://html5.gamemonetize.co/v7efjrd0d2jfzgp3hswbtmi1wcn46yvu/",
        description: "Ultra Kick, c'est l'expérience ultime des tirs au but ! Approchez-vous du point de penalty, analysez le gardien et visez la lucarne. Maîtrisez 4 types de tirs redoutables : normal, effet, surpuissant et le lob astucieux. Enchaînez les buts pour décrocher des bonus de triplé et affrontez 3 gardiens légendaires.",
        instructions: "Visez avec le curseur, chargez votre puissance et tirez ! Enchaînez les buts pour obtenir des bonus, utilisez 4 types de tirs et battez des gardiens de but légendaires pour remporter la victoire !",
        compatible: "iOS - Android"
    },
    {
        nom: "Soccer Simulator",
        image: "images/SOCCER Simulator-512x384.jpg",
        iframe: "https://html5.gamemonetize.co/5c001ed95x9q3h5vnv2d05tpptuqs0se/",
        description: "SOCCER Simulator vous offre une expérience de football 3D palpitante ! Contrôlez le ballon, visez avec précision et marquez des buts spectaculaires ! Testez vos compétences, améliorez votre précision et devenez un champion de football dans ce jeu de simulation réaliste et amusant.",
        instructions: "Cliquez ou appuyez pour jouer.",
        compatible: "iOS - Android"
    },
    {
        nom: "Flick Shot Soccer",
        image: "images/Flick Shot Soccer-512x384.jpg",
        iframe: "https://html5.gamemonetize.co/t6skn3ximxeitrfklq4g7myypwvhllk2/",
        description: "Flick Shot Soccer est un jeu de tir au but amusant et addictif où la précision est essentielle pour marquer. Visez et positionnez votre tir en faisant glisser votre doigt, puis relâchez pour tirer et envoyer le ballon au fond des filets.",
        instructions: "Cliquez ou appuyez pour jouer.",
        compatible: "iOS - Android"
    },
    {
        nom: "Head Soccer",
        image: "images/Head Football Game-512x384.jpg",
        iframe: "https://html5.gamemonetize.co/08dvlr1ksytrmsn4pd1s9t1t2ob8egql/",
        description: "Head Soccer est le jeu de football ultime où l'habileté, la vitesse et la stratégie déterminent le vainqueur. Lancez-vous sur le terrain pour des matchs de football effrénés, marquez des buts épiques et luttez pour devenir le champion !",
        instructions: "Cliquez ou appuyez pour jouer.",
        compatible: "iOS - Android"
    },
    {
        nom: "World Cup Soccer",
        image: "images/World Soccer Game Championship-512x384.jpg",
        iframe: "https://html5.gamemonetize.co/tcmwqk752btbdxuthwtk5ilatulu5ioj/",
        description: "Devenez le plus grand joueur de football au monde ! Plongez dans l'univers du football extrême et bâtissez votre carrière de professionnel au sommet du classement mondial. Déjouez les défenses adverses, enroulez le tir parfait et célébrez la victoire !",
        instructions: "Déplacement : Haut, Bas, Gauche, Droite. Course rapide : Flèches + K. Passe : N. Frappe haute : M. Lancer/Longue distance : Barre d'espace.",
        compatible: "iOS - Android"
    },
    {
        nom: "Kick Pong",
        image: "images/Kick Pong   Table Soccer-512x512.jpg",
        iframe: "https://html5.gamemonetize.co/q0cdps5gwd7bvt6hfrr8i1yxmznwsnfa/",
        description: "Foosball Pong : Football Arcade et Batailles à 2 Joueurs ! Le mélange ultime de baby-foot et de Pong est enfin là ! Glissez, marquez et défendez dans des matchs 2D rapides contre l'IA ou un ami. Facile à apprendre, difficile à maîtriser !",
        instructions: "Balayez sur mobile. Clavier fléché sur PC.",
        compatible: "iOS - Android"
    },
    {
        nom: "Goal Dot 3D",
        image: "images/Goal Dot 3D-512x384.jpg",
        iframe: "https://html5.gamemonetize.co/ofunjjov725sve0gi4rdvdwfism6a8ul/",
        description: "Bienvenue dans Goal Dot, le jeu de football 3D ! Visez et relâchez pour tirer le ballon dans la grille et remplir l'espace avec 2 points verts ou plus, horizontalement ou verticalement. Affrontez un autre joueur et terminez la mission avant lui pour gagner.",
        instructions: "Touchez ou cliquez avec la souris pour jouer !",
        compatible: "iOS - Android"
    },
    {
        nom: "Football Penalty",
        image: "images/Football Penalty-512x384.jpg",
        iframe: "https://html5.gamemonetize.co/ikpi1ghjcghyj8jk95k5wif87fz7hfs2/",
        description: "Lancez-vous dans un défi de tirs au but palpitant et sans fin ! Montrez à vos adversaires la puissance de vos tirs précis et devenez une véritable légende du football. Marquez des points à chaque tir réussi et progressez à travers les niveaux.",
        instructions: "Tirez sur des cibles tout en évitant les obstacles comme les cônes et les boîtes. Soyez rapide et précis pour marquer des points et remporter des trophées !",
        compatible: "iOS - Android"
    },
    {
        nom: "Euro Champ 2024",
        image: "images/Euro Champ 2024-512x384.jpg",
        iframe: "https://html5.gamemonetize.co/oid03ewux4ogtr5g48wqjh9x0k6j4uji/",
        description: "Un jeu de football 3D exceptionnel qui vous tiendra en haleine pendant des heures. Parviendrez-vous à remporter les 4 matchs éliminatoires et à devenir le nouveau champion d'Europe ? Marquez des buts sur coups francs et volées.",
        instructions: "Utilisez la souris pour vous déplacer ; positionnez-la plus bas pour tirer plus haut. Sur mobile, utilisez les commandes tactiles.",
        compatible: "iOS - Android"
    },
    {
        nom: "Flick n Goal",
        image: "images/Flick n Goal-512x384.jpg",
        iframe: "https://html5.gamemonetize.co/wn3blhqcrzynyt126r2iltb3zciimksm/",
        description: "Préparez-vous à vivre une expérience de football électrisante ! Choisissez votre équipe parmi une sélection variée de pays et plongez dans l'univers palpitant du football international. Placez vos joueurs stratégiquement et déployez votre talent tactique.",
        instructions: "Faites glisser la souris et relâchez-la pour frapper la balle et déplacer les joueurs.",
        compatible: "PC uniquement"
    },
    {
        nom: "Footbag Fanatic",
        image: "images/Footbag Fanatic-512x384.jpg",
        iframe: "https://html5.gamemonetize.co/cifu259dqy893zivlmf4ytvmumfuscq8/",
        description: "Vivez l'excitation de ce fantastique jeu de football arcade casual ! Pour frapper le ballon, votre adorable petit personnage doit être en l'air ! Regardez le multiplicateur de score grimper en flèche. Débloquez de nouveaux personnages et ballons.",
        instructions: "Cliquez ou appuyez avec la souris pour jouer !",
        compatible: "iOS - Android"
    },
    {
        nom: "Run and Shoot Goal",
        image: "images/Run and Shoot  GOAL -512x384.jpg",
        iframe: "https://html5.gamemonetize.co/sfgt6xl9hugkmihr98y1jzma6t7knvl9/",
        description: "Courez sans toucher les obstacles ni les joueurs adverses. Collectez un maximum d'énergie bleue et frappez la balle plus fort. Dirigez ensuite la balle et essayez de tromper le gardien. Marquez un but et passez au niveau suivant !",
        instructions: "Flèche gauche/droite pour se déplacer, Barre d'espace pour sauter. Déplacement de la balle : Flèches gauche et droite.",
        compatible: "iOS - Android"
    },
    {
        nom: "Goal Quest",
        image: "images/Liga Super Malaysia-512x384.jpg",
        iframe: "https://html5.gamemonetize.co/4gfskfmycte9r79aaz1umeaj9lmyjkvh/",
        description: "Découvrez la fusion du sport et de la résolution d'énigmes dans ce captivant jeu de football en 2D. Brisez les obstacles de pierre cubique pour vous frayer un chemin jusqu'au but. Collectez trois étoiles dans chaque niveau pour débloquer de nouveaux défis.",
        instructions: "Ordinateur : Faites exploser les cubes avec le bouton gauche de la souris. Mobile : Touchez l'écran et faites éclater tout ce que vous voulez.",
        compatible: "iOS - Android"
    }
];

// ===================== GÉNÉRATION DE LA GRILLE (uniquement sur jeux.html) =====================

// On récupère la div qui contiendra les cartes
// Si elle n'existe pas (= on est sur play.html), le code s'arrête grâce au if
const gamesGrid = document.getElementById("games-grid");

if (gamesGrid) {
    // forEach parcourt chaque jeu du tableau
    // "index" = la position du jeu dans le tableau (0, 1, 2...)
    jeux.forEach(function (jeu, index) {

        // On crée un lien <a> qui sera la carte cliquable
        const card = document.createElement("a");

        // href → redirige vers play.html avec l'index du jeu en paramètre URL
        // Ex : play.html?jeu=0 pour le premier jeu, play.html?jeu=1 pour le deuxième...
        card.href = "play.html?jeu=" + index;
        card.classList.add("game-card");

        // On crée l'image miniature du jeu
        const img = document.createElement("img");
        img.src = jeu.image;
        img.alt = jeu.nom;

        // On crée le titre sous l'image
        const name = document.createElement("p");
        name.textContent = jeu.nom;
        name.classList.add("game-card-name");

        // On assemble : image + nom dans la carte
        card.appendChild(img);
        card.appendChild(name);

        // On ajoute la carte dans la grille
        gamesGrid.appendChild(card);
    });
}
