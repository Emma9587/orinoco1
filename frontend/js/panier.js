// let searchParams = new URLSearchParams(document.location.search);
// let idProduit = searchParams.get("idproduit");
// console.log(idProduit);

// let url = 'http://localhost:3000/api/teddies/'+idProduit;
// //Envoyé idproduit dans le fétch
// fetch (url, {
//     method: 'GET'
// }).then((data) =>{
//     return data.json();
// }).then((produit) =>{
//     console.log(produit);

//   // Afficher les informaltion du produit dans le html
//   let myHTML = '';
//   console.log(produit.name);
//   console.log(produit.imageUrl);
//   console.log(produit.description);
//   myHTML += `<div class="col-12 col-md-5 col-lg-6"><div class="card" id="${produit.name}"><div class="card-body"><h2 style="padding-top:20px;">${produit.name}</h2><img src="${produit.imageUrl}"><p style="margin-left:20px; margin-right:20px;">${produit.description}</p></div></div></div>`;

//   console.log(myHTML)
//   $('#article').html(myHTML);

// console.log(produit.price);
//  console.log(myHTML)
//   $('#price').html(produit.price);


localStorage.setItem(CardProduits);
let myProduit = localStorage.getItem(CardProduits);
console.log(myProduit);
// myProduit

// });






//Je récupere les informations de mon panier
fetch (myProduit, {
    method: 'GET'
}).then((data)=>{
    return data.json();
}).then((CardProduits) => {
    console.log(CardProduits);
});
let CardProduits = [''];
CardProduits = JSON.parse(localtorage.getItem('panier'))
//Le code pour créer le HTML, similaire au code de la page index
CartProduits.forEach( produit => {let myHTML = '';
produits.forEach((produit) =>{
    console.log(produit.name);
    console.log(produit.price);
    console.log(produit.imageUrl);
    myHTML += `<div class="col-12 col-md-5 col-lg-6"><div class="card" id="${produit.name}"><div class="card-body"><h2>${produit.name}</h2><img src="${produit.imageUrl}"><p>${produit.price}€</p><button class="btn"><a href="pages/produit.html?idproduit=${produit._id}" class="border-0" >Personnaliser</a></button></div></div></div>`;
});

console.log(myHTML);

$('#mesproduits').html(myHTML);

})
//Je calcule le prix total
//})
//J'ajoute le HTML au dom a la page web pour afficher les produits

//Je blocque l'envois du formulaire
//Je verifie tous les champs (Exemple : email est bien une email contient @)

// Si tous les champs sont ok envoyer via la méthode POST le formulaire au BACKEND (/order)
//Créer un tableau avec le contact et les produit id
//Récupérer les informations que renvoie le backend pour les afficher sur la page Confirmaiton de commande