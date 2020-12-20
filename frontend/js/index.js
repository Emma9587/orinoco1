fetch ('http://localhost:3000/api/teddies' , {
    method: 'GET'
}).then((data) =>{
    return data.json();
}).then((produits) =>{
    console.log(produits);
    let myHTML = '';
    produits.forEach((produit) =>{
        console.log(produit.name);
        console.log(produit.price);
        console.log(produit.imageUrl);
        myHTML += `<div class="col-12 col-md-5 col-lg-6"><div class="card" id="${produit.name}"><div class="card-body"><h2>${produit.name}</h2><img src="${produit.imageUrl}"><p>${produit.price}€</p><button class="btn"><a href="pages/produit.html?idproduit=${produit._id}" class="border-0" >Personnaliser</a></button></div></div></div>`;
    })

    console.log(myHTML)

    $('#mesproduits').html(myHTML);
})