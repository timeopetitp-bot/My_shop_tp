const btnScroll = document.querySelector('.scroll-top');
// console.log(btnScroll);
if (btnScroll) {
    btnScroll.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
}

function afficherProduits() {
    const container = document.querySelector(".products-container");
    if (!container) return; // Si le conteneur n'existe pas, on quitte la fonction

    // AJOUT : préfixe du chemin selon la page
    const prefixe = window.location.pathname.includes("/pages/") ? "../" : "";


    // console.log(container);

    // Afficher un seul produit
    // let productName = "chemise";
    // let productPrice = 20;
    // let productdescription = "aaaaa";

    // let produit1 = {
    //     nom:"Veste Femme",
    //     description:"description produit1",
    //     prix:20,
    //     imgURL: "assets/images/veste-femme.webp"
    // };

    // Injecter contenu HTML 
    // container.innerHTML = `
    //      <article class="product-card"> 
    //         <h3 class ="titreH3">${produit1.nom}</h3>
    //         <img src="${produit1.imgURL}" alt="${produit1.nom}">
    //         <p>"${produit1.description}"</p>
    //         <p class="prix">Prix : ${produit1.prix} £</p>
    //         <button type="button">Acheter</button>
    //     </article>
    // `

    const produits = [
        {
            nom: "Gilet Femme",
            description: "description produit1",
            prix: 20,
            imgURL: "assets/images/gilet-femme.webp"
        },
        {
            nom: "Veste Homme",
            description: "description produit2",
            prix: 30,
            imgURL: "assets/images/veste-homme.webp"
        },
        {
            nom: "Jean Femme",
            description: "description produit3",
            prix: 15,
            imgURL: "assets/images/jean-femme.jfif"
        }
    ];
    // console.log(produits);
    // Injecter le contenu avec innerHTML 
    // container.innerHTML = "";
    // produits.forEach((produit)=>{
    //     // Injecter contenu HTML 
    // container.innerHTML += `
    //      <article class="product-card">
    //         <h3 class ="titreH3">${produit.nom}</h3>
    //         <img src=${produit.imgURL} alt=${produit.nom}>
    //         <p>${produit.description}</p>
    //         <p class="prix">Prix : ${produit.prix} £</p>
    //         <button type="button">Acheter</button>
    //     </article>
    // `
    // });



    // Création de l'élement article
    produits.forEach((produit) => {
        const article = document.createElement("article"); //<article></article>
        // Ajouter class ="product-card" dans l'élement article
        article.classList.add("product-card"); //<article class="product-card"></article>

        article.innerHTML = `
            <h3 class="product-name">${produit.nom}</h3>
            <img class="product-img" src="${prefixe}${produit.imgURL}" alt="${produit.nom}" width="200">
            <p class="product-desc">${produit.description}</p>
            <p class="price">Prix : ${produit.prix} €</p>
            <button class="buy" type="button">Acheter</button>
        `;

        container.appendChild(article);
    })
}

afficherProduits();

// function ajouterProduit() {
//     const form = document.getElementById('formProduct');

//     if (form) {

//         form.addEventListener("submit", function (event) {
//             event.preventDefault(); //Annuler le rechargement automatique de la page

//             // Récupérer les valeurs du formulair
//             let nom = document.getElementById('nom').value;
//             let prix = document.getElementById('prix').value;
//             let description = document.getElementById('description').value;
//             let imgURL = document.getElementById('imgURL').value
//             console.log(nom, prix, description, imgURL);


//             // alert("Produit ajouté !")
//         })
//     }
// }
// ajouterProduit();