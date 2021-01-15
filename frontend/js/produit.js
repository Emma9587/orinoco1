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
        myHTML += `<div class="col-12 col-md-5 col-lg-6"><div class="card" id="${produit.name}"><div class="card-body"><h2 style="padding-top:20px;">${produit.name}</h2><img src="${produit.imageUrl}"><p style="margin-left:20px; margin-right:20px;">${produit.description}</p><p style="padding-bottom:20px;">${produit.price}€</p></div></div></div>`;
      
    myHTML += `<div class="col-12 col-md-5 col-lg-6"><button class="btn"><a href="panier.html" class="add-to-card" id="ajouterAuPanier">Ajouter au panier</a></button></div>`;  
    console.log(myHTML)
    $('#teddie').html(myHTML);

    //Quand je clique je rajoute au panier 
    let btnpanier = document.getElementById("ajouterAuPanier");
    console.log(btnpanier);

    btnpanier.addEventListener("click", event => {
        event.preventDefault();
        console.log("click ok");
        
        myProduit = {
            id : produit._id,
            name : produit.name,
            imageUrl : produit.imageUrl,
            description : produit.description,
            price : produit.price,
        };
        //si j'ai un panier (localsorage) - Je récupere les information du panier pour pouvoir ajouter les nouveaux produit au panier 
        let hasPanier = localStorage.getItem('panier')
        if(hasPanier){
            //J'ai un panier
            hasPanier = JSON.parse(CardProduits)
            CardProduits = 
            [ 
                ...hasPanier,
                myProduit 
            ]
        }else{
            //Je n'ai pas encore de panier
            CardProduits = [ myProduit ]
        }

    // function addProduit() {
    //     if(localStorage >= 1) {   
    //     }
    // };
        console.log(localStorage);
        //Je convertie le JSON en Varaible utilisable JS
        //let myProduit = CardProduits;
        // CartProduits = JSON.parse(localStorage.getItem('panier'))

        //Créer un tableau dans le localstorage
        
        //Je transforme mon tableau en JSON
        CardProduits = JSON.stringify(CardProduits);
        //Mettre les information que tu as besoins
        localStorage.setItem('panier', CardProduits);
        //Fin du click
        console.log(localStorage.getItem('panier'));
    });
});