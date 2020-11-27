fetch ('http://localhost:3000/api/teddies' , {
    method: 'GET'
}).then((data) =>{
    return data.json();
}).then((produits) =>{
    console.log(produits);

    produits.forEach((produit) =>{
        console.log(produit.name);
        console.log(produit.price);
        console.log(produit.imageUrl);
        $('.col').append(`<h2>${produit.name}</h2>`);
        $('.col').append(`<img src="${produit.imageUrl}" >`); 
        $('.col').append(`<p>${produit.price}€</p>`);
        $('.col').append( $( `<button class="btn"><a href="pages/produit.html" class="border-0" >Personnaliser</a></button>`) );

    ('length : ' + produits.length);
 	
            
    })
    
        //Mon code

    })