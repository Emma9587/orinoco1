fetch ('http://localhost:3000/api/teddies' , {
    method: 'GET'
}).then((data) =>{
    return data.json();
}).then((produits) =>{
    console.log(produits);

    produits.forEach((produit) => {
        console.log(produit.name);
        console.log(produit.price);
        console.log(produit.description);
        console.log(produit.imageUrl);
        console.log(produit.bnt);
        $('#produits').append(`<h2>${produit.name}</h2>`);
        $('#produits').append(`<img src="${produit.imageUrl}" >`); 
        $('#produits').append(`<p>${produit.price}€</p>`);
        $('#produits').append(`<article>${produit.description}</article>`); 
        
    })


    console.log('length : ' + produits.length);
    for($i=0 ; $i < produits.length ; $i++){
        console.log(produits[$i].name);
    };

          //Mon code


    })