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
  console.log(produit.imageUrl);
  console.log(produit.description);
  myHTML += `<div class="col-12 col-md-5 col-lg-6"><div class="card" id="${produit.name}"><div class="card-body"><h2 style="padding-top:20px;">${produit.name}</h2><img src="${produit.imageUrl}"><p style="margin-left:20px; margin-right:20px;">${produit.description}</p></div></div></div>`;

  console.log(myHTML)
  $('#produit').html(myHTML);

console.log(produit.price);
 console.log(myHTML)
  $('#price').html(produit.price);

/*
  console.log(myHTML)
    $('#teddie').html(myHTML);
*/ 


localStorage.setItem(url, idProduit);
let myProduit = localStorage.getItem(url, idProduit);
myProduit
console.log(myProduit);

});