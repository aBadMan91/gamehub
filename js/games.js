const url ="https://gamehub.local/wp-json/wc/store/products";

const productContainer = document.querySelector(".product-list");

async function getProducts() {
    try {
        const response = await fetch(url);
        const getResults = await response.json();

        console.log(getResults);

        createHTML(getResults);
    }

    catch(error){
        console.log(error);
    }
}

getProducts();

function createHTML(products) {
    products.forEach(function(product) {
        productContainer.innerHTML += `
        <div class="products">
            <a href="products/productdetails.html?id=${product.id}&name=${product.name}">
                <img src="${product.images[0].src}" alt="${product.name}" class="gameImageThumbnailsColumn">
                <h3>${product.name}</h3>
                <p>${product.prices.price} NOK</p>
            </a>
        </div>`;
    });
}