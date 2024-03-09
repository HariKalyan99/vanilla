// let productList = [];


function fetchData() {
    let data = fetch('https://dummyjson.com/products').then((res) => res.json()).then(({products}) => {
        return products;
    })
    return data
}




function init() {
    let productList = fetchData();
    productList.then((products) => {
       for(let i=0; i<products.length; i++){
        displayData(products[i].price, products[i].title, products[i].images[0])
       }
    })
}

init()




function displayData(price, title, images) {
    let mainDiv = document.querySelector('.main');
    let productContainer = document.createElement('div');
    productContainer.setAttribute('class', "productContainer")
    productContainer.innerHTML = `
    <img src=${images} alt=${title} height="50px">
    <p>${title}</p>
    <p>${price}</p>
    `;
    mainDiv.append(productContainer)
}
























// function addProduct() {
//     fetch('https://dummyjson.com/products/add', {
//         method: "POST",
//         headers: {
//             "Content-Type" : "application/json"
//         },
//         body: JSON.stringify({
//             title: 'BMW Pencil',
//         })
//     }).then((res) => res.json()).then(console.log)
// }



// addProduct()

