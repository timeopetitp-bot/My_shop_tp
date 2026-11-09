// console.log("Hello World!");

// // Déclaration des variables
// let nom ="Timéo";
// let age = 19;

// console.log(nom);
// console.log(age);


// let score = 10;
// score=15;

// console.log(score);

// const PI =3.14;
// // PI = 3.14159;  //INTERDIT (modifier la valeur d'une constante)

// console.log(PI);

// // La concaténation des chaines de caractères
// let prenom = "Timéo";
// nom = "Bourgeois";

// let nomComplet = prenom + " " + nom;
// console.log(nomComplet);

// // let test = "Je suis " + prenom + " " + nom;
// let test = `Je suis ${prenom} ${nom}`;
// console.log(test);
// console.log("J'ai ", age, " ans");

// let name = "Timéo";
// let msg = name;
// console.log(msg);

// // window.name = "Mon site"
// console.log(window.name);


// EX3
// let prenomUtilisateur = prompt("Quel est ton prénom?");
//Affichage
// console.log(prenomUtilisateur);
// alert("Bonjour " + prenomUtilisateur + "!");

// EX5
// let choix = confirm("Voulez-vous continuer !");
// console.log(choix); //True si OK, False si Annuler

// SI .... Alors...Sinon
// let ageUtilsateur = prompt("Donner ton age"); //Number() : convertire chaine en nombre

// console.log(typeof ageUtilsateur); //type of donne type du variable

// if (ageUtilsateur === 18) {  // "18" === 18 => comaprer : valeur et type
//     console.log("Majeur");
// } else {
//     console.log("Mineur");
// }


// EX4
// let nombre = prompt("Saisis un nombre : ");
// console.log(nombre + 2);

// if (nombre % 2 === 0) {
//     console.log("Nombre pair");
// } else {
//     console.log("Nombre impair");
// }


// let note = 16;

// if (note >= 16) {
//     alert("Trés bien!");
// } else if (note >= 10) {
//     alert("Admis !");
// } else {
//     alert("Non admis");
// }

// selon/switch
// let jour = Number(prompt("Donne le nombre du jour :"));
// switch (jour) {
//     case 1:
//         console.log("Début de semaine");
//         break;
//     case 2:
//         console.log("2ème jour de la semaine");
//         break;
//     default:
//         console.log("Jour invalide");
//         break;
// }


//EX1.2
//Demander le prix d'un article
// let prix = Number(prompt("Saisis le prix de l'article :"));

// let prixTTC=0;
// if (prix < 100) {
    // prixTTC = prix *1.2;   // prix + (prix*20/100)
// } else {
//     prixTTC = prix * 1.05;
// }

// console.log("Le prix TTc est : ", prixTTC);



// let note = prompt("donne ta note entre 0 et 20") //=> 16
 
// if (note >= 0 && note<=20) {  // 0<note<20
// switch(true){
//   case note>=16:
//   console.log("très bien")
//   break;
 
//   case note>=14:
//   console.log("bien")
//   break;
 
//   case note>=12 :
//   console.log("assez bien")
//   break;
 
//   case note<=10:
//   console.log("passable")
//   break;
 
//   case note<=10:
//   console.log("insuffisant")
//   break;
// }
// } else {
//     console.log("La note doit etre entre 0 et 20");
    
// }
 

// age =20;

// if (age >= 18) {
//     console.log("Majeur");
// } else {
//     console.log("Mineur");
// }

//Condition Ternaire
// let resultat = age >= 18 ? "Majeur" : "Mineur";
// console.log(resultat);



//i=1 => i=2 ..... i=6
// for (let i = 1; i <= 5; i++) {  //i++ == (i=i+1)
//     console.log("Bonjour");
// }

//Afficher les nombres de 1 à 10
// for (let i = 1; i <=10 ; i++) {
    // console.log(i);
// }

//Afficher les nombres pairs de 2 à 10
// for (let i = 2; i <= 10; i+=2) { //i+=2 == (i=i+2)
    // console.log(i);
// }

//Compter à rebours (5 4 3 2 1)
// for (let i = 5; i>=1 ; i--) {  //i-- == (i=i-1)
    // console.log(i);
// }


//TP3 EX1
// let somme =0;
// for (let i = 1; i <=10 ; i++) {
    // somme = 0 +1=1  => i=2 => somme =1+2=3 => i=3 => somme =3 +3=6.....i=10
    // somme = somme+i;
    // somme+=i;
// }

// console.log("La somme des nombres de 1 à 10 est : ",somme);

//TP3 EX2
// let n = Number(prompt("Donner un nombre pour calculer sa factorielle : "));
// let factorielle=1;
// for (let i = 1; i <= n; i++) {
    // factorielle =factorielle *i;  //i=1 :1*1=1 ; i=2 : 1*2=2; i=3 : 2*3=6
//     factorielle*=i;
// }

// console.log("La factorielle de ",n, " est : ", factorielle);


//TP3 EX3
// for (let i = 1; i <=30; i++) {
//     if (i%5 ===0 && i%3 ===0) {
//         console.log("FizzBuzz");
//     } else if (i%3===0) {
//         console.log("Fizz");
//     } else if (i%5===0){
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }


// let i =1;
// while (i<=5) {
//     console.log(i);
//     i++;
// }


// let nombre = 20;

// console.log("tester while :");
// while (nombre<5) {
//     console.log("Bonjour");
// }

// console.log("Tester do .. while :");
// do {
//     console.log("Bonjour");
// } while (nombre<5);


// //Demander le mdp à l'utilisateur
// let password ="";
// while (password != "1234") {
//     password = prompt("Entrer votre mot de passe");
// }

// do {
//     password = prompt("Entrer votre mot de passe");
// } while (password != "1234");

//Tp3 ex4
// let nombre = Math.floor(Math.random() * 5) + 1;
// console.log("Nombre à deviner :", nombre);
// let nombre_dechec = 0;
// let choix;

// do {
//     const saisie = prompt("Devine le nombre entre 1 et 5 :");

//     if (saisie === null) {
//         console.log("Jeu annulé.");
//         break;
//     }

//     choix = Number(saisie);
//     if (choix !== nombre) {
//         nombre_dechec++;
//         alert("Mauvais choix ! Essaie encore.");
//     }
// } while (choix !== nombre);

// alert("Bravo ! Vous avez deviné le nombre " + nombre + " après " + nombre_dechec + " tentatives échouées.");
// console.log("Nombre de tentatives échouées :", nombre_dechec);

//Tp3 ex5
// let somme = 0;
// let nombre = Number(prompt("Saisir un nombre :"));

// while (nombre > 0) {
//     somme += nombre;
//     nombre = Number(prompt("Saisir un nombre :"));
// } 

// console.log("La somme des nombres saisis est :", somme);

// // Tp3 ex6
// let product_number = Number(prompt("Combien de produits voulez vous acheter ?"));
// let product_price;
// let total_price = 0;
// let discount = 0;

// for (let i = 1; i <= product_number; i++) {
//     product_price = Number(prompt("Quel est le prix du produit " + i + " ?"));
//     total_price += product_price;

    
// }

// if (total_price > 200) {
//         discount = total_price * 0.1; // Appliquer une remise de 10%
// }

// let final_price = total_price - discount;

// console.log("Le prix total avant remise est : " + total_price);
// console.log("Le montant de la remise est : " + discount);
// console.log("Le prix total après remise est : " + final_price);

// // Functions
// function direBonjour() {
//     console.log("Bonjour tout le monde !");
// }

// direBonjour();

// function bonjourUtilisateur(nom) {
//     console.log("Bonjour ", nom);
// }

// let nom ="Islem";
// bonjourUtilisateur(nom);

// function calculerSomme(a,b) {
//     return a+b;
// }

// let resultat = calculerSomme(5,6);
// console.log(resultat);

// let user1 = "Islem";
// let user2 = "Skander";
// let user3 = "Marion";

// let tab = ["Islem", "Skander", "Marion"];
// console.log(tab);
// console.log("Le premier élément du tableau : ",tab[0]);
// console.log("Le 2ème élément du tableau : ",tab[1]);
// console.log(tab[3]);  //undefined : la valeur n'existe pas à cet indice/position

// //Modifier un élement du tableau
// tab[0] = "Randy";
// console.log("Tableau apres modif : ",tab);
// // Connaitre la taille du tableau
// console.log("Taille du tableau : ", tab.length); //3

// //Tp4  EX3
// function Square(num) {
//     return num * num;
// }

// let num = 6;
// let SquareResult = Square(6);
// console.log("le résultat de " + num + " au carré est : " + SquareResult);

//Tp4 EX4
// let tab = [10, 20, 30, 40];

// console.log("Tableau initial : ", tab);
// console.log("Premier élément du tableau : ", tab[0]);
// console.log("Deuxième élément du tableau : ", tab[1]);
// console.log("Troisième élément (ou élément à l'index 2) du tableau : ", tab[2]);

// //Tp4 EX5
// // https://fr.moonbooks.org/Articles/Comment-ajouter-un-element-a-un-tableau-en-javascript-/
// let tab = ["pain", "lait", "oeufs"];

// // tab = ["pain", "lait", "oeufs", "fromage"];
// tab.push("fromage"); 

// // tab = ["beurre", "pain", "lait", "oeufs" , "fromage"];
// tab.unshift("beurre");

// // tab = ["beurre", "pain", "oeufs" , "fromage"];
// tab.splice(2, 1);

// // tab = ["beurre", "pain", "yaourt" , "fromage"];
// tab[2] = "yaourt";

// console.log("Tableau Final : ", tab);

//Tp5
//https://code.mu/fr/javascript/manual/array/filter/
// const nametab = [];
// console.log(nametab);

// function addName(name) {
//     nametab.push(name);
// }
// addName("Islem");
// addName("Skander");
// addName("Marion");
// addName("Randy");
// addName("Timéo");

// for (let i =0; i < nametab.length; i++) {
//     console.log(nametab[i]);
// }

// function FindUser(name) {
//     for (let u = 0; u < nametab.length; u++) {
//         if (nametab[u] === name) {
//             console.log("Utilisateur trouvé");
//             return; 
//         }
//     }
//     console.log("Utilisateur non trouvé");
//     return;
    
// }

// FindUser("Islem");
// FindUser("Lucas");

// for (let o = 0; o < nametab.length; o++) {
//     if (nametab[o].toLowerCase().includes("a")) {
//         console.log(nametab[o]);
//     }
// }

// if (nametab.length > 0) {
//     console.log("Nombre d'utilisateurs : ", nametab.length);
// } else {
//     console.log("Aucun utilisateur");
// }

// Manipulation du DOM
// const titreSectrionProduit = document.getElementById('products');
// console.log(titreSectrionProduit);
// const titreH2 = document.querySelector('#products');
// console.log(titreH2);


// const productCards = document.getElementsByClassName('product-card');
// console.log(productCards);
// console.log("1er Article : ", productCards[0]);

// const articles = document.getElementsByTagName('article');
// console.log("Exemple avec Tag name : " ,articles);

// const articlesSelector = document.querySelector('article');
// console.log("Exemple avec Query Selector : ", articlesSelector);

// const allArticles = document.querySelectorAll('article')
// console.log("Exemple avec Query Selector All : ", allArticles);


//Modifier text à partir du fichier js 
// const titreSectrionProduit = document.getElementById('products');
// titreSectrionProduit.textContent = "La liste de nos produits";

// const testH2 = document.getElementsByClassName('testH2');
// // Retourner une collection HTMl qui contient  un élement
// console.log(testH2);
// testH2[0].textContent ="<strong>aaaa</strong>"; //Afficher la balise strong comme un text

// const descriptionP1 = document.getElementById('descriptionP1');
// // Injecter du HTML à partir du JS
// descriptionP1.innerHTML = "<strong>Veste Femme Marron</strong>";
// // Changer le style css d'un text
// descriptionP1.style.color = "red";
// descriptionP1.style.fontSize = "20px"

// // TP6 ex2
// const titres = document.getElementsByClassName('titreH3');
// const titres2 = document.querySelectorAll('.titreH3');
// const titres3 = document.querySelectorAll('.product-card h3');
// console.log(titres);
// console.log(titres2);
// console.log(titres3);
// titres[0].style.color = "red";
// titres[1].style.color = "red";
// titres[3].style.color = "red";

// Parcourir HTML COLLECTION
// for (let i = 0; i < titres.length; i++) {
    // titres[i].style.color = "red";
// }

// Parcourir NodeList/Tableau
// titres3.forEach((titre) => {
//     titre.style.color = "green";
//     // titre.textContent = titre.textContent.toUpperCase();
//     titre.style.textTransform = "uppercase";
// });

// TP6 EX3
// const btns = document.querySelectorAll('button');

// btns.forEach((btn) => {
//     btn.textContent = "Ajouter au panier";
//     btn.style.backgroundColor ="green";
// })

// // TP6 EX4
// const btnScroll = document.querySelector(".scroll-top");
// console.log(btnScroll);

// // Ajouter un évenement clic
// // btnScroll.addEventListener("click", function() {
//     // btnScroll.style.backgroundColor = "grey";
//     // btnScroll.textContent = "cliqué!";
// //     alert("Cliqué!");
// // });

// function afficherAlert() {
//     alert("Here from fucntion afficherAlert!");
// }

//Tp6 EX5
//récupérer les produits 

// let prixproduit = document.querySelectorAll('.prix');

// // Parcourir les prix
// prixproduit.forEach((prix) => {
//     // Récupérer le texte du prix
//     let texteprix = prix.innerText;
//     console.log(texteprix);  

//     // Récupérer le prix uniquement en nombre
//     //let montant = Number(texteprix.replace("prix : ", "").replace("€", "").trim());   // Supprimer le texte "prix : " et le symbole "€"
//     let montant = Number(texteprix.replace(/[^\d.]/g,"")); // Supprimer les caractères non numériques
//     console.log(montant);

//     // Vérifier si le prix est supérieur à 25
//    if (montant < 25) {
//         prix.style.color ="green"
//     } else if (montant <= 50) {
//         prix.style.color = "orange"
//     } else {
//         prix.style.color ="red"
//     }
// })
