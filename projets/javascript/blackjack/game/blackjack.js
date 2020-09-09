		// CREATION D UN JEU DE BLACKJACK
var nbcartetirees = 0; // Permet de suivre l'état de la partie selon le nombre de cartetirees
var scorejoueur = 0; // récupère le score dans les fonctions suivant les cartes tirées

// Pareil mais pour la banque
var cartetireeB = new Array();
var scorebanque = 0;
// Gestion de la carte retournée côté banque
var carteVerso = document.getElementById('verso').innerHTML += '<img src="imagesCartes/verso.jpg">';  
var carteVersoCPT = 0;

// Création du paquet de cartes
var cartes = new Array (52);
var creationcpt = 1; // ajuste les valeurs attribuées selon les valeurs du tableau (O - 51) i=0 cpt =1 / i = 51 cpt = 52
for (i = 0; i<cartes.length; i++) 
{
	cartes[i] = '<img src="imagesCartes/'+creationcpt+'.jpg">';
	creationcpt++;
}

// Melange des cartes pour contrôler l'aléatoire et éviter les doublons
function melanger() {
	for (i = 0; i<cartes.length; i++) {
		var emplacement = (Math.floor(Math.random() * (52))); // emplacement au hasard dans le paquet
		var cartedebase = cartes[i]; // on repère l'emplacement actuel
		cartes[i] = cartes[emplacement]; // On place la carte actuelle aléatoirement dans le paquet
		cartes[emplacement] = cartedebase; // On met la carte remplacée en haut du paquet
	}
}
/* Tirage des cartes
	cette fonction permet également de vérifier le score total du joueur.*/
function tiragecarte(){
	nbcartetirees++; // Suivi de l'avancée de la partie
	var cartetiree = cartes.pop(); // On sort une carte du haut du paquet (la méthode .pop permet de sortir la dernière valeur du tableau)
	var points = cartetiree.substr(23); // Récupération de la fin de la source image conservée dans le tableau
	points = +points.replace('.jpg">', "");	// on enlève la partie superflue pour ne garder que le numéro de la carte tirée
	document.getElementById('tapisjoueur').innerHTML+=cartetiree; // Affichage de la carte tirée sur le tapis de jeu du joueur
	miseajour_score(points); // Calcul des points du joueurs selon la carte tirée. Vérifie si il dépasse 21.
}

// Vérification de l'évolution du score, usage du modulo pour respecter la valeur des figures d'un jeu de cartes
function miseajour_score(points) {
	
	if (points % 13 == 11 || points % 13 == 12 || points % 13 == 0)
	{
	scorejoueur += 10;
	}
	// Le modulo 1 permet de contrôler l'AS qui deviendra 11 si il ne fait pas dépasser le score, sinon il conserve la valeur de 1
	else if (points % 13 == 1  && (scorejoueur + 11) <= 21) {
				scorejoueur += 11;
			}
	else
		{
			scorejoueur += points % 13;
		}
	document.getElementById('scorejoueur').innerHTML = scorejoueur; // Affichage du score sous la table de jeu
	
	if (scorejoueur > 21) 
	{
		alert("Votre score est supérieur à 21 : "+scorejoueur+" Vous avez perdu");
		rejouer();
	
	}
}
// Tirage de la première carte banque isolée du reste du traitement
function tirageinitialB() {
	carteVersoCPT ++; // incrémentation du compteur (voir tiragecarteB)
	var cartetiree = cartes.pop();
	var points = cartetiree.substr(23,25);
	points = +points.replace('.jpg">', "");	
	document.getElementById('tapisbanque').innerHTML+=cartetiree;
	miseajour_scoreB(points);
}

// Tirage des cartes de la banque
function tiragecarteB() {
	/* Si la banque en est à sa seconde carte tirée (cpt n'a été augmenté qu'une fois lors de l'initialisation
	  alors la carte tiree du paquet viendra remplacer le verso.
	  Ensuite, on met à jour le score de la banque puis on sort de la condition IF et on teste les conditions de victoires de la Banque
	*/
	if(carteVersoCPT == 1) 
	{
		var cartetiree = cartes.pop();
		var points = cartetiree.substr(23,25);
		points = +points.replace('.jpg">', "");	
		document.getElementById('verso').innerHTML=cartetiree;
		miseajour_scoreB(points);
		carteVersoCPT++; // On fait évaluer la condition pour ne plus jamais toucher à la carte Verso
	}
	
	while(nbcartetirees >=1 && scorebanque<scorejoueur) {		
			if (scorebanque > 21)
			{
				window.alert("Bravo vous avez battu la banque");
				rejouer();
			}
			// Si la banque perd face au joueur, elle continue de tirer des cartes.
			else {
				var cartetiree = cartes.pop();
				var points = cartetiree.substr(23,25);
				points = +points.replace('.jpg">', "");	
				document.getElementById('tapisbanque').innerHTML+=cartetiree;
				miseajour_scoreB(points);
		}
	}
	// Si la banque n'a pas dépassé 21, alors si il est supérieur au joueur, la banque gagne (sachant qu'elle tirera des cartes si elle est inférieur)
	if (scorebanque <= 21) {	
		if (scorebanque > scorejoueur && nbcartetirees>=1)
				{
				window.alert("Vous avez malheureusement perdu");
				rejouer();
				}
				// En cas d'égalité, ni la banque, ni le joueur gagne
		if (scorebanque == scorejoueur && nbcartetirees>=1) {
					window.alert("Vous récupérez votre mise");
					rejouer();
				}
	}
	// Si la banque dépasse 21, elle perd la partie
	if (scorebanque > 21){
		window.alert("Bravo vous avez battu la banque");
		rejouer();
	}
		
	
}
// Pareil que l'autre mise à jour mais pour la banque
function miseajour_scoreB(points) {
	if (points % 13 == 11 || points % 13 == 12 || points % 13 == 0)
		{
			scorebanque += 10;
		}
	else if (points % 13 == 1 && (scorebanque + 11)<= 21)
		{
			scorebanque += 11;
		}
	else {
			scorebanque+= points % 13;
		}
		
	document.getElementById('scorebanque').innerHTML = scorebanque;
}
// Propose de rejouer une partie et arrête le jeu actif en désactivant la distribution de cartes.
function rejouer() {
	var decision = window.confirm("Rejouer une partie ?");
	document.getElementById('Carte').disabled=true;
	document.getElementById('Reste').disabled=true;
}
// Actualise la page lors de son appel
function refresh(){
	window.location.reload();
}

// Initialisation des premieres mains
melanger();
carteVerso;
tirageinitialB();
tiragecarte();




