//crédits code emprunter à Daniel Shiffman pour le code word_redacter. Merci !!
//création des tableaux qui changent les mots masculins en féminins. Faut que le mot d'un tableau soit écrit a même position que celui remplacé dans l'autre tableau
var tableauMasculinPronom = [' il  ','  lui  ','  ils  ','  ceux  ','  celui  ','  celui-ci  ','  ceux-ci  ','  homme  ','  hommes ',' un ',' uns ',' le ',' le mien ',' le tien ',' lequel ',' tout ',' tous',' son ',' ce ',' du '];

var tableauPronomFeminin = [' elle ',' elle ',' elles ',' celles ',' celle ',' celle-ci ',' celles-ci ',' femme ',' femmes ',' une ',' unes ',' la ',' la mienne ',' la tienne ',' laquelle ',' toute ',' toutes ',' sa ', ' cette ',' de la '];

var tableauMasculinAdjectif = ['accueillant ',' alourdi ',' attrayant ',' beau ',' costaud ',' confiant ',' droit ',' élégant ',' gentil ',' grand ',' gros ',' hideux ',' inquiet', 'merveilleux ',' nerveux ',' parfait ',' offensé ',' plaisant', 'ravisant ',' séduisant ',' réfléchi ',' souriant ',' tendu ',' trompeur ',' fin ',' foiré ',' fourrant ',' fucké ',' achalant ',' vif ',' agressif ',' ambiteux ',' amusé ',' brillant ',' chaleureux ',' combatif ',' coopératif ',' cruel ',' dangeureux ',' déterminée ',' dominant ',' doué ',' franc ',' généreux ',' harmonieux ',' hésitant ',' impartial ',' instinctif ',' jaloux ',' mauvais ',' mystérieux ',' pontuel ',' posé ',' protecteur ',' regardant ',' spirituel ',' talentueux ',' vilan ',' amoureux ',' anxieux ',' borru ',' choqué ',' coquin ',' débordé ',' dégoûté ',' déprimé ',' dérangé ',' douloureux ',' effrayé ',' ennuyé ',' envieux ',' épuisé ',' fatigué ',' fâché ',' faux ',' fier ',' frustré ',' gêné ',' heureux ',' honteux ',' las ',' malicieux ',' méchant ',' peiné ',' perturbé ',' prétentieux ',' prudent ',' rieur ',' soucieux ',' troublé',' long ', 'interpersonel ',' principal '];

var tableauAdjectifFeminin = [' accueillante ',' alourdide ',' attrayante ',' belle ',' costaude ',' conifante ',' droite ',' élégante ',' gentille ',' grande ',' grosse ',' hideuse ',' inquiète ',' merveilleuse ',' nerveuse ',' parfaite ',' offensée ',' plaisante ',' ravissante ',' séduisante ',' réfléchie ',' souriante ',' tendue ',' trompeuse ',' fine ',' foirée ',' fourrante ',' fuckée ',' achalante ',' vive ',' agressive ',' ambitieuse ',' amusée ',' brillante ',' chaleureuse ',' combative ',' coopérative ',' cruelle ',' dangereuse ',' déterminée ',' dominante ',' douée ',' franche ',' généreuse ',' harmonieuse ',' hésitante ',' impartiale ',' instinctive ',' jalouse ',' mauvaise ',' mystérieuse ',' ponctuelle ',' posée ',' protectrice ',' regardante ',' spirituelle ',' talantueuse ',' vilaine ',' amoureuse ',' anxieuse ',' bourrue ',' choquée ',' coquine ',' débordée ',' dégoutée ',' déprimée ',' dérangée ',' douloureuse ',' effrayée ',' ennuyée ',' envieuse ',' épuisée ',' fatiguée ',' fâchée ',' fausse ',' fière ',' frustrée ',' gênée ',' heureuse ',' honteuse ',' lasse ',' malicieuse ',' méchante ',' peinée ',' perturbée ',' prétentieuse ',' prudente ',' rieuse ',' soucieuse ',' troublée ',' longue ',' interpersonelle ',' principale '];

var tableauMasculinNom = [' M. ',' monsieur ',' messieurs ',' enseignant ',' lecteur ',' auteur ',' chanteur ',' docteur ',' acheteur ',' agent ',' conseiller ',' infirmier ',' avocat ',' ambulancier ',' personel ',' administrateur ',' premier ',' chef ',' prince ',' lecteur ',' écrivain ', ' peintre ',' opérateur ',' instituteur ', ' gouvernement ',' policier ',' politicien ',' livreur ', ' marin ', ' prêtre '];

var tableauNomFeminin = [' Mme. ',' madame ',' mesdames ',' enseignante ',' lectrice ',' autrice ',' chanteuse ',' docteure ',' acheteuse ',' agente ',' conseillère ',' infirmière ',' avocate ',' ambulancière ',' personnelle ',' administratrice ',' première ',' chefe ',' princesse ',' lectrice',' écrivaine ',' peintresse ', ' opératrice ',' institutrice ',' gouvernesse ',' policière ',' politicienne ',' livreuse ', ' marine ',' prêtresse '];


//code pour les couleurs des lettres 
var tableauCouleur = ['#FE2D00', '#FE9600', '#FBFE00', '#189731', '#3336EF', '#860ABF'];
//code pour le remplacement des mots 
var everything = document.getElementsByTagName("body");
console.log('word redactor extension running');



for (var i = 0; i < everything.length; i++) {
  // Look at the full content
  var txt = everything[i].innerHTML;
  //var s = "test the <img the> the";

  // This is a way of splitting up by tags.
  var tokens = txt.split(/(<.*?>)/);
  for (var j = 0; j < tokens.length; j++) {
    // Ignore anything that is a tag
    if (tokens[j].charAt(0) !== '<') {
      // maintenant remplacer les mots masculins en féminins
    for( var x = 0; x<tableauMasculinPronom.length; x++){
       var couleur1 = tableauCouleur[Math.round(Math.random()*6)];
        tokens[j] = tokens[j].replace(tableauMasculinPronom[x],"<span style='font-weight:bold; color:"+couleur1+"; font-size:100px'>"+tableauPronomFeminin[x]+"</span>");
    }
    for (var y = 0; y < tableauAdjectifFeminin.length; y++){
         var couleur2 = tableauCouleur[Math.round(Math.random()*6)];
        tokens[j] = tokens[j].replace(tableauMasculinAdjectif[y],"<span style='font-weight:bold; color:"+couleur2+"; font-size:100px'>"+tableauAdjectifFeminin[y]+"</span>");
        
    } 
    
    for (var z = 0; z < tableauMasculinNom.length; z++){
         var couleur3 = tableauCouleur[Math.round(Math.random()*6)];
        tokens[j] = tokens[j].replace(tableauMasculinNom[z], "<span style='font-weight:bold; color:"+couleur3+"; font-size:100px'>"+tableauNomFeminin[z]+"</span>");
    }
    }

  }
  // Put everything back in
  everything[i].innerHTML = tokens.join('');
}
    