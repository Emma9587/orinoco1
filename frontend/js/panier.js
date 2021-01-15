//Le code pour créer le HTML, similaire au code de la page index

fetch ('http://localhost:3000/api/teddies' , {
    method: 'GET'
}).then((data) =>{
    return data.json();
}).then((produits) =>{
    console.log(produits);
    let myHTML = '';
    hasPanier.forEach((produit) =>{
        console.log(produit.name);
        console.log(produit.price);
        console.log(produit.imageUrl);
        myHTML += `<div class="col-12 col-md-5 col-lg-6"><div class="card" id="${produit.name}"><div class="card-body"><h2>${produit.name}</h2><img src="${produit.imageUrl}"><p>${produit.price}€</p></div></div></div>`;
    })

    console.log(myHTML)

    $('#produit').html(myHTML);
    $('#montant').html(produit.price);

})

//-Afficher les produits du LocalStorage

        //-Récupéré les données

let hasPanier = localStorage.getItem('panier')
hasPanier = JSON.parse(hasPanier)
console.log(hasPanier);

            //-Afficher les données dans la page
let totalPrice = localStorage.getItem('price')
totalPrice = JSON.parse(totalPrice)
console.log(totalPrice);      
            //-Calculer le prix total
// je récupere tout les prix de mon panier
// je les stock dans un tableau
// je les additionnes
//j'affiche le résultat
     


//Je calcule le prix total
//J'ajoute le HTML au dom a la page web pour afficher les produits

//Je blocque l'envois du formulaire
//Je verifie tous les champs (Exemple : email est bien une email contient @)

// Si tous les champs sont ok envoyer via la méthode POST le formulaire au BACKEND (/order)
//Créer un tableau avec le contact et les produit id
//Récupérer les informations que renvoie le backend pour les afficher sur la page Confirmaiton de commande