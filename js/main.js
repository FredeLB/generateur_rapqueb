						
$(document).ready(function(){
	
	
	
	//    VARIABLES
	
	var debut = ["Général", "MC", "DJ", "Young", "Lil'", "Emcee", "Kid", "Master", "Mighty", "Poppa", "Mister", "Phat", "Grand", "Lady", "Slim", "Prince", "Doc", "Dead", "Monsieur", "Madame", "Admiral"]
	var topoGat = ["Allumettières", "Mont-Bleu", "Gréber", "Maloney", "Buckingham", "MacLaren", "Portage", "Alonzo"];
	var nomsFr = 	["Pellerin", "Riel", "Nelligan", "Miron", "Falardeau", "Rimbaud", "Mazza", "Proust", "Racine", "Tremblay", "Riopelle", "Bombardier", "Fiori", "Lepage", "Piché", "Lesage", "Drapeau", "Payette", "Bourassa", "Lafleur", "Deschamps", "Vigneault", "Dion", "Péladeau", "Watier", "Ferland", "Bobino", "Pruneau", "Cannelle", "Copernik", "Papineau", "Lionel", "Pellan", "Kavanagh", "Néron", "Losique", "Gignak", "Qualinette", "Ferdinand", "Céline", "Verlaine", "Sydney", "Garou", "Renaud", "Chirac", "La Bolduc", "Bardot", "Laurier", "César", "Dalida"];
	var motsEn = ["Wavy", "Smokin'", "Sippin'", "Saint", "Ghost", "Killa", "Buddy", "Jim", "Ben",  "Fresh", "Middle", "Funky", "Jay", "Jo", "Easy", "Sam", "Ty", "Bomba", "Blue", "Bad", "Storm", "Lost", "Track", "South", "North", "Slay", "Stunn'", "Whip", "French", "Sum", "BBQ", "Hoodie", "Boogie", "Cookie", "Major", "Crush", "Backseat", "Golden", "Bone", "Price", "Blood", "Psycha", "Wicked", "Fox", "Beef", "Tiger", "IMAXXX", "Big", "Bastard", "Speaka", "Jo", "2Steps", "Jiggy", "Special", "Smooth", "Soul", "Chrome", "Jam", "Shot", "Snail", "Tastie", "X", "Dollah", "Blade", "logOff", "Fly", "Main", "Doom", "Wild", "Q"];
	var motsFr = ["Kaporal", "Satirik", "Lion", "Racaille", "Panthère", "Volage", "Chateau", "Politik", "Reverbere", "Philozophe", "Folio", "Rouge", "Régiment", "Didakt", "Axe", "Bandit", "Casse", "Bastion", "Cronik", "Fou", "Érudit", "Connektion", "Zeste", "Nordiq", "Soleil", "Radical", "Bollé", "OVNI", "Canisse", "Cipâte", "Dimanche", "Optimal", "Fiston", "Opéra", "Vénus", "Brutal", "Bikini", "Macadam", "Boudoir", "Kaktus", "Canal", "Kromozone", "Clope", "Capital", "StatuKwo", "Macro", "Zombie", "Nerf", "Kayak", "Artifice", "Mistik", "UNITÉ9", "AmaZone", "Imposteur", "Karnaval", "Biscotte"];
	var marques = ["Gucci", "Boyardee", "Saputo", "Kanuk", "Prada", "McCain", "Tide", "FUBU", "Sloche", "4LOKO", "POM", "Coors", "Pabst", "Bounce", "Swiffer", "BMX", "Kraft", "Nestlé", "Delissio", "Olymel", "Eggo", "Ficello", "Maynards", "Clorets", "Twix", "Gain", "Clairol", "Pantene", "Febreeze", "Klondike", "Cheerios", "Doritos", "Dasani", "Kellog", "Telus", "Aldo", "Canac", "YoPlait", "Cogeco", "Babybel", "Video-Tron", "Cora", "CAA", "L'Oréal", "Ardène", "Tupperware", "Trévi", "Ashton", "Rolex", "Saks", "Ogilvy", "Chanel", "Vuitton", "Dior", "Becel", "Knorr", "Hermes", "Louboutin", "Volvo", "Savoura", "Lexus", "WildTurkey", "Pilsner", "Bootlegger", "Poppers", "SourPuss", "Stinger", "Fireball", "Jameson", "Goldschlager", "Primo", "Jäger", "Moonshine", "Caribou", "Bacardi", "Smirnoff", "Schnaps", "Mojo", "Pepito", "Milwaukee", "Dow", "Laurentides", "Guinness", "Beefeater", "Hendrick's", "Champagne", "Duluth"];
	var drogues = ["Mauve", "NyKwill", "Kush", "Ounce", "Xanax", "Peanut", "Purp", "Crank", "Visine", "Puff", "Coco", "Beuh", "Ganja", "Bag", "Wax", "Juice", "Ketty", "Vitamine", "Weed", "Dust", "Mush", "Bong", "Smack", "Junk", "Peach", "Big D", "Mess", "Spécial K", "Hooch", "Grog", "Whiz", "Roofies", "Moggies", "Roachies", "BlowHead", "Flocon", "2Papes", "X", "ZigZag", "Zoomers", "BadTrip", "Blunt"];

	
	
	//Détecteur de "pointbreaks" made by Steph!
	
	function guideBreakpoints(){
		
		var winWidth = $(window).width();
		
        if (winWidth < 575) {
			
            console.log('Taille fenetre: ' + winWidth + ' class bootsrap: xs');
			
        } else if (winWidth <= 767) {
			
            console.log('Taille fenetre: ' + winWidth + ' class bootstrap: sm');
			
        } else if (winWidth <= 991) {
			
            console.log('Taille fenetre: ' + winWidth + ' class bootstrap: md');
			
        } else if (winWidth <= 1199) {
			
            console.log('Taille fenetre: ' + winWidth + ' class boostrap: lg');
			
        } else {
			
            console.log('Taille fenetre: ' + winWidth + ' class bootstrap: xl');
			
        }
		
	}
	
	
	function auHasard(min,max){
		
		var randomNum = Math.round(Math.random()*(max-min)) + min;
		
		return randomNum;
			
	}


	function hasardTableau(a){
		
		var max = a.length - 1;
		
		return a[auHasard(0, max)];
		
	}
	
	function genComb(){
		
		var combinaisons = [
			hasardTableau(debut) + " " + hasardTableau(topoGat),
			hasardTableau(debut) + " " + hasardTableau(nomsFr),
			hasardTableau(debut) + " " + hasardTableau(motsEn),
			hasardTableau(debut) + " " + hasardTableau(motsFr),
			hasardTableau(debut) + " " + hasardTableau(marques),
			hasardTableau(debut) + " " + hasardTableau(drogues),
			hasardTableau(debut) + " " + hasardTableau(motsEn) + " " + hasardTableau(topoGat),
			hasardTableau(debut) + " " + hasardTableau(motsEn) + " " + hasardTableau(nomsFr),
			hasardTableau(debut) + " " + hasardTableau(motsEn) + " " + hasardTableau(motsFr),
			hasardTableau(debut) + " " + hasardTableau(motsEn) + " " + hasardTableau(marques),
			hasardTableau(debut) + " " + hasardTableau(motsEn) + " " + hasardTableau(drogues),
			hasardTableau(debut) + " " + hasardTableau(drogues) + " " + hasardTableau(topoGat),
			hasardTableau(debut) + " " + hasardTableau(drogues) + " " + hasardTableau(nomsFr),
			hasardTableau(debut) + " " + hasardTableau(drogues) + " " + hasardTableau(motsFr),
			hasardTableau(debut) + " " + hasardTableau(drogues) + " " + hasardTableau(marques),
			hasardTableau(debut) + " " + hasardTableau(marques) + " " + hasardTableau(topoGat),
			hasardTableau(debut) + " " + hasardTableau(marques) + " " + hasardTableau(nomsFr),
			hasardTableau(debut) + " " + hasardTableau(marques) + " " + hasardTableau(motsFr),
			hasardTableau(debut) + " " + hasardTableau(marques) + " " + hasardTableau(drogues),

			hasardTableau(topoGat) + " " + hasardTableau(nomsFr),
			hasardTableau(topoGat) + " " + hasardTableau(motsEn),
			hasardTableau(topoGat) + " " + hasardTableau(motsFr),
			hasardTableau(topoGat) + " " + hasardTableau(marques),
			hasardTableau(topoGat) + " " + hasardTableau(drogues),

			hasardTableau(nomsFr) + " " + hasardTableau(topoGat),
			hasardTableau(nomsFr) + " " + hasardTableau(motsEn),
			hasardTableau(nomsFr) + " " + hasardTableau(marques),
			hasardTableau(nomsFr) + " " + hasardTableau(drogues),

			hasardTableau(motsEn) + " " + hasardTableau(topoGat),
			hasardTableau(motsEn) + " " + hasardTableau(nomsFr),
			hasardTableau(motsEn) + " " + hasardTableau(motsFr),
			hasardTableau(motsEn) + " " + hasardTableau(marques),
			hasardTableau(motsEn) + " " + hasardTableau(drogues),

			hasardTableau(motsFr) + " " + hasardTableau(motsEn),
			hasardTableau(motsFr) + " " + hasardTableau(marques),
			hasardTableau(motsFr) + " " + hasardTableau(drogues),

			hasardTableau(marques) + " " + hasardTableau(topoGat),
			hasardTableau(marques) + " " + hasardTableau(nomsFr),
			hasardTableau(marques) + " " + hasardTableau(motsEn),
			hasardTableau(marques) + " " + hasardTableau(motsFr),
			hasardTableau(marques) + " " + hasardTableau(drogues),

			hasardTableau(drogues) + " " + hasardTableau(topoGat),
			hasardTableau(drogues) + " " + hasardTableau(nomsFr),
			hasardTableau(drogues) + " " + hasardTableau(motsEn),
			hasardTableau(drogues) + " " + hasardTableau(motsFr),
			hasardTableau(drogues) + " " + hasardTableau(marques)
		];
		
		return combinaisons;
	}
	
	
	//COMBINAISONS
	

	

	
	console.log(hasardTableau(genComb()));
	
	
	
	
	
	
	
	//   CENTRE D'APPELS
	
	$("main p a").click(function(){
		
		$("#nom").html(hasardTableau(genComb())).removeClass("invisible");
		
	});
	
	
	
	$(window).on('resize', function() {
		
		//guideBreakpoints();

    });

});
