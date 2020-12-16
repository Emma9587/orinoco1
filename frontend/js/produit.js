// Recupere idproduit de url (Comment récupérer une variable url en JS)
// console.log(document.location);

let searchParams = new URLSearchParams(document.location.search);
let idProduit = searchParams.get("idproduit");
console.log(idProduit);

let url = 'http://localhost:3000/api/teddies/'+idProduit;
//Envoyé idproduit dans le fétch
fetch (url, {
    method: 'GET'
}).then((data) =>{
    return data.json();
}).then((produit) =>{
    console.log(produit);

    // Afficher les informaltion du produit dans le html
    let myHTML = '';
    console.log(produit.name);
        console.log(produit.price);
        console.log(produit.imageUrl);
        console.log(produit.description);   
        myHTML += `<div class="col-12 col-md-5 col-lg-6"><div class="card" id="${produit.name}"><div class="card-body"><h2>${produit.name}</h2><img src="${produit.imageUrl}"><p>${produit.price}€</p><button class="btn"><a href="pages/produit.html?idproduit=${produit._id}" class="border-0" >Personnaliser</a></button></div></div></div>`;

 console.log(myHTML)
     $('#teddie').html(myHTML);

    // let myHTML = '';
    // produit.forEach((produit) =>{
    //     console.log(produit.name);
    //     console.log(produit.price);
    //     console.log(produit.imageUrl);
    //     console.log(produit.description);
    //     myHTML += `<div class="col-12 col-md-5 col-lg-6"><div class="card" id="${produit.name}"><div class="card-body"><h2>${produit.name}</h2><img src="${produit.imageUrl}"><p>${produit.price}€</p><p>${produit.description}</p><a href="http://localhost:3000/api/teddies/_id"></a></div></div></div>`;       
    // })
    //
})